
let isPrime = require('./isPrime')
let memoize = require('./memoize')
let odd = require('./oddeven').odd

let chunk = 500 // javascript stack size limit

let max = 2

let nthPrime = memoize((n) => {
  if (n == 1 || n == 2) {
    return n + 1
  }

  // chunk heating up the memoize cache, due to tail call limitations
  if (n > max + chunk) {
    max = max + chunk
    nthPrime(max)
  }

  let last = nthPrime(n - 1)
  let i = last + (odd(last) ? 2 : 1)

  while (i) {
    if (isPrime(i)) {
      max = n
      return i
    }

    i = i + 2
  }
})

module.exports = nthPrime
