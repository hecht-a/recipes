import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Recipe from 'App/Models/Recipe'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Recipe, {
    foreignKey: '',
  })
  public recipes: HasMany<typeof Recipe>

  @column()
  public label: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
