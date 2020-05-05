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
function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log('------ Property decorator --------');
  console.log(`target: ${target}`);
  console.log(`propertyName: ${propertyName}`);
}

function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('------ Accessor decorator ------');
  console.log(`target: ${target}`);
  console.log(`name: ${name}`);
  console.log(`descriptor: ${descriptor}`);
}

function MethodDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('------ Method decorator ------');
  console.log(`target: ${target}`);
  console.log(`name: ${name}`);
  console.log(`descriptor: ${descriptor}`);
}

function ParameterDecorator(
  target: any,
  propertyName: string | Symbol,
  position: number
) {
  console.log('------ Parameter decorator --------');
  console.log(`target: ${target}`);
  console.log(`propertyName: ${propertyName}`);
  console.log(`position: ${position}`);
}

class Product {
  @PropertyDecorator
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @AccessorDecorator
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Invalid price: it should be positive number');
    }
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator taxRate: number) {
    return this._price * (1 + taxRate);
  }
}
