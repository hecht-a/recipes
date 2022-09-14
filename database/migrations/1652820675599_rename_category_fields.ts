import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recipes extends BaseSchema {
  protected tableName = 'recipes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('category', 'category_id')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('categoryId', 'category')
    })
  }
}
