"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(express) {
        console.log(`${this.name} said ${express}`);
    }
}
let takuya;
takuya = new Person("takuya");
takuya.greet("Hello everyone");
//# sourceMappingURL=app.js.map