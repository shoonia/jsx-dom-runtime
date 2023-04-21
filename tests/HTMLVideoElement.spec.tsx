describe('HTMLVideoElement', () => {
  it('should have `muted` property', () => {
    expect(<video muted />).toHaveProperty('muted', true);
    expect(<video muted={false} />).toHaveProperty('muted', false);
  });

  it('should NOT have `muted` attribute', () => {
    expect(<video muted />).not.toHaveAttribute('muted');
    expect(<video muted={false} />).not.toHaveAttribute('muted');
  });

  it('should have `src` attribute & property', () => {
    expect(<video src="/video" />).toHaveProperty('src', 'http://localhost/video');
    expect(<video src="/video" />).toHaveAttribute('src', '/video');
  });

  it('should have `poster` attribute & property', () => {
    expect(<video poster="/poster" />).toHaveProperty('poster', 'http://localhost/poster');
    expect(<video poster="/poster" />).toHaveAttribute('poster', '/poster');
  });

  it('should have `playsInline` attribure & property', () => {
    expect(<video playsInline />).toHaveProperty('playsInline', true);
    expect(<video playsInline={false} />).toHaveProperty('playsInline', false);
    expect(<video playsInline />).toHaveAttribute('playsinline', '');
  });

  it('should NOT have `playsInline` attribute', () => {
    expect(<video />).not.toHaveAttribute('playsinline');
    expect(<video playsInline={false} />).not.toHaveAttribute('playsinline');
  });
});
