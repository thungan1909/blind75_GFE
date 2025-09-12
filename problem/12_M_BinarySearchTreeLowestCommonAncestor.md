# [✨ Binary Search Tree Lowest Common Ancestor](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/bst-lowest-common-ancestor) 🧩

---

**Difficulty:** 🟡 Medium  

---

## Problem Statement
Given the root of a **Binary Search Tree (BST)** and two nodes `a` and `b`, return the **lowest common ancestor (LCA)** of these nodes.  

The LCA is the lowest node in the tree that has both nodes as descendants. A node can be a descendant of itself.

The binary tree is represented by a collection of `TreeNode`s, where each node has optional left and right child nodes.

---

## Input
- **root:** `TreeNode` → Root node of the BST (examples display a level-order traversal of the tree)  
- **a:** `TreeNode` → The first node  
- **b:** `TreeNode` → The second node  

---

## Output
- A `TreeNode` object representing the **LCA** of nodes `a` and `b`.

---

## Examples

```text
Example 1:
Input: root = [3,1,7,null,2,6,10], a = 7, b = 6
Output: 7
Explanation: The LCA of nodes 7 and 6 is 7 because 7 is the ancestor of 6.

Example 2:
Input: root = [5,3,8,2,4,7,9], a = 3, b = 9
Output: 5
Explanation: The LCA of nodes 3 and 9 is 5, which is the root of the tree.

Example 3:
Input: root = [7,3,10,2,5,8,12], a = 8, b = 12
Output: 10
Explanation: The LCA of nodes 8 and 12 is 10, which is the parent of both nodes.
```

## Constraints

-  1 <= Number of nodes <= 1000
- 1 <= TreeNode.val <= 1,000,000
- a and b are guaranteed to exist in the BST
- All TreeNode.val are unique