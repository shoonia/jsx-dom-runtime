/* eslint-disable jsx-dom-runtime/prefer-attributes-over-properties */
import { svgImport } from '../utils/t';

const result = '<text xml:lang="en-US">This is some English text</text>';
const code = svgImport`_jsx("text",{"xml:lang":"en-US",_:_svgNs},"This is some English text");`;

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
