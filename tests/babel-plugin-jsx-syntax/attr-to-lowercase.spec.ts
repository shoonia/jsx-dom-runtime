import { t } from '../utils';

const _jsx = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

describe('CamelCase attributes name to lower case', () => {
  it('should transform `tabIndex` only in HTML', async () => {
    const result = await t`
    <div tabIndex="0" />;
    <App tabIndex="0"/>;
    `;
    expect(result).toBe(_jsx + '_jsx("div",{tabindex:"0"});App({tabIndex:"0"});');
  });

  it('should transform `referrerPolicy` attribute', async () => {
    const result = await t`
    <a referrerPolicy="origin" />;
    <App referrerPolicy="origin" />;
    `;
    expect(result).toBe(_jsx + '_jsx("a",{referrerpolicy:"origin"});App({referrerPolicy:"origin"});');
  });
});
