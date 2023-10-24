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

  it('should transform `enterKeyHint` attribute', async () => {
    const result = await t`
    <input enterKeyHint="go" />;
    <App enterKeyHint="go" />;
    `;
    expect(result).toBe(_jsx + '_jsx("input",{enterkeyhint:"go"});App({enterKeyHint:"go"});');
  });

  it('should transform `maxLength` attribute', async () => {
    const result = await t`
    <textarea maxLength="10" />;
    <App maxLength="10" />;
    `;
    expect(result).toBe(_jsx + '_jsx("textarea",{maxlength:"10"});App({maxLength:"10"});');
  });

  it('should transform `minLength` attribute', async () => {
    const result = await t`
    <textarea minLength="10" />;
    <App minLength="10" />;
    `;
    expect(result).toBe(_jsx + '_jsx("textarea",{minlength:"10"});App({minLength:"10"});');
  });

  it('should transform `inputMode` attribute', async () => {
    const result = await t`
    <input inputMode="numeric" />;
    <App inputMode="numeric" />;
    `;
    expect(result).toBe(_jsx + '_jsx("input",{inputmode:"numeric"});App({inputMode:"numeric"});');
  });

  it('should transform structured item* attributes', async () => {
    const result = await t`
    <div itemID="a" itemProp="b" itemScope itemRef="c" itemType="d" />;
    `;
    expect(result).toBe(_jsx + '_jsx("div",{itemid:"a",itemprop:"b",itemscope:"",itemref:"c",itemtype:"d"});');
  });
});
