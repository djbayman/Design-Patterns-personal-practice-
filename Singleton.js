//Singletons are classes which can be instantiated once, and can be accessed globally.
//This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

let instance;
let counter = 0;

class Counter {
  constructor() {
    //make sure that only one instance can be created
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
// Error: You can only create one instance!

//The Object.freeze method makes sure that consuming code cannot modify the Singleton.
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
