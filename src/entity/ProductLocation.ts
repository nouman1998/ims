import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Products } from './Products';
import { Location } from './Location';

@Entity({ name: 'product_location' })
export class ProductLocation {
  @PrimaryGeneratedColumn({ name: 'PRODUCT_LOCATION_ID' })
  productLocationId: number;

  @ManyToOne(() => Products)
  @JoinColumn({ name: 'PRODUCT_ID' })
  product: Products;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'LOCATION_ID' })
  location: Location;

  @Column({ name: 'QUANTITY' })
  quantity: number;
}