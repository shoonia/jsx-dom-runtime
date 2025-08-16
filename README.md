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

- [Get Started](https://github.com/shoonia/jsx-dom-runtime/wiki#jsx-dom-runtime)
- [Syntax](https://github.com/shoonia/jsx-dom-runtime/wiki#syntax)
- [APIs](https://github.com/shoonia/jsx-dom-runtime/wiki#apis)
- [ESLint Support](https://github.com/shoonia/jsx-dom-runtime/wiki#eslint-support)
- [TypeScript Support](https://github.com/shoonia/jsx-dom-runtime/wiki#typescript-support)

## License

[MIT](https://github.com/shoonia/jsx-dom-runtime/blob/master/LICENSE)
