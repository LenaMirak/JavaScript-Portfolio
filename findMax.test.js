const { findMax } = require('../JavaScript-Scripts/findMax');

test('finds the largest number in an array', () => {
  expect(findMax([3, 1, 4, 1, 5, 9])).toBe(9);
});

test('returns null for an empty array', () => {
  expect(findMax([])).toBeNull();
});
