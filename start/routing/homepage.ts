import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ShowHomePagesController.showHomePageAction').namespace('App/Controllers/Http')
