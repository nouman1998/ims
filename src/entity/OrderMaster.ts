import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderType } from './OrderType';
import { Customer } from './Customer';
import { OrderPaymentStatus } from './OrderPaymentStatus';
import { Supplier } from './Supplier';
import { InstallmentPlan } from './InstallmentPlan';
import { SaleAgent } from './SaleAgent';
import { Merchants } from './Merchants';

@Entity({ name: 'order_master' })
    export class OrderMaster {
        @PrimaryGeneratedColumn({ name: 'ORDER_MASTER_ID' })
        orderMasterId: number;

        @Column({ name: 'INVOICE_AMOUNT', type: 'decimal', precision: 10, scale: 2 })
        invoiceAmount: number;

        @ManyToOne(() => OrderType)
        @JoinColumn({ name: 'ORDER_TYPE_ID' })
        orderType: OrderType;

        @ManyToOne(() => Merchants)
        @JoinColumn({ name: 'MERCHANT_ID' })
        merchant: Merchants;

        @ManyToOne(() => Customer)
        @JoinColumn({ name: 'CUSTOMER_ID' })
        customer: Customer;

        @ManyToOne(() => OrderPaymentStatus)
        @JoinColumn({ name: 'ORDER_PAYMENT_STATUS_ID' })
        orderPaymentStatus: OrderPaymentStatus;

        @ManyToOne(() => Supplier)
        @JoinColumn({ name: 'SUPPLIER_ID' })
        supplier: Supplier;

        @Column({ name: 'ORDER_REF' })
        orderRef: string;

        @ManyToOne(() => InstallmentPlan)
        @JoinColumn({ name: 'INSTALLMENT_PLAN_ID' })
        installmentPlan: InstallmentPlan;

        @Column({ name: 'NET_AMOUNT', type: 'decimal', precision: 10, scale: 2 })
        netAmount: number;

        @ManyToOne(() => SaleAgent)
        @JoinColumn({ name: 'SALE_AGENT_ID' })
        saleAgent: SaleAgent;
    }