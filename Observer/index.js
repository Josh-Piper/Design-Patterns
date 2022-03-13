class Subject {
  constructor() {
    this.observers = []; // Array of observer functions
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}

const subject = new Subject();

function Observer1() {
  console.log("Observer 1 firing");
}

function Observer2() {
  console.log("Observer 2 firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.notify();
