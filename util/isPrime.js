'use strict'

let memoize = require('./memoize')
let divisors = require('./divisors')

module.exports = memoize((n) => {
  if (n < 2) return false

  return divisors(n).length === 0
})
