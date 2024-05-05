import { IsPositive, Length, Min } from "class-validator";

export class UpdateProductRequestDto {
    @Length(1)
    productName: string;
    @Length(1)
    productDetail: string;
    @Length(1)
    sku: string;
    @Min(1)
    salePrice: number;
    @Length(1)
    purchasePrice: number;
    @IsPositive()
    productCategoryId: number;
}