import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/create', 'CreateRecipeController.createRecipeAction')
  Route.post('/save', 'SaveRecipeController.saveRecipeAction')
  Route.get('/:id', 'ShowRecipeController.showRecipeAction')
})
  .prefix('/recipes')
  .namespace('App/Controllers/Recipes')
