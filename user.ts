import { Persons } from "./demo";
class User {
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class Employee extends User {
  public getAge(): number {
    return this.age;
  }
}

class Workers extends Persons {
  constructor(name: string) {
    super(name, 10, []);
  }

  getName(): string {
    return this.name;
  }
}

const newUser = new User("Alice", 25, "alice@mail.com");
console.log(newUser.email);

const newEmployee = new Employee("Bob", 30, "bob@mail.com");
console.log(newEmployee.getAge());

const newWorker = new Workers("Jhon");

console.log(newWorker.getName());
