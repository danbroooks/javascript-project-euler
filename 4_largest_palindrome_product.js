'use strict'

let isPalindrome = require('./util/isPalindrome')

var largest = 0

for (let i = 999; i > 99; i--) {
  for (let j = 999; j > 99; j--) {
    let r = i * j

    if (r > largest && isPalindrome(r)) {
      largest = r
    }
  }
}

let result = largest
let expect = 906609

module.exports = { expect, result }

