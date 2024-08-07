import { MigrationInterface, QueryRunner } from 'typeorm';

class addProductBrandModel1720911448199 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // prettier-ignore
    await queryRunner.query(
      "ALTER TABLE \"product\"" +
      " ADD COLUMN \"brand\" text," +
      " ADD COLUMN \"model\" text"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // prettier-ignore
    await queryRunner.query(
      "ALTER TABLE \"product\"" +
      " DROP COLUMN \"brand\"," +
      " DROP COLUMN \"model\""
    );
  }
}

export default addProductBrandModel1720911448199;
