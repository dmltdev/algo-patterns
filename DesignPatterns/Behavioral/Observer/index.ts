// Defines a one-to-many dependency between objects, where one object (the subject) notifies its dependents of any state changes.

class Subject {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  update() {
    console.log("State updated");
  }
}

const subject = new Subject();
const observer = new Observer();
const observer2 = new Observer();
subject.addObserver(observer);
subject.addObserver(observer2);
subject.notify(); // State updated (x2)
