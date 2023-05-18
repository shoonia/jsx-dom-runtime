import { t } from '../utils';

describe('babel-plugin-jsx-syntax: JSXMemberExpression', () => {
  it('should work with object methods', async () => {
    const result = await t('<App.UpperCase id="hello" />;');
    expect(result).toBe('App.UpperCase({id:"hello"});');
  });

  it('should work with object methods #2', async () => {
    const result = await t('<App.lowerCase id="hello" />;');
    expect(result).toBe('App.lowerCase({id:"hello"});');
  });

  it('should work with object methods #3', async () => {
    const result = await t('<App._snake_case_ id="hello" />;');
    expect(result).toBe('App._snake_case_({id:"hello"});');
  });

  it('should work with chain of properties', async () => {
    const result = await t('<App.one.two.three id="hello" />;');
    expect(result).toBe('App.one.two.three({id:"hello"});');
  });
});
