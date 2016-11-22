'use strict'

let identity = require('./identity')

module.exports = (n) => [...Array(n).keys()].map(identity)

