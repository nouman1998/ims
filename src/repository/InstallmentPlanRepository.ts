import { InstallmentPlan } from "../entity/InstallmentPlan";
import DatasourceConfig from "../config/DatasourceConfig";

export const InstallmentPlanRepository = DatasourceConfig.getRepository(InstallmentPlan).extend({
    
});

