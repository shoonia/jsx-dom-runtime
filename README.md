# jsx-dom-runtime

[![test status](https://github.com/shoonia/jsx-dom-runtime/workflows/tests/badge.svg)](https://github.com/shoonia/jsx-dom-runtime/actions)
[![npm version](https://badgen.net/npm/v/jsx-dom-runtime)](https://www.npmjs.com/package/jsx-dom-runtime)
[![minzip](https://badgen.net/bundlephobia/minzip/jsx-dom-runtime)](https://bundlephobia.com/result?p=jsx-dom-runtime)

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
  const List = { current: null };

  const addItem = () => {
    <List.current>
      <li>New Item</li>
    </List.current>
  };

  return (
    <>
      <button type="button" onClick={addItem}>
        Add
      </button>
      <ul ref={List} />
    </>
  );
}

const Body = document.body;

<Body>
  <App />
</Body>;
```

[Demo](/DEMO)

## License

[MIT](./LICENSE)
