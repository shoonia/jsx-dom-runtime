describe('Fragment', () => {
  it('should support Fragment', () => {
    <document.body>
      <>
        <p>1</p>
        <p>2</p>
      </>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<p>1</p><p>2</p>');
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
    <document.body>
      <>
        <h1>one</h1>
      </>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<h1>one</h1>');
  });

  it('should work with list of fragments', () => {
    <document.body>
      <>
        <p>one</p>
      </>
      <>
        <p>two</p>
      </>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<p>one</p><p>two</p>');
  });

  it('should work with nested fragments', () => {
    <document.body>
      <>
        <>
          <>
            <p>one</p>
          </>
        </>
      </>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<p>one</p>');
  });

  test('difficult tree of fragments and nodes', () => {
    <document.body>
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
    </document.body>;

    expect(document.body).toHaveInnerHTML(
      '<p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>',
    );
  });
});
