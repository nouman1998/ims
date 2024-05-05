import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './Customer';

@Entity({ name: 'customer_documents' })
export class CustomerDocument {
    @PrimaryGeneratedColumn({ name: 'CUSTOMER_DOCUMENT_ID' })
    customerDocumentId: number;

    @Column({ name: 'DOCUMENT_LABEL' })
    documentLabel: string;

    @Column({ name: 'DOCUMENT_URL' })
    documentUrl: string;

    @Column({ name: 'IS_DELETED', default: false })
    isDeleted: boolean;

    @Column({ name: 'DELETED_DATETIME', nullable: true })
    deletedDatetime: Date;

    @ManyToOne(() => Customer, customer => customer.customerDocuments)
    customer: Customer;
}
