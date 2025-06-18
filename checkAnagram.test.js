const { isAnagram } = require('../JavaScript-Scripts/checkAnagram');

test('checks if "listen" and "silent" are anagrams', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
});

test('returns false for non-anagrams', () => {
  expect(isAnagram('hello', 'world')).toBe(false);
});

test('ignores spaces and punctuation', () => {
  expect(isAnagram('A gentleman', 'Elegant man')).toBe(true);
});
