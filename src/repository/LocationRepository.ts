
import { Location } from "../entity/Location";
import DatasourceConfig from "../config/DatasourceConfig";

export const LocationRepository = DatasourceConfig.getRepository(Location).extend({
   
});

