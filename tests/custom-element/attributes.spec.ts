import { jsxImport } from '../utils';

describe('Custom Element attributes', () => {
  it('should transform empty attribute to `true`', async () => {
    await expect('<my-element is-ready is:ready isReady />')
      .toBeTransform(jsxImport`_jsx("my-element",{"is-ready":true,"is:ready":true,isReady:true});`);
  });
});
