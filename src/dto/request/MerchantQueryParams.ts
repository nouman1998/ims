import { IsBoolean, IsOptional, IsPositive, IsString } from "class-validator";

export class MerchantQueryParams {

    @IsOptional()
    @IsPositive()
    merchantId?: number;

    @IsOptional()
    @IsString()
    merchantName?: string;

    @IsOptional()
    @IsBoolean()
    paginationEnable:boolean

    @IsOptional()
    @IsPositive()
    page: number;

    @IsOptional()
    @IsPositive()
    pageSize: number;
}