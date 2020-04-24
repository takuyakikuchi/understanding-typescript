"use strict";
function add(input1, input2) {
    return input1 + input2;
}
let combineValues;
combineValues = add;
console.log(combineValues(1, 3));
function addAndHandle(input1, input2, cb) {
    const result = input1 + input2;
    cb(result);
}
console.log(addAndHandle(3, 3, () => { }));
//# sourceMappingURL=app.js.map