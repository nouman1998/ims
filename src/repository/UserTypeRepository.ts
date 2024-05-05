import { UserType } from "../entity/UserType";
import DatasourceConfig from "../config/DatasourceConfig";

export const UserTypeRepository = DatasourceConfig.getRepository(UserType).extend({
});

