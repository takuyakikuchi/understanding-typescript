/** @format */

// ---- Generic Function with Constraints -------
function mergeObjects<X extends object, Y extends object>(
  objectOne: X,
  objectTwo: Y
) {
  return Object.assign(objectOne, objectTwo);
}

const newObjectOne = mergeObjects(
  { name: 'Takuya', hobbies: ['Futsal'] },
  { age: 30 }
);
// console.log(newObjectOne);

interface LengthProp {
  length: number;
}

function countAndDescribe<T extends LengthProp>(element: T): [T, string] {
  let description = 'There is not element passed';
  if (element.length === 1) {
    description = 'There is 1 element';
  } else if (element.length > 1) {
    description = `There are ${element.length} elements`;
  }
  return [element, description];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['one', 'two']));
// console.log(countAndDescribe([]));

// ------- keyof constraints ---------
function extractWithKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// console.log(extractWithKey({ japan: 'Japanese' }, 'japan'));
// console.log(extractWithKey({ japan: 'Japanese' }, 'us')); // Error

// --------- Generic Class -----------
class DataStorage<T> {
  data: T[] = [];

  addData(element: T) {
    this.data.push(element);
  }

  removeData(element: T) {
    this.data.splice(this.data.indexOf(element), 1);
  }

  getData() {
    return [...this.data];
  }
}

// String test
// const stringData = new DataStorage<string>();
// stringData.addData('Takuya');
// stringData.addData('Fumiko');
// console.log(`Before remove ${stringData.getData()}`);
// stringData.removeData('Fumiko');
// console.log(`After remove ${stringData.getData()}`);

// Number test
// const numberData = new DataStorage<number>();
// numberData.addData(1);
// numberData.addData(2);
// console.log(`Before remove ${numberData.getData()}`);
// numberData.removeData(1);
// console.log(`After remove ${numberData.getData()}`);
