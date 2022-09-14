import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Units extends BaseSchema {
  protected tableName = 'units'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('label').unique().notNullable()
      table.string('short_label').unique().notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
