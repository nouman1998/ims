import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerDocument } from './CustomerDocument';
import { City } from './City';
import { Merchants } from './Merchants';

@Entity({ name: 'customer' })
export class Customer {
    @PrimaryGeneratedColumn({ name: 'CUSTOMER_ID' })
    customerId: number;

    @Column({ name: 'CUSTOMER_NAME' })
    customerName: string;

    @Column({ name: 'CUSTOMER_PHONE' })
    customerPhone: string;

    @Column({ name: "CNIC" })
    cnic: string;

    @Column({ name: "PROFESSION" })
    profession: string;

    @Column({ name: "ADDRESS" })
    address: string;

    @ManyToOne(() => Merchants, (x) => x.merchantId, { nullable: false })
    @JoinColumn({ name: "MERCHANT_ID" })
    merchant: Merchants;

    @ManyToOne(() => City, (x) => x.cityId, { nullable: false })
    @JoinColumn({ name: "CITY_ID" })
    city: City;

    @OneToMany(() => CustomerDocument, customerDocument => customerDocument.customer)
    customerDocuments: CustomerDocument[];
}