describe('HTMLVideoElement', () => {
  it('should have `muted` property', () => {
    expect(<video muted />).toHaveProperty('muted', true);
    expect(<video muted={false} />).toHaveProperty('muted', false);
  });
});
