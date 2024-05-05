import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Bank } from './Bank';
import { MerchantStatus } from './MerchantStatus';
import { MerchantCategory } from './MerchantCategory';
import { City } from './City';

@Entity({ name: 'merchants' })
export class Merchants {
    @PrimaryGeneratedColumn({ name: 'MERCHANT_ID' })
    merchantId: number;

    @Column({ name: 'MERCHANT_NAME' })
    merchantName: string;

    @Column({ name: 'MERCHANT_ADDRESS' })
    merchantAddress: string;

    @ManyToOne(() => Bank)
    @JoinColumn({ name: 'BANK_ID' })
    bank: Bank;

    @ManyToOne(() => MerchantStatus)
    @JoinColumn({ name: 'MERCHANT_STATUS_ID' })
    merchantStatus: MerchantStatus;

    @ManyToOne(() => MerchantCategory)
    @JoinColumn({ name: 'MERCHANT_CATEGORY_ID' })
    merchantCategory: MerchantCategory;

    @Column({ name: 'MERCHANT_EMAIL', nullable: true })
    merchantEmail: string;

    @Column({ name: 'MERCHANT_CODE', unique: true })
    merchantCode: string;

    @ManyToOne(() => City)
    @JoinColumn({ name: 'CITY_ID' })
    city: City;

    
    constructor(merchantId?: number){
        this.merchantId = merchantId;
    }
}