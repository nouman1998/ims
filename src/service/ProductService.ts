import { Products } from "../entity/Products";
import { ProductRepository } from "../repository/ProductRepository";
import Response from "../common/response/Response";
import PageResponse from "../common/response/PageResponse";
import { ProductRequestDto } from "../dto/request/ProductRequestDto";
import { UpdateProductRequestDto } from "../dto/request/UpdateProductRequestDto";
import { ProductCategory } from "../entity/ProductCategory";
import HttpException from "../common/exception/HttpException";
import { BAD_REQUEST } from "../common/response/StatusCode";
import { Merchants } from "../entity/Merchants";
import { Location } from "../entity/Location";
import ProductLocationService from "./ProductLocationService";
import { ProductLocationRepository } from "../repository/ProductLocationRepository";
import { ProductLocation } from "entity/ProductLocation";

export default class ProductService {

    private productRepository = ProductRepository;
    private productLocationRepository = ProductLocationRepository;
    private productLocationService = new ProductLocationService();

    async getProductsByCriteria(
        productId: number,
        productName: string,
        sku: string,
        merchantId: number,
        page: number,
        pageSize: number
    ): Promise<Response<any>> {
        let [data, total] = await this.productRepository.findProductsByCriteria(productId, productName, sku, merchantId, page, pageSize);
        let dtos = data.map((product: Products) => ({
            productId: product.productId,
            productName: product.productName,
            productDetail: product.productDetail,
            sku: product.sku,
            salePrice: product.salePrice,
            purchasePrice: product.purchasePrice,
            merchantName: product.merchant.merchantName, // Assuming merchant is a property on the product entity
            merchantId: product.merchant.merchantId,
            productCategoryName: product.productCategory.productCategory, // Assuming productCategory is a property on the product entity
            productCategoryId: product.productCategory.productCategoryId,
        }));

        let pagination: PageResponse = new PageResponse(pageSize, page, total);
        return new Response<any>(dtos, pagination);
    }

    async getProductDetailByCriteria(
        productId: number,
        locationId: number,
    ): Promise<Response<any>> {
        let [data, total] = await this.productLocationRepository.findProductDetailByCriteria(productId, locationId,);
        let dtos = data.map((location: ProductLocation) => ({
          productId:location.product.productId,
          productName:location.product.productName,
          locationId:location.location.locationId,
          locationName:location.location.locationTitle,
          quantity:location.quantity
        }));

        return new Response<any>(dtos, null);
    }

    async addProduct(productDto: ProductRequestDto): Promise<Response<any>> {
        let product = new Products();
        product.merchant = new Merchants(productDto.merchantId);
        product.productCategory = new ProductCategory(productDto.productCategoryId);
        product.productDetail = productDto.productDetail;
        product.productName = productDto.productName;
        product.purchasePrice = productDto.purchasePrice;
        product.salePrice = productDto.salePrice;
        product.sku = productDto.sku;
        product = await this.productRepository.save(product);
        if(productDto.productLocations && productDto.productLocations.length > 0 ){
          let productLocations =  productDto.productLocations.map(d =>{
                return {
                    product,
                    location:  new Location(d.locationId),
                    quantity : d.quantity  

                }
            });

            this.productLocationService.saveAll(productLocations);
        }
        return new Response();
    }

    async updateProduct(updateProductDto: UpdateProductRequestDto, productId: number): Promise<Response<any>> {
        let product = await this.productRepository.findOneById(productId);
        if (!product) {
            throw new HttpException(BAD_REQUEST.status, "Invalid Product Id", BAD_REQUEST.detail, BAD_REQUEST.errorCode)
        }
        product.productCategory = new ProductCategory(updateProductDto.productCategoryId);
        product.productDetail = updateProductDto.productDetail;
        product.productName = updateProductDto.productName;
        product.purchasePrice = updateProductDto.purchasePrice;
        product.salePrice = updateProductDto.salePrice;
        product.sku = updateProductDto.sku;
        this.productRepository.save(product);
        return new Response();
    }

    async getAllProduct(
        productId: number,
        productName: string,
        sku: string,
        merchantId: number,
    ): Promise<any> {
        let data = await this.productRepository.findAllProductsByCriteria(productId, productName, sku, merchantId,);
        let dtos = data.map((product: Products) => ({
            productId: product.productId,
            productName: product.productName,
            sku: product.sku,
        }));
        return new Response<any>(dtos);

    }
}
