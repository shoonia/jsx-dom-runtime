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

Add preset to your [`.babelrc`](https://babeljs.io/docs/en/config-files) file.

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
  const ref = useRef();

  const addItem = () => {
    // add to the start of the list
    ref.current.prepend(<li>New Item</li>);
  };

  return (
    <>
      <button type="button" onclick={addItem}>
        Add Item
      </button>
      <ul ref={ref} />
    </>
  );
};

// add to the end of the head
document.head.append(
  <link rel="stylesheet" href="/style.css" />
);

// add to the end the the body
document.body.append(<App />);
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

document.body.append(
  <>
    <p ref={ref}>0</p>
    <button type="button" onclick={click}>
      + 1
    </button>
  </>
);
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

document.body.append(
  <input type="text" ref={focus} />
);
```

## Text

```js
import { useText } from 'jsx-dom-runtime';

const [text, setText] = useText('The initial text');

document.body.append(
  <>
    <p>{text}</p>
    <button type="button" onclick={() => setText('Clicked!')}>
      Click me
    </button>
  </>
);
```

### Template

Get template from string.

```js
import { Template } from 'jsx-dom-runtime';

document.body.append(
  <Template>
    {`<svg width="24" height="24" aria-hidden="true">
        <path d="M12 12V6h-1v6H5v1h6v6h1v-6h6v-1z"/>
      </svg>`}
  </Template>
);
```

## Extend

Add custom attributes in `JSX.Element`.

```js
import { extensions } from 'jsx-dom-runtime';

extensions
  .set('x-class', (node, value) => {
    node.setAttribute('class', value.filter(Boolean).join(' '));
  })
  .set('x-dataset', (node, value) => {
    for (let key in value) {
      if (value[key] != null) {
        node.dataset[key] = value[key];
      }
    }
  })
  .set('x-autofocus', (node, value) => {
    setTimeout(() => node.focus(), value);
  });

document.body.append(
  <input
    x-class={['one', 'two']}
    x-dataset={{ testid: 'test', hook: 'text' }}
    x-autofocus={1000}
  />
);
```

<details>
  <summary>
    TypeScript types definition for custom attributes and properties
  </summary>

`global.d.ts`

```ts
declare global {
  namespace JSX {
    interface Attributes {
      'x-class'?: string[];
      'x-dataset'?: Record<string, string>;
      'x-autofocus'?: number;
    }
  }
}

export {};
```
</details>

Result

```html
<input class="one two" data-testid="test" data-hook="text">
```

### properties

Add support of the DOM Element object properties. By default supported property `value`.

```js
import { properties } from 'jsx-dom-runtime';

properties.add('textContent') // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  .add('innerHTML') // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  .add('volume') // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
  .add('muted'); // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted

document.body.append(
  <>
    <span textContent="Hello, world!" />
    <span innerHTML="<p>Hello, world!</p>" />
    <audio
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
      controls
      volume={0.9}
      muted
    />
  </>
);
```

<details>
  <summary>
    TypeScript types definition for custom attributes and properties
  </summary>

`global.d.ts`

```ts
declare global {
  namespace JSX {
    interface Attributes {
      textContent?: string;
      innerHTML?: string;
      muted?: boolean;
      volume?: number;
    }
  }
}

export {};
```
</details>

## TypeScript Support

TypeScript is able used only for type checking. The library doesn't support compilation with TypeScript. Use [`@babel/preset-typescript`](https://babeljs.io/docs/babel-preset-typescript)

**.babelrc**

```json
{
  "presets": [
    "@babel/typescript",
    "jsx-dom-runtime/babel-preset"
  ]
}
```

To provide type checking add [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file to your project:

**tsconfig.json**

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "jsx-dom-runtime",
    "moduleResolution": "node",
    "noEmit": true,
    "lib": [
      "DOM"
    ]
  }
}
```

Example:

**src/index.tsx**

```ts
import type { FC } from 'jsx-dom-runtime';

interface Props {
  text: string;
}

const App: FC<Props> = ({ text }) => {
  return (
    <div class="card">
      <div class="text">{text}</div>
    </div>
  );
};

document.body.append(<App text="Hello!" />);
```

Read more: [TypeScript JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)

## License

[MIT](./LICENSE)
