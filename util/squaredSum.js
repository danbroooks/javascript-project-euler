'use strict'

let add = require('./add')
let range = require('./range')

module.exports = (power) => {
  let sum = range(power)
    .map(n => n + 1)
    .reduce(add, 0)

  return sum * sum
}
