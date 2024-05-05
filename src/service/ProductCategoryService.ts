import { ProductCategory } from "../entity/ProductCategory";
import { ProductCategoryRepository } from "../repository/ProductCategoryRepository";

export default class ProductCategoryService {
    private productCategoryRepository = ProductCategoryRepository;

    async getAllProductCategories(): Promise<ProductCategory[]> {
        return await this.productCategoryRepository.find();
    }

}
