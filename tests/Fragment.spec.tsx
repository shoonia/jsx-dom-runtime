import { createRequire } from 'node:module';

describe('Fragment', () => {
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
    const MyComponent = () => (
      <>
        <p>3</p>
        <p>4</p>
      </>
    );

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

  it('should work with component Fragment', () => {
    const { Fragment } = createRequire(import.meta.url)('../jsx-runtime/index.cjs');

    expect(
      <div>
        <Fragment>
          <p>a</p>
        </Fragment>
      </div>
    ).toHaveInnerHTML('<p>a</p>');
  });
});
