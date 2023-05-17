import { svgNS, xhtmlNS } from '..';

const prop = 'namespaceURI';

describe('__ns', () => {
  it('should build SVG with manual `__ns` attribute', () => {
    expect(<svg __ns={svgNS} />).toHaveOuterHTML('<svg></svg>');
  });

  it('should have valid `namespaceURI for `title` tag`', () => {
    expect(<title />).toHaveProperty(prop, xhtmlNS);
    expect(<title __ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<title __ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have HTML `namespaceURI` for `style` tag', () => {
    expect(<style />).toHaveProperty(prop, xhtmlNS);
    expect(<style __ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<style __ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have SVG `namespaceURI` for `a` tag', () => {
    expect(<a />).toHaveProperty(prop, xhtmlNS);
    expect(<a __ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<a __ns={svgNS} />).toHaveProperty(prop, svgNS);
  });

  it('should have SVG `namespaceURI` for `script` tag', () => {
    expect(<script />).toHaveProperty(prop, xhtmlNS);
    expect(<script __ns={xhtmlNS} />).toHaveProperty(prop, xhtmlNS);
    expect(<script __ns={svgNS} />).toHaveProperty(prop, svgNS);
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
    const props = { __ns: svgNS } as const;

    expect(<style {...props} />).toHaveProperty(prop, svgNS);
  });

  it('should not break code if spread identifier has the same name SVG', () => {
    const __ns = { __ns: svgNS } as const;

    expect(<style {...__ns} />).toHaveProperty(prop, svgNS);
  });

  it('should not break code if spread identifier has the same name HTML', () => {
    const __ns = { __ns: xhtmlNS } as const;

    expect(<style {...__ns} />).toHaveProperty(prop, xhtmlNS);
  });

  it('should not break code if spread identifier has name `__ns`', () => {
    const __ns = { id: 'param' };

    expect(<style {...__ns} />).toHaveProperty(prop, xhtmlNS);
  });
});
