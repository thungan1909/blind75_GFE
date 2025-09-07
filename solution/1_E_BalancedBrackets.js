/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  let arr = str.split("");
  let stack = [];

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
      if (stack.length === 0) {
        return false;
      } else {
        const lastItem = stack.pop();

        if (
          !(lastItem === "(" && arr[i] === ")") &&
          !(lastItem === "{" && arr[i] === "}") &&
          !(lastItem === "[" && arr[i] === "]")
        ) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
