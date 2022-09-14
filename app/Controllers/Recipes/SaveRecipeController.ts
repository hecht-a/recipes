import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { FormatIngredientRequest } from 'App/Services/Ingredients/FormatIngredientRequest'

export default class SaveRecipeController {
  public async saveRecipeAction({ request }: HttpContextContract) {
    console.log(FormatIngredientRequest.exec(request.body()))
  }
}
