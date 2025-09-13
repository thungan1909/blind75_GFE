# [✨ Validate Binary Search Tree](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/validate-bst) 🧩

---

**Difficulty:** 🟡 Medium  

---

## Problem Statement
Given the root of a **binary tree**, determine whether it is a **valid binary search tree (BST)**.  

For a tree to be a valid BST, it must satisfy the following conditions:  
1. The left subtree of a node only contains nodes with values **less than** the node’s value.  
2. The right subtree of a node only contains nodes with values **greater than** the node’s value.  
3. Both the left and right subtrees are also valid BSTs.  

The binary tree is represented by a collection of `TreeNode`s, where each node has optional left and right child nodes.

---

## Input
- **root:** `TreeNode` → Root node of the binary tree. (Examples use level-order traversal of the tree)

### TreeNode interface
```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

```t
## Examples

```text

- Example 1:
Input: root = [10,5,15,1,8,12,20]
Output: true
Explanation: The tree is a valid BST because all nodes follow the BST properties.

- Example 2:
Input: root = [5,1,4,null,null,null,3]
Output: false
Explanation: The tree is not a valid BST because the node with value 3 is in the right subtree of the node with value 4, which violates the BST property.

- Example 3:
Input: root = [3,2,4,1,null,null,5]
Output: true
Explanation: The tree is a valid BST because all nodes follow the BST properties.
```

## Constraints
- 1 <= Number of nodes <= 1000
- -1,000,000 <= TreeNode.val <= 1,000,000