import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSchoolStructure1652109190541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
            name: "school",
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "network_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
            ],
            foreignKeys:[
                {   
                    name: "FKNetworkSchools",
                    referencedTableName: "network",
                    referencedColumnNames: ["id"],
                    columnNames: ["network_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
            ]
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("school");
    }

}
