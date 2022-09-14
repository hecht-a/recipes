import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recipes extends BaseSchema {
  protected tableName = 'recipes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('description', 300).notNullable()
      table.string('steps', 10000).notNullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
      table.dropColumn('steps')
    })
  }
}
