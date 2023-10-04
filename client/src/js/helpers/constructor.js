class food {
    constructor(size) {
      this.size = size;
      this.topping = [];
    }
  
    static SIZE_SMALL = {
      name: 'small',
      price: 0,
    };
  
    static SIZE_BIG = {
      name: 'big',
      price: 20,
    };
  
    static STUFFING_CHEESE = {
      name: 'chesse',
      price: 10,
      ccal: 20,
    };
  
    static STUFFING_SALAD = {
      name: 'salad',
      price: 20,
      ccal: 5,
    };
  
    static STUFFING_POTATO = {
      name: 'potato',
      price: 15,
      ccal: 10,
    };
  
    static TOPPING_SAUCE = {
      name: 'sauce',
      price: 15,
      ccal: 0,
    };
  
    static TOPPING_MAYO = {
      name: 'mayo',
      price: 20,
      ccal: 5,
    };
  
    addTopping(topping) {
      return this.topping.push(topping);
    }
  
    calculateCalories() {
      let burgerCalories = this.size.ccal + this.stuffing.ccal;
      let toppingCalories = 0;
  
      this.topping.forEach((item) => (toppingCalories += item.ccal));
  
      return burgerCalories + toppingCalories;
    }
  
    calculatePrice() {
      let burgerPrice = this.size.price + this.stuffing.price;
      let toppingPrice = 0;
  
      this.topping.forEach((item) => (toppingPrice += item.price));
  
      return burgerPrice + toppingPrice;
    }
  }