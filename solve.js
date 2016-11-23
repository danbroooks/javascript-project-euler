'use strict'

let opt = process.argv[2]

let problems = [
  './1_multiples_of_3_and_5',
  './2_even_fibonacci_numbers',
  './3_largest_prime_factor',
  './4_largest_palindrome_product',
  './5_smallest_multiple',
]

if (opt) {
  problems = problems.filter((file, i) => '' + (i + 1) === opt)
}

problems.forEach((file, i) => {
  let _ = require(file)

  if (_.result !== _.expect) {
    throw new Error(`${file} failed, expected ${_.expect} got ${_.result}`)
  } else {
    process.stdout.write('.')
  }
})

console.log('')

