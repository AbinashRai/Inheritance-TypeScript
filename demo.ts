export class Persons {
  public name: string;
  public age: number;
  public hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `My name is ${this.name}, my age is ${
      this.age
    } and my hobbies are ${this.hobbies.join(", ")}`;
  }
}

class Students extends Persons {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  introduce(): string {
    // return `${super.introduce()}, I'm in grade ${this.grade}`;
    return ` I'm in grade ${this.grade}`;
  }

  introduce2(): string {
    return this.introduce();
  }
}

const person1 = new Persons("Mike", 33, ["gaming", "writing"]);
const person2 = new Persons("Josh", 21, ["cooking", "drawing"]);

const student1 = new Students("Jake", 41, ["running", "reading"], 12);

console.log(person1.introduce());
console.log(student1.introduce2());
