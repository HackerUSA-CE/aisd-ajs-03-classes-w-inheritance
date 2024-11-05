// Base Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`It's my birthday! I am now ${this.age} years old.`);
  }
}

// Subclass Employee, inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle, salary) {
    super(name, age); // Call the parent class (Person) constructor
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }

  // Method override to include job title in the greeting
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
  }

  showSalary() {
    console.log(`My salary is $${this.salary} per year.`);
  }
}

// Base Vehicle class definition
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} has started.`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

// Subclass Car, inheriting from Vehicle
class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model, year); // Call the parent class (Vehicle) constructor
    this.color = color;
  }

  paint(newColor) {
    console.log(`${this.make} ${this.model} is now painted ${newColor}.`);
    this.color = newColor;
  }

  // Additional method specific to Car
  honk() {
    console.log(`${this.make} ${this.model} goes 'beep beep!'`);
  }
}

// Testing the Employee subclass
const alice = new Employee("Alice", 30, "Software Engineer", 90000);
alice.greet(); // Output: Hello, my name is Alice, I am 30 years old, and I work as a Software Engineer.
alice.haveBirthday(); // Output: It's my birthday! I am now 31 years old.
alice.work(); // Output: Alice is working as a Software Engineer.
alice.showSalary(); // Output: My salary is $90000 per year.

const bob = new Employee("Bob", 25, "Developer",98000);
bob.greet(); // Output: Hello, my name is Bob, I am 25 years old, and I work as a Developer.
bob.work(); // Output: Bob is working as a Developer.
bob.showSalary(); // Output: My salary is $98000 per year.

// Testing the Car subclass
const car = new Car("Toyota", "Corolla", 2015, "red");
car.start(); // Output: Toyota Corolla has started.
console.log(`Is the car running? ${car.isRunning}`); // Output: Is the car running? true
car.honk(); // Output: Toyota Corolla goes 'beep beep!'
car.paint("blue"); // Output: Toyota Corolla is now painted blue.
car.stop(); // Output: Toyota Corolla has stopped.

const truck = new Vehicle("Ford", "F-150", 2018);
truck.start(); // Output: Ford F-150 has started.
truck.stop(); // Output: Ford F-150 has stopped.

const currentYear = new Date().getFullYear();
console.log(`The car is ${car.getAge(currentYear)} years old.`); // Output depends on current year
console.log(`The truck is ${truck.getAge(currentYear)} years old.`); // Output depends on current year
