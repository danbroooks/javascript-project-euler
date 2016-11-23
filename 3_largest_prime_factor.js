'use strict'

const NUMBER = 600851475143

let range = require('./util/range')
let isPrime = require('./util/isPrime')
let head = require('./util/headtail').head
let reverse = require('./util/reverse')

let divisors = (of) => {
  let d = []
  let i = 2
  while (i < of / i) {
    if (of % i === 0) d.push(i)
    i = i + 1
  }
  return d
}

let primeFactors = divisors(NUMBER).filter(isPrime)

let result = head(reverse(primeFactors))

let expect = 6857

module.exports = { result, expect }
