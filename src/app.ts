/** @format */
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
      appDiv.querySelector('h1')!.textContent = newPerson.name;
    }
  };
}

/* ---------- Decorators ----------
 *Decorators provide a way to add both annotations and a meta-programming syntax for class *declarations and members
 */
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
