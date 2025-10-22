import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePolicies1761107990004 implements MigrationInterface {
    name = 'CreateTablePolicies1761107990004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "policies" ("id" uuid NOT NULL, "rutTitular" text NOT NULL, "planSalud" text NOT NULL, "prima" integer NOT NULL, "estado" text NOT NULL, CONSTRAINT "PK_603e09f183df0108d8695c57e28" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "policies"`);
    }

}
