import type { RuleTester } from 'eslint';
import { createRuleTester } from '../utils/eslint';

const error = (code: string): RuleTester.InvalidTestCase => ({
  code,
  errors: [{ messageId: 'noChildren' }],
});

const selfClose = (code: string, output: string): RuleTester.InvalidTestCase => ({
  code,
  output,
  errors: [{ messageId: 'mustSelfClose' }],
});

createRuleTester('no-children-in-void-element', {
  valid: [
    '<area />;',
    '<base />;',
    '<br />;',
    '<col />;',
    '<embed />;',
    '<hr />;',
    '<img />;',
    '<input />;',
    '<link />;',
    '<meta />;',
    '<param />;',
    '<source />;',
    '<track />;',
    '<wbr />;',
    '<div>Text</div>;',
    '<div children="foo" />;',
  ],
  invalid: [
    error('<area>foo</area>;'),
    error('<area children="foo" />;'),
    error('<area children={bar} />;'),
    error('<area><span /></area>;'),
    error('<base>foo</base>;'),
    error('<base children="foo" />;'),
    error('<base children={bar} />;'),
    error('<br>foo</br>;'),
    error('<br children="foo" />;'),
    error('<br children={bar} />;'),
    error('<col>foo</col>;'),
    error('<col children="foo" />;'),
    error('<col children={bar} />;'),
    error('<embed>foo</embed>;'),
    error('<embed children="foo" />;'),
    error('<embed children={bar} />;'),
    error('<hr>foo</hr>;'),
    error('<hr children="foo" />;'),
    error('<hr children={bar} />;'),
    error('<img>foo</img>;'),
    error('<img children="foo" />;'),
    error('<img children={bar} />;'),
    error('<input>foo</input>;'),
    error('<input children="foo" />;'),
    error('<input children={bar} />;'),
    error('<link>foo</link>;'),
    error('<link children="foo" />;'),
    error('<link children={bar} />;'),
    error('<meta>foo</meta>;'),
    error('<meta children="foo" />;'),
    error('<meta children={bar} />;'),
    error('<param>foo</param>;'),
    error('<param children="foo" />;'),
    error('<param children={bar} />;'),
    error('<source>foo</source>;'),
    error('<source children="foo" />;'),
    error('<source children={bar} />;'),
    error('<track>foo</track>;'),
    error('<track children="foo" />;'),
    error('<track children={bar} />;'),
    error('<wbr>foo</wbr>;'),
    error('<wbr children="foo" />;'),
    error('<wbr children={bar} />;'),
  ],
});

createRuleTester('no-children-in-void-element', {
  valid: [],
  invalid: [
    selfClose('<area></area>;', '<area />;'),
    selfClose('<base></base>;', '<base />;'),
    selfClose('<br></br>;', '<br />;'),
    selfClose('<col></col>;', '<col />;'),
    selfClose('<embed></embed>;', '<embed />;'),
    selfClose('<hr></hr>;', '<hr />;'),
    selfClose('<img></img>;', '<img />;'),
    selfClose('<input></input>;', '<input />;'),
    selfClose('<link></link>;', '<link />;'),
    selfClose('<meta></meta>;', '<meta />;'),
    selfClose('<param></param>;', '<param />;'),
    selfClose('<source></source>;', '<source />;'),
    selfClose('<track></track>;', '<track />;'),
    selfClose('<wbr></wbr>;', '<wbr />;'),
    selfClose('<><wbr></wbr></>;', '<><wbr /></>;'),
  ],
});
