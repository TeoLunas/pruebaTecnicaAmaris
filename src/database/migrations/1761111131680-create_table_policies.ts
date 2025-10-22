import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePolicies1761111131680 implements MigrationInterface {
    name = 'CreateTablePolicies1761111131680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "policies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "rutTitular" text NOT NULL, "fechaEmision" date NOT NULL, "planSalud" text NOT NULL, "prima" integer NOT NULL, "estado" text NOT NULL DEFAULT 'emitida', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_603e09f183df0108d8695c57e28" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "policies"`);
    }

}
