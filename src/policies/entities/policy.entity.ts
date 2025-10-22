import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('policies')
export class Policy {

    @PrimaryColumn('uuid')
    id: string;

    @Column('text')
    rutTitular: string;

    fechaEmision: Date;

    @Column('text')
    planSalud: string;

    @Column('int')
    prima: number;

    @Column('text')
    estado: string;

}
