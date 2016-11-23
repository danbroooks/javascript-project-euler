'use strict'

let range = require('./util/range')
let memoize = require('./util/memoize')

let increment = i => i + 1

let smallestMultiple = memoize((power) => {
  if (power == 1) {
    return power
  }

  let numbers = range(power).map(increment)

  let i = smallestMultiple(power - 1)

  let smallest = undefined

  while (!smallest) {

    if (i % power === 0) {

      // console.log(i)

      let multiple = numbers.reduce((carry, num) => {
        if (carry) {
          return i % num === 0
        }

        return carry
      }, true)

      if (multiple) {
        // console.log(`${n}: ${multiple}`)
        smallest = i
      }
    }

    i = i + 1
  }

  return smallest
})

let result = smallestMultiple(20)

let expect = 232792560

module.exports = { expect, result }

