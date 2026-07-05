import { mathmlImport, svgImport } from './utils/t';

describe('ns-transform', () => {
  it('should transform <a> as SVG in the conditional operator', async () => {
    await expect(`
      <svg>
        {link ? <a href={link}>Welcome</a> : null}
      </svg>
    `).toBeTransform(svgImport`_jsx("svg",{_:_svgNs},link?/*#__PURE__*/_jsx("a",{href:link,_:_svgNs},"Welcome"):null);`);
  });

  it('should transform <a> as SVG in the AND operator', async () => {
    await expect(`
      <svg>
        {link && <a href={link}>Welcome</a>}
      </svg>
    `).toBeTransform(svgImport`_jsx("svg",{_:_svgNs},link&&/*#__PURE__*/_jsx("a",{href:link,_:_svgNs},"Welcome"));`);
  });

  it('should transform <a> as MathML in the conditional operator', async () => {
    await expect(`
      <math>
        {link ? <a href={link}>Welcome</a> : null}
      </math>
    `).toBeTransform(mathmlImport`_jsx("math",{_:_mathmlNs},link?/*#__PURE__*/_jsx("a",{href:link,_:_mathmlNs},"Welcome"):null);`);
  });

  it('should transform <a> as MathML in nested MathML parent elements', async () => {
    await expect(`
      <math>
        <mrow>{link && <a href={link}>Welcome</a>}</mrow>
      </math>
    `).toBeTransform(mathmlImport`_jsx("math",{_:_mathmlNs},/*#__PURE__*/_jsx("mrow",{_:_mathmlNs},link&&/*#__PURE__*/_jsx("a",{href:link,_:_mathmlNs},"Welcome")));`);
  });

  it('should NO transform <a> as SVG in the conditional operator when it out of <svg> tag', async () => {
    await expect('const a = link ? <a href={link}>Welcome</a> : null;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link?/*#__PURE__*/_jsx("a",{href:link},"Welcome"):null;');
  });

  it('should NO transform <a> as SVG in the AND operator when it out of <svg> tag', async () => {
    await expect('const a = link && <a href={link}>Welcome</a>;')
      .toBeTransform('import{jsx as _jsx}from"jsx-dom-runtime";const a=link&&/*#__PURE__*/_jsx("a",{href:link},"Welcome");');
  });

  it('should add namespace to any tags inside SVG parent element', async () => {
    await expect('<svg><unknown some="tag" /><div>hello</div></svg>').toBeTransform(
      svgImport`_jsx("svg",{_:_svgNs},[/*#__PURE__*/_jsx("unknown",{some:"tag",_:_svgNs}),/*#__PURE__*/_jsx("div",{_:_svgNs},"hello")]);`,
    );
  });

  it('should add namespace to any tags inside MathML parent element', async () => {
    await expect('<math><unknown some="tag" /><a href={link}>hello</a></math>').toBeTransform(
      mathmlImport`_jsx("math",{_:_mathmlNs},[/*#__PURE__*/_jsx("unknown",{some:"tag",_:_mathmlNs}),/*#__PURE__*/_jsx("a",{href:link,_:_mathmlNs},"hello")]);`,
    );
  });
});
