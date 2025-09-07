# Maximum Product in Contiguous Array

**Status:** Completed  
**Languages:** –  
**Difficulty:** Medium  
**Recommended duration to spend during interviews:** 30 mins  
**Users completed:** 1.33k done  

---

## Problem

Given an array of integers `numbers`, determine the subarray that has the highest product and return that product.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as `[2, 3]` in `[1, 2, 3, 4]`.  
Non-contiguous selections like `[1, 3]` are **not valid** subarrays.

---

## Input
- `numbers: number[]` → An array of integers.

---

## Notes
- The test cases are designed such that the result will fit within a 32-bit integer.
- The product of any prefix or suffix of `numbers` is guaranteed to fit in a 32-bit integer.

---

## Examples

**Example 1**  
Input:  numbers = [1, 2, -3, 5, 1]
Output:  5
Explanation: The subarray `[5, 1]` has the largest product i.e `5`.

---

**Example 2**  
Input:  numbers = [9]
Output:  9
Explanation: The single-element subarray `[9]` has the largest product i.e `9`.

---

**Example 3**  
Input:  
numbers = [1, 2, 0, -1, 8, -4]
Output:  32

Explanation: The subarray `[-1, 8, -4]` has the largest product i.e `32`.

---

## Constraints
- `1 <= numbers.length <= 1000`  
- `-10 <= numbers[i] <= 10`  


## Dry Run – Test: [1, 2, 0, -1, 8, -4]

### Initialization
- max = 1  
- min = 1  
- r = 1  

---

### i = 1, v = 2
- max = max(2, 1 * 2) = 2  
- min = min(2, 1 * 2) = 2  
- r = max(2, 1) = 2  

---

### i = 2, v = 0
- max = max(0, 2 * 0) = 0  
- min = min(0, 2 * 0) = 0  
- r = max(2, 0) = 2  

---

### i = 3, v = -1
- swap → max = 0, min = 0  
- max = max(-1, 0 * -1) = 0  
- min = min(-1, 0 * -1) = -1  
- r = 2  

---

### i = 4, v = 8
- max = max(8, 0 * 8) = 8  
- min = min(8, -1 * 8) = -8  
- r = 8  

---

### i = 5, v = -4
- swap → max = -8, min = 8  
- max = max(-4, -8 * -4) = 32  
- min = min(-4, 8 * -4) = -32  
- r = max(8, 32) = 32  

---

### ✅ Final Result
r = **32**
