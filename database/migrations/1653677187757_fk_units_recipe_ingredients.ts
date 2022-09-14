import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RecipesIngredients extends BaseSchema {
  protected tableName = 'recipes_ingredients'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('unity')
      table.integer('unit').references('units.id').nullable().defaultTo(null)
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
