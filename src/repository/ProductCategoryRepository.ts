import { ProductCategory } from "../entity/ProductCategory";
import DatasourceConfig from "../config/DatasourceConfig";

export const ProductCategoryRepository = DatasourceConfig.getRepository(ProductCategory).extend({
   
});

