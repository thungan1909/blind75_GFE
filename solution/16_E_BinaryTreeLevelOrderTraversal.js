/**
 * @param {TreeNode | null} root
 * @return {number[][]}
 */
export default function binaryTreeLevelOrderTraversal(root) {
  let result = [];
  let visited = [root];

  while (visited.length) {
    let levelSize = visited.length;
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = visited.shift();
      level.push(node.val);

      if (node.left) visited.push(node.left);
      if (node.right) visited.push(node.right);
    }

    result.push(level);
  }

  return result;
}
