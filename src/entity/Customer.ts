import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerDocument } from './CustomerDocument';

@Entity({ name: 'customer' }) 
export class Customer {
    @PrimaryGeneratedColumn({ name: 'CUSTOMER_ID' }) 
    customerId: number;

    @Column({ name: 'CUSTOMER_NAME' })
    customerName: string;

    @Column({ name: 'CUSTOMER_PHONE' })
    customerPhone: string;

    @OneToMany(() => CustomerDocument, customerDocument => customerDocument.customer)
    customerDocuments: CustomerDocument[];
}