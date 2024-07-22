import { IsOptional, IsPositive } from 'class-validator';

export class ProductQueryParams {
    @IsOptional()
    productId?: number;

    @IsOptional()
    productName?: string;

    @IsOptional()
    sku?: string;

    @IsPositive()
    merchantId?: number;

    @IsPositive()
    pageSize: number;

    @IsPositive()
    page: number
}

export class ProductLookupQueryParams {
    @IsOptional()
    productId?: number;

    @IsOptional()
    productName?: string;

    @IsOptional()
    sku?: string;

    @IsPositive()
    merchantId?: number;

}