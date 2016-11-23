'use strict'

let range = require('./util/range')
let isPrime = require('./util/isPrime')
let memoize = require('./util/memoize')

let smallestMultiple = memoize((power) => {
  if (power < 2) {
    return 1
  }

  let i = Math.floor(smallestMultiple(power - 1) / power) * power
  let numbers = range(power).map(n => n + 1)
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

    i = i + power
  }

  return smallest
})

let result = smallestMultiple(20)

let expect = 232792560

module.exports = { expect, result }

