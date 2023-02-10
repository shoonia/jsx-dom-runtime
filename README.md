# jsx-dom-runtime

A tiny in 500 bytes library to JSX syntax templates for DOM.

[![test status](https://github.com/shoonia/jsx-dom-runtime/workflows/tests/badge.svg)](https://github.com/shoonia/jsx-dom-runtime/actions)
[![npm version](https://badgen.net/npm/v/jsx-dom-runtime)](https://www.npmjs.com/package/jsx-dom-runtime)

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
    // append to the end of the list
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

// append to the end of the head
<document.head>
  <link rel="stylesheet" href="/style.css" />
</document.head>;

// append to the end the the body
<document.body id="root">
  <App />
</document.body>;
```

[Demo](/DEMO)

## Creating Refs

```js
import { createRef } from 'jsx-dom-runtime';

let i = 0;

const ref = createRef();

<document.body>
  <p ref={ref}>{i}</p>
  <button type="button" onClick={() => {
    ref.current.textContent = ++i;
  }}>
    + 1
  </button>
</document.body>;
```

### Callback Refs

```js
<document.body>
  <input ref={(node) => {
    setTimeout(() => node.focus(), 100);
  }} />
</document.body>;
```

## Extend

Add custom attributes behavior

```js
import { extend } from 'jsx-dom-runtime';

extend({
  classList(node, value) {
    node.setAttribute('class', value.filter(Boolean).join(' '));
  },

  dataset(node, value) {
    for (let key in value) {
      node.dataset[key] = value[key];
    }
  },
});

<document.body>
  <div
    classList={['one', 'two']}
    dataset={{ testid: 'test', hook: 'text' }}
  />
</document.body>;
```

Result

```html
<div class="one two" data-testid="test" data-hook="text"></div>
```

## Template

Get template from string

```js
import { Template } from 'jsx-dom-runtime';

<document.body>
  <Template>
    {`<svg width="24" height="24" aria-hidden="true">
        <path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"/>
      </svg>`}
  </Template>
</document.body>
```

## License

[MIT](./LICENSE)
