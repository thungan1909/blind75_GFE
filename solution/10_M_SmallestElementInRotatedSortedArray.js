/**
 * @param {number[]} numbers
 * @return {number}
 */
//Using binary search
export default function smallestInRotatedArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If mid element is greater than the rightmost, min is in the right half
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return numbers[left];
}
