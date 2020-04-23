"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["READ_ONLY"] = "read_only";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
var person = {
    name: 'TK',
    age: 30,
    hobbies: ['soccer', 'coding'],
    role: Role.ADMIN
};
console.log(person.name, person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.role);
