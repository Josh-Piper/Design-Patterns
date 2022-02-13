// One of the most controversial patterns
// yet also one of the easiest.

// Single global instance of a class shared between
// different resources.

class Singleton {
  // Should be private and inaccessible.
  // Exists once for the class, we refer to this reference.
  static instance = null;
  static number = 0;

  constructor() {
    if (!this.instance) {
      // Assign it to the first instance.
      this.instance = this;
      Singleton.number++;
    }

    return Singleton.instance;
  }

  // Give the instance a number property
  get number() {
    return Singleton.number;
  }
}

console.log(`Singleton.name is`, Singleton.name);

const singleton1 = new Singleton();
console.log("Singleton number", singleton1.number);

const singleton2 = new Singleton();
console.log("Singleton number", singleton1.number);
console.log("Singleton number", singleton2.number);
