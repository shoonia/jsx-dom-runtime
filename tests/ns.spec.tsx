import { mathmlNS, svgNS, xhtmlNS } from '..';

const prop = 'namespaceURI';

describe('ns', () => {
  it('should build SVG node with manual `ns` attribute', () => {
    expect(<svg ns={svgNS} />).toHaveOuterHTML('<svg></svg>');
  });

  it('should build MathML node with manual `ns` attribute', () => {
    expect(<math ns={mathmlNS} />).toHaveOuterHTML('<math></math>');
  });

  it('should build HTML node with manual `ns` attribute', () => {
    expect(<div ns={xhtmlNS} />).toHaveOuterHTML('<div></div>');
  });

  it('should have valid `namespaceURI for `title` tag`', () => {
    expect(<title />).toHaveProperty(prop, xhtmlNS);
    expect(<title ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<title ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have HTML `namespaceURI` for `style` tag', () => {
    expect(<style />).toHaveProperty(prop, xhtmlNS);
    expect(<style ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<style ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have SVG `namespaceURI` for `a` tag', () => {
    expect(<a />).toHaveProperty(prop, xhtmlNS);
    expect(<a ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<a ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have SVG `namespaceURI` for `script` tag', () => {
    expect(<script />).toHaveProperty(prop, xhtmlNS);
    expect(<script ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<script ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('it should detect namespace from parent tag for `title` tag', () => {
    const div = <div><title /></div>;
    const svg = <svg><title /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNS);
    expect(svg.firstChild).toHaveProperty(prop, svgNS);
  });

  it('it should detect namespace from parent tag for `style` tag', () => {
    const div = <div><style /></div>;
    const svg = <svg><style /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNS);
    expect(svg.firstChild).toHaveProperty(prop, svgNS);
  });

  it('it should detect namespace from parent tag for `a` tag', () => {
    const div = <div><a /></div>;
    const svg = <svg><a /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNS);
    expect(svg.firstChild).toHaveProperty(prop, svgNS);
  });

  it('it should detect namespace from parent tag for `script` tag', () => {
    const div = <div><script /></div>;
    const svg = <svg><script /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNS);
    expect(svg.firstChild).toHaveProperty(prop, svgNS);
  });

  // spread

  it('should add namespace wtih spread operator', () => {
    const props = { ns: svgNS } as const;

    expect(<style {...props} />).toHaveProperty(prop, svgNS);
  });

  it('should not break code if spread identifier has the same name SVG', () => {
    const ns = { ns: svgNS } as const;

    expect(<style {...ns} />).toHaveProperty(prop, svgNS);
  });

  it('should not break code if spread identifier has the same name HTML', () => {
    const ns = { ns: xhtmlNS } as const;

    expect(<style {...ns} />).toHaveProperty(prop, xhtmlNS);
  });

  it('should not break code if spread identifier has name `ns`', () => {
    const ns = { id: 'param' };

    expect(<style {...ns} />).toHaveProperty(prop, xhtmlNS);
  });
});
