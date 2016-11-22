'use strict'

let identity = i => i

let range = (n) => [...Array(n).keys()].map(identity)

let sum = (a, b) => a + b

let result = range(1000).filter(i => i % 3 === 0 || i % 5 === 0).reduce(sum, 0)

console.log(result)

