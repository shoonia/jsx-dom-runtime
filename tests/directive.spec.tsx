import { jsxImport } from './utils';

describe('directives', () => {
  it('should join attr:* props:* directives and ref together with a user `ref` in the end', async () => {
    await expect('<p attr:hello="1" prop:world="2" ref={userRef} id="p" />').toBeTransform(
      jsxImport`_jsx("p",{id:"p",ref:[e=>{e.setAttribute("hello","1");e.world="2"},userRef]});`
    );
  });

  it('should join attr:* props:* directives and ref together with a user `ref` in the start', async () => {
    await expect('<p ref={userRef} attr:hello="1" prop:world="2" id="p" />').toBeTransform(
      jsxImport`_jsx("p",{id:"p",ref:[e=>{e.setAttribute("hello","1");e.world="2"},userRef]});`
    );
  });

  it('should correctly transform event handlers with `prop:* & attr:*` directives', async () => {
    await expect('<input type="text" attr:hello="world" prop:foo={foo} prop:bar={bar} oninvalid={fn2} onblur={fn3} />').toBeTransform(
      jsxImport`_jsx("input",{ref:e=>{e.setAttribute("hello","world");e.foo=foo;e.bar=bar;e.oninvalid=fn2;e.onblur=fn3},type:"text"});`
    );
  });

  it('should render using `attr:*` and `prop:*` directives with dataset & style', async () => {
    await expect('<p attr:test="qa" prop:_data={100} dataset={{ id: "123" }} style={{ color: "red" }} />')
    .toBeTransform(
      'import{setDataset as _setDataset,setStyle as _setStyle,jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("p",{ref:e=>{e.setAttribute("test","qa");e._data=100;_setDataset(e,{id:"123"});_setStyle(e,{color:"red"})}});'
    );
  });

  it('should render correct all directives', () => {
    const p = <p attr:test="qa" prop:_data={100} />;

    expect(p).toHaveAttribute('test', 'qa');
    expect(p).toHaveProperty('_data', 100);
    expect(p).not.toHaveProperty('test');
    expect(p).not.toHaveAttribute('_data');
  });

  it('should replace new line `\n` symbol to space', () => {
    // Attr:
    expect(
      <img
        attr:alt="
          hello
        "
      />
    ).toHaveOuterHTML('<img alt=" hello ">');
    // Prop:
    expect(
      <img
        prop:alt="
          hello
        "
      />
    ).toHaveOuterHTML('<img alt=" hello ">');
  });

  it('should keep the spaces', () => {
    expect(<img attr:alt="   hello   " />).toHaveOuterHTML('<img alt="   hello   ">');
    expect(<img prop:alt="   hello   " />).toHaveOuterHTML('<img alt="   hello   ">');
  });
});
