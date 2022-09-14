import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RecipesIngredients extends BaseSchema {
  protected tableName = 'recipes_ingredients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('recipe').notNullable()
      table.integer('ingredient').notNullable()
      table.integer('quantity').notNullable()

      table.foreign('recipe').references('recipes.id')
      table.foreign('ingredient').references('ingredients.id')
      table.string('unity').nullable().defaultTo(null)

      table.primary(['recipe', 'ingredient'])

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
