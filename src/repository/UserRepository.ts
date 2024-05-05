import { User } from "../entity/User";
import DatasourceConfig from "../config/DatasourceConfig";

export const UserRepository = DatasourceConfig.getRepository(User).extend({
    
});

