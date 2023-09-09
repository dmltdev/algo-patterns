// Stack class
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

// !Testing

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.peek());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.pop());

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.printStack());

// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (!isNaN(c)) stack.push(c - "0");
    else {
      let val1 = stack.pop();
      let val2 = stack.pop();
      if (val1 == "Underflow" || val2 == "Underflow")
        return "Can't perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }

  return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-"));

// returns postfix evaluation can't be performed
// console.log(postFixEvaluation("23*+"));
