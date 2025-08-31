import { jsxImport, t } from '../utils';

describe('JSX DOM Events', () => {
  it('should add a few handlers', async () => {
    await expect('<div on:click={() => {}} />').toBeTransform(
      jsxImport`_jsx("div",{$:{click:()=>{}}});`
    );
  });

  it('should add null event listeners', async () => {
    await expect('<div on:click={null} />').toBeTransform(
      jsxImport`_jsx("div",{$:{click:null}});`
    );
  });

  it('should throw an error for invalid event listener values in compilation', async () => {
    await expect(t`<div on:click={} />`)
    .rejects.toThrow(/JSX attributes must only be assigned a non-empty expression./);
  });

  it('should compile element without error when event listener value is missing or invalid', async () => {
    await expect('<div on:click />').toBeTransform(
      jsxImport`_jsx("div",{});`
    );
  });

  it('should not throw or crash when event listener value is missing or invalid at runtime', () => {
    // @ts-expect-error Test
    expect(<div on:click />).toBeDefined();
  });
});
