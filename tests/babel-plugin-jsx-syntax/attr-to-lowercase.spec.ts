describe('CamelCase attributes name to lower case', () => {
  const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform `tabIndex` only in HTML', async () => {
    await expect(`
      <div tabIndex="0" />;
      <App tabIndex="0"/>;
    `).toBeTransform(start + '_jsx("div",{tabindex:"0"});App({tabIndex:"0"});');
  });

  it('should transform `referrerPolicy` attribute', async () => {
    await expect(`
      <a referrerPolicy="origin" />;
      <App referrerPolicy="origin" />;
    `).toBeTransform(start + '_jsx("a",{referrerpolicy:"origin"});App({referrerPolicy:"origin"});');
  });

  it('should transform `enterKeyHint` attribute', async () => {
    await expect(`
      <input enterKeyHint="go" />;
      <App enterKeyHint="go" />;
    `).toBeTransform(start + '_jsx("input",{enterkeyhint:"go"});App({enterKeyHint:"go"});');
  });

  it('should transform `maxLength/minLength` attribute', async () => {
    await expect(`
      <textarea maxLength="2" minLength="1" />;
      <App maxLength="2" minLength="1" />;
    `).toBeTransform(start + '_jsx("textarea",{maxlength:"2",minlength:"1"});App({maxLength:"2",minLength:"1"});');
  });

  it('should transform `inputMode` attribute', async () => {
    await expect(`
      <input inputMode="numeric" />;
      <App inputMode="numeric" />;
    `).toBeTransform(start + '_jsx("input",{inputmode:"numeric"});App({inputMode:"numeric"});');
  });

  it('should transform structured item* attributes', async () => {
    await expect('<div itemID="a" itemProp="b" itemScope itemRef="c" itemType="d" />;')
      .toBeTransform(start + '_jsx("div",{itemid:"a",itemprop:"b",itemscope:"",itemref:"c",itemtype:"d"});');
  });

  it('should transform `accessKey` attribute', async () => {
    await expect(`
      <button accessKey="s" />;
      <App accessKey="s" />;
    `).toBeTransform(start + '_jsx("button",{accesskey:"s"});App({accessKey:"s"});');
  });

  it('should transform `elementTiming` attribute', async () => {
    await expect(`
      <p elementTiming="data" />;
      <App elementTiming="data" />;
    `).toBeTransform(start + '_jsx("p",{elementtiming:"data"});App({elementTiming:"data"});');
  });

  it('should transform `fetchPriority` attribute', async () => {
    await expect(`
      <img fetchPriority="low" />;
      <App fetchPriority="low" />;
    `).toBeTransform(start + '_jsx("img",{fetchpriority:"low"});App({fetchPriority:"low"});');
  });

  it('should transform `dirName` attribute', async () => {
    await expect(`
      <input dirName="rtl" />;
      <App dirName="rtl" />;
    `).toBeTransform(start + '_jsx("input",{dirname:"rtl"});App({dirName:"rtl"});');
  });

  it('should transform `formTarget` attribute', async () => {
    await expect(`
      <input formTarget="_salf" />;
      <App formTarget="_salf" />;
    `).toBeTransform(start + '_jsx("input",{formtarget:"_salf"});App({formTarget:"_salf"});');
  });

  it('should transform `formMethod` attribute', async () => {
    await expect(`
      <input formMethod="get" />;
      <App formMethod="get" />;
    `).toBeTransform(start + '_jsx("input",{formmethod:"get"});App({formMethod:"get"});');
  });

  it('should transform `formEncType` attribute', async () => {
    await expect(`
      <button formEncType="text/plain" />;
      <App formEncType="text/plain" />;
    `).toBeTransform(start + '_jsx("button",{formenctype:"text/plain"});App({formEncType:"text/plain"});');
  });

  it('should transform `formAction` attribute', async () => {
    await expect(`
      <button formAction="/" />;
      <App formAction="/" />;
    `).toBeTransform(start + '_jsx("button",{formaction:"/"});App({formAction:"/"});');
  });

  it('should transform `controlsList` attribute', async () => {
    await expect(`
      <video controlsList="nofullscreen" />;
      <App controlsList="nofullscreen" />;
    `).toBeTransform(start + '_jsx("video",{controlslist:"nofullscreen"});App({controlsList:"nofullscreen"});');
  });

  it('should transform `dateTime` attribute', async () => {
    await expect(`
      <time dateTime="2018-07-07">July 7</time>;
      <App dateTime="2018-07-07">July 7</App>
    `).toBeTransform(start + '_jsx("time",{datetime:"2018-07-07",children:"July 7"});App({dateTime:"2018-07-07",children:"July 7"});');
  });

  it('should transform `colSpan` attribute', async () => {
    await expect(`
      <td colSpan={10} />;
      <App colSpan={10} />;
    `).toBeTransform(start + '_jsx("td",{colspan:10});App({colSpan:10});');
  });

  it('should transform `colSpan` attribute', async () => {
    await expect(`
      <td rowSpan={10} />;
      <App rowSpan={10} />;
    `).toBeTransform(start + '_jsx("td",{rowspan:10});App({rowSpan:10});');
  });
});
