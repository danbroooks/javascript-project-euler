'use strict'

let head = require('./util/headtail').head

let product = (values) => values.reduce((x, y) => x * y, 1)

let sqr = n => n * n

let isTriplet = (a, b, c) => sqr(a) + sqr(b) === sqr(c)

let solve = n => {
  let findTriplet = (a, b, c) => {
    let ts = []

    while (a > 0 && b > 0 && c > 0) {
      if ((a + b + c) === n && isTriplet(a, b, c)) ts.push([a, b, c])

      a = a - 1

      if (a <= 0) {
        a = b
        b = b - 1
      }

      if (b <= 0) {
        b = c
        c = c - 1
      }
    }

    return ts
  }

  return findTriplet(
    Math.ceil(n / 3),
    Math.ceil(n / 2),
    Math.ceil((n / 3) * 2)
  )
}

let result = product(head(solve(1000)))

let expect = 31875000

module.exports = { result, expect }
