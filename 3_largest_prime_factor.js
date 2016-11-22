'use strict'

const NUMBER = 600851475143

let range = require('./util/range')
let isPrime = require('./util/isPrime')

let largestPrimeFactor = (n) => {
  let i = 2
  var current

  while (i < NUMBER / i) {
    if (NUMBER % i === 0 && isPrime(i)) {
      current = i
    }

    i = i + 1
  }

  return current
}

let result = largestPrimeFactor(NUMBER)

let expect = 6857

module.exports = { result, expect }
