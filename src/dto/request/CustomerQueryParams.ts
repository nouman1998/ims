import { IsOptional, IsPositive } from "class-validator";

export class CustomerQueryParams {
    @IsOptional()
    customerId?: number;
    @IsOptional()
    customerName?: string;
    @IsOptional()
    cnic?: string;
    @IsPositive()
    merchantId: string;
    @IsPositive()
    page: number;
    @IsPositive()
    pageSize: number;
}