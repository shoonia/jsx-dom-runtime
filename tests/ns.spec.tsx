import { mathmlNs, svgNs, xhtmlNs } from '..';

const prop = 'namespaceURI';

describe('ns', () => {
  it('should build SVG node with manual `ns` attribute', () => {
    expect(<svg ns={svgNs} />).toHaveOuterHTML('<svg></svg>');
  });

  it('should build MathML node with manual `ns` attribute', () => {
    expect(<math ns={mathmlNs} />).toHaveOuterHTML('<math></math>');
  });

  it('should build HTML node with manual `ns` attribute', () => {
    expect(<div ns={xhtmlNs} />).toHaveOuterHTML('<div></div>');
  });

  it('should have valid `namespaceURI for `title` tag`', () => {
    expect(<title />).toHaveProperty(prop, xhtmlNs);
    expect(<title ns={xhtmlNs} />).toHaveProperty(prop, xhtmlNs);
    expect(<title ns={svgNs} />).toHaveProperty(prop, svgNs);
  });

  it('should have HTML `namespaceURI` for `style` tag', () => {
    expect(<style />).toHaveProperty(prop, xhtmlNs);
    expect(<style ns={xhtmlNs} />).toHaveProperty(prop, xhtmlNs);
    expect(<style ns={svgNs} />).toHaveProperty(prop, svgNs);
  });

  it('should have SVG `namespaceURI` for `a` tag', () => {
    expect(<a />).toHaveProperty(prop, xhtmlNs);
    expect(<a ns={xhtmlNs} />).toHaveProperty(prop, xhtmlNs);
    expect(<a ns={svgNs} />).toHaveProperty(prop, svgNs);
  });

  it('should have SVG `namespaceURI` for `script` tag', () => {
    expect(<script />).toHaveProperty(prop, xhtmlNs);
    expect(<script ns={xhtmlNs} />).toHaveProperty(prop, xhtmlNs);
    expect(<script ns={svgNs} />).toHaveProperty(prop, svgNs);
  });

  it('it should detect namespace from parent tag for `title` tag', () => {
    const div = <div><title /></div>;
    const svg = <svg><title /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNs);
    expect(svg.firstChild).toHaveProperty(prop, svgNs);
  });

  it('it should detect namespace from parent tag for `style` tag', () => {
    const div = <div><style /></div>;
    const svg = <svg><style /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNs);
    expect(svg.firstChild).toHaveProperty(prop, svgNs);
  });

  it('it should detect namespace from parent tag for `a` tag', () => {
    const div = <div><a /></div>;
    const svg = <svg><a /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNs);
    expect(svg.firstChild).toHaveProperty(prop, svgNs);
  });

  it('it should detect namespace from parent tag for `script` tag', () => {
    const div = <div><script /></div>;
    const svg = <svg><script /></svg>;

    expect(div.firstChild).toHaveProperty(prop, xhtmlNs);
    expect(svg.firstChild).toHaveProperty(prop, svgNs);
  });

  // spread

  it('should add namespace wtih spread operator', () => {
    const props = { ns: svgNs } as const;

    expect(<style {...props} />).toHaveProperty(prop, svgNs);
  });

  it('should not break code if spread identifier has the same name SVG', () => {
    const ns = { ns: svgNs } as const;

    expect(<style {...ns} />).toHaveProperty(prop, svgNs);
  });

  it('should not break code if spread identifier has the same name HTML', () => {
    const ns = { ns: xhtmlNs } as const;

    expect(<style {...ns} />).toHaveProperty(prop, xhtmlNs);
  });

  it('should not break code if spread identifier has name `ns`', () => {
    const ns = { id: 'param' };

    expect(<style {...ns} />).toHaveProperty(prop, xhtmlNs);
  });
});
