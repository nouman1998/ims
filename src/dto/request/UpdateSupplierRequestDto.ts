import { IsPositive, IsString, Min } from "class-validator";

export class UpdateSupplierRequestDto {
    @IsPositive()
    supplierId:number
    @IsString()
    supplierName: string;
    @IsString()
    supplierContactNumber: string;
    @IsString()
    supplierAddress: string;
    @IsString()
    supplierCategory: string;
}