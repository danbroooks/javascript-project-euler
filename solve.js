'use strict'

let problems = [
  './1_multiples_of_3_and_5',
  './2_even_fibonacci_numbers',
  './3_largest_prime_factor'
]

problems.forEach((file) => {
  let _ = require(file)

  if (_.result !== _.expect) {
    throw new Error(`${file} failed, expected ${_.expect} got ${_.result}`)
  } else {
    process.stdout.write('.')
  }
})

console.log('')

