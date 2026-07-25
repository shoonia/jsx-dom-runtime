import { fragmentImport } from "utils/t";

describe('babel-plugin-jsx-syntax: Frament', () => {
  it('should inline FC', async () => {
    await expect('<><App /></>;').toBeTransform(fragmentImport`_Fragment(App({}));`);
  });

  it('should inline two FC', async () => {
    await expect('<><App /><App /></>;').toBeTransform(fragmentImport`_Fragment([App({}),App({})]);`);
  });

  it('should inline with attributes', async () => {
    await expect('<><App key="value" /></>;').toBeTransform(fragmentImport`_Fragment(App({key:"value"}));`);
  });

  it('should inline with two attributes', async () => {
    await expect('<><App key="value" name="data" /></>;').toBeTransform(fragmentImport`_Fragment(App({key:"value",name:"data"}));`);
  });

  it('should inline with attibute number literal', async () => {
    await expect('<><App index={1} /></>;').toBeTransform(fragmentImport`_Fragment(App({index:1}));`);
  });

  it('should inline with attibute string literal', async () => {
    await expect('<><App index={"1"} /></>;').toBeTransform(fragmentImport`_Fragment(App({index:"1"}));`);
  });

  it('should inline with attibute boolean (true) literal', async () => {
    await expect('<><App index /></>;').toBeTransform(fragmentImport`_Fragment(App({index:true}));`);
  });

  it('should inline with attibute boolean (false) literal', async () => {
    await expect('<><App index={false} /></>;').toBeTransform(fragmentImport`_Fragment(App({index:false}));`);
  });

  it('should inline with attibute array literal', async () => {
    await expect('<><App list={[]} /></>;').toBeTransform(fragmentImport`_Fragment(App({list:[]}));`);
  });

  it('should inline with attibute object literal', async () => {
    await expect('<><App list={{}} /></>;').toBeTransform(fragmentImport`_Fragment(App({list:{}}));`);
  });

  it('should inline with attibute regexp literal', async () => {
    await expect('<><App param={/a-z/} /></>;').toBeTransform(fragmentImport`_Fragment(App({param:/a-z/}));`);
  });

  it('should inline with attibute null literal', async () => {
    await expect('<><App param={null} /></>;').toBeTransform(fragmentImport`_Fragment(App({param:null}));`);
  });

  it('should inline with attibute undefined literal', async () => {
    await expect('<><App param={undefined} /></>;').toBeTransform(fragmentImport`_Fragment(App({param:undefined}));`);
  });

  it('should inline with attibute arrow function literal', async () => {
    await expect('<><App cd={() => {}} /></>;').toBeTransform(fragmentImport`_Fragment(App({cd:()=>{}}));`);
  });

  it('should inline with attibute function declaration literal', async () => {
    await expect('<><App cd={function() {}} /></>;').toBeTransform(fragmentImport`_Fragment(App({cd:function(){}}));`);
  });

  it('should flatten nested array children in Fragment', async () => {
    await expect('<>{[1, [2, [3]]] }{4}</>;').toBeTransform(fragmentImport`_Fragment([1,2,3,4]);`);
  });
});
