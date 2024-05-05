import { IsNotEmpty, IsOptional, IsPositive, ValidateNested } from "class-validator";
import { OrderDetailRequestDto } from "./OrderMasterRequestDto";

export class UpdateOrderMasterRequestDto {
    @IsOptional()
    @IsNotEmpty()
    invoiceAmount: number;

    @IsOptional()
    @IsNotEmpty()
    @IsPositive()
    orderTypeId: number;

    @IsPositive()
    customerId: number;

    @IsPositive()
    orderPaymentStatusId: number;

    @IsOptional()
    supplierId: number;

    @IsNotEmpty()
    orderRef: string;

    @IsNotEmpty()
    netAmount: number;

    @IsOptional()
    saleAgentId: number;

    @ValidateNested({ each: true })
    orderDetails: Array<OrderDetailRequestDto>;
}