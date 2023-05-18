import { t } from '../utils';

describe('babel-plugin-jsx-syntax: Element', () => {
  it('should NOT have children', async () => {
    const result = await t('<App></App>;');
    expect(result).toBe('App({});');
  });

  it('should have one child number', async () => {
    const result = await t('<App>{1}</App>');
    expect(result).toBe('App({children:1});');
  });

  it('should have one child string', async () => {
    const result = await t('<App>1</App>');
    expect(result).toBe('App({children:"1"});');
  });

  it('should have three children', async () => {
    const result = await t('<App>{1} {2}</App>');
    expect(result).toBe('App({children:[1," ",2]});');
  });

  it('should return expression of JSXSpreadChild', async () => {
    const result = await t('<App>{...items}</App>');
    expect(result).toBe('App({children:items});');
  });

  it('should return expression of JSXSpreadChild on the start', async () => {
    const result = await t('<App>{...items} end</App>');
    expect(result).toBe('App({children:[items," end"]});');
  });

  it('should return expression of JSXSpreadChild on the end', async () => {
    const result = await t('<App>start {...items}</App>');
    expect(result).toBe('App({children:["start ",items]});');
  });

  it('should return expression of JSXSpreadChild between children', async () => {
    const result = await t('<App>start {...items} end</App>');
    expect(result).toBe('App({children:["start ",items," end"]});');
  });

  it('should return elemet with two JSXSpreadChild', async () => {
    const result = await t('<App>{...one}{...two}</App>');
    expect(result).toBe('App({children:[one,two]});');
  });

  it('should return elemet with array', async () => {
    const result = await t('<App>{[...a, ...b]}{...c}</App>');
    expect(result).toBe('App({children:[[...a,...b],c]});');
  });
});
