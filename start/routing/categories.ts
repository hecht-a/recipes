import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ListCategoriesController.listCategoriesAction')

  Route.get('/create', 'CreateCategoriesController.createCategoriesAction')
  Route.post('/create', 'CreateCategoriesController.createCategoriesAction')
})
  .prefix('/categories')
  .namespace('App/Controllers/Categories')
