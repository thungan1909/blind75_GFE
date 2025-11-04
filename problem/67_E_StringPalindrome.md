# [✨ Valid Palindrome Problem](https://www.greatfrontend.com/interviews/study/blind75/questions/algo/string-valid-palindrome) 🧩

---

**Difficulty:** 🟢 Easy

---

## Problem Statement

Given a string `str`, determine if it is a **palindrome**.  
A string is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.

---

## Input

- **str:** `string` → A string containing printable ASCII characters.

---

## Output

- Return `true` if the string is a palindrome.
- Return `false` otherwise.

---

## Examples

```text
- Example 1:
Input: str = "No 'x' in Nixon"
Output: true
Explanation: After removing non-alphanumeric characters and converting to lowercase, the string becomes "noxinnixon", which is a palindrome.

- Example 2:
Input: str = "Was it a car or a cat I saw?"
Output: true
Explanation: After removing non-alphanumeric characters and converting to lowercase, the string becomes "wasitacaroracatisaw", which is a palindrome.

- Example 3:
Input: str = "tab a cat"
Output: false
Explanation: After removing non-alphanumeric characters and converting to lowercase, the string becomes "tabacat", which is not a palindrome.
```

---

## Constraints

- 1 <= str.length <= 1000
- str consists only of printable ASCII characters
