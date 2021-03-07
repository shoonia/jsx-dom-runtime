describe('Fragment', () => {
  it('should support Fragment', () => {
    document.body.appendChild(
      <>
        <p>1</p>
        <p>2</p>
      </>
    );

    expect(document.body.innerHTML).toBe('<p>1</p><p>2</p>');
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
});
