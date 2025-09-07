/**
 * @param {number[]} numbers
 * @return {number}
 */

//Solution 1: Easy but not optimal (O(n²))
// export default function findMissingNumberInSequence(numbers) {
//   const arraySize = numbers.length;

//   let expectedArr = [];
//   for (let i = 0; i <= arraySize; i++) {
//     expectedArr.push(i);
//   }

//   for (let i = 0; i < expectedArr.length; i++) {
//     if (!numbers.includes(expectedArr[i])) return expectedArr[i];
//   }
// }

//Solution 2: Optimal using Sum formula (O(n))
/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  const length = numbers.length;

  let actualSum = 0;
  let expectedSum = 0;

  for (let i = 0; i < length; i++) {
    actualSum += numbers[i];
  }

  for (let i = 1; i <= length; i++) {
    expectedSum += i;
  }

  return expectedSum - actualSum;
}
