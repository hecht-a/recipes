import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Recipe from 'App/Models/Recipe'

export default class ShowRecipeController {
  public async showRecipeAction({ request, view }: HttpContextContract) {
    const recipeId = request.params().id
    const recipe = await Recipe.findOrFail(recipeId)

    return view.render('pages/recipes/show', { recipe })
  }
}
