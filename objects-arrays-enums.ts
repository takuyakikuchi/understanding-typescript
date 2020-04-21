enum Role {ADMIN = 'admin', READ_ONLY = 'read_only', AUTHOR = 'author'}

const person = {
  name: 'TK',
  age: 30,
  hobbies: ['soccer', 'coding'],
  role: Role.ADMIN
}

console.log(person.name, person.age)
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
console.log(person.role)