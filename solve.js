'use strict'

let range = require('./util/range')

let opt = process.argv[2]

let problems = [
  './1_multiples_of_3_and_5',
  './2_even_fibonacci_numbers',
  './3_largest_prime_factor',
  './4_largest_palindrome_product',
  './5_smallest_multiple',
  './6_sum_square_difference',
  './7_10001st_prime',
  './8_largest_product_in_series',
  './9_special_pythagorean_triplet'
]

if (opt) {
  problems = problems.filter((file, i) => '' + (i + 1) === opt)
}

let pad = (problem) => {
  let amount = problems.reduce((carry, f) => Math.max(carry, f.length), 0) - problem.length
  return problem + range(amount + 2).map(_ => ' ').join('')
}

let elapsed = (hrtime) => {
  let t = process.hrtime(hrtime)
  let s = t[0]
  let ms = t[1]
  if (s > 0) {
    s = (s + (ms / 100000000)).toFixed(1)
    return s + 's'
  } else {
    ms = (ms / 1000000).toFixed(0)
    return ms + 'ms'
  }
}

let times = problems.map((file, i) => {
  let start = process.hrtime()
  let _ = require(file)
  let time = elapsed(start)

  if (_.result !== _.expect) {
    throw new Error(`${file} failed, expected ${_.expect} got ${_.result}`)
  } else {
    process.stdout.write('.')
  }

  return pad(file) + time
})

console.log(`\n\n${times.join('\n')}`)
