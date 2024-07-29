import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";

export class OrderMasterRequestDto {
    @IsOptional()
    @IsPositive()
    invoiceAmount: number;

    @IsPositive()
    orderTypeId: number;

    @IsString()
    customerName: string;

    @IsString()
    customerPhone: string;

    @IsPositive()
    orderPaymentStatusId: number;

    @IsPositive()
    supplierId: number;

    @IsString()
    orderRef: string;

    @IsOptional()
    @IsPositive()
    installmentPlanId: number;

    @IsPositive()
    netAmount: number;

    @IsOptional()
    @IsPositive()
    saleAgentId: number;

    @IsPositive()
    merchantId: number;

    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    orderDetails: Array<OrderDetailRequestDto>;
}


export class OrderDetailRequestDto {
    @IsPositive()
    productId: number;

    @IsPositive()
    quantity: number;
}
