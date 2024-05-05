import { OrderStatus } from "../entity/OrderStatus";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderStatusRepository = DatasourceConfig.getRepository(OrderStatus).extend({
   
});

