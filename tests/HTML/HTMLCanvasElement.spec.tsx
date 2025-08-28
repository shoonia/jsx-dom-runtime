describe('HTMLCanvasElement', () => {
  it('should render <canvas> tag', () => {
    expect(
      <canvas width="300" height="300">
        An alternative text describing what your canvas displays.
      </canvas>
    ).toHaveOuterHTML(
      '<canvas width="300" height="300">An alternative text describing what your canvas displays.</canvas>'
    );
  });

  it('should have `width` attribute & property', () => {
    expect(<canvas width="100" />).toHaveAttribute('width', '100');
    expect(<canvas width="100" />).toHaveProperty('width', 100);
  });

  it('should have `height` attribute & property', () => {
    expect(<canvas height="200" />).toHaveAttribute('height', '200');
    expect(<canvas height="200" />).toHaveProperty('height', 200);
  });
});
