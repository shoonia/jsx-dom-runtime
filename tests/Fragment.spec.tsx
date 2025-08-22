import { jsxImport } from './utils';

describe('Fragment', () => {
  const start = 'import{Fragment as _Fragment,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should support Fragment', () => {
    expect(
      <div>
        <>
          <p>1</p>
          <p>2</p>
        </>
      </div>
    ).toHaveInnerHTML('<p>1</p><p>2</p>');
  });

  it('should support Fragment as a component value', () => {
    const MyComponent: JSX.FC = () =>
      <>
        <p>3</p>
        <p>4</p>
      </>;

    expect(
      <div>
        <MyComponent />
      </div>
    ).toHaveOuterHTML('<div><p>3</p><p>4</p></div>');
  });

  it('should append one element to fragment', () => {
    expect(
      <div>
        <>
          <h1>one</h1>
        </>
      </div>
    ).toHaveInnerHTML('<h1>one</h1>');
  });

  it('should work with list of fragments', () => {
    expect(
      <div>
        <>
          <p>one</p>
        </>
        <>
          <p>two</p>
        </>
      </div>
    ).toHaveInnerHTML('<p>one</p><p>two</p>');
  });

  it('should work with nested fragments', () => {
    expect(
      <div>
        <>
          <>
            <>
              <p>one</p>
            </>
          </>
        </>
      </div>
    ).toHaveInnerHTML('<p>one</p>');
  });

  test('difficult tree of fragments and nodes', () => {
    expect(
      <div>
        <p>1</p>
        <>
          <p>2</p>
          <>
            <p>3</p>
          </>
          <>
            <>
              <p>4</p>
            </>
          </>
          <>
            <p>
              <>
              5
              </>
            </p>
          </>
        </>
      </div>
    ).toHaveInnerHTML('<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>');
  });

  // it('should work with function Fragment', async () => {
  //   const { Fragment } = await import('jsx-dom-runtime');

  //   expect(
  //     <div>
  //       {Fragment()}
  //       {Fragment(<p>a</p>)}
  //       {Fragment([<p>b</p>, 'c'])}
  //     </div>
  //   ).toHaveInnerHTML('<p>a</p><p>b</p>c');
  // });

  it('should correct transform code #1', async () => {
    await expect('<></>').toBeTransform('import{Fragment as _Fragment}from"jsx-dom-runtime";/*#__PURE__*/_Fragment();');
  });

  it('should correct transform code #2', async () => {
    await expect(`
      <>
        <p>1</p>
      </>`
    ).toBeTransform(start + '_Fragment(/*#__PURE__*/_jsx("p",{},"1"));');
  });

  it('should correct transform code #3', async () => {
    await expect(`
      <>
        <p>one</p>
        <p>two</p>
      </>`
    ).toBeTransform(start + '_Fragment([/*#__PURE__*/_jsx("p",{},"one"),/*#__PURE__*/_jsx("p",{},"two")]);');
  });

  const f = 'import{Fragment as _Fragment}from"jsx-dom-runtime";';

  it('should transform Fragment in props', async () => {
    await expect('<App children={<></>} />')
      .toBeTransform(f + 'App({children:/*#__PURE__*/_Fragment()});');
  });

  it('should add fragment', async () => {
    await expect('let f = <></>;').toBeTransform(f + 'let f=/*#__PURE__*/_Fragment();');
  });

  it('should remove unnecessary fragment', async () => {
    await expect('<div><></></div>').toBeTransform(jsxImport`_jsx("div",{});`);
  });

  it('should replace fragment with its child node', async () => {
    await expect(`
      <div>
        <>
          <p>Hello</p>
        </>
      </div>
    `).toBeTransform(jsxImport`_jsx("div",{},/*#__PURE__*/_jsx("p",{},"Hello"));`);
  });

  it('should replace fragment with its children nodes', async () => {
    await expect(`
      <div>
        <>
          <p>Hello</p>
          World
        </>
      </div>
    `).toBeTransform(jsxImport`_jsx("div",{},[/*#__PURE__*/_jsx("p",{},"Hello"),"World"]);`);
  });
});
