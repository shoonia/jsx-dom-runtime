describe('draggable attribute', () => {
  const start = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform empty `draggable` value to "true"', async () => {
    await expect('<div draggable />').toBeTransform(start + '_jsx("div",{draggable:"true"});');
  });

  it('should transform `draggable` value `true` to "true"', async () => {
    await expect('<div draggable={true} />').toBeTransform(start + '_jsx("div",{draggable:"true"});');
  });

  it('should transform `draggable` value `false` to "false"', async () => {
    await expect('<div draggable={false} />').toBeTransform(start + '_jsx("div",{draggable:"false"});');
  });

  it('should correct compiled string "true"', async () => {
    await expect('<div draggable="true" />').toBeTransform(start + '_jsx("div",{draggable:"true"});');
  });

  it('should correct compiled string "false"', async () => {
    await expect('<div draggable="false" />').toBeTransform(start + '_jsx("div",{draggable:"false"});');
  });
});
