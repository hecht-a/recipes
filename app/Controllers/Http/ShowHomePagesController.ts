import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import Recipe from 'App/Models/Recipe'

export default class ShowHomePagesController {
  public async showHomePageAction({ view }: HttpContextContract) {
    const categories = await Category.all()
    const recipes = await Recipe.query().preload('category').select('*')

    return view.render('pages/home', {
      categories,
      recipes,
    })
  }
}
