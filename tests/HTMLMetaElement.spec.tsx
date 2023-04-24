describe('HTMLMetaElement', () => {
  it('should support `charset` attribute', () => {
    expect(<meta charset="utf-8" />).toHaveAttribute('charset', 'utf-8');
  });
});
