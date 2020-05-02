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

interface LengthObj {
  length: number;
}

function countAndDescribe<T extends LengthObj>(element: T): [T, string] {
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
console.log(countAndDescribe([]));
