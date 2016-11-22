'use strict'

let range = require('./util/range')
let add = require('./util/add')

let result = range(1000).filter(i => i % 3 === 0 || i % 5 === 0).reduce(add, 0)

let expect = 233168

module.exports = { result, expect }

