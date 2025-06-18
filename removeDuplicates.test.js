const { removeDuplicates } = require('../JavaScript-Scripts/removeDuplicates');

test('removes duplicates from an array', () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('handles an array with no duplicates', () => {
  expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
});

test('handles an empty array', () => {
  expect(removeDuplicates([])).toEqual([]);
});
