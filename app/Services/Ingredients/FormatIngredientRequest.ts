type Ingredient = {
  ingredient: number
  quantity: number
  unit: number
}

export class FormatIngredientRequest {
  public static exec(body: Record<string, any>): Ingredient[] {
    const keys = Object.keys(body).filter((key) => key !== 'label')

    const result: Ingredient[] = []

    for (let i = 1; i < keys.length / 3 + 1; i++) {
      const obj: Ingredient = {
        ingredient: Number(body[`ingredient-${i}`]),
        quantity: Number(body[`quantity-${i}`]),
        unit: Number(body[`unit-${i}`]),
      }
      result.push(obj)
    }

    return result
  }
}
