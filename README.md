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
import { createRef } from 'jsx-dom-runtime';

const App = () => {
  const List = createRef();

  const addItem = () => {
    <List.current>
      <li>New Item</li>
    </List.current>
  };

  return (
    <>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <ul ref={List} />
    </>
  );
};

<document.head>
  <link rel="stylesheet" href="/style.css" />
</document.head>;

<document.body id="root">
  <App />
</document.body>;
```

[Demo](/DEMO)

## License

[MIT](./LICENSE)
