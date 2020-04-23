"use strict";
function add(input1, input2) {
    return input1 + input2;
}
var combineValues;
combineValues = add;
console.log(combineValues(1, 3));
function addAndHandle(input1, input2, cb) {
    var result = input1 + input2;
    cb(result);
}
console.log(addAndHandle(3, 3, function () { }));
