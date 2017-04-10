'use strict'

let range = require('./range')
let isPrime = require('./isPrime')
let memoize = require('./memoize')

let smallestMultiple = memoize(upto => {
  if (upto < 2) {
    return 1
  }

  let numbers = range(upto).map(n => n + 1)
  let inc = numbers.filter(isPrime).reduce((a, b) => a * b)
  let i = Math.floor(smallestMultiple(upto - 1) / inc) * inc
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
