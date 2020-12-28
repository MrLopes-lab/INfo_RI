import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class registriesPacks1609111887385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "registries_packs",
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
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'operator_id',
            type: 'integer',
          },
          {
            name: 'concluded',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
        foreignKeys: [
          {
            name: 'OperatorPack',
            columnNames: ['operator_id'],
            referencedTableName: 'operators',
            referencedColumnNames: ['id'],
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('registries_packs');
    }

}
