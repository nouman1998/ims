import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'payment_type' })
export class PaymentType {
    @PrimaryGeneratedColumn({ name: 'PAYMENT_TYPE_ID' })
    paymentTypeId: number;

    @Column({ name: 'PAYMENT_TYPE' })
    paymentType: string;
}