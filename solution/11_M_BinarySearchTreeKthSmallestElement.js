/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @return {number}
 */
export default function kthSmallestElementInABst(root, k) {
  let count = 0;
  let result = null;

  //Depth-First Search with In-order Traversal
  //Order: left -> node -> right
  function dfs(node) {
    if (!node || result !== null) return;

    //1. Traverse left subtree (smaller values)
    dfs(node.left);

    //2. Visit current node
    count++;
    if (count === k) {
      result = node.val;
      return result;
    }

    //3. Traverse right subtree (large values)
    dfs(node.right);
  }

  //Start from root
  dfs(root);
  return result;
}
