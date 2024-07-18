import { City } from "../entity/City";
import { CityRepository } from "../repository/CityRepository";

export default class CityService {
    private cityRepository = CityRepository;

    async getAllCities(): Promise<City[]> {
        return await this.cityRepository.find();
    }
}
