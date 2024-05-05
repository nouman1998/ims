import { Customer } from "../entity/Customer";
import DatasourceConfig from "../config/DatasourceConfig";

export const CustomerRepository = DatasourceConfig.getRepository(Customer).extend({
    
});

