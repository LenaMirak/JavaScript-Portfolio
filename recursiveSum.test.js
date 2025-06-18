const { recursiveSum } = require('../JavaScript-Scripts/recursiveSum');

test('calculates the sum of numbers from 1 to 5', () => {
  expect(recursiveSum(5)).toBe(15);
});

test('returns 0 for n = 0', () => {
  expect(recursiveSum(0)).toBe(0);
});

test('handles negative numbers gracefully', () => {
  expect(recursiveSum(-5)).toBe(0);
});
