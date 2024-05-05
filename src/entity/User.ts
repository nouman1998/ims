import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserType } from './UserType';
import { SaleAgent } from './SaleAgent';
import { Merchants } from './Merchants';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  userId: number;

  @Column({ name: 'FULL_NAME' })
  fullName: string;

  @Column({ name: 'EMAIL', unique: true })
  email: string;

  @Column({ name: 'PASSWORD' })
  password: string;

  @ManyToOne(() => UserType)
  @JoinColumn({ name: 'USER_TYPE_ID' })
  userType: UserType;

  @ManyToOne(() => SaleAgent)
  @JoinColumn({ name: 'SALE_AGENT_ID' })
  saleAgent: SaleAgent;

  @ManyToOne(() => Merchants)
  @JoinColumn({ name: 'MERCHANT_ID' })
  merchant: Merchants;
}