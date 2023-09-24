import Stack from "./Stack";

// TODO: Move postfix evaluation somewhere else
//* Performs Postfix Evaluation on a given expression
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
console.log(postFixEvaluation("23*+"));
