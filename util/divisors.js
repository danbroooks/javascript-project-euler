'use strict'

let memoize = require('./memoize')
let reverse = require('./reverse')
let uniq = require('./uniq')

module.exports = memoize((of) => {
  let d = []
  let i = 2
  while (i <= (of / i)) {
    if (of % i === 0) d.push(i)
    i = i + 1
  }

  return uniq(d.concat(reverse(d).map(n => of / n)))
})
