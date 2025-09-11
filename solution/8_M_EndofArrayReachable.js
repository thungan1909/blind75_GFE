/**
 * @param {number[]} numbers
 * @return {boolean}
 */

// export default function arrayReachableEnd(numbers) {
//   let i = 0;
//   while (i < numbers.length) {
//     let availableStep = numbers[i];
//     if (availableStep + i >= numbers.length - 1) return true;

//     let max = 0;
//     let nextStep = i;

//     for (let j = i + 1; j <= availableStep + i; j++) {
//       let distance = numbers[j] + (j - i);
//       if (distance > max) {
//         max = distance;
//         nextStep = j;
//       }
//     }
//     if (nextStep === i) return false;
//     i = nextStep;
//   }
//   return false;
// }


//SOLUTION 2: O(n)
/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function arrayReachableEnd(numbers) {
  let maxReach = 0;

  for (let i = 0; i < numbers.length; i++) {
    // If current index is beyond our reach → stuc, ex numbers = [3,2,1,0,4] will stuck when i=3, number[i] = 0, maxReach stays 3 => i = 4 > maxReach = 3 => false
    if (i > maxReach) return false;

    // Update the farthest we can reach
    maxReach = Math.max(maxReach, numbers[i] + i);

    // If we can reach or pass the last index → success
    if (maxReach >= numbers.length - 1) return true;
  }
  return false;
}
