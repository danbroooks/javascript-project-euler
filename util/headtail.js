'use strict'

let head = arr => arr[0]

let tail = arr => {
  let t = arr.slice(1)
  return t.length ? t : undefined
}

module.exports = { head, tail }
