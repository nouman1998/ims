import { OrderDetail } from "../entity/OrderDetail";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderDetailRepository = DatasourceConfig.getRepository(OrderDetail).extend({
});

