import { lastOfArray } from '../helpers'
import type { EventTarget } from '../types'

export default () => ({
  add(e: EventTarget) {
    const parentElement = e.target.parentElement!
    fetch('/components/rowIngredient')
      .then((response) => response.text())
      .then((data) => {
        parentElement.insertAdjacentHTML('beforebegin', data)
        const parent = parentElement.parentElement!

        const selects = Array.from<HTMLSelectElement>(
          parent.querySelectorAll('select.form__control')!
        )

        const ingredientsSelects = selects.filter((select) => select.id.startsWith('ingredient-'))
        const ingredientsSelect = lastOfArray(ingredientsSelects)
        const ingredients: { id: number; label: string }[] = JSON.parse(
          ingredientsSelect.form!.dataset.ingredients!
        )
        ingredients.forEach(({ id, label }) => {
          const option = document.createElement('option')
          option.value = String(id)
          option.textContent = label
          ingredientsSelect.appendChild(option)
        })
        ingredientsSelect.id = `ingredient-${ingredientsSelects.length}`
        ingredientsSelect.name = `ingredient-${ingredientsSelects.length}`

        const quantityInputs = Array.from<HTMLInputElement>(
          parent.querySelectorAll('.quantity input')
        )
        const quantity: HTMLInputElement = lastOfArray(quantityInputs)
        quantity.id = `quantity-${quantityInputs.length}`
        quantity.name = `quantity-${quantityInputs.length}`

        const unitSelects = selects.filter((select) => select.id.startsWith('unit-'))
        const unit = lastOfArray(unitSelects)
        const units: { id: number; label: string; shortLabel: string }[] = JSON.parse(
          unit.form!.dataset.units!
        )
        units.forEach(({ id, label, shortLabel }) => {
          const option = document.createElement('option')
          option.value = String(id)
          option.textContent = `${label} (${shortLabel})`
          unit.appendChild(option)
        })
        unit.id = `unit-${unitSelects.length}`
        unit.name = `unit-${unitSelects.length}`

        const deleteRow = Array.from<HTMLButtonElement>(parent.querySelectorAll('#delete__row'))
        lastOfArray(deleteRow).addEventListener('click', (e: EventTarget) => {
          e.target.parentNode!.parentElement!.remove()
        })
      })
  },
})
