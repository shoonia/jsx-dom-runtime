import { t } from '../utils';

describe('babel-plugin-jsx-syntax: CallExpression', () => {
  it('should work with function', async () => {
    const result = await t`fn(<App />);`;
    expect(result).toBe('fn(App({}));');
  });

  it('should work with a few arguments', async () => {
    const result = await t`fn(<App />, 10, <Bob test />);`;
    expect(result).toBe('fn(App({}),10,Bob({test:true}));');
  });
});
