export default () => ({
  quantity: 1,
  add() {
    this.quantity++
  },
  remove() {
    if (this.quantity > 1) {
      this.quantity--
    }
  },
})
