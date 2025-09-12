
---
[✨# Balanced Brackets Problem ](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets)

Given a string `str` consisting of characters such as `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is properly **balanced**.
---

## Definition of Balanced
A string is considered balanced if:

1. Each opening bracket is closed by the same type of bracket  
   - Example: `(` with `)`, `{` with `}`, `[` with `]`

2. Open brackets are closed in the correct order  
   - Example: `([])` is valid, but `([)]` is not

3. Any subset of brackets enclosed within a matched pair must also form a valid matched pair  
   - Example: `{[(])}` is **not balanced** because the contents inside `{` and `}` are unbalanced.

---

## Input
- `str: string` – A string containing only the characters `(`, `)`, `{`, `}`, `[` and `]`.

---

## Output
- Return `true` if the string is balanced.  
- Return `false` otherwise.

---

## Examples

### Example 1

**Input:** `str = "[]"`  
**Output:** `true`  
**Explanation:** The string contains correctly paired and ordered parentheses.  

### Example 2
**Input:** `str = "([)]"`  
**Output:** `false`  
**Explanation:** The string contains correctly paired but incorrectly ordered parentheses.  

### Example 3
**Input:** `str = "([]){}"`  
**Output:** `true`  
**Explanation:** The string contains correctly paired and ordered parentheses.  

---

### Constraints
- `1 <= str.length <= 1000`  
- The string `str` contains only the characters `(`, `)`, `{`, `}`, `[` and `]`.
