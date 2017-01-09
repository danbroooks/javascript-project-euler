'use strict'

const { test } = require('ava')

test('multiples of three and five', t => {
  let range = require('../util/range')
  let add = require('../util/add')
  let result = range(1000).filter(i => i % 3 === 0 || i % 5 === 0).reduce(add, 0)

  t.is(result, 233168)
})

test('even fibonacci numbers', t => {
  let add = require('../util/add')
  let fib = require('../util/fibonacci')
  let head = require('../util/headtail').head
  let even = require('../util/oddeven').even

  const FOUR_MILLION = 4000000

  let fibSeq = [fib(0)]

  while (head(fibSeq) < FOUR_MILLION) {
    fibSeq = [fib(fibSeq.length)].concat(fibSeq)
  }

  let result = fibSeq.filter(even).reduce(add, 0)

  t.is(result, 4613732)
})

test('largest prime factor', t => {
  const NUMBER = 600851475143

  let range = require('../util/range')
  let head = require('../util/headtail').head
  let reverse = require('../util/reverse')
  let primeFactors = require('../util/primeFactors')

  let result = head(reverse(primeFactors(NUMBER)))

  t.is(result, 6857)
})

test('largest palindrome product', t => {
  let isPalindrome = require('../util/isPalindrome')

  var result = 0

  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let r = i * j

      if (r > result && isPalindrome(r)) {
        result = r
      }
    }
  }

  t.is(result, 906609)
})

test('smallest multiple', t => {
  let smallestMultiple = require('../util/smallestMultiple')
  let result = smallestMultiple(20)

  t.is(result, 232792560)
})

test('sum square difference', t => {
  let sumSquares = require('../util/sumSquares')
  let squaredSum = require('../util/squaredSum')
  let sumSquareDiff = _ => squaredSum(_) - sumSquares(_)
  let result = sumSquareDiff(100)

  t.is(result, 25164150)
})

test('10001st prime', t => {
  let nthPrime = require('../util/nthPrime')
  let result = nthPrime(10001)

  t.is(result, 104743)
})

test('largest product in series', t => {
  let chunk = require('../util/chunk')

  let bigInt = `
  73167176531330624919225119674426574742355349194934
  96983520312774506326239578318016984801869478851843
  85861560789112949495459501737958331952853208805511
  12540698747158523863050715693290963295227443043557
  66896648950445244523161731856403098711121722383113
  62229893423380308135336276614282806444486645238749
  30358907296290491560440772390713810515859307960866
  70172427121883998797908792274921901699720888093776
  65727333001053367881220235421809751254540594752243
  52584907711670556013604839586446706324415722155397
  53697817977846174064955149290862569321978468622482
  83972241375657056057490261407972968652414535100474
  82166370484403199890008895243450658541227588666881
  16427171479924442928230863465674813919123162824586
  17866458359124566529476545682848912883142607690042
  24219022671055626321111109370544217506941658960408
  07198403850962455444362981230987879927244284909188
  84580156166097919133875499200524063689912560717606
  05886116467109405077541002256983155200055935729725
  71636269561882670428252483600823257530420752963450`

  let largestProductInSeries = (num) => {

    let numbers = num.split('').filter(n => [' ', '\n'].indexOf(n) === -1)

    return chunk(numbers, 13)
      .map(_ => _.reduce((a, b) => a * b, 1))
      .reduce((n, carry) => n > carry ? n : carry, 0)
  }

  t.is(largestProductInSeries(bigInt), 23514624000)
})

test('special pythagorean triplet', t => {

  let head = require('../util/headtail').head
  let product = (values) => values.reduce((x, y) => x * y, 1)
  let sqr = n => n * n
  let isTriplet = (a, b, c) => sqr(a) + sqr(b) === sqr(c)

  let solve = n => {
    let findTriplet = (a, b, c) => {
      let ts = []

      while (a > 0 && b > 0 && c > 0) {
        if ((a + b + c) === n && isTriplet(a, b, c)) ts.push([a, b, c])

        a = a - 1

        if (a <= 0) {
          a = b
          b = b - 1
        }

        if (b <= 0) {
          b = c
          c = c - 1
        }
      }

      return ts
    }

    return findTriplet(
      Math.ceil(n / 3),
      Math.ceil(n / 2),
      Math.ceil((n / 3) * 2)
    )
  }

  let result = product(head(solve(1000)))

  t.is(result, 31875000)
})

