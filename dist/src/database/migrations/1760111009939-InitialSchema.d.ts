import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitialSchema1760111009939 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
