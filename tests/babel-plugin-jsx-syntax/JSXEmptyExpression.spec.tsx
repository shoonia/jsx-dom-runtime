import { t } from '../utils/t';

describe('babel: JSXEmptyExpression', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should be ignored #1', async () => {
    await expect('<div>{}</div>').toBeTransform(i + '_jsx("div",{});');
  });

  it('should be ignored #2', async () => {
    await expect('<div>Hello{}, World!</div>')
      .toBeTransform(i + '_jsx("div",{children:["Hello",", World!"]});');
  });

  it('should be syntax error #1', async () => {
    expect.hasAssertions();
    await expect(t`<div id={}></div>`).rejects.toBeInstanceOf(SyntaxError);
  });

  it('should be syntax error #2', async () => {
    expect.hasAssertions();
    await expect(t`<div {}></div>`).rejects.toBeInstanceOf(SyntaxError);
  });
});