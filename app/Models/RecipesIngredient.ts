import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Unit from './Unit'

export default class RecipesIngredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantity: number

  @hasOne(() => Unit)
  public unit: HasOne<typeof Unit>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
