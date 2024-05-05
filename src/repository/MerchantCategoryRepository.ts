import { MerchantCategory } from "../entity/MerchantCategory";
import DatasourceConfig from "../config/DatasourceConfig";

export const MerchantCategoryRepository = DatasourceConfig.getRepository(MerchantCategory).extend({
   
});

