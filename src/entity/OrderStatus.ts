import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'order_status' })
export class OrderStatus {
    @PrimaryGeneratedColumn({ name: 'ORDER_STATUS_ID' })
    orderStatusId: number;

    @Column({ name: 'ORDER_STATUS' })
    orderStatus: string;
}