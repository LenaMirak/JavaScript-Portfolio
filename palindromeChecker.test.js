const { isPalindrome } = require('../JavaScript-Scripts/palindromeChecker');

test('checks if "radar" is a palindrome', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('checks if "hello" is a palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('ignores spaces and punctuation', () => {
  expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
});
