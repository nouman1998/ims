import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'bank' })
export class Bank {
  @PrimaryGeneratedColumn({ name: 'BANK_ID' })
  bankId: number;

  @Column({ name: 'BANK_NAME' })
  bankName: string;

  constructor(bankId?: number){
    this.bankId = bankId;
  }
}