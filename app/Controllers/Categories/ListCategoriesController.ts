import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class ListCategoriesController {
  public async listCategoriesAction({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('pages/categories/list', {
      categories,
    })
  }
}
