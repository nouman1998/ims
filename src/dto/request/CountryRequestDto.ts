import {MinLength} from "class-validator";

export class AddCountryRequestDto {

    @MinLength(2)
    countryName: string
    @MinLength(2)
    countryCode: string

}