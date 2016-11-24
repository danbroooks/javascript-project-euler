'use strict'

let memoize = require('./memoize')
let divisors = require('./divisors')
let odd = require('./oddeven').odd

module.exports = memoize((n) => {
  if (n < 2) return false

  return n == 2 || (odd(n) && divisors(n).length === 0)
})
