import { ArrayNotEmpty, IsOptional, IsPositive, IsString, Length, Min } from "class-validator";
import ProductLocationRequestDto from "./ProductLocationRequestDto";

export class ProductRequestDto {
    @IsString()
    productName: string;
    @IsString()
    productDetail: string;
    @IsString()
    sku: string;
    @Min(1)
    salePrice: number;
    @Min(1)
    purchasePrice: number;
    @IsPositive()
    merchantId: number;
    @IsPositive()
    productCategoryId: number;
    @ArrayNotEmpty()
    productLocations: ProductLocationRequestDto[];
}