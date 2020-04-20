var person = {
    name: 'TK',
    age: 30,
    hobbies: ['soccer', 'coding']
};
console.log(person.name, person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
