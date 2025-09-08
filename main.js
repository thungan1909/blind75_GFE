import isBalancedBrackets from "./solution/1_E_BalancedBrackets.js";
import findDuplicates from "./solution/2_E_FindDuplicatesinArray.js";
import findMissingNumberInSequence from "./solution/3_E_FindMissingNumberinSequence.js";
import maxProductSubArray from "./solution/4_M_MaximumProductinContiguousArray.js";
import maxSumSubArray from "./solution/5_M_MaximumSuminContiguousArray.js";
import mostCommonElements from "./solution/6_M_MostCommonElements.js";



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

//Q6. Most Common Elements
console.log(mostCommonElements([4,4,4,6,6,5,5,5], 2)); // [4, 5]
console.log(mostCommonElements([7,7,7,8,8,9,9,9], 3)); // [7, 9, 8]
console.log(mostCommonElements([10,10,10,10,10], 1)); // [10]