"use strict";
/** @format */
// ---- Generic Function with Constraints -------
function mergeObjects(objectOne, objectTwo) {
    return Object.assign(objectOne, objectTwo);
}
const newObjectOne = mergeObjects({ name: 'Takuya', hobbies: ['Futsal'] }, { age: 30 });
function countAndDescribe(element) {
    let description = 'There is not element passed';
    if (element.length === 1) {
        description = 'There is 1 element';
    }
    else if (element.length > 1) {
        description = `There are ${element.length} elements`;
    }
    return [element, description];
}
// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['one', 'two']));
console.log(countAndDescribe([]));
//# sourceMappingURL=app.js.map