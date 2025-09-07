/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers) {
  
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    let product = 1;
    for (let j = i; j < numbers.length; j++) {
      product = product * numbers[j];

      if (product > max) max = product;
    }
  }

  return max;
}