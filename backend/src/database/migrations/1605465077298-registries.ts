import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class registrationStatus1605465077298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'registries',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'registration_number',
              type: 'varchar',
            },
            {
              name: 'operator_id',
              type: 'integer',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'checked',
              type: 'boolean',
              default: false,
            }
          ],
          foreignKeys: [
            {
              name: 'OperatorRegister',
              columnNames: ['operator_id'],
              referencedTableName: 'operators',
              referencedColumnNames: ['id'],
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }
          ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('registries');
    }

}
