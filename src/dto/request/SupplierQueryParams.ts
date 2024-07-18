import { IsBoolean, IsOptional, IsPositive, IsString } from "class-validator";

export class SupplierQueryParams {
    @IsOptional()
    @IsPositive()
    supplierId?: number;

    @IsOptional()
    @IsString()
    supplierName?: string;

    @IsOptional()
    @IsString()
    category?: string;
    

    // @IsPositive()
    // merchantId: number;

    @IsBoolean()
    paginationEnable:boolean
    
    @IsOptional()
    @IsPositive()
    page: number;

    @IsOptional()
    @IsPositive()
    pageSize: number;
}