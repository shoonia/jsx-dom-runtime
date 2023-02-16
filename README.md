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
import { useRef } from 'jsx-dom-runtime';

const App = () => {
  const List = useRef();

  const addItem = () => {
    // append to the end of the list
    <List.current>
      <li>New Item</li>
    </List.current>
  };

  return (
    <>
      <button type="button" onclick={addItem}>
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

## Syntax

### Creating Refs

Adding a reference to a DOM Element

```js
import { useRef } from 'jsx-dom-runtime';

let i = 0;

const ref = useRef();
const click = () => {
  ref.current.textContent = ++i;
};

<document.body>
  <p ref={ref}>0</p>
  <button type="button" onclick={click}>
    + 1
  </button>
</document.body>;
```

### Callback Refs

```js
const focus = (node) => {
  node.addEventListener('focusin', () => {
    node.style.backgroundColor = 'pink';
  });

  node.addEventListener('focusout', () => {
    node.style.backgroundColor = '';
  });
};

<document.body>
  <input type="text" ref={focus} />
</document.body>;
```

## Text

```js
import { useText } from 'jsx-dom-runtime';

const [text, setText] = useText('The initial text');

<document.body>
  <p>{text}</p>
  <button type="button" onclick={() => setText('Clicked!')}>
    Click me
  </button>
</document.body>;
```

### Template

Get template from string.

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

## Extend

Add custom attributes in `JSX.Element`.

```js
import { Extend } from 'jsx-dom-runtime';

Extend({
  'x-class': (node, value) => {
    node.setAttribute('class', value.filter(Boolean).join(' '));
  },
  'x-dataset': (node, value) => {
    for (let key in value) {
      node.dataset[key] = value[key];
    }
  },
  'x-autofocus': (node, value) => {
    setTimeout(() => node.focus(), value);
  },
});

<document.body>
  <input
    x-class={['one', 'two']}
    x-dataset={{ testid: 'test', hook: 'text' }}
    x-autofocus={1000}
  />
</document.body>;
```

Result

```html
<input class="one two" data-testid="test" data-hook="text">
```

Add support of the properties to DOM Element object.

```js
import { properties } from 'jsx-dom-runtime';

properties.add('innerText');
properties.add('textContent');

<document.body>
  <span innerText="Hello" />{', '}
  <span textContent="World" />
</document.body>;

```

Result

```html
<span>Hello</span>, <span>World</span>
```

## License

[MIT](./LICENSE)
