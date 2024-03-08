describe('ns-transform', () => {
  const start = 'import{svgNs as _svgNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform <a> as SVG in the conditional operator', async () => {
    await expect(`
      <svg>
        {link ? <a href={link}>Welcome</a> : null}
      </svg>
    `).toBeTransform(start + '_jsx("svg",{children:link?/*#__PURE__*/_jsx("a",{href:link,children:"Welcome",ns:_svgNs}):null,ns:_svgNs});');
  });

  it('should transform <a> as SVG in the AND operator', async () => {
    await expect(`
      <svg>
        {link && <a href={link}>Welcome</a>}
      </svg>
    `).toBeTransform(start + '_jsx("svg",{children:link&&/*#__PURE__*/_jsx("a",{href:link,children:"Welcome",ns:_svgNs}),ns:_svgNs});');
  });

  it('should NO transform <a> as SVG in the conditional operator when it out of <svg> tag', async () => {
    await expect('const a = link ? <a href={link}>Welcome</a> : null;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link?/*#__PURE__*/_jsx("a",{href:link,children:"Welcome"}):null;');
  });

  it('should NO transform <a> as SVG in the AND operator when it out of <svg> tag', async () => {
    await expect('const a = link && <a href={link}>Welcome</a>;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link&&/*#__PURE__*/_jsx("a",{href:link,children:"Welcome"});');
  });
});
