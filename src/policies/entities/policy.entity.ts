import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('policies')
export class Policy {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    rutTitular: string;

    @Column('date')
    fechaEmision: Date;

    @Column('text')
    planSalud: string;

    @Column('int')
    prima: number;

    @Column('text', {
        default: 'emitida'
    })
    estado: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
