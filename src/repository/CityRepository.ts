import { City } from "../entity/City";
import DatasourceConfig from "../config/DatasourceConfig";

export const CityRepository = DatasourceConfig.getRepository(City).extend({
    
});

