import { t } from '../utils';

const result = '<text xml:lang="en-US">This is some English text</text>';
const code = 'import{svgNS as _svgNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("text",{"xml:lang":"en-US",children:"This is some English text",ns:_svgNS});';

describe('SVG - `xml:lang` attribute', () => {
  it('should render `xml:lang` attribute', () => {
    expect(<text xml:lang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    expect(await t`<text xml:lang="en-US">This is some English text</text>`).toBe(code);
  });
});

describe('SVG - `xmlLang`', () => {
  it('should render `xmlLang` attribute', () => {
    /* @ts-expect-error */
    expect(<text xmlLang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    expect(await t`<text xmlLang="en-US">This is some English text</text>`).toBe(code);
  });
});
