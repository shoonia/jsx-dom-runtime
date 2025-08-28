describe('HTMLMetaElement', () => {
  it('should support `charset` attribute', () => {
    expect(<meta charset="utf-8" />).toHaveAttribute('charset', 'utf-8');
  });

  it('should support `name` attribute', () => {
    expect(<meta name="viewport" />).toHaveProperty('name', 'viewport');
    expect(<meta name="viewport" />).toHaveAttribute('name', 'viewport');
  });

  it('should support `http-equiv` attribute', () => {
    expect(<meta http-equiv="refresh" />).toHaveProperty('httpEquiv', 'refresh');
    expect(<meta http-equiv="refresh" />).toHaveAttribute('http-equiv', 'refresh');
  });

  it('should support `content` attribute', () => {
    expect(<meta content="3;url=https://www.mozilla.org" />).toHaveProperty('content', '3;url=https://www.mozilla.org');
    expect(<meta content="3;url=https://www.mozilla.org" />).toHaveAttribute('content', '3;url=https://www.mozilla.org');
  });
});
