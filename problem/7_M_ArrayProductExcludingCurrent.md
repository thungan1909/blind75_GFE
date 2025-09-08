# Array Product Excluding Current
[Link](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-product-excluding-current)
**Status**: Completed  
**Languages**: Any  
**Difficulty**: Medium  
**Recommended duration during interviews**: 15 mins  
**Users completed**: 1.48k done  

---

## Problem  
Given an array of integers `numbers`, return a new array `result` where each element `result[i]` represents the product of all the elements in `numbers` except for `numbers[i]`.

---

## Input
- `numbers: number[]` — An array of integers  

---

## Notes
- The product of any prefix or suffix of the `numbers` array is ensured to fit within a 32-bit integer.  
- Use of the division operator is **prohibited**.  

---

## Examples

**Example 1**  
Input:  
`numbers = [1,2,3]`  
Output:  
`[6,3,2]`  
Explanation: Each element is the product of all other elements. i.e., `2*3`, `1*3`, `1*2`.  

---

**Example 2**  
Input:  
`numbers = [2,0,3]`  
Output:  
`[0,6,0]`  
Explanation: Each element is the product of all other elements. i.e., `0*3`, `2*3`, `2*0`.  

---

**Example 3**  
Input:  
`numbers = [0,0,-1,1]`  
Output:  
`[0,0,0,0]`  
Explanation: Each element is the product of all other elements. i.e., `0*-1*1`, `0*-1*1`, `0*0*1`, `0*0*-1`.  

---

## Constraints
- `2 <= numbers.length <= 1000`  
- `-10 <= numbers[i] <= 10`
