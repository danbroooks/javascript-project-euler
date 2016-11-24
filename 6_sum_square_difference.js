'use strict'

let add = require('./util/add')
let range = require('./util/range')

let sumSquares = (power) => {
  return range(power)
    .map(n => n + 1)
    .map(n => n * n)
    .reduce(add, 0)
}

let squaredSum = (power) => {
  let sum = range(power)
    .map(n => n + 1)
    .reduce(add, 0)

  return sum * sum
}

let sumSquareDiff = (p) => squaredSum(p) - sumSquares(p)

let result = sumSquareDiff(100)

let expect = 25164150

module.exports = { expect, result }
