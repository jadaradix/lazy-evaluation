const Lazy = require('./Lazy')

test('my test case', () => {
  // GIVEN a Lazy instance
  const lazy = new Lazy()
  // WHEN i call `add` twice (chaining)
  lazy
    .add(
      (a, b) => { return a + b },
      1
    )
    .add(
      (a, b) => { return a * b },
      2
    )
  // AND i call evaluate
  const result = lazy.evaluate([5, 6])
  // THEN the result is correct
  expect(result).toEqual([12, 14])
})

test('their test case', () => {
  // GIVEN a Lazy instance
  const lazy = new Lazy()
  // WHEN i call `add` twice (chaining)
  lazy
    .add(function timesTwo(a) { return a * 2; })
    .add(function plus(a, b) { return a + b; }, 1)
  // AND i call evaluate
  const result = lazy.evaluate([1, 2, 3])
  // THEN the result is correct
  expect(result).toEqual([3, 5, 7])
})
