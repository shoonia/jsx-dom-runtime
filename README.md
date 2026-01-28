# jsx-dom-runtime

A tiny 500-byte library for [JSX](https://facebook.github.io/jsx/) syntax templates targeting the [DOM](https://dom.spec.whatwg.org/). Supports [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG/), and [MathML](https://www.w3.org/TR/MathML3/) tags.

[![npm version](https://badgen.net/npm/v/jsx-dom-runtime)](https://www.npmjs.com/package/jsx-dom-runtime)
[![Stand with Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua/)

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
// add to the end of the head
document.head.append(
  <link rel="stylesheet" href="/style.css" />
);

// add to the end the the body
document.body.append(
  <main class="box">
    <h1 class="title">Hello World!</h1>
  </main>
);
```

[Demo](https://github.com/shoonia/jsx-dom-runtime/tree/master/DEMO)

## Documentation

### Getting Started
- [Introduction](https://github.com/shoonia/jsx-dom-runtime/wiki#jsx-dom-runtime)
- [Installation](https://github.com/shoonia/jsx-dom-runtime/wiki#install)
- [Configuration](https://github.com/shoonia/jsx-dom-runtime/wiki#configuration)
  - [Vite](https://github.com/shoonia/jsx-dom-runtime/wiki#vite)

### Syntax & Features
- [Attributes](https://github.com/shoonia/jsx-dom-runtime/wiki#attributes)
- [Style](https://github.com/shoonia/jsx-dom-runtime/wiki#style)
- [SVG](https://github.com/shoonia/jsx-dom-runtime/wiki#svg)
- [Event Handling](https://github.com/shoonia/jsx-dom-runtime/wiki#event-handling)
- [Attribute Directives](https://github.com/shoonia/jsx-dom-runtime/wiki#attribute-directives) (`attr:*`)
- [Property Directives](https://github.com/shoonia/jsx-dom-runtime/wiki#property-directives) (`prop:*`)
- [Function Components](https://github.com/shoonia/jsx-dom-runtime/wiki#function-components)
- [Fragments](https://github.com/shoonia/jsx-dom-runtime/wiki#fragments)

### API Reference
- [useRef()](https://github.com/shoonia/jsx-dom-runtime/wiki#creating-refs) - Create DOM element references
- [Callback Refs](https://github.com/shoonia/jsx-dom-runtime/wiki#callback-refs) - Reference elements with callbacks
- [useText()](https://github.com/shoonia/jsx-dom-runtime/wiki#text) - Create reactive Text nodes
- [Template](https://github.com/shoonia/jsx-dom-runtime/wiki#template) - Parse HTML strings

### Tooling
- [ESLint Support](https://github.com/shoonia/jsx-dom-runtime/wiki#eslint-support) - Linting rules and configuration
- [TypeScript Support](https://github.com/shoonia/jsx-dom-runtime/wiki#typescript-support) - Type definitions and setup

## License

[MIT](https://github.com/shoonia/jsx-dom-runtime/blob/master/LICENSE)
