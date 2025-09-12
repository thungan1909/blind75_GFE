# [✨ Binary Search Tree Kth Smallest Element](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-search-tree-kth-smallest) 🧩

---

**Difficulty:** 🟡 Medium  

---

## Problem Statement
Given the root node of a **binary search tree (BST)** and an integer `k`, return the **k-th smallest value** in the BST.  
The smallest value in the tree corresponds to `k = 1`.

The binary tree is represented by a collection of `TreeNode`s, where each node has optional left and right child nodes.

---

## Input
- **root:** `TreeNode` → Root node of the tree (examples display a level-order traversal of the tree)  
- **k:** `number` → A positive integer  

---

## Notes
- The tree is a valid **binary search tree**.  
- The smallest element has `k = 1`.  
- The number of nodes is guaranteed to be ≥ `k`.  

---

## Examples

```text
Example 1:
Input: root = [7,3,10,1,5,8,12], k = 2
Output: 3
Explanation: In this BST, the second smallest value is 3.

Example 2:
Input: root = [1,null,2,null,3,null,4,null,5], k = 4
Output: 4
Explanation: In this right-skewed BST, the fourth smallest value is 4.

Example 3:
Input: root = [8,6,10,5,7,9,12], k = 5
Output: 9
Explanation: In this BST, the fifth smallest value is 9.
```

##  Constraints:
- 1 <= k <= Number of nodes <= 1000
-1 <= TreeNode.val <= 1,000,000