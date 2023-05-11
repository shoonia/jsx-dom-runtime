import { t } from './transform';

describe('babel-plugin-jsx-syntax: props', () => {
  it('should work with attribute namespace', async () => {
    const result = await t('<App x:id="hello"/>;');
    expect(result).toBe('App({"x:id":"hello"});');
  });

  it('should work with dashes attributes', async () => {
    const result = await t('<App x-id="hello"/>;');
    expect(result).toBe('App({"x-id":"hello"});');
  });

  it('should work with spread attributes on the end', async () => {
    const result = await t('<App id="id" {...data} />;');
    expect(result).toBe('App({id:"id",...data});');
  });

  it('should work with spread attributes on the start', async () => {
    const result = await t('<App {...data} id="id" />;');
    expect(result).toBe('App({...data,id:"id"});');
  });

  it('should work with spread between attributes', async () => {
    const result = await t('<App title="title" {...data} id="id" />;');
    expect(result).toBe('App({title:"title",...data,id:"id"});');
  });
});
