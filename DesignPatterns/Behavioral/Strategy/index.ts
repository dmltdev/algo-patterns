interface Strategy {
  execute: () => {};
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    return this.strategy.execute();
  }
}

class ConcreteStrategyA {
  execute() {
    return "Strategy A";
  }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy());
