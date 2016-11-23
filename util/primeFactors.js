'use strict'

let isPrime = require('./isPrime')
let memoize = require('./memoize')
let divisors = require('./divisors')

module.exports = memoize((n) => divisors(n).filter(isPrime))
