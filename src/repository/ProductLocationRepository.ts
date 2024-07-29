import { ProductLocation } from "../entity/ProductLocation";
import DatasourceConfig from "../config/DatasourceConfig";

export const ProductLocationRepository = DatasourceConfig.getRepository(ProductLocation).extend({
    async findProductDetailByCriteria(
        productId: number,
        locationId: number,
    ): Promise<any> {
        return  this.createQueryBuilder('productLocation')
            .leftJoinAndSelect('productLocation.product', 'product')
            .leftJoinAndSelect('product.productCategory', 'productCategory')
            .leftJoinAndSelect('productLocation.location', 'location')
            .where('(  product.productId = :productId )', { productId })
            .andWhere('(:locationId IS NULL OR location.locationId = :locationId)', { locationId })
            .orderBy('productLocation.productLocationId', 'DESC')
            .getManyAndCount();
    },
});

