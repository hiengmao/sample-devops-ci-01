const { sum, minus } = require('../src/sum');

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 5 - 2 = 3', () => {
  expect(minus(5, 2)).toBe(3);
});
