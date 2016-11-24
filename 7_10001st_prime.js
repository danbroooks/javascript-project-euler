'use strict'

let isPrime = require('./util/isPrime')
let reverse = require('./util/reverse')
let head = require('./util/headtail').head

let primes = []
let i = 2

while (primes.length < 10001) {
  if (isPrime(i)) {
    primes.push(i)
  }

  i = i + 1
}

let result = head(reverse(primes))

let expect = 104743

module.exports = { expect, result }
