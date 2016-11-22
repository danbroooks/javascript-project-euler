'use strict'

let memoize = require('./memoize')

let fib = memoize((n) => {
  if (n < 2) return 1

  return fib(n - 1) + fib(n - 2)
})

module.exports = fib
