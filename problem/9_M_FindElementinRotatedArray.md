# [✨ Find Element in Rotated Array](hhttps://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-rotated-finds) 🧩

---

**Difficulty:** 🟡 Medium  

---

## Problem Statement
Given a sorted and rotated array `numbers` containing unique elements and an integer `target`, return the index of `target` if it is in `numbers`, or `-1` if it is not.

Rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` once results in `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.  
Rotating it a second time results in `[a[n-2], a[n-1], a[0], a[1], ..., a[n-3]]`.

Develop an algorithm that runs in **O(log n)** time complexity.

---

## Input
- **numbers:** `number[]` → An array of integers  
- **target:** `number` → An integer  

---

## Notes
- Each element in `numbers` is unique.  
- The array is rotated but remains sorted within its partitions.  

---
## Examples

**Example 1**  
```text
Input: numbers = [0,1,2,3,4], target = 2
Output: 2
Explanation: The original array [0,1,2,3,4] was rotated 0 times and 2 is present at index 2.

**Example 2 **  
Input: numbers = [2,3,4,0,1], target = 0
Output: 3
Explanation: The original array [0,1,2,3,4] was rotated 3 times and became [2,3,4,0,1].  0 is present at index 3.

**Example 3 **  
Input: numbers = [4], target = 2
Output: -1
Explanation: The original array [4] was rotated 0 times. 2 is not present in the given array.
