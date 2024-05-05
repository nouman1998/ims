import { Supplier } from "../entity/Supplier";
import DatasourceConfig from "../config/DatasourceConfig";

export const SupplierRepository = DatasourceConfig.getRepository(Supplier).extend({
   
});

