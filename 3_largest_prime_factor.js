'use strict'

const NUMBER = 600851475143

let range = require('./util/range')
let head = require('./util/headtail').head
let reverse = require('./util/reverse')
let primeFactors = require('./util/primeFactors')

let result = head(reverse(primeFactors(NUMBER)))

let expect = 6857

module.exports = { result, expect }
