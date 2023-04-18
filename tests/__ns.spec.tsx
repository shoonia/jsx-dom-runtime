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

  it('should have SVG `namespaceURI` for `script` tag', () => {
    expect(<script />).toHaveProperty(prop, HTML);
    expect(<script __ns={0} />).toHaveProperty(prop, HTML);
    expect(<script __ns={1} />).toHaveProperty(prop, SVG);
  });

  it('it should detect namespace from parent tag for `title` tag', () => {
    const div = <div><title /></div>;
    const svg = <svg><title /></svg>;

    expect(div.firstChild).toHaveProperty(prop, HTML);
    expect(svg.firstChild).toHaveProperty(prop, SVG);
  });

  it('it should detect namespace from parent tag for `style` tag', () => {
    const div = <div><style /></div>;
    const svg = <svg><style /></svg>;

    expect(div.firstChild).toHaveProperty(prop, HTML);
    expect(svg.firstChild).toHaveProperty(prop, SVG);
  });

  it('it should detect namespace from parent tag for `a` tag', () => {
    const div = <div><a /></div>;
    const svg = <svg><a /></svg>;

    expect(div.firstChild).toHaveProperty(prop, HTML);
    expect(svg.firstChild).toHaveProperty(prop, SVG);
  });

  it('it should detect namespace from parent tag for `script` tag', () => {
    const div = <div><script /></div>;
    const svg = <svg><script /></svg>;

    expect(div.firstChild).toHaveProperty(prop, HTML);
    expect(svg.firstChild).toHaveProperty(prop, SVG);
  });
});
