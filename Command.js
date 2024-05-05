class Calcolator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  excuteCommand(command) {
    this.value = command.excute(this.value);
    this.history.push(command);
  }
  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  excute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  excute(currentValue) {
    return currentValue * this.valueToMultiply;
  }
  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.AddCommand = new AddCommand(valueToAdd);
    this.MultiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  excute(currentValue) {
    const newValue = this.AddCommand.excute(currentValue);
    return this.MultiplyCommand.excute(newValue);
  }
  undo(currentValue) {
    const newValue = this.MultiplyCommand.undo(currentValue);
    return this.AddCommand.undo(newValue);
  }
}

const calcolator = new Calcolator();
calcolator.excuteCommand(new AddThenMultiplyCommand(10, 2));
console.log(calcolator.value);
calcolator.undoCommand();
console.log(calcolator.value);
