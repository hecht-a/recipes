import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Recipe from 'App/Models/Recipe'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public label: string

  @manyToMany(() => Recipe, {
    pivotTable: 'recipes_ingredients',
    pivotForeignKey: 'ingredient',
    pivotColumns: ['id', 'quantity', 'unity'],
  })
  public ingredients: ManyToMany<typeof Recipe>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
