import { t } from './transform';

const start = 'import{Fragment as _Fragment}from"jsx-dom-runtime";/*#__PURE__*/';

describe('babel-plugin-jsx-syntax: attributes', () => {
  it('should work with attribute namespace', async () => {
    const result = await t('<><App x:id="hello"/></>;');
    expect(result).toBe(start + '_Fragment(App({"x:id":"hello"}));');
  });

  it('should work with dashes attributes', async () => {
    const result = await t('<><App x-id="hello"/></>;');
    expect(result).toBe(start + '_Fragment(App({"x-id":"hello"}));');
  });

  it('should work with spread attributes on the end', async () => {
    const result = await t('<><App id="id" {...data} /></>;');
    expect(result).toBe(start + '_Fragment(App({id:"id",...data}));');
  });

  it('should work with spread attributes on the start', async () => {
    const result = await t('<><App {...data} id="id" /></>;');
    expect(result).toBe(start + '_Fragment(App({...data,id:"id"}));');
  });

  it('should work with spread between attributes', async () => {
    const result = await t('<><App title="title" {...data} id="id" /></>;');
    expect(result).toBe(start + '_Fragment(App({title:"title",...data,id:"id"}));');
  });
});
