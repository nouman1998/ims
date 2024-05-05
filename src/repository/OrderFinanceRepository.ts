
import { OrderFinance } from "../entity/OrderFinance";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderFinanceRepository = DatasourceConfig.getRepository(OrderFinance).extend({
});

