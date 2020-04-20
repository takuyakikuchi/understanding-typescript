const person = {
  name: 'TK',
  age: 30,
  hobbies: ['soccer', 'coding']
}

console.log(person.name, person.age)
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}