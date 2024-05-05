import { IsPositive } from "class-validator";

export default class ProductLocationRequestDto {
    @IsPositive()
    locationId: number;
    @IsPositive()
    quantity: number;
}