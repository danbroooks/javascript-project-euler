'use strict'

let memoize = require('./util/memoize')
let add = require('./util/add')

const FOUR_MILLION = 4000000

let fib = memoize((n) => {
  if (n < 2) return 1

  return fib(n - 1) + fib(n - 2)
})

let even = n => n % 2 === 0

let head = arr => arr[0]

let fibSeq = [fib(0)]

while (head(fibSeq) < FOUR_MILLION) {
  fibSeq = [fib(fibSeq.length)].concat(fibSeq)
}

let result = fibSeq.filter(even).reduce(add, 0)

let expect = 4613732

module.exports = { expect, result }

