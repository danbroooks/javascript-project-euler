'use strict'

let product = (values) => values.reduce((x, y) => x * y, 1)

let sqr = n => n * n

let isTriplet = (a, b, c) => sqr(a) + sqr(b) === sqr(c)

let findTriplet = (a, b, c) => {

  while (a < b < c) {
    if (isTriplet(a, b, c) && (a + b + c) === 1000) return [a, b, c]

    a = a + 1

    if (a >= b) {
      b = b + 1
      a = 1
    }

    if (b >= c) {
      c = c + 1
      b = 1
    }
  }
}

let t = findTriplet(1, 2, 3)

let result = product(t)

let expect = 31875000

module.exports = { result, expect }
