import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Merchants } from './Merchants';

@Entity({ name: 'location' })
export class Location {
    @PrimaryGeneratedColumn({ name: 'LOCATION_ID' })
    locationId: number;

    @Column({ name: 'LOCATION_TITLE' })
    locationTitle: string;

    @Column({ name: 'LOCATION_ADDRESS' })
    locationAddress: string;

    @Column({ name: 'CONTACT_NUMBER', nullable: true })
    contactNumber: string;

    @Column({ name: 'CONTACT_POC', nullable: true })
    contactPoc: string;

    @Column({ name: 'ACTIVE', default: true })
    active: boolean;

    @ManyToOne(() => Merchants)
    merchant: Merchants;

    constructor(locationId?: number){
        this.locationId = locationId;
    }

}