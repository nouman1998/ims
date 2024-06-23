import { IsPositive, Min } from "class-validator";

export class AddCustomerRequestDto {
    @Min(1)
    customerName: string;
    @Min(1)
    customerPhone: string;
    @Min(1)
    address: string;
    @Min(11)
    cnic: string;
    @Min(1)
    profession: string;
    @IsPositive()
    cityId: number;
    @IsPositive()
    merchantId: number
}