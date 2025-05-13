describe('HTMLSpanElement', () => {
  it('should have `id` attribute', () => {
    expect(<span id="test-id" />).toHaveAttribute('id', 'test-id');
  });

  it('should have `class` attribute', () => {
    expect(<span class="test-class" />).toHaveAttribute('class', 'test-class');
  });
});
