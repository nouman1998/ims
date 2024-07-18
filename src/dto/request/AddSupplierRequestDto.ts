import { IsPositive, IsString, Min } from "class-validator";

export class AddSupplierRequestDto {
    @IsString()
    supplierName: string;
    @IsString()
    supplierContactNumber: string;
    @IsString()
    supplierAddress: string;
    @IsString()
    supplierCategory: string;
}