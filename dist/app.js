"use strict";
/** @format */
// Generic Function
function mergeObjects(objectOne, objectTwo) {
    return Object.assign(objectOne, objectTwo);
}
const newObjectOne = mergeObjects({ name: 'Takuya', hobbies: ['Futsal'] }, { age: 30 });
console.log(newObjectOne);
//# sourceMappingURL=app.js.map