import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'city' })
export class City {
    @PrimaryGeneratedColumn({ name: 'CITY_ID' })
    cityId: number;

    @Column({ name: 'CITY_NAME' })
    cityName: string;

    constructor(cityId?: number){
        this.cityId = cityId;
    }
}
