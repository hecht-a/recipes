import '../css/app.scss'
import Alpine from 'alpinejs'
import addIngredient from './alpine/addIngredient'
import changeQuantity from './alpine/changeQuantity'
import { EventTarget } from './types'

document.addEventListener('alpine:init', () => {
  document.querySelector('#delete__row')!.addEventListener('click', (e: EventTarget) => {
    e.target.parentNode!.parentElement!.remove()
  })
  Alpine.data('add_ingredient', addIngredient)
  Alpine.data('change_quantity', changeQuantity)
})

Alpine.start()
