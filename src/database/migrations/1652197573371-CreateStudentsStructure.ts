import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudentsStructure1652197573371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "students",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "enrollment",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "motherName",
                        type: "varchar"
                    },
                    {
                        name: "fatherName",
                        type: "varchar"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "login",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    
                    },

                ]
            })
        )
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("students");
    }

}
