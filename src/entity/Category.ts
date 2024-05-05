import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
    @PrimaryGeneratedColumn({ name: 'CATEGORY_ID' })
    categoryId: number;

    @Column({ name: 'CATEGORY_NAME' })
    categoryName: string;
}