# lazy-evaluation

## About

Lazily `evaluate` arguments against a set of `add`ed functions. Call `evaluate` to get the result.

## Testing
`lazy-evaluation` is tested with `jest`. Make sure it is installed:

```
npm i
```

Then run the test suite:

```
npm test
```

## Use
See `Lazy.spec.ts` or:

```
  const lazy = new Lazy()
  lazy
    .add(function multiplyByTwo(a) { return a * 2; })
    .add(function addTogether(a, b) { return a + b; }, 1)
  lazy.evaluate([1, 2, 3])
  // -> [3, 5, 7]
```
