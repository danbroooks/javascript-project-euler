
module.exports = (arr, n) => {
  let chunked = []
  for (let i = 0; i + n <= arr.length; i++) {
    chunked.push(arr.slice(i, i + n))
  }
  return chunked
}
