# 🌳 Binary Tree Maximum Depth  

**Difficulty:** 🟢 Easy  

---

## Problem Statement


Given the root of a binary tree, determine the depth of the tree, which is defined as the number of nodes along the longest path from the root to the most distant leaf node.

The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

A TreeNode has the following interface:

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

```
## Input
root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree

## Examples
```ts
- Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: 3
Explanation: The tree has a maximum depth of 3. The longest path from root (1) to leaves (4, 5, 6, or 7) is of length 3.

- Example 2:
Input: root = [1,null,2]
Output: 2
Explanation: The tree has a maximum depth of 2. The longest path from root (1) to leaf (2) is of length 2.

- Example 3:
Input: root = [10,5,15,null,null,12,20]
Output: 3
Explanation: The tree has a maximum depth of 3. The longest path from root (10) to leaves (12 or 20) is of length 3.
```

## Constraints
- 1 <= Number of nodes <= 10,000
- -100 <= TreeNode.val <= 100