import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderMaster } from './OrderMaster';
import { PaymentType } from './PaymentType';

@Entity({ name: 'order_finance' })
export class OrderFinance {
    @PrimaryGeneratedColumn({ name: 'ORDER_FINANCE_ID' })
    orderFinanceId: number;

    @ManyToOne(() => OrderMaster)
    @JoinColumn({ name: 'ORDER_MASTER_ID' })
    orderMaster: OrderMaster;

    @ManyToOne(() => PaymentType)
    @JoinColumn({ name: 'PAYMENT_TYPE_ID' })
    paymentType: PaymentType;

    @Column({ name: 'CREATE_DATETIME', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createDatetime: Date;

    @Column({ name: 'AMOUNT', type: 'decimal', precision: 10, scale: 2 })
    amount: number;
}