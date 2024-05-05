    import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
    import { OrderMaster } from './OrderMaster';
    import { Products } from './Products';

    @Entity({ name: 'order_detail' })
    export class OrderDetail {
        @PrimaryGeneratedColumn({ name: 'ORDER_DETAIL_ID' })
        orderDetailId: number;

        @ManyToOne(() => OrderMaster)
        @JoinColumn({ name: 'ORDER_MASTER_ID' })
        orderMaster: OrderMaster;

        @ManyToOne(() => Products)
        @JoinColumn({ name: 'PRODUCT_ID' })
        product: Products;

        @Column({ name: 'QUANTITY' })
        quantity: number;
    }