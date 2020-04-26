interface Animal {
  name: string;

  greet(express: string): void;
}

class Person implements Animal {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(express: string) {
    console.log(`${this.name} said ${express}`);
  }
}

let takuya: Animal;
takuya = new Person("takuya");

takuya.greet("Hello everyone");