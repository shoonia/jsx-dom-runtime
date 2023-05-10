import { t } from './transform';

describe('babel-plugin-jsx-syntax: ConditionalExpression', () => {
  it('should work with consequent', async () => {
    const result = await t('true ? <App /> : null;');
    expect(result).toBe('true?App({}):null;');
  });

  it('should work with alternate', async () => {
    const result = await t('false ? null : <App />;');
    expect(result).toBe('false?null:App({});');
  });

  it('should work with all', async () => {
    const result = await t('<One /> ? <Two /> : <Three />;');
    expect(result).toBe('One({})?Two({}):Three({});');
  });

  it('should work with children', async () => {
    const result = await t('<One /> ? <Two /> : <Three><p>hello</p></Three>;');
    expect(result).toBe('import{jsx as _jsx}from"jsx-dom-runtime";One({})?Two({}):Three({children:/*#__PURE__*/_jsx("p",{children:"hello"})});');
  });

  it('should work with children #2', async () => {
    const result = await t('<One /> ? <Two /> : <Three><p>hello</p><p>world</p></Three>;');
    expect(result).toBe('import{jsx as _jsx}from"jsx-dom-runtime";One({})?Two({}):Three({children:[/*#__PURE__*/_jsx("p",{children:"hello"}),/*#__PURE__*/_jsx("p",{children:"world"})]});');
  });
});
