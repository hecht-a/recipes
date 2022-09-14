import Ingredient from 'App/Models/Ingredient'

export class Create {
  public static async exec(label: string): Promise<Ingredient> {
    return Ingredient.create({ label })
  }
}
