import { jsxImport } from '../utils/t';

describe('writingSuggestions attribute', () => {
  it('should transform empty `writingSuggestions` value to "true"', async () => {
    await expect('<input writingSuggestions />').toBeTransform(jsxImport`_jsx("input",{writingsuggestions:"true"});`);
  });

  it('should transform `writingSuggestions` value `false` to "false"', async () => {
    await expect('<input writingSuggestions={false} />').toBeTransform(jsxImport`_jsx("input",{writingsuggestions:"false"});`);
  });

  it('should correct compiled empty string', async () => {
    await expect('<input writingSuggestions="" />').toBeTransform(jsxImport`_jsx("input",{writingsuggestions:""});`);
  });

  it('should correct compiled string "true"', async () => {
    await expect('<input writingSuggestions="true" />').toBeTransform(jsxImport`_jsx("input",{writingsuggestions:"true"});`);
  });

  it('should correct compiled string "false"', async () => {
    await expect('<input writingSuggestions="false" />').toBeTransform(jsxImport`_jsx("input",{writingsuggestions:"false"});`);
  });
});
