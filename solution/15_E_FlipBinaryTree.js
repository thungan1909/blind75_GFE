/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */

//Solution 1: DFS helper with temp
// export default function binaryTreeFlip(root) {
//   function dfs(node) {
//     if (!node) return null;

//     let temp = null;
//     temp = node.left;
//     node.left = dfs(node.right);
//     node.right = dfs(temp);

//     return node;
//   }

//   return dfs(root);
// }

//Solution 2: Concise(short) recursion with destructuring
/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
  if (!root) return null;
  [root.left, root.right] = [
    binaryTreeFlip(root.right),
    binaryTreeFlip(root.left),
  ];
  return root;
}
