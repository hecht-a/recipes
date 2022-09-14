import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import './homepage'
import './recipes'
import './categories'
import './components'

import { GetNotFoundView } from 'App/Services/Http/GetNotFoundView'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('*', async ({ view }: HttpContextContract) => {
  return GetNotFoundView.exec(view)
})
