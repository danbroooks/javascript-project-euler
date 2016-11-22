'use strict'

module.exports = (fn) => {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)

    if (cache.hasOwnProperty(key)) return cache[key]

    return cache[key] = fn.apply(this, arguments)
  }
}

