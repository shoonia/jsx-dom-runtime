const t = new Date().toISOString();

describe('HTMLTimeElement', () => {
  it('should have `dateTime` attribute', () => {
    expect(<time dateTime={t} />).toHaveProperty('dateTime', t);
    expect(<time dateTime={t} />).toHaveAttribute('datetime', t);
  });
});
