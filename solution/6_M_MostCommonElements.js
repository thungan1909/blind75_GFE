/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */

//Solution 1: O(n × k) complexity
// export default function mostCommonElements(numbers, k) {
//   const map = new Map();

//   // for (let i = 0; i < numbers.length; i++) {
//   //   if (map.has(numbers[i])) {
//   //     const count = map.get(numbers[i]);
//   //     map.set(numbers[i], count + 1);
//   //   } else {
//   //     map.set(numbers[i], 1);
//   //   }
//   // }


// // We could use a traditional for loop as above, 
// // but using for..of makes the code shorter, clearer, 
// // and directly iterates over the values of the array.

//   for (let num of numbers) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   let result = [];
//   for (let i = 0; i < k; i++) {
//     let objMax = { key: null, value: 0 };

//     map.forEach((value, key) => {
//       if (value > objMax.value) {
//         objMax = { key, value };
//       }
//     });
//     result.push(objMax.key);
//     map.delete(objMax.key);
//   }
//   return result;
// }

//Solution 2: O(n + m log m) better than O(n × k) when k is large.

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
  const map = new Map();

  for (let num of numbers) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(([num]) => num);
}
