import { ProductLocation } from "../entity/ProductLocation";
import DatasourceConfig from "../config/DatasourceConfig";

export const ProductLocationRepository = DatasourceConfig.getRepository(ProductLocation).extend({
   
});

