import { t } from '../utils';

const result = '<text lang="en-US">This is some English text</text>';
const code = 'import{svgNS as _svgNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("text",{lang:"en-US",children:"This is some English text",ns:_svgNS});';

describe('SVG - `xml:lang` to `lang`', () => {
  it('should render `xml:lang` attribute', () => {
    expect(<text xml:lang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should render `xml:lang` attribute #2', () => {
    expect(<text xml:lang={'en-US'}>This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should render `xml:lang` attribute #3', () => {
    const lang = 'en-US';

    expect(<text xml:lang={lang}>This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    expect(await t`<text xml:lang="en-US">This is some English text</text>`).toBe(code);
  });
});

describe('SVG - `xmlLang` to `lang`', () => {
  it('should render `xmlLang` attribute', () => {
    /* @ts-expect-error */
    expect(<text xmlLang="en-US">This is some English text</text>).toHaveOuterHTML(result);
  });

  it('should transform attribute correctly', async () => {
    expect(await t`<text xmlLang="en-US">This is some English text</text>`).toBe(code);
  });
});
