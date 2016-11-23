'use strict'

let reverse = require('./reverse')

let splitNum = n => (n + '').split('').map(i => i / 1)

module.exports = n => {
  let split = splitNum(n)
  return split.join('') == reverse(split).join('')
}
