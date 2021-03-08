# jsx-dom-runtime

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
  "plugins": [
    [
      "@babel/transform-react-jsx",
      {
        "runtime": "automatic",
        "importSource": "jsx-dom-runtime",
      }
    ]
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
