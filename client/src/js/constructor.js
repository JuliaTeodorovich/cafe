export class Product {
  constructor(size) {
    this.size = size;
    this.topping = [];
  }

  addTopping(topping) {
    return this.topping.push(topping);
  }

  calculatePrice() {
    let productPrice = this.size.price;
    let toppingPrice = 0;

    this.topping.forEach((item) => (toppingPrice += item.price));
console.log(productPrice);
    return productPrice + toppingPrice;
  }
}
