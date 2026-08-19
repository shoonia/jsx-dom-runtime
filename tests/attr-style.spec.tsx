import { styleImport, jsxImport } from './utils/t';

describe('Style attribute', () => {
  it('should add style as a string', () => {
    expect(<div style="color: red; padding: 10px;" />).toHaveStyle(
      'color: red; padding: 10px;',
    );
  });

  it('should add style as an object', () => {
    expect(<div style={{
      color: 'black',
      border: '1px solid white',
    }} />).toHaveStyle(
      'color: black; border: 1px solid white;',
    );
  });

  it('should add CSS custom property as a string', () => {
    expect(<div style="--x: red;" />).toHaveStyle('--x: red;');
  });

  it('should add CSS custom property as an object', () => {
    expect(<div style={{ '--x': 'red' }} />).toHaveStyle('--x: red;');
    expect(<div style={{ '--y': 'yellow', '--b': 'blue' }} />).toHaveStyle('--y: yellow; --b: blue;');
  });

  it('should add inline CSS with `cssText` property', () => {
    expect(<p style={{ cssText: 'padding: 15px; margin: 15px;' }} />).toHaveStyle('padding: 15px; margin: 15px;');
  });

  it('should not braken when value is undefined', () => {
    expect(<div style={undefined} />).toHaveStyle('');
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
