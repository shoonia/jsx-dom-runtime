describe('babel-plugin-jsx-syntax: Frament', () => {
  const start = 'import{Fragment as _Fragment}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should inline FC', async () => {
    await expect('<><App /></>;').toBeTransform(start + '_Fragment(App({}));');
  });

  it('should inline two FC', async () => {
    await expect('<><App /><App /></>;').toBeTransform(start + '_Fragment([App({}),App({})]);');
  });

  it('should inline with attributes', async () => {
    await expect('<><App key="value" /></>;').toBeTransform(start + '_Fragment(App({key:"value"}));');
  });

  it('should inline with two attributes', async () => {
    await expect('<><App key="value" name="data" /></>;').toBeTransform(start + '_Fragment(App({key:"value",name:"data"}));');
  });

  it('should inline with attibute number literal', async () => {
    await expect('<><App index={1} /></>;').toBeTransform(start + '_Fragment(App({index:1}));');
  });

  it('should inline with attibute string literal', async () => {
    await expect('<><App index={"1"} /></>;').toBeTransform(start + '_Fragment(App({index:"1"}));');
  });

  it('should inline with attibute boolean (true) literal', async () => {
    await expect('<><App index /></>;').toBeTransform(start + '_Fragment(App({index:true}));');
  });

  it('should inline with attibute boolean (false) literal', async () => {
    await expect('<><App index={false} /></>;').toBeTransform(start + '_Fragment(App({index:false}));');
  });

  it('should inline with attibute array literal', async () => {
    await expect('<><App list={[]} /></>;').toBeTransform(start + '_Fragment(App({list:[]}));');
  });

  it('should inline with attibute object literal', async () => {
    await expect('<><App list={{}} /></>;').toBeTransform(start + '_Fragment(App({list:{}}));');
  });

  it('should inline with attibute regexp literal', async () => {
    await expect('<><App param={/a-z/} /></>;').toBeTransform(start + '_Fragment(App({param:/a-z/}));');
  });

  it('should inline with attibute null literal', async () => {
    await expect('<><App param={null} /></>;').toBeTransform(start + '_Fragment(App({param:null}));');
  });

  it('should inline with attibute undefined literal', async () => {
    await expect('<><App param={undefined} /></>;').toBeTransform(start + '_Fragment(App({param:undefined}));');
  });

  it('should inline with attibute arrow function literal', async () => {
    await expect('<><App cd={() => {}} /></>;').toBeTransform(start + '_Fragment(App({cd:()=>{}}));');
  });

  it('should inline with attibute function declaration literal', async () => {
    await expect('<><App cd={function() {}} /></>;').toBeTransform(start + '_Fragment(App({cd:function(){}}));');
  });
});
