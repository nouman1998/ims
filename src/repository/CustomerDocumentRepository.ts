import { CustomerDocument } from "../entity/CustomerDocument";
import DatasourceConfig from "../config/DatasourceConfig";

export const CustomerDocumentRepository = DatasourceConfig.getRepository(CustomerDocument).extend({
    
});

