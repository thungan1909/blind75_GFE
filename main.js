import smallestInRotatedArray from "./solution/10_M_SmallestElementInRotatedSortedArray.js";
import kthSmallestElementInABst from "./solution/11_M_BinarySearchTreeKthSmallestElement.js";
import BSTLowestCommonAncestor from "./solution/12_M_BinarySearchTreeLowestCommonAncestor.js";
import binarySearchTreeValidate from "./solution/13_M_ValidateBinarySearchTree.js";
import binaryTreeEqual from "./solution/14_E_BinaryTreeEqual.js";
import binaryTreeFlip from "./solution/15_E_FlipBinaryTree.js";
import binaryTreeLevelOrderTraversal from "./solution/16_E_BinaryTreeLevelOrderTraversal.js";
import binaryTreeMaximumDepth from "./solution/17_E_BinaryTreeMaximumDepth.js";
import binaryTreeMaximumPathSum from "./solution/18_H_BinaryTreeMaximumTotalPath.js";
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
/* console.log(findDuplicates([5,7,1,3])); //false
console.log(findDuplicates([10,7,0,0,9])); //true
console.log(findDuplicates([3,2,6,5,0,3,10,3,10,5])); //true */


// Q3 - Find Missing Number in Sequence
/* console.log(findMissingNumberInSequence([1, 3, 0])); // 2
console.log(findMissingNumberInSequence([1])); // 0
console.log(findMissingNumberInSequence([3, 0, 4, 2, 1])); // 5 */


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

// // Q11. Binary Search Tree Kth Smallest Element
// const root = {
//   val: 7,
//   left: { val: 3, left: { val: 1, left: null, right: null }, right: { val: 5, left: null, right: null } },
//   right: { val: 10, left: { val: 8, left: null, right: null }, right: { val: 12, left: null, right: null } },
// };

// console.log(kthSmallestElementInABst(root, 2)); // 3
// console.log(kthSmallestElementInABst(root, 5)); // 8

// // Q12. Binary Search Tree Lowest Common Ancestor
// const root = {
//   val: 7,
//   left: {
//     val: 3,
//     left: { val: 1, left: null, right: null },
//     right: { val: 5, left: null, right: null },
//   },
//   right: {
//     val: 10,
//     left: { val: 8, left: null, right: null },
//     right: { val: 12, left: null, right: null },
//   },
// };

// // Example 1: LCA of 1 and 5 = 3
// const a = root.left.left;   // Node 1
// const b = root.left.right;  // Node 5
// const lca1 = BSTLowestCommonAncestor(root, a, b);
// console.log(`LCA of ${a.val} and ${b.val} is: ${lca1.val}`); // Output: 3

// // Example 2: LCA of 8 and 12 = 10
// const c = root.right.left;   // Node 8
// const d = root.right.right;  // Node 12
// const lca2 = BSTLowestCommonAncestor(root, c, d);
// console.log(`LCA of ${c.val} and ${d.val} is: ${lca2.val}`); // Output: 10

// // Example 3: LCA of 5 and 12 = 7 (the root)
// const e = root.left.right;   // Node 5
// const f = root.right.right;  // Node 12
// const lca3 = BSTLowestCommonAncestor(root, e, f);
// console.log(`LCA of ${e.val} and ${f.val} is: ${lca3.val}`); // Output: 7


//Q13. Validate Binary Search Tree
//  const root1 = {
//   val: 10,
//   left: { val: 5, left: { val: 1, left: null, right: null }, right: { val: 8, left: null, right: null } },
//   right: { val: 15, left: { val: 12, left: null, right: null }, right: { val: 20, left: null, right: null } },
// };
// console.log(binarySearchTreeValidate(root1)); // true 

// const root2 = {
//   val: 5,
//   left: { val: 1, left: null, right: null },
//   right: { val: 4, left: null, right: { val: 3, left: null, right: null } },
// };
// console.log(binarySearchTreeValidate(root2)); // false 

// const root3 = {
//   val: 3,
//   left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
//   right: { val: 4, left: null, right: { val: 5, left: null, right: null } },
// };
// console.log(binarySearchTreeValidate(root3)); // true 


// //Q14. Binary Tree Equal

// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// const a1 = new TreeNode(1, new TreeNode(2), null);
// const b1 = new TreeNode(1, null, new TreeNode(2));
// console.log("Example 1:", binaryTreeEqual(a1, b1)); // false

// // Example 2: a = [3,null,7], b = [3,5,7]
// const a2 = new TreeNode(3, null, new TreeNode(7));
// const b2 = new TreeNode(3, new TreeNode(5), new TreeNode(7));
// console.log("Example 2:", binaryTreeEqual(a2, b2)); // false

// // Example 3: a = [65,null,17], b = [65,null,17]
// const a3 = new TreeNode(65, null, new TreeNode(17));
// const b3 = new TreeNode(65, null, new TreeNode(17));
// console.log("Example 3:", binaryTreeEqual(a3, b3)); // true

// // Extra case: both null
// console.log("Both null:", binaryTreeEqual(null, null)); // true

//Q15. Flip Binary Tree
/*const root = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log("Before:", JSON.stringify(root));
console.log("After :", JSON.stringify(binaryTreeFlip(root))); */


//16. Binary Tree Level Order Traversal
/*  const root = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, left: { val: 6 }, right: { val: 7 } },
};

console.log(binaryTreeLevelOrderTraversal(root));  */


// // 17. Binary Tree Maximum Depth

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// const tree1 = new TreeNode(1,
//   new TreeNode(2),
//   new TreeNode(3)
// );


// const tree2 = new TreeNode(1,
//   null,
//   new TreeNode(2)
// );

// const tree3 = new TreeNode(1,
//   new TreeNode(2,
//     new TreeNode(4),
//     null
//   ),
//   new TreeNode(3)
// );

// console.log(binaryTreeMaximumDepth(tree1)); // 2
// console.log(binaryTreeMaximumDepth(tree2)); // 2
// console.log(binaryTreeMaximumDepth(tree3)); // 3

// Q18. Binary Tree Maximum Total Path

const root1 = new TreeNode(4, new TreeNode(3), new TreeNode(5));
console.log("Example 1 Output:", binaryTreeMaximumPathSum(root1)); // 12

// Example 2: root = [-2,1]
const root2 = new TreeNode(-2, new TreeNode(1));
console.log("Example 2 Output:", binaryTreeMaximumPathSum(root2)); // 1

// Example 3: root = [-30,8,22,null,null,17,8]
const root3 = new TreeNode(
  -30,
  new TreeNode(8),
  new TreeNode(22, new TreeNode(17), new TreeNode(8))
);
console.log("Example 3 Output:", binaryTreeMaximumPathSum(root3)); // 47