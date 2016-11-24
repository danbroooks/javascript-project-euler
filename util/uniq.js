'use strict'

module.exports = (arr) => {
  return arr.filter((value, i, _) => _.indexOf(value) === i)
}
