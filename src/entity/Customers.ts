import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column()
    address: string;

    @Column()
    role: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @CreateDateColumn()
    create_at: Date;

}


