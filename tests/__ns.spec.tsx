const prop = 'namespaceURI';
const SVG = 'http://www.w3.org/2000/svg';
const HTML = 'http://www.w3.org/1999/xhtml';

describe('__ns', () => {
  it('should build SVG with manual `__ns` attribute', () => {
    expect(<svg __ns={1} />).toHaveOuterHTML('<svg></svg>');
  });

  it('should have valid `namespaceURI for `title` tag`', () => {
    expect(<title />).toHaveProperty(prop, HTML);
    expect(<title __ns={0} />).toHaveProperty(prop, HTML);
    expect(<title __ns={1} />).toHaveProperty(prop, SVG);
  });

  it('should have HTML `namespaceURI` for `style` tag', () => {
    expect(<style />).toHaveProperty(prop, HTML);
    expect(<style __ns={0} />).toHaveProperty(prop, HTML);
    expect(<style __ns={1} />).toHaveProperty(prop, SVG);
  });

  it('should have SVG `namespaceURI` for `a` tag', () => {
    expect(<a />).toHaveProperty(prop, HTML);
    expect(<a __ns={0} />).toHaveProperty(prop, HTML);
    expect(<a __ns={1} />).toHaveProperty(prop, SVG);
  });
});
