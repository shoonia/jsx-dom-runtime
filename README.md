# jsx-dom-runtime

A tiny 500-byte library for [JSX](https://facebook.github.io/jsx/) syntax templates targeting the [DOM](https://dom.spec.whatwg.org/). Supports [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG/), [MathML](https://www.w3.org/TR/MathML3/) and [Custom Element](https://html.spec.whatwg.org/multipage/custom-elements.html) tags.

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
import { render } from 'jsx-dom-runtime';

render(
  <main class="box">
    <h1 class="title">Hello World!</h1>
  </main>,
  document.getElementById('root')
);
```

[Demo](https://github.com/shoonia/jsx-dom-runtime/tree/master/DEMO)

## Documentation

### Getting Started
- [Introduction](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#jsx-dom-runtime)
- [Installation](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#install)
- [Configuration](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#configuration)
  - [Vite](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#vite), [Webpack](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#webpack), [Rollup](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#rollup), [Rolldown](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#rolldown), [Parcel](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#parcel)

### Syntax & Features
- [Attributes](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#attributes)
- [SVG](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#svg)
- [Style](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#style)
- [Event Handling](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#event-handling)
- [Attribute Directives](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#attribute-directives) (`attr:*`)
- [Property Directives](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#property-directives) (`prop:*`)
- [Function Components](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#function-components)
- [Fragments](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#fragments)

### API Reference
- [signal()](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#signal) - Reactive values that update attributes, properties, and text automatically
- [useRef()](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#creating-refs) - Create DOM element references
- [Callback Refs](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#callback-refs) - Reference elements with callbacks
- [useText()](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#text) - Create reactive Text nodes

### Tooling
- [ESLint Support](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#eslint-support) - Linting rules and configuration
- [TypeScript Support](https://github.com/shoonia/jsx-dom-runtime/blob/master/AGENTS.md#typescript-support) - Type definitions and setup

## License

[MIT](https://github.com/shoonia/jsx-dom-runtime/blob/master/LICENSE)
