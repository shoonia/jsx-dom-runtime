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

  it('should append one element to fragment ', () => {
    <document.body>
      <>
        <h1>one</h1>
      </>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<h1>one</h1>');
  });
});
