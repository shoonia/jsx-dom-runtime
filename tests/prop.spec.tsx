describe('prop:*', () => {
  it('should support `id` property', () => {
    expect(<p prop:id="a" />).toHaveAttribute('id', 'a');
    expect(<p prop:id="a" />).toHaveProperty('id', 'a');
  });

  it('should support `textContent` property', () => {
    expect(<span prop:textContent="hello" />).toHaveTextContent('hello');
  });

  it('should support `textContent` property', () => {
    expect(<div prop:innerHTML="<p>text</p>" />).toHaveInnerHTML('<p>text</p>');
  });
});
