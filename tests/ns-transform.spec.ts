describe('ns-transform', () => {
  const start = 'import{svgNs as _svgNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform <a> as SVG in the conditional operator', async () => {
    await expect(`
      <svg>
        {link ? <a href={link}>Welcome</a> : null}
      </svg>
    `).toBeTransform(start + '_jsx("svg",{_:_svgNs},link?/*#__PURE__*/_jsx("a",{href:link,_:_svgNs},"Welcome"):null);');
  });

  it('should transform <a> as SVG in the AND operator', async () => {
    await expect(`
      <svg>
        {link && <a href={link}>Welcome</a>}
      </svg>
    `).toBeTransform(start + '_jsx("svg",{_:_svgNs},link&&/*#__PURE__*/_jsx("a",{href:link,_:_svgNs},"Welcome"));');
  });

  it('should NO transform <a> as SVG in the conditional operator when it out of <svg> tag', async () => {
    await expect('const a = link ? <a href={link}>Welcome</a> : null;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link?/*#__PURE__*/_jsx("a",{href:link},"Welcome"):null;');
  });

  it('should NO transform <a> as SVG in the AND operator when it out of <svg> tag', async () => {
    await expect('const a = link && <a href={link}>Welcome</a>;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link&&/*#__PURE__*/_jsx("a",{href:link},"Welcome");');
  });

  it('should add namespace to any tags inside SVG parent element', async () => {
    await expect('<svg><unknown some="tag" /><div>hello</div></svg>').toBeTransform(
      start + '_jsx("svg",{_:_svgNs},[/*#__PURE__*/_jsx("unknown",{some:"tag",_:_svgNs}),/*#__PURE__*/_jsx("div",{_:_svgNs},"hello")]);',
    );
  });
});
