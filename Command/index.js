// Encapsulating individual commands for a perform and undo method.
// Commands come in handy for abstracting difficult features such as Savings, Exiting etc.
// Especially with databases.
// With commands it is also better when these 'commands' will be used together.
// For emx ample, combining the commands Add and Multiply.
// From WebDevSimplified
class Calculator {
  constructor() {
    this.currentValue = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.currentValue = command.undo(this.currentValue);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
    this.executed = false;
  }

  execute(currentValue) {
    this.executed = true;
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    if (this.executed) {
      return currentValue - this.valueToAdd;
    }
  }
}

class Multiply {
  constructor(valueToMultiply) {
    this.multiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.multiply;
  }

  undo(currentValue) {
    return currentValue / this.multiply;
  }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(20));

console.log(calculator.currentValue);

calculator.undo();

console.log(calculator.currentValue);

calculator.executeCommand(new Multiply(5));
console.log(calculator.currentValue);
