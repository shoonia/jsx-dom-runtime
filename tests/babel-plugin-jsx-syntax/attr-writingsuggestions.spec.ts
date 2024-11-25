describe('writingsuggestions attribute', () => {
  const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty `writingsuggestions` value to "true"', async () => {
    await expect('<input writingsuggestions />').toBeTransform(start + '_jsx("input",{writingsuggestions:"true"});');
  });

  it('should transform `writingsuggestions` value `false` to "false"', async () => {
    await expect('<input writingsuggestions={false} />').toBeTransform(start + '_jsx("input",{writingsuggestions:"false"});');
  });

  it('should correct compiled empty string', async () => {
    await expect('<input writingsuggestions="" />').toBeTransform(start + '_jsx("input",{writingsuggestions:""});');
  });

  it('should correct compiled string "true"', async () => {
    await expect('<input writingsuggestions="true" />').toBeTransform(start + '_jsx("input",{writingsuggestions:"true"});');
  });

  it('should correct compiled string "false"', async () => {
    await expect('<input writingsuggestions="false" />').toBeTransform(start + '_jsx("input",{writingsuggestions:"false"});');
  });
});
