import { IsOptional, IsPositive } from "class-validator";

export class OrderMasterQueryParams {
    @IsOptional()
    orderMasterId: number;
    @IsOptional()
    orderTypeId: number;
    @IsOptional()
    supplierId: number;
    @IsOptional()
    orderRef: string;
    @IsOptional()
    saleAgentId: number;
    @IsPositive()
    merchantId: number;
    @IsPositive()
    page: number;
    @IsPositive()
    pageSize: number;
}