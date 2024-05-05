import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'order_type' })
export class OrderType {
    @PrimaryGeneratedColumn({ name: 'ORDER_TYPE_ID' })
    orderTypeId: number;

    @Column({ name: 'ORDER_TYPE' })
    orderType: string;

    
    constructor(orderTypeId?: number){
        this.orderTypeId = orderTypeId;
    }
}