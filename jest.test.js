const add = require('./jest')

test('add two arguments', () => {
  expect(add(1,2)).toBe(3)
})
