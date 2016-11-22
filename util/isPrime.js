'use strict'

let memoize = require('./memoize')

module.exports = memoize((n) => {
  if (n < 2) return false

  var d = n - 1
  while (d > 1) {
    if (n % d === 0) {
      return false
    }
    d = d - 1
  }

  return true
})
