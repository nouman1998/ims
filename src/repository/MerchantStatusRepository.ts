
import { MerchantStatus } from "../entity/MerchantStatus";
import DatasourceConfig from "../config/DatasourceConfig";

export const MerchantStatusRepository = DatasourceConfig.getRepository(MerchantStatus).extend({
    
});

