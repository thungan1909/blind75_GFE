import isBalancedBrackets from "./solution/1_BalancedBrackets.js";
import findDuplicates from "./solution/2_FindDuplicatesinArray.js";


// Q1 - Balanced Brackets
/* console.log(isBalancedBrackets("()"));     // true
 console.log(isBalancedBrackets("([])"));   // true
 console.log(isBalancedBrackets("([)]"));   // false
 console.log(isBalancedBrackets("{[(])}")); // false  */


//Q2 - Find Duplicates in Array
console.log(findDuplicates([5,7,1,3])); //false
console.log(findDuplicates([10,7,0,0,9])); //true
console.log(findDuplicates([3,2,6,5,0,3,10,3,10,5])); //true