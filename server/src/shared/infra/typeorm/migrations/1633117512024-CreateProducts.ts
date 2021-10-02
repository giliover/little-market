import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProducts1633117512024 implements MigrationInterface {
    name = 'CreateProducts1633117512024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, "unity" character varying NOT NULL, "category" integer NOT NULL, "description" character varying NOT NULL, "price" real NOT NULL, "carousel" text array NOT NULL DEFAULT '{}', "discount" real NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_7cfc24d6c24f0ec91294003d6b8" UNIQUE ("code"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
