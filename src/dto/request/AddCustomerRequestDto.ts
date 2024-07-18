import { IsPositive, IsString, Min } from "class-validator";

export class AddCustomerRequestDto {
    @IsString()
    customerName: string;
    @IsString()
    customerPhone: string;
    @IsString()
    address: string;
    @IsString()
    cnic: string;
    @IsString()
    profession: string;
    @IsPositive()
    cityId: number;
    @IsPositive()
    merchantId: number
}