import { SaleAgent } from "../entity/SaleAgent";
import DatasourceConfig from "../config/DatasourceConfig";

export const SaleAgentRepository = DatasourceConfig.getRepository(SaleAgent).extend({
   
});

