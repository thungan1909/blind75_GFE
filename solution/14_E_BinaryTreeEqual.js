/**
 * @param {TreeNode | null} a
 * @param {TreeNode | null} b
 * @return {boolean}
 */
export default function binaryTreeEqual(a, b) {
  // If both a & b are null (or undefined) => empty tree => equal
  if (!a && !b) return true;
  if (!a || !b) return false;

  return (
    a.val === b.val &&
    binaryTreeEqual(a.left, b.left) &&
    binaryTreeEqual(a.right, b.right)
  );
}
