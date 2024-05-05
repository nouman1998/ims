import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsPositive, ValidateNested } from "class-validator";

export class OrderMasterRequestDto {
    @IsOptional()
    @IsPositive()
    invoiceAmount: number;

    @IsPositive()
    orderTypeId: number;

    @IsNotEmpty()
    customerName: string;

    @IsNotEmpty()
    customerPhone: string;

    @IsPositive()
    orderPaymentStatusId: number;

    @IsPositive()
    supplierId: number;

    @IsNotEmpty()
    orderRef: string;

    @IsOptional()
    installmentPlanId: number;

    @IsPositive()
    netAmount: number;

    @IsOptional()
    saleAgentId: number;

    @IsPositive()
    merchantId: number;

    @ArrayNotEmpty( )
    
    @ValidateNested({ each: true })
    orderDetails: Array<OrderDetailRequestDto>;
}


export class OrderDetailRequestDto {
    @IsPositive()
    productId: number;

    @IsPositive()
    quantity: number;
}
