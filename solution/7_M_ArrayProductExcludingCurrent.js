/**
 * @param {number[]} numbers
 * @return {number[]}
 */

//O(n²) works but isn’t optimal
export default function arrayProductExcludingCurrent(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let product = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        product = product * numbers[j];
      }
    }
    result.push(product);
  }
  return result;
}
