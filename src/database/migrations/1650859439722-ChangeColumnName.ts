import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnName1650859439722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "update_at" to "updated_at"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_at" to "update_at"`)
    }

}
