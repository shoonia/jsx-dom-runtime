const t = new Date().toISOString();

describe('HTMLTimeElement', () => {
  it('should have `dateTime` attribute', () => {
    expect(<time dateTime={t} />).toHaveProperty('dateTime', t);
    expect(<time dateTime={t} />).toHaveAttribute('datetime', t);
  });

  it('should have text content', () => {
    expect(<time dateTime="2018-07-07">July 7</time>).toHaveTextContent('July 7');
  });
});
