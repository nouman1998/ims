import { IsBoolean, IsOptional, IsPositive } from 'class-validator';

export class ProductDetailQueryParams {
    @IsOptional()
    productId?: number;

    @IsOptional()
    @IsPositive()
    locationId?: number;
}
