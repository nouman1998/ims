import { Category } from "../entity/Category";
import DatasourceConfig from "../config/DatasourceConfig";

export const CategoryRepository = DatasourceConfig.getRepository(Category).extend({
   
});

