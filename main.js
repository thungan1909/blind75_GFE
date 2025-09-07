import isBalancedBrackets from "./solution/1_E_BalancedBrackets.js";
import findDuplicates from "./solution/2_E_FindDuplicatesinArray.js";
import findMissingNumberInSequence from "./solution/3_E_FindMissingNumberinSequence.js";
import maxProductSubArray from "./solution/4_M_MaximumProductinContiguousArray.js";



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
console.log(maxProductSubArray( [1,2,-3,5,1])) //5
console.log(maxProductSubArray([9])) //9
console.log(maxProductSubArray([1,2,0,-1,8,-4])) //32