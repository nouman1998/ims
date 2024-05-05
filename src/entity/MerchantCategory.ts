import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'merchant_category' })
export class MerchantCategory {
    @PrimaryGeneratedColumn({ name: 'MERCHANT_CATEGORY_ID' })
    merchantCategoryId: number;

    @Column({ name: 'MERCHANT_CATEGORY_NAME' })
    merchantCategoryName: string;

    constructor(merchantCategoryId? : number){
        this.merchantCategoryId = merchantCategoryId;
    }
}