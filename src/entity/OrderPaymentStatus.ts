import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'order_payment_status' })
export class OrderPaymentStatus {
    @PrimaryGeneratedColumn({ name: 'ORDER_PAYMENT_STATUS_ID' })
    orderPaymentStatusId: number;

    @Column({ name: 'PAYMENT_STATUS_NAME' })
    paymentStatusName: string;

    @Column({ name: 'PAYMENT_STATUS_DESCRIPTION' })
    paymentStatusDescription: string;

    
    constructor(orderPaymentStatusId?: number){
        this.orderPaymentStatusId = orderPaymentStatusId;
    }
}