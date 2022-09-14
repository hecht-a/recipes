import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UniqueLabels extends BaseSchema {
  public async up() {
    this.schema.alterTable('allergens', (table) => {
      table.string('label').notNullable().unique().alter()
    })
    this.schema.alterTable('categories', (table) => {
      table.string('label').notNullable().unique().alter()
    })
    this.schema.alterTable('ingredients', (table) => {
      table.string('label').notNullable().unique().alter()
    })
    this.schema.alterTable('recipes', (table) => {
      table.string('label').notNullable().unique().alter()
    })
  }

  public async down() {}
}
