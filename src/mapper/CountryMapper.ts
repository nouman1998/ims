import Country from "../entity/Country";
import {AddCountryRequestDto} from "../dto/request/CountryRequestDto";

export default class CountryMapper {

    public static toEntity(request: AddCountryRequestDto): Country {
        let country: Country = new Country();
        country.countryCode = request.countryCode;
        country.countryName = request.countryName;
        return country;
    }
}
