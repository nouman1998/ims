import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Bank } from './Bank';

@Entity({ name: 'sale_agent' })
export class SaleAgent {
  @PrimaryGeneratedColumn({name :"SALE_AGENT_ID"})
  saleAgentId: number;

  @Column({ name: 'AGENT_NAME' })
  agentName: string;

  @Column({ name: 'AGENT_EMAIL', nullable: true })
  agentEmail: string;

  @Column({ name: 'AGENT_CONTACT', nullable: true })
  agentContact: string;

  @Column({ name: 'AGENT_ADDRESS', nullable: true })
  agentAddress: string;

  @Column({ name: 'AGENT_PROFIT_PERCENTAGE', type: 'decimal', precision: 5, scale: 2, nullable: true })
  agentProfitPercentage: number;

  @Column({ name: 'AGENT_SALE_TARGET', type: 'decimal', precision: 10, scale: 2, nullable: true })
  agentSaleTarget: number;

  @Column({ name: 'AGENT_ACCOUNT_NUMBER', nullable: true })
  agentAccountNumber: string;

  @ManyToOne(() => Bank)
  @JoinColumn({ name: 'AGENT_BANK_ID' })
  agentBank: Bank;


  
  constructor(saleAgentId?: number){
    this.saleAgentId = saleAgentId;
}
}