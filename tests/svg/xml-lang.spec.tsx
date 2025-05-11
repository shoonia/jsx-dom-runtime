const result = '<text xml:lang="en-US">This is some English text</text>';
const code = 'import{svgNs as _svgNs,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("text",{"xml:lang":"en-US",_:_svgNs},"This is some English text");';

describe('SVG - `xml:lang` attribute', () => {
  it('should render `xml:lang` attribute', () => {
    expect(<text xml:lang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    await expect('<text xml:lang="en-US">This is some English text</text>').toBeTransform(code);
  });
});

describe('SVG - `xmlLang`', () => {
  it('should render `xmlLang` attribute', () => {
    /* @ts-expect-error */
    expect(<text xmlLang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    await expect('<text xmlLang="en-US">This is some English text</text>').toBeTransform(code);
  });
});
