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

  it('should correctly transfomr event handlers with `prop:* & attr:*` directives', async () => {
    expect('<input type="text" attr:hello="world" prop:foo={foo} prop:bar={bar} oninvalid={fn3} onblur={fn4} />').toBeTransform(
      jsxImport`_jsx("input",{ref:e=>{e.setAttribute("hello","world");e.foo=foo;e.bar=bar;e.oninvalid=fn3;e.onblur=fn4},type:"text"});`
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
