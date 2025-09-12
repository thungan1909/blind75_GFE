/**
 * @param {TreeNode} root
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {TreeNode | null}
 */
export default function BSTLowestCommonAncestor(root, a, b) {
  let result = null;

  function dfs(node) {
    if (!node || result) return;

    // If current node is between a and b (inclusive), it is LCA
    if (
      (a.val <= node.val && b.val >= node.val) ||
      (b.val <= node.val && a.val >= node.val)
    ) {
      result = node;
      return;
    }

    //Move to left
    if (a.val < node.val && b.val < node.val) {
      dfs(node.left);
    }

    //Move to right
    else if (a.val > node.val && b.val > node.val) {
      dfs(node.right);
    }
  }

  dfs(root);
  return result;
}
