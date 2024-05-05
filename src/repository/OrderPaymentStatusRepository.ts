import { OrderPaymentStatus } from "../entity/OrderPaymentStatus";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderPaymentStatusRepository = DatasourceConfig.getRepository(OrderPaymentStatus).extend({
   
});

