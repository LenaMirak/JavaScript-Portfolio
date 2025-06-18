const { secondLargest } = require('../JavaScript-Scripts/secondLargest');

test('finds the second largest number in an array', () => {
  expect(secondLargest([3, 1, 4, 1, 5, 9])).toBe(5);
});

test('returns null if there is no second largest number', () => {
  expect(secondLargest([3])).toBeNull();
});
