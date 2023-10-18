export class Product {
  constructor(product) {
    this.product = product;
    this.toppings = [];
    this.chosenProducts = [];
  }

  addTopping(topping) {
    return this.toppings.push(topping);
  }

  calculatePrice() {
    const productPrice = this.product;
    const toppingPrice = this.toppings.reduce(
      (total, topping) => total + topping,
      0
    );
    return productPrice + toppingPrice;
  }
}
