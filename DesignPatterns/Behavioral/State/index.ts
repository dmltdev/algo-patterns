// The State design pattern allows an object to alter its behavior when its internal state changes.
// It encapsulates state-specific behavior in separate classes, avoiding complex conditional logic.
// This pattern promotes cleaner, more modular code and makes it easier to add new states.

// Example without the state pattern. The below strategy may cause switch hell
// class Human {
//   think(mood) {
//     switch (mood) {
//       case "happy":
//         return "I am happy";
//       case "sad":
//         return "I am sad";
//       default:
//         return "I am neutral";
//     }
//   }
// }

interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return "I am happy";
  }
}

class SadState implements State {
  think() {
    return "I am sad";
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  // delegate the "think" function to a current state
  think() {
    return this.state.think();
  }

  // we don't have to change the API or use a bunch of conditional logic when state changes
  changeState(state: State) {
    this.state = state;
  }
}
