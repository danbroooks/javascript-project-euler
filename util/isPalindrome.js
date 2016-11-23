'use strict'

let reverse = require('./reverse')
let memoize = require('./memoize')

let splitNum = n => (n + '').split('').map(i => i / 1)

module.exports = memoize(n => {
  let split = splitNum(n)
  return split.join('') == reverse(split).join('')
})
