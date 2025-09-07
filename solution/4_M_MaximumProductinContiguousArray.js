// /**
//  * @param {number[]} numbers
//  * @return {number}
//  */
// export default function maxProductSubArray(numbers) {
  
//   let max = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let product = 1;
//     for (let j = i; j < numbers.length; j++) {
//       product = product * numbers[j];

//       if (product > max) max = product;
//     }
//   }

//   return max;
// }

//Solution 2: Optimal  (O(n))
/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers) {
  let maxProd = numbers[0];
  let minProd = numbers[0];
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    maxProd = Math.max(numbers[i], numbers[i] * maxProd);
    minProd = Math.min(numbers[i], numbers[i] * minProd);

    result = Math.max(maxProd, result);
  }
  return result;
}

