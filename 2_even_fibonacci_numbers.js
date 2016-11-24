'use strict'

let add = require('./util/add')
let fib = require('./util/fibonacci')
let head = require('./util/headtail').head
let even = require('./util/oddeven').even

const FOUR_MILLION = 4000000

let fibSeq = [fib(0)]

while (head(fibSeq) < FOUR_MILLION) {
  fibSeq = [fib(fibSeq.length)].concat(fibSeq)
}

let result = fibSeq.filter(even).reduce(add, 0)

let expect = 4613732

module.exports = { expect, result }

