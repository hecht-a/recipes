import { ViewRendererContract } from '@ioc:Adonis/Core/View'

export class AbstractGetView {
  protected static viewName

  public static exec(view: ViewRendererContract): Promise<string> {
    return view.render(`errors/${this.viewName}`)
  }
}
