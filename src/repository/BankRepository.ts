import {Bank} from "../entity/Bank";
import DatasourceConfig from "../config/DatasourceConfig";

export const BankRepository = DatasourceConfig.getRepository(Bank).extend({
   
});

