import isBalancedBrackets from "./solution/1_BalancedBrackets.js";

// Q1 - Balanced Brackets

console.log(isBalancedBrackets("()"));     // true
console.log(isBalancedBrackets("([])"));   // true
console.log(isBalancedBrackets("([)]"));   // false
console.log(isBalancedBrackets("{[(])}")); // false