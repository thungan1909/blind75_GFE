/**
 * @param {number[]} numbers
 * @return {number}
 */

//Solution 1: Easy but not optimal (O(n²))
// export default function maxSumSubArray(numbers) {
//   let max = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     let sum = 0;
//     for (let j = i; j < numbers.length; j++) {
//       sum = sum + numbers[j];
//       if (sum > max) max = sum;
//     }
//   }
//   return max;
// }


//Solution 2: Optimal  (O(n))
/**
 * @param {number[]} numbers
 * @return {number}
 */

export default function maxSumSubArray(numbers) {
  let currentSum = numbers[0];
  let maxSoFar = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    currentSum = Math.max(numbers[i], numbers[i] + currentSum);
    maxSoFar = Math.max(maxSoFar, currentSum);
  }
  return maxSoFar;
}
