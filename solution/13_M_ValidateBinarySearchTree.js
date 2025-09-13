/**
 * @param {TreeNode | null} root
 * @return {boolean}
 */
export default function binarySearchTreeValidate(root) {
  function dfs(node, min, max) {
    if (!node) return true;

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root, null, null);
}
