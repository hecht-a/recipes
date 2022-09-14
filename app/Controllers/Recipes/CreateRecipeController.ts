import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Unit from 'App/Models/Unit'
import Ingredient from 'App/Models/Ingredient'

export default class CreateRecipeController {
  public async createRecipeAction({ request, view }: HttpContextContract) {
    if (request.method().toLowerCase() === 'get') {
      const categories = await Category.all()
      const units = await Unit.all()
      const ingredients = await Ingredient.all()

      return view.render('pages/recipes/create', {
        categories,
        units,
        ingredients,
      })
    }
  }
}
