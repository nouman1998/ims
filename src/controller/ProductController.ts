import { Body, Get, JsonController, Param, Post, Put, QueryParams } from 'routing-controllers';
import ProductService from '../service/ProductService';
import { ProductResponseDto } from '../dto/response/ProductResponseDto';
import { ProductQueryParams } from '../dto/request/ProductQueryParams';
import Response from '../common/response/Response';
import { ProductRequestDto } from '../dto/request/ProductRequestDto';
import { UpdateProductRequestDto } from '../dto/request/UpdateProductRequestDto';

@JsonController('/products')
export default class ProductController {
    productService = new ProductService();

    @Get()
    async getProducts(@QueryParams() queryParams: ProductQueryParams): Promise<Response<ProductResponseDto[]>> {
        return await this.productService.getProductsByCriteria(queryParams.productId,
            queryParams.productName,
            queryParams.sku,
            queryParams.merchantId,
            queryParams.page,
            queryParams.pageSize);
    }

    @Post("/add")
    async addProduct(@Body({ validate: true }) productDto: ProductRequestDto): Promise<Response<any>> {
        return this.productService.addProduct(productDto);
    }

    @Put('/update/:productId')
    async updateProduct(
        @Param('productId') productId: number,
        @Body() updateProductDto: UpdateProductRequestDto,
    ): Promise<Response<any>> {
        return this.productService.updateProduct(updateProductDto, productId);
    }
}
