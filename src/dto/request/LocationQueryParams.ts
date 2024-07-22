import { IsPositive } from "class-validator";

export class LocationLookupQueryParams {
    @IsPositive()
    merchantId?: number;
}