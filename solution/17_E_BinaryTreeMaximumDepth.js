/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root) {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}
