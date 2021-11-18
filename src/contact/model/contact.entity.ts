import { Contact } from "./contact.interface";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class ContactEntity implements Contact{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string;

    @Column({length: 30, name: 'last_name'})
    lastName: string;

    @Column({length: 5})
    country: string;

    @Column()
    phone?: string;

    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    createdAt?: Date;
}