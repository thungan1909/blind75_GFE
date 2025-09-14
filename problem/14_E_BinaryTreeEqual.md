# [🌳 Binary Tree Equal](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-tree-equal) 🧩

---

**Difficulty:** 🟢 Easy  

---

## Problem Statement
Given the root nodes of two **binary trees** `a` and `b`, determine whether the two trees are **equal**.  

Two binary trees are considered equal if:  
1. They have the same **structure**.  
2. The corresponding nodes in both trees have the same **values**.  

The binary tree is represented by a collection of `TreeNode`s, where each node has optional left and right child nodes.

---

## Input
- **a:** `TreeNode` → Root node of the first tree. (Examples use level-order traversal of the tree)  
- **b:** `TreeNode` → Root node of the second tree. (Examples use level-order traversal of the tree)  

### TreeNode interface
```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

## Examples
- Example 1:
Input: a = [1,2], b = [1,null,2]
Output: false
Explanation: The trees differ in structure.

- Example 2:
Input: a = [3,null,7], b = [3,5,7]
Output: false
Explanation: The first tree has a null left child, while the second tree has a left child with value 5.

- Example 3:
Input: a = [65,null,17], b = [65,null,17]
Output: true
Explanation: Both trees have the same structure and node values.

## Constraints
- 0 <= Number of nodes <= 100
- -10,000 <= TreeNode.val <= 10,000