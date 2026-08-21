import { signal } from 'jsx-dom-runtime';
import type { CSSProperties } from 'jsx-dom-runtime';
import { styleImport, jsxImport } from './utils/t';

describe('Style attribute', () => {
  it('should add style as a string', () => {
    expect(<div style="color: red; padding: 10px;" />).toHaveCssText(
      'color: red; padding: 10px;',
    );
  });

  it('should add style as an object', () => {
    expect(<div style={{
      color: 'black',
      border: '1px solid white',
    }} />).toHaveCssText(
      'color: black; border: 1px solid white;',
    );
  });

  it('should support signal string', () => {
    const style = signal('font-size: 16px;');
    const p = <p style={style} />;

    expect(p).toHaveCssText('font-size: 16px;');
    style.set('font-size: 18px;');
    expect(p).toHaveCssText('font-size: 18px;');
  });

  it('should support signal object', () => {
    const style = signal<CSSProperties>({
      color: 'red',
      backgroundColor: 'blue',
    });
    const span = <span style={style} />;

    expect(span).toHaveCssText('color: red; background-color: blue;');
    style.set({
      color: 'green',
      backgroundColor: 'yellow',
    });
    expect(span).toHaveCssText('color: green; background-color: yellow;');
  });

  it('should add CSS custom property as a string', () => {
    expect(<div style="--x: red;" />).toHaveCssText('--x: red;');
  });

  it('should add CSS custom property as an object', () => {
    expect(<div style={{ '--x': 'red' }} />).toHaveCssText('--x: red;');
    expect(<div style={{ '--y': 'yellow', '--b': 'blue' }} />).toHaveCssText('--y: yellow; --b: blue;');
  });

  it('should add inline CSS with `cssText` property', () => {
    expect(<p style={{ cssText: 'padding: 15px; margin: 15px;' }} />).toHaveCssText('padding: 15px; margin: 15px;');
  });

  it('should not braken when value is undefined', () => {
    expect(<div style={undefined} />).toHaveCssText('');
  });

  it('should transform style attribute to setStyle directive with object', async () => {
    await expect('<div style={{ color: "red", backgroundColor: "blue" }} />')
      .toBeTransform(styleImport`_jsx("div",{ref:e=>_setStyle(e,{color:"red",backgroundColor:"blue"})});`);
  });

  it('should add style as a string (no extra util)', async () => {
    await expect('<div style="color: red; background-color: blue;" />')
      .toBeTransform(jsxImport`_jsx("div",{style:"color: red; background-color: blue;"});`);
  });

  it('should add style as a template literal (no extra util)', async () => {
    await expect('<div style={`color: ${color}; background-color: ${backgroundColor};`} />')
      .toBeTransform(jsxImport('_jsx("div",{style:`color: ${color}; background-color: ${backgroundColor};`});'));
  });

  it('should transform style attribute to setStyle directive when using variable', async () => {
    await expect('<div style={style} />')
      .toBeTransform(styleImport`_jsx("div",{ref:e=>_setStyle(e,style)});`);
  });
});
