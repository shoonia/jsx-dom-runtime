# jsx-dom-runtime

[![test status](https://github.com/shoonia/jsx-dom-runtime/workflows/tests/badge.svg)](https://github.com/shoonia/jsx-dom-runtime/actions)
[![npm version](https://badgen.net/npm/v/jsx-dom-runtime)](https://www.npmjs.com/package/jsx-dom-runtime)
[![minzip](https://badgen.net/bundlephobia/minzip/jsx-dom-runtime@latest)](https://bundlephobia.com/result?p=jsx-dom-runtime)

## Install

```bash
npm i jsx-dom-runtime
# or
yarn add jsx-dom-runtime
```

## How to use

**.babelrc**

```json
{
  "presets": [
    "jsx-dom-runtime/babel-preset"
  ]
}
```

## Example

```js
const App = () => {
  const ref = { current: null };

  const add = () => {
    ref.current.appendChild(
      <li>New Item</li>
    );
  };

  return (
    <>
      <button type="button" onClick={add}>
        Add
      </button>
      <ul ref={ref} />
    </>
  );
}

document.body.appendChild(<App />);
```

## License

[MIT](./LICENSE)
