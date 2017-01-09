'use strict'

let add = require('./add')
let range = require('./range')

module.exports = (power) => {
  return range(power)
    .map(n => n + 1)
    .map(n => n * n)
    .reduce(add, 0)
}
