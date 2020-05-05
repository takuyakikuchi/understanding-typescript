"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** @format */
function Logger(randomString) {
    console.log('Logger factory');
    return function (constructor) {
        console.log(randomString);
        console.log(constructor);
    };
}
function WithTemplate(template, id) {
    console.log('Template factory');
    return function (constructor) {
        console.log('Rendering template');
        const appDiv = document.getElementById(id);
        const newPerson = new Person();
        if (appDiv) {
            appDiv.innerHTML = template;
            appDiv.querySelector('h1').textContent = newPerson.name;
        }
    };
}
/* ---------- Decorators ----------
 *Decorators provide a way to add both annotations and a meta-programming syntax for class *declarations and members
 */
let Person = class Person {
    constructor() {
        this.name = 'Takuya Kikuchi';
        console.log('Creating new person...');
    }
};
Person = __decorate([
    Logger('Logging'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const takuya = new Person();
console.log(takuya);
//# sourceMappingURL=app.js.map