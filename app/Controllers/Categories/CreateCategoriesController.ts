import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryValidator from '../../Validators/CategoryValidator'
import Category from '../../Models/Category'

export default class CreateCategoriesController {
  public async createCategoriesAction({ request, response, view }: HttpContextContract) {
    if (request.method().toLowerCase() === 'get') {
      return view.render('pages/categories/create')
    }

    const payload = await request.validate(CategoryValidator)
    await Category.create(payload)

    return response.redirect().toRoute('Categories/ListCategoriesController.listCategoriesAction')
  }
}
