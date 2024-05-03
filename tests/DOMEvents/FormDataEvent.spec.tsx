describe('FormDataEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform FormDataEvent events', async () => {
    await expect('<form on:formData={fn} />').toBeTransform(i + '_jsx("form",{$:{formdata:fn}});');
  });
});
