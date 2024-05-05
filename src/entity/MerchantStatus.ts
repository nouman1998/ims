import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'merchant_status' })
export class MerchantStatus {
    @PrimaryGeneratedColumn({ name: 'MERCHANT_STATUS_ID' })
    merchantStatusId: number;

    @Column({ name: 'MERCHANT_STATUS' })
    merchantStatus: string;

    constructor(merchantStatusId? :number){
        this.merchantStatusId = merchantStatusId;
    }
}