/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */

//SOLUTION: Using binary search
export default function findInRotatedArray(numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) return mid;

    //Check if left sorted
    if (numbers[left] <= numbers[mid]) {
      if (numbers[left] <= target && target < numbers[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    //Else right must sorted
    else {
      if (numbers[mid] < target && target <= numbers[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
