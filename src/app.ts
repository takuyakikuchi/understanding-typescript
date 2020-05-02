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
