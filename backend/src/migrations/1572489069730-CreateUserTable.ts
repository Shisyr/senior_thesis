import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateUserTable1572489069730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "User" (
                id SERIAL PRIMARY KEY,
                first_name varchar not null,
                last_name varchar not null,
                middle_name varchar,
                email varchar not null UNIQUE,
                password varchar not null,
                phone varchar
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE IF EXISTS "User"`);
    }

}
