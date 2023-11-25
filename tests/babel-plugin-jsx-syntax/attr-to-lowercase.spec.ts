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

  it('should transform `maxLength/minLength` attribute', async () => {
    const result = await t`
    <textarea maxLength="2" minLength="1" />;
    <App maxLength="2" minLength="1" />;
    `;
    expect(result).toBe(_jsx + '_jsx("textarea",{maxlength:"2",minlength:"1"});App({maxLength:"2",minLength:"1"});');
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

  it('should transform `accessKey` attribute', async () => {
    const result = await t`
    <button accessKey="s" />;
    <App accessKey="s" />;
    `;
    expect(result).toBe(_jsx + '_jsx("button",{accesskey:"s"});App({accessKey:"s"});');
  });

  it('should transform `elementTiming` attribute', async () => {
    const result = await t`
    <p elementTiming="data" />;
    <App elementTiming="data" />;
    `;
    expect(result).toBe(_jsx + '_jsx("p",{elementtiming:"data"});App({elementTiming:"data"});');
  });

  it('should transform `fetchPriority` attribute', async () => {
    const result = await t`
    <img fetchPriority="low" />;
    <App fetchPriority="low" />;
    `;
    expect(result).toBe(_jsx + '_jsx("img",{fetchpriority:"low"});App({fetchPriority:"low"});');
  });

  it('should transform `dirName` attribute', async () => {
    const result = await t`
    <input dirName="rtl" />;
    <App dirName="rtl" />;
    `;
    expect(result).toBe(_jsx + '_jsx("input",{dirname:"rtl"});App({dirName:"rtl"});');
  });

  it('should transform `formTarget` attribute', async () => {
    const result = await t`
    <input formTarget="_salf" />;
    <App formTarget="_salf" />;
    `;
    expect(result).toBe(_jsx + '_jsx("input",{formtarget:"_salf"});App({formTarget:"_salf"});');
  });

  it('should transform `formMethod` attribute', async () => {
    const result = await t`
    <input formMethod="get" />;
    <App formMethod="get" />;
    `;
    expect(result).toBe(_jsx + '_jsx("input",{formmethod:"get"});App({formMethod:"get"});');
  });

  it('should transform `formEncType` attribute', async () => {
    const result = await t`
    <button formEncType="text/plain" />;
    <App formEncType="text/plain" />;
    `;
    expect(result).toBe(_jsx + '_jsx("button",{formenctype:"text/plain"});App({formEncType:"text/plain"});');
  });

  it('should transform `formAction` attribute', async () => {
    const result = await t`
    <button formAction="/" />;
    <App formAction="/" />;
    `;
    expect(result).toBe(_jsx + '_jsx("button",{formaction:"/"});App({formAction:"/"});');
  });

  it('should transform `controlsList` attribute', async () => {
    const result = await t`
    <video controlsList="nofullscreen" />;
    <App controlsList="nofullscreen" />;
    `;
    expect(result).toBe(_jsx + '_jsx("video",{controlslist:"nofullscreen"});App({controlsList:"nofullscreen"});');
  });

  it('should transform `dateTime` attribute', async () => {
    const result = await t`
    <time dateTime="2018-07-07">July 7</time>;
    <App dateTime="2018-07-07">July 7</App>
    `;
    expect(result).toBe(_jsx + '_jsx("time",{datetime:"2018-07-07",children:"July 7"});App({dateTime:"2018-07-07",children:"July 7"});');
  });
});
