import smallestInRotatedArray from "./solution/10_M_SmallestElementInRotatedSortedArray.js";
import kthSmallestElementInABst from "./solution/11_M_BinarySearchTreeKthSmallestElement.js";
import isBalancedBrackets from "./solution/1_E_BalancedBrackets.js";
import findDuplicates from "./solution/2_E_FindDuplicatesinArray.js";
import findMissingNumberInSequence from "./solution/3_E_FindMissingNumberinSequence.js";
import maxProductSubArray from "./solution/4_M_MaximumProductinContiguousArray.js";
import maxSumSubArray from "./solution/5_M_MaximumSuminContiguousArray.js";
import mostCommonElements from "./solution/6_M_MostCommonElements.js";
import arrayProductExcludingCurrent from "./solution/7_M_ArrayProductExcludingCurrent.js";
import arrayReachableEnd from "./solution/8_M_EndofArrayReachable.js";
import findInRotatedArray from "./solution/9_M_FindElementinRotatedArray.js";



// Q1 - Balanced Brackets
/* console.log(isBalancedBrackets("()"));     // true
 console.log(isBalancedBrackets("([])"));   // true
 console.log(isBalancedBrackets("([)]"));   // false
 console.log(isBalancedBrackets("{[(])}")); // false  */


//Q2 - Find Duplicates in Array
// console.log(findDuplicates([5,7,1,3])); //false
// console.log(findDuplicates([10,7,0,0,9])); //true
// console.log(findDuplicates([3,2,6,5,0,3,10,3,10,5])); //true


// Q3 - Find Missing Number in Sequence
// console.log(findMissingNumberInSequence([1, 3, 0])); // 2
// console.log(findMissingNumberInSequence([1])); // 0
// console.log(findMissingNumberInSequence([3, 0, 4, 2, 1])); // 5


// Q4. Maximum Product in Contiguous Array
// console.log(maxProductSubArray( [1,2,-3,5,1])) //5
// console.log(maxProductSubArray([9])) //9
// console.log(maxProductSubArray([1,2,0,-1,8,-4])) //32

// Q5. Maximum Sum in Contiguous Array
// console.log(maxSumSubArray([-1,5,-3,9,-11])); //11
// console.log(maxSumSubArray([9])); //9
// console.log(maxSumSubArray([1,2,0,-1,8,-4])); //10

// //Q6. Most Common Elements
// console.log(mostCommonElements([4,4,4,6,6,5,5,5], 2)); // [4, 5]
// console.log(mostCommonElements([7,7,7,8,8,9,9,9], 3)); // [7, 9, 8]
// console.log(mostCommonElements([10,10,10,10,10], 1)); // [10]

// // Q7. Array Product Excluding Current
// console.log(arrayProductExcludingCurrent([1,2,3])); //6,3,2]
// console.log(arrayProductExcludingCurrent([2,0,3])); //[0,6,0]
// console.log(arrayProductExcludingCurrent([0,0,-1,1])); // [0,0,0,0]

// // Q8. End of Array Reachable
// console.log(arrayReachableEnd([4, 1, 0, 0, 2, 3])); // true
// console.log(arrayReachableEnd([1, 0, 0, 0]));       // false
// console.log(arrayReachableEnd([2, 3, 1, 1, 4]));    // true
// console.log(arrayReachableEnd([3, 2, 1, 0, 4]));    // false
// console.log(arrayReachableEnd([0]));                // true (already at last index)

// //Q9. Find Element in Rotated Array
// console.log(findInRotatedArray([0,1,2,3,4],2)); // 2
// console.log(findInRotatedArray([2,3,4,0,1],0)) //3
// console.log(findInRotatedArray([4],2)) //-1

//Q10. Smallest element in rotated sorted array
// console.log(smallestInRotatedArray([1, 2, 3, 4]));  1
// console.log(smallestInRotatedArray([3, 4, 1, 2])); 1
// console.log(smallestInRotatedArray([6, 7, 8, -5, -4, 2])); -5

// Q11. Binary Search Tree Kth Smallest Element
const root = {
  val: 7,
  left: { val: 3, left: { val: 1, left: null, right: null }, right: { val: 5, left: null, right: null } },
  right: { val: 10, left: { val: 8, left: null, right: null }, right: { val: 12, left: null, right: null } },
};

console.log(kthSmallestElementInABst(root, 2)); // 3
console.log(kthSmallestElementInABst(root, 5)); // 8