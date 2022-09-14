import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/rowIngredient', 'RowIngredientController.rowIngredientAction')
})
  .prefix('/components')
  .namespace('App/Controllers/Components')
