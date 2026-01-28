# jsx-dom-runtime

This is a [Babel](https://babeljs.io/) plugin to transform [JSX](https://facebook.github.io/jsx/) syntax to [DOM](https://dom.spec.whatwg.org/) elements with minimal runtime dependency ~500 B. It supports [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG/), and [MathML](https://www.w3.org/TR/MathML3/) tags.

**source code:**

```js
document.body.append(
  <main class="box">
    <h1 class="title">Hello, World!</h1>
  </main>
);
```

**after compilation:**

```js
import { jsx as _jsx } from "jsx-dom-runtime";

document.body.append(
  _jsx("main", {
    class: "box"
  }, _jsx("h1", {
    class: "title"
  }, "Hello, World!"))
);
```

The Babel preset handles the injection of runtime functions, so no manual imports are required.

## Install

```bash
npm i jsx-dom-runtime
# or
yarn add jsx-dom-runtime
```

## Configuration

To enable JSX transformation, add the `jsx-dom-runtime/babel-preset` to your [Babel configuration file](https://babeljs.io/docs/en/config-files) (e.g., `.babelrc` or `babel.config.json`). This preset configures Babel to correctly transform JSX syntax into DOM elements using this library's runtime.

**.babelrc**

```json
{
  "presets": [
    "jsx-dom-runtime/babel-preset"
  ]
}
```

### Vite

When using [Vite](https://vite.dev/), you need to configure Babel to transform JSX since Vite's default esbuild JSX transform doesn't support this library's custom JSX runtime.

**vite.config.ts**

```ts
import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig(() => {
  return {
    esbuild: {
      // Preserve JSX syntax in esbuild's output instead of transforming it.
      // This allows Babel to process the JSX later in the build pipeline.
      jsx: 'preserve',
    },
    plugins: [
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'bundled',
        presets: [
          'jsx-dom-runtime/babel-preset',
        ],
      }),
    ],
  };
});
```

## Syntax

This library supports the standard [JSX syntax](https://facebook.github.io/jsx/), allowing you to write HTML-like code in your JavaScript files. Below are some examples of how to use different features.

### Attributes

Write the attributes closer to HTML than to JavaScript

Use attribute `class` instead of the `className` DOM property as in React.

```diff
- <div className="box" />
+ <div class="box" />
```

- Use `for` instead of `htmlFor`:
```diff
- <label htmlFor="cheese">Do you like cheese?</label>
+ <label for="cheese">Do you like cheese?</label>
```

### Spread Props

Spread attributes (`{...props}`) are **not supported** on DOM elements (HTML, SVG, MathML, and custom elements). This is a design decision to keep the generated code optimal and predictable.

The library generates static, compile-time code that doesn't support dynamic attribute spreading, as it would break the generated output. Spread attributes would conflict with the library's special features such as:

- Event handling directives (`on:click`, `on:change`, etc.)
- Property directives (`prop:*`)
- Attribute directives (`attr:*`)
- Ref callbacks and ref objects
- Special attributes like `style`, `dataset`, and `attributes`

These features require compile-time transformation and cannot work with runtime spread operations.
```js
const props = { class: 'box', id: 'main' };

// ❌ SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes.
<div {...props} />;
// ❌ SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes.
<svg {...props}></svg>;
// ❌ SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes.
<math {...props}><mi>x</mi></math>;
// ❌ SyntaxError: HTML, SVG, MathML or Custom Elements must not have spread attributes.
<my-component {...props} />;
```

Spread props are fully supported on function components because they are just JavaScript functions:

```js
// ✅ This works fine - function components are just functions

const MyComponent = ({ content, ...props }) => (
  <div class={props.class} id={props.id}>{content}</div>
);

const props = { class: 'box', id: 'main' };

document.body.append(<MyComponent content="Hello" {...props} />)
```

Since function components are regular JavaScript functions, the spread operator works naturally as a function argument, allowing you to pass multiple properties at once.

### Style

The `style` attribute supports a JavaScript object and a [string value](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style). You can also use [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

```js
<div style="background-color: #ffe7e8; border: 2px solid #e66465;" />
<div style="--color: red;" />
// or
<div style={{ backgroundColor: '#ffe7e8', border: '2px solid #e66465' }} />
<div style={{ '--color': 'red' }} />
```

### SVG

Use unmodified SVG attributes instead of camelCase style as in React

```diff
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
-  <circle strokeWidth="2" strokeLinejoin="round" cx="24" cy="24" r="20" fill="none" />
+  <circle stroke-width="2" stroke-linejoin="round" cx="24" cy="24" r="20" fill="none" />
</svg>
```

Don't use namespaced attributes. The namespaced attributes are deprecated and no longer recommended.

Instead of [`xlink:href`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href) you should use `href`

```diff
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
-  <a xlink:href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href">
+  <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href">
    <text x="10" y="25">MDN Web Docs</text>
  </a>
</svg>
```

### Event handling

There are a few ways to add event handling to a DOM Element.

1. Using the [event handler properties](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_handler_properties) that start with `on*` such as `onclick` or `ondblclick`.

```js
<button
  type="button"
  onclick={(event) => { }}
  ondblclick={(event) => { }}
>
  Click Me!
</button>;
```

**Attention!** In this way, the event listener will be assigned directly to the Element object as a property.

```js
// Equivalent on vanilla JavaScript
button.onclick = (event) => { };
button.ondblclick = (event) => { };
```

2. Using the namespace syntax for event listeners that starts with `on:*` such as `on:change` or `on:focus`.

```js
<input
  type="text"
  on:change={(event) => { }}
  on:focus={(event) => { }}
/>
```

After the compilation, it registers the event with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```js
// Equivalent on vanilla JavaScript
input.addEventListener('change', (event) => { });
input.addEventListener('focus', (event) => { });
```

3. Using `ref` callback. The callback will be called with the target element when it is created.

```js
<button
  type="button"
  ref={(node) => {
    // Use capture phase
    node.addEventListener('click', (event) => { }, true);
    // With event options
    node.addEventListener('dblclick', (event) => { }, { once: true });
  }}>
  Click Me!
</button>;
```

### Attribute Directives

Use the `attr:*` directive to set HTML attributes directly on elements. This is particularly useful for setting custom attributes, data attributes, or when you need to ensure a value is set as an attribute rather than a property.

```js
<div
  attr:data-id="123"
  attr:aria-label="Custom label"
  attr:custom-attribute="value"
/>
```

The `attr:*` directive uses [`setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) to set attributes on the DOM element:

```js
// Equivalent on vanilla JavaScript
div.setAttribute('data-id', '123');
div.setAttribute('aria-label', 'Custom label');
div.setAttribute('custom-attribute', 'value');
```

**Common use cases:**

- Setting custom data attributes
- Setting attributes that must be strings
- Ensuring attributes are represented in the HTML markup

```js
// Set data attributes
<div attr:data-testid="submit-button" attr:data-track="click" />

// Set ARIA attributes
<button attr:aria-expanded="false" attr:aria-controls="menu" />

// Set custom attributes
<img attr:loading="lazy" attr:custom-src={imageUrl} />

// Boolean attributes (empty values become "true")
<input attr:required />
```

**Value handling:**
- String and numeric values are converted to strings
- Boolean `true` or empty attributes become `"true"`
- `null` and `undefined` values are ignored
- Objects are converted using `toString()`

### Property Directives

Use the `prop:*` directive to set DOM properties directly on elements. This is useful when you need to set properties that don't have corresponding HTML attributes or when you want to bypass attribute parsing.

```js
<div
  prop:id="my-div"
  prop:textContent="Hello World"
  prop:_customProperty={customValue}
/>
```

The `prop:*` directive sets properties directly on the DOM element, similar to how you would in vanilla JavaScript:

```js
// Equivalent on vanilla JavaScript
div.id = "my-div";
div.textContent = "Hello World";
div._customProperty = customValue;
```

**Common use cases:**

- Setting `textContent` or `innerHTML` directly
- Setting any available element property directly
- Working with custom properties on elements
- Setting properties that behave differently than their attribute counterparts

```js
// Set text content directly
<span prop:textContent="This text is set via property" />

// Set HTML content
<div prop:innerHTML="<p>This is <strong>HTML</strong> content</p>" />

// Add to classList
<div prop:classList="new-class" />

// Custom properties
<div prop:customData={complexObject} />
```

**Note:** Property directives are processed after attribute directives (`attr:*`) but before event handlers and refs.

### Function Components

Function components must start with a capital letter or they won’t work.

```js
const App = ({ name }) => (
  <div>Hello {name}</div>
);

document.body.append(<App name="Bob" />);
```

### Fragments

Use `<>...</>` syntax to group multiple elements together without creating an extra wrapper element. This is useful when you need to return multiple elements from a component or when you want to avoid unnecessary DOM nesting. Under the hood, it uses the [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) interface, which provides efficient DOM manipulation.

```js
document.body.append(
  <>
    <p>Hello</p>
    <p>World</p>
  </>
);
```

## APIs

### Creating Refs

Adding a reference to a DOM Element. When a ref is passed to an element during creation, a reference to the node becomes accessible at the `current` attribute of the ref

```js
import { useRef } from 'jsx-dom-runtime';

const ref = useRef();

const addItem = () => {
  // add an item to the list
  ref.current.append(<li>New Item</li>);
};

document.body.append(
  <>
    <button type="button" on:click={addItem}>
      Add Item
    </button>
    <ul ref={ref} />
  </>
);
```

### Callback Refs

Another way to get a reference to an element is by passing a function callback. The callback will be called with the actual DOM element reference

```js
const setRef = (node) => {
  node.addEventListener('focusin', () => {
    node.style.backgroundColor = 'pink';
  });

  node.addEventListener('focusout', () => {
    node.style.backgroundColor = '';
  });
};

document.body.append(
  <input type="text" ref={setRef} />
);
```

### Text

Use the [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) node in a DOM tree.

```js
import { useText } from 'jsx-dom-runtime';

const [text, setText] = useText('The initial text');

const clickHandler = () => {
  setText('Clicked!');
};

document.body.append(
  <>
    <p>{text}</p>
    <button type="button" on:click={clickHandler}>
      Click me
    </button>
  </>
);
```

### Template

Get a template from a string.

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

## ESLint Support

This library provides [ESLint](https://eslint.org) rules to help you write better JSX code and catch common mistakes. The rules are designed to work with **ESLint v9** and help enforce best practices when using jsx-dom-runtime.

**Configuration**

Add the jsx-dom-runtime ESLint plugin to your `eslint.config.js` file ([ESLint v9 flat config](https://eslint.org/docs/latest/use/configure/configuration-files)):


**Option 1: Basic Configuration**

Use the jsx-dom-runtime plugin with default settings:

**eslint.config.js**

```js
import jsxDomRuntime from 'jsx-dom-runtime/eslint-plugin';

export default [
  jsxDomRuntime,
];
```

**Option 2: Complete Setup with TypeScript**

Use the pre-configured setup that includes TypeScript, JavaScript, and jsx-dom-runtime rules:

**eslint.config.js**

```js
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import jsxDomRuntime from 'jsx-dom-runtime/eslint-plugin';

export default defineConfig(
  eslint.configs.recommended,
  tslint.configs.recommended,
  jsxDomRuntime,
  {
    rules: {
      // Override jsx-dom-runtime default rule configurations
      'jsx-dom-runtime/no-spread-attribute-in-dom-element': 'error',
      'jsx-dom-runtime/no-children-in-void-element': 'error',
      'jsx-dom-runtime/no-spread-children': 'error',
      'jsx-dom-runtime/no-legacy-event-handler': 'warn',
      'jsx-dom-runtime/prefer-attributes-over-properties': 'error',
      'jsx-dom-runtime/jsx-import': 'warn',
      // Add your project-specific ESLint rules here (TypeScript, Prettier, etc.)
    },
  },
);
```

**Available Rules**

| Rule Name | Description | Auto-fixable |
|-----------|-------------|--------------|
| `jsx-dom-runtime/jsx-import` | Enforces importing from "jsx-dom-runtime" instead of "jsx-dom-runtime/jsx-runtime" | `import { jsx } from "jsx-dom-runtime/jsx-runtime"` → `import { jsx } from "jsx-dom-runtime"` |
| `jsx-dom-runtime/no-children-in-void-element` | Prevents adding children to [void HTML elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element) (`<img/>`, `<br/>`, `<hr/>`, etc.). Also enforces self-closing syntax for void elements | `<br></br>` → `<br />`, `<img src="..."></img>` → `<img src="..." />` |
| `jsx-dom-runtime/no-legacy-event-handler` | Suggests using `on:*` event directive syntax instead of legacy `on*` handlers for better event management | No |
| `jsx-dom-runtime/no-spread-attribute-in-dom-element` | Disallows JSX spread attributes in HTML/SVG/MathML elements to maintain explicit attribute declarations | No |
| `jsx-dom-runtime/no-spread-children` | Disallows JSX spread children (e.g., `{...items}` as a child). Use the value directly instead | `<div>{...items}</div>` → `<div>{items}</div>` |
| `jsx-dom-runtime/prefer-attributes-over-properties` | Suggests using HTML attributes (class, for) over DOM properties (className, htmlFor). Use `prop:*` directive if you need the property instead | `<div className="box" />` → `<div class="box" />`, `<label htmlFor="input" />` → `<label for="input" />` |

## TypeScript Support

This library uses TypeScript for type-checking only. For compilation, it relies on Babel. Use the [`@babel/preset-typescript`](https://babeljs.io/docs/babel-preset-typescript) preset to transform TypeScript files.

**.babelrc**

```json
{
  "presets": [
    "@babel/preset-typescript",
    "jsx-dom-runtime/babel-preset"
  ]
}
```

To enable type-checking for JSX, create a `tsconfig.json` file in your project root. This configuration tells the TypeScript compiler how to handle JSX syntax and module resolution for this library:

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
import { useText } from 'jsx-dom-runtime';

interface Props {
  label: string;
}

const App: JSX.FC<Props> = ({ label }) => {
  let i = 0;

  const [textNode, setCount] = useText(i);

  const clickHandler: JSX.EventListener = () => {
    setCount(++i);
  };

  return (
    <div class="card">
      <h1 class="label">{label}</h1>
      <button type="button" on:click={clickHandler}>
        Click me! {textNode}
      </button>
    </div>
  );
};

document.body.append(<App label="Hello!" />);
```

## License

[MIT](https://github.com/shoonia/jsx-dom-runtime/blob/master/LICENSE)
