import { PaymentType } from "../entity/PaymentType";
import DatasourceConfig from "../config/DatasourceConfig";

export const PaymentTypeRepository = DatasourceConfig.getRepository(PaymentType).extend({

});

