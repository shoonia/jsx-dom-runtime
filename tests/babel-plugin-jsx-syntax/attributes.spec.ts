describe('babel-plugin-jsx-syntax: props', () => {
  it('should work with attribute namespace', async () => {
    await expect('<App x:id="hello"/>;').toBeTransform('App({"x:id":"hello"});');
  });

  it('should work with dashes attributes', async () => {
    await expect('<App x-id="hello"/>;').toBeTransform('App({"x-id":"hello"});');
  });

  it('should work with spread attributes on the end', async () => {
    await expect('<App id="id" {...data} />;').toBeTransform('App({id:"id",...data});');
  });

  it('should work with spread attributes on the start', async () => {
    await expect('<App {...data} id="id" />;').toBeTransform('App({...data,id:"id"});');
  });

  it('should work with spread between attributes', async () => {
    await expect('<App title="title" {...data} id="id" />;')
      .toBeTransform('App({title:"title",...data,id:"id"});');
  });
});
