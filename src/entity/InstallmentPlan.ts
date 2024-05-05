import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductCategory } from './ProductCategory';

@Entity({ name: 'installment_plan' })
export class InstallmentPlan {
    @PrimaryGeneratedColumn({ name: 'INSALLMENT_PLAN_ID' })
    installmentPlanId: number;

    @Column({ name: 'INSTALLMENT_NAME' })
    installmentName: string;

    @Column({ name: 'INSTALLMENT_CODE' })
    installmentCode: string;

    @Column({ name: 'DURATION' })
    duration: number;

    @Column({ name: 'MARKUP_PERCENTAGE', type: 'decimal', precision: 5, scale: 2 })
    markupPercentage: number;

    @ManyToOne(() => ProductCategory)
    @JoinColumn({name : "PRODUCT_CATEGORY_ID"})
    productCategory: ProductCategory;

    constructor(installmentPlanId?: number){
        this.installmentPlanId = installmentPlanId;
    }
}