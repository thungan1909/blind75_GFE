/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
    return node.val + Math.max(leftMax, rightMax);
  }
  dfs(root);
  return maxSum;
}
