import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Merchants } from './Merchants';
import { ProductCategory } from './ProductCategory';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn({ name: 'PRODUCT_ID' })
  productId: number;

  @Column({ name: 'PRODUCT_NAME' })
  productName: string;

  @Column({ name: 'PRODUCT_DETAIL', nullable: true })
  productDetail: string;

  @Column({ name: 'SKU', unique: true })
  sku: string;

  @Column({ name: 'SALE_PRICE', type: 'decimal', precision: 10, scale: 2 })
  salePrice: number;

  @Column({ name: 'PURCHASE_PRICE', type: 'decimal', precision: 10, scale: 2 })
  purchasePrice: number;

  @ManyToOne(() => Merchants)
  @JoinColumn({ name: 'MERCHANT_ID' })
  merchant: Merchants;

  @ManyToOne(() => ProductCategory)
  @JoinColumn({ name: 'PRODUCT_CATEGORY_ID' })
  productCategory: ProductCategory;

  
  constructor(productId?: number){
    this.productId = productId;
}
}