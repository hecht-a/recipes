import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category'
import Ingredient from 'App/Models/Ingredient'

export default class Recipe extends BaseModel {
  @belongsTo(() => Category, {
    foreignKey: 'categoryId',
  })
  public category: BelongsTo<typeof Category>

  @manyToMany(() => Ingredient, {
    pivotTable: 'recipes_ingredients',
    pivotForeignKey: 'recipe',
    pivotColumns: ['id', 'quantity', 'unity'],
  })
  public ingredients: ManyToMany<typeof Ingredient>

  @column({ isPrimary: true })
  public id: number

  @column()
  public label: string

  @column()
  public description: string

  @column()
  public steps: string

  @column()
  public categoryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
