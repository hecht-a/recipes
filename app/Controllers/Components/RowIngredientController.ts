import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RowIngredientController {
  public async rowIngredientAction({ view }: HttpContextContract) {
    return view.render('components/rowIngredient')
  }
}
