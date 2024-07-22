import { Products } from "../entity/Products";
import DatasourceConfig from "../config/DatasourceConfig";

export const ProductRepository = DatasourceConfig.getRepository(Products).extend({
  
    async findProductsByCriteria(
        productId: number,
        productName: string,
        sku: string,
        merchantId: number,
        page: number,
        pageSize: number
    ): Promise<any> {
        return this.createQueryBuilder('product')
            .leftJoinAndSelect('product.merchant', 'merchant')
            .leftJoinAndSelect('product.productCategory', 'productCategory')
            .where('( :productId IS NULL OR  product.productId = :productId )', { productId })
            .andWhere('(:productName IS NULL OR product.productName = :productName)', { productName })
            .andWhere('(:sku IS NULL OR product.sku = :sku)', { sku })
            .andWhere('(merchant.merchantId = :merchantId)', { merchantId })
            .orderBy('product.productId', 'DESC')
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    },

    async findAllProductsByCriteria(
        productId: number,
        productName: string,
        sku: string,
        merchantId: number,
    ): Promise<any> {
        return this.createQueryBuilder('product')
            .leftJoinAndSelect('product.merchant', 'merchant')
            .leftJoinAndSelect('product.productCategory', 'productCategory')
            .where('( :productId IS NULL OR  product.productId = :productId )', { productId })
            .andWhere('(:productName IS NULL OR product.productName = :productName)', { productName })
            .andWhere('(:sku IS NULL OR product.sku = :sku)', { sku })
            .andWhere('(merchant.merchantId = :merchantId)', { merchantId })
            .orderBy('product.productId', 'DESC')
            .getMany();
    }

});

