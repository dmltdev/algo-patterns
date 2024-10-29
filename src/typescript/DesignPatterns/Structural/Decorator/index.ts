// Attaches additional responsibilities to an object dynamically.
// Decorators provide a flexible alternative to subclassing for extending functionality.

class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 2;
  }
}

const myCoffee = new MilkDecorator(new Coffee());
console.log(myCoffee.cost()); // 7
