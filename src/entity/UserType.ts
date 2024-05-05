import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user_type' })
export class UserType {
  @PrimaryGeneratedColumn({ name: 'USER_TYPE_ID' })
  userTypeId: number;

  @Column({ name: 'USER_TYPE' })
  userType: string;
}