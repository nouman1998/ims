import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'supplier' })
export class Supplier {
    @PrimaryGeneratedColumn({ name: 'SUPPLIER_ID' })
    supplierId: number;

    @Column({ name: 'SUPPLIER_NAME' })
    supplierName: string;

    @Column({ name: 'SUPPLIER_ADDRESS' })
    supplierAddress: string;

    @Column({ name: 'SUPPLIER_CONTACT_NUMBER', nullable: true })
    supplierContactNumber: string;

    @Column({ name: 'SUPPLIER_CATEGORY', nullable: true })
    supplierCategory: string;


    constructor(supplierId?: number) {
        this.supplierId = supplierId;
    }
}