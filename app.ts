function add(input1: number, input2: number) {
  return input1 + input2
}

let combineValues: (a: number, b: number) => number

combineValues = add
console.log(combineValues(1, 2))
