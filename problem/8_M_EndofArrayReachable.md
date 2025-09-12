# [✨ End of Array Reachable](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-reachable-end) 🧩

---

**Difficulty:** 🟡 Medium  

---

## Problem Statement
Given an array of integers `numbers` where each element represents the maximum number of positions that can be moved forward from that index (it is also acceptable to move fewer positions).  

Determine whether it is possible to reach the last index of the array by starting from the first index. Return `true` if it can be reached and `false` otherwise.

---

## Input
- **numbers:** `number[]` → An array of integers, where each value is the maximum number of positions reachable from that index.  

---

## Notes
- You may choose to move fewer positions than the value at the index.  
- The goal is to check if the last index can be reached from index `0`.  

---

## Examples
```text
- Example 1:
Input: numbers = [4,1,0,0,2,3]
Output: true
Explanation: Move from index 0 to 4, then move 1 position to the last index.

- Example 2:
Input: numbers = [1,0,0,0]
Output: false
Explanation: Can only move from index 0 to index 1 and no further, so it is impossible to reach the last index.

- Example 3:
Input: numbers = [2,3,1,1,4]
Output: true
Explanation: Move 1 position forward from index 0 to index 1 (even though we can move up to 2). From index 1, move 3 positions to reach the last index.
```

## Constraints
- 1 <= numbers.length <= 10,000
- 0 <= numbers[i] <= 100,000
