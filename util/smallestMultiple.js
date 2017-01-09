'use strict'

let range = require('./range')
let isPrime = require('./isPrime')
let memoize = require('./memoize')

let smallestMultiple = memoize(power => {
  if (power < 2) {
    return 1
  }

  let numbers = range(power).map(n => n + 1)
  let inc = numbers.filter(isPrime).reduce((a, b) => a * b)
  let i = Math.floor(smallestMultiple(power - 1) / inc) * inc
  let smallest = undefined

  while (!smallest) {
    let multiple = numbers.reduce((carry, num) => {
      if (carry) {
        return i % num === 0
      }

      return carry
    }, true)

    if (multiple) {
      smallest = i
    }

    i = i + inc
  }

  return smallest
})

module.exports = smallestMultiple
