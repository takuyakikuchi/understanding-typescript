function add(input1: number, input2: number) {
  return input1 + input2
}

let combineValues: (a: number, b: number) => number

combineValues = add
console.log(combineValues(1, 3))

function addAndHandle(input1: number, input2: number, cb: (num: number) => void) {
  const result = input1 + input2
  cb(result)
}

console.log(addAndHandle(3, 3, () => { }))