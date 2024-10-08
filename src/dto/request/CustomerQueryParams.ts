import { IsBoolean, IsOptional, IsPositive, IsString } from "class-validator";

export class CustomerQueryParams {
    @IsOptional()
    @IsPositive()
    customerId?: number;

    @IsOptional()
    @IsString()
    customerName?: string;

    @IsOptional()
    @IsString()
    cnic?: string;
    

    @IsPositive()
    merchantId: number;

    @IsBoolean()
    paginationEnable:boolean
    
    @IsOptional()
    @IsPositive()
    page: number;

    @IsOptional()
    @IsPositive()
    pageSize: number;
}