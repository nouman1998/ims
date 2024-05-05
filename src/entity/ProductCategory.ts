import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product_category' })
export class ProductCategory {
    @PrimaryGeneratedColumn({ name: 'PRODUCT_CATEGORY_ID' })
    productCategoryId: number;

    @Column({ name: 'PRODUCT_CATEGORY' })
    productCategory: string;
    
    constructor(productCategoryId?: number){
        this.productCategoryId = productCategoryId;
    }
}