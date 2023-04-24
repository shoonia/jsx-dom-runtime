describe('HTMLTrackElement', () => {
  it('should have `label` attribute', () => {
    expect(<track label="here" />).toHaveProperty('label', 'here');
    expect(<track label="here" />).toHaveAttribute('label', 'here');
  });

  it('should have `srclang` attribute', () => {
    expect(<track srclang="uk" />).toHaveProperty('srclang', 'uk');
    expect(<track srclang="uk" />).toHaveAttribute('srclang', 'uk');
  });
});
