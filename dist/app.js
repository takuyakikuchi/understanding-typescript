"use strict";
/** @format */
/*
function Logger(randomString: string) {
  console.log('Logger factory');
  return function (constructor: Function) {
    console.log(randomString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, id: string) {
  console.log('Template factory');
  return function (constructor: Function) {
    console.log('Rendering template');
    const appDiv = document.getElementById(id);
    const newPerson = new Person();
    if (appDiv) {
      appDiv.innerHTML = template;
      appDiv.querySelector('h1')!.textContent = newPerson.name
    }
  }
}

/* ---------- Decorators ----------
 *<Description>
 *Decorators provide a way to add both annotations and a meta-programming syntax for class *declarations and members
 *<Timing of execution>
 *It is executed when class exists, not when class initiated
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
@Logger('Logging')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Takuya Kikuchi';

  constructor() {
    console.log('Creating new person...');
  }
}

const takuya = new Person();
console.log(takuya);
*/
//  --------------- Accessor & Parameter Decorator -----------
function PropertyDecorator(target, propertyName) {
    console.log('------ Property decorator --------');
    console.log(`target: ${target}`);
    console.log(`propertyName: ${propertyName}`);
}
function AccessorDecorator(target, name, descriptor) {
    console.log('------ Accessor decorator ------');
    console.log(`target: ${target}`);
    console.log(`name: ${name}`);
    console.log(`descriptor: ${descriptor}`);
}
function MethodDecorator(target, name, descriptor) {
    console.log('------ Method decorator ------');
    console.log(`target: ${target}`);
    console.log(`name: ${name}`);
    console.log(`descriptor: ${descriptor}`);
}
function ParameterDecorator(target, propertyName, position) {
    console.log('------ Parameter decorator --------');
    console.log(`target: ${target}`);
    console.log(`propertyName: ${propertyName}`);
    console.log(`position: ${position}`);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Invalid price: it should be positive number');
        }
    }
    getPriceWithTax(taxRate) {
        return this._price * (1 + taxRate);
    }
}
__decorate([
    PropertyDecorator
], Product.prototype, "title", void 0);
__decorate([
    AccessorDecorator
], Product.prototype, "price", null);
__decorate([
    MethodDecorator,
    __param(0, ParameterDecorator)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map