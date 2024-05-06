import { t } from '../utils';

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

    const promise =  t`<div id={}></div>`;

    await expect(promise).rejects.toBeInstanceOf(SyntaxError);
    await expect(promise).rejects.toThrow('unknown: JSX attributes must only be assigned a non-empty expression');
  });

  it('should be syntax error #2', async () => {
    expect.hasAssertions();

    const promise = t`<div {}></div>`;

    await expect(promise).rejects.toBeInstanceOf(SyntaxError);
    await expect(promise).rejects.toThrow('unknown: Unexpected token, expected "..."');
  });
});
