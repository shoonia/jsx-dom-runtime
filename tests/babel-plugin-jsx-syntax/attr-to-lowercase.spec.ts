import { jsxImport } from '../utils';

describe('CamelCase attributes name to lower case', () => {
  it('should transform `tabIndex` only in HTML', async () => {
    await expect(`
      <div tabIndex="0" />;
      <App tabIndex="0"/>;
    `).toBeTransform(jsxImport`_jsx("div",{tabindex:"0"});App({tabIndex:"0"});`);
  });

  it('should transform `referrerPolicy` attribute', async () => {
    await expect(`
      <a referrerPolicy="origin" />;
      <App referrerPolicy="origin" />;
    `).toBeTransform(jsxImport`_jsx("a",{referrerpolicy:"origin"});App({referrerPolicy:"origin"});`);
  });

  it('should transform `enterKeyHint` attribute', async () => {
    await expect(`
      <input enterKeyHint="go" />;
      <App enterKeyHint="go" />;
    `).toBeTransform(jsxImport`_jsx("input",{enterkeyhint:"go"});App({enterKeyHint:"go"});`);
  });

  it('should transform `maxLength/minLength` attribute', async () => {
    await expect(`
      <textarea maxLength="2" minLength="1" />;
      <App maxLength="2" minLength="1" />;
    `).toBeTransform(jsxImport`_jsx("textarea",{maxlength:"2",minlength:"1"});App({maxLength:"2",minLength:"1"});`);
  });

  it('should transform `inputMode` attribute', async () => {
    await expect(`
      <input inputMode="numeric" />;
      <App inputMode="numeric" />;
    `).toBeTransform(jsxImport`_jsx("input",{inputmode:"numeric"});App({inputMode:"numeric"});`);
  });

  it('should transform structured item* attributes', async () => {
    await expect('<div itemID="a" itemProp="b" itemScope itemRef="c" itemType="d" />;')
      .toBeTransform(jsxImport`_jsx("div",{itemid:"a",itemprop:"b",itemscope:"",itemref:"c",itemtype:"d"});`);
  });

  it('should transform `accessKey` attribute', async () => {
    await expect(`
      <button accessKey="s" />;
      <App accessKey="s" />;
    `).toBeTransform(jsxImport`_jsx("button",{accesskey:"s"});App({accessKey:"s"});`);
  });

  it('should transform `elementTiming` attribute', async () => {
    await expect(`
      <p elementTiming="data" />;
      <App elementTiming="data" />;
    `).toBeTransform(jsxImport`_jsx("p",{elementtiming:"data"});App({elementTiming:"data"});`);
  });

  it('should transform `fetchPriority` attribute', async () => {
    await expect(`
      <img fetchPriority="low" />;
      <App fetchPriority="low" />;
    `).toBeTransform(jsxImport`_jsx("img",{fetchpriority:"low"});App({fetchPriority:"low"});`);
  });

  it('should transform `dirName` attribute', async () => {
    await expect(`
      <input dirName="rtl" />;
      <App dirName="rtl" />;
    `).toBeTransform(jsxImport`_jsx("input",{dirname:"rtl"});App({dirName:"rtl"});`);
  });

  it('should transform `formTarget` attribute', async () => {
    await expect(`
      <input formTarget="_salf" />;
      <App formTarget="_salf" />;
    `).toBeTransform(jsxImport`_jsx("input",{formtarget:"_salf"});App({formTarget:"_salf"});`);
  });

  it('should transform `formMethod` attribute', async () => {
    await expect(`
      <input formMethod="get" />;
      <App formMethod="get" />;
    `).toBeTransform(jsxImport`_jsx("input",{formmethod:"get"});App({formMethod:"get"});`);
  });

  it('should transform `formEncType` attribute', async () => {
    await expect(`
      <button formEncType="text/plain" />;
      <App formEncType="text/plain" />;
    `).toBeTransform(jsxImport`_jsx("button",{formenctype:"text/plain"});App({formEncType:"text/plain"});`);
  });

  it('should transform `formAction` attribute', async () => {
    await expect(`
      <button formAction="/" />;
      <App formAction="/" />;
    `).toBeTransform(jsxImport`_jsx("button",{formaction:"/"});App({formAction:"/"});`);
  });

  it('should transform `controlsList` attribute', async () => {
    await expect(`
      <video controlsList="nofullscreen" />;
      <App controlsList="nofullscreen" />;
    `).toBeTransform(jsxImport`_jsx("video",{controlslist:"nofullscreen"});App({controlsList:"nofullscreen"});`);
  });

  it('should transform `dateTime` attribute', async () => {
    await expect(`
      <time dateTime="2018-07-07">July 7</time>;
      <App dateTime="2018-07-07">July 7</App>
    `).toBeTransform(jsxImport`_jsx("time",{datetime:"2018-07-07"},"July 7");App({dateTime:"2018-07-07",children:"July 7"});`);
  });

  it('should transform `colSpan` attribute', async () => {
    await expect(`
      <td colSpan={10} />;
      <App colSpan={10} />;
    `).toBeTransform(jsxImport`_jsx("td",{colspan:10});App({colSpan:10});`);
  });

  it('should transform `colSpan` attribute', async () => {
    await expect(`
      <td rowSpan={10} />;
      <App rowSpan={10} />;
    `).toBeTransform(jsxImport`_jsx("td",{rowspan:10});App({rowSpan:10});`);
  });

  it('should transform `useMap` attribute', async () => {
    await expect('<img useMap="#infographic" src="info.png" alt="infographic" />')
      .toBeTransform(jsxImport`_jsx("img",{usemap:"#infographic",src:"info.png",alt:"infographic"});`);
  });

  it('should transform `srcSet` attribute', async () => {
    await expect('<img src="imag-1280.jpg" srcSet="image-300.jpg 300w, image-768.jpg 768w, image-1280.jpg 1280w" sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px" />')
      .toBeTransform(jsxImport`_jsx("img",{src:"imag-1280.jpg",srcset:"image-300.jpg 300w, image-768.jpg 768w, image-1280.jpg 1280w",sizes:"(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"});`);
  });

  it('should transform `shadowRootMode` attribute', async () => {
    await expect('<template shadowRootMode="closed" />')
      .toBeTransform(jsxImport`_jsx("template",{shadowrootmode:"closed"});`);
  });
});
