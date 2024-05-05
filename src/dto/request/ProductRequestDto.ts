import { ArrayNotEmpty, IsOptional, IsPositive, Length, Min } from "class-validator";
import ProductLocationRequestDto from "./ProductLocationRequestDto";

export class ProductRequestDto {
    @Length(1)
    productName: string;
    @Length(1)
    productDetail: string;
    @Length(1)
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