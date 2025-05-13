describe('HTMLDivElement', () => {
  it('should have `id` attribute', () => {
    expect(<div id="test-id" />).toHaveAttribute('id', 'test-id');
  });

  it('should have `class` attribute', () => {
    expect(<div class="test-class" />).toHaveAttribute('class', 'test-class');
  });
});
