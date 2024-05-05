import { OrderType } from "../entity/OrderType";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderTypeRepository = DatasourceConfig.getRepository(OrderType).extend({
   
});

