/** @format */

// Generic Function
function mergeObjects<X, Y>(objectOne: X, objectTwo: Y) {
  return Object.assign(objectOne, objectTwo);
}

const newObjectOne = mergeObjects(
  { name: 'Takuya', hobbies: ['Futsal'] },
  { age: 30 }
);
console.log(newObjectOne);
