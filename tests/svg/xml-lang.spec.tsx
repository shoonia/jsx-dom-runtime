import { t } from '../utils';

const i = 'import{svgNS as _svgNS,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('SVG - `xml:lang` to `lang`', () => {
  it('should render `xml:lang` attribute', () => {
    expect(
      <text xml:lang="en-US">This is some English text</text>
    ).toHaveOuterHTML(
      '<text lang="en-US">This is some English text</text>',
    );
  });

  it('should transform attribute correctly', async () => {
    const relust = await t`<text xml:lang="en-US">This is some English text</text>`;
    expect(relust).toBe(i +'_jsx("text",{lang:"en-US",children:"This is some English text",ns:_svgNS});');
  });
});
