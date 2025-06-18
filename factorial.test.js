const { factorial } = require('../JavaScript-Scripts/factorial');

test('calculates factorial of 5', () => {
  expect(factorial(5)).toBe(120);
});

test('calculates factorial of 0', () => {
  expect(factorial(0)).toBe(1);
});

test('handles negative numbers gracefully', () => {
  expect(factorial(-5)).toBe('Error: Negative numbers are not allowed');
});
