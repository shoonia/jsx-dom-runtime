describe('FocusEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform FocusEvent events', async () => {
    await expect(`
      <input
        type="tel"
        on:focus={fn1}
        on:blur={fn2}
        on:focusIn={fn3}
        on:focusOut={fn4}
      />
    `).toBeTransform(i + '_jsx("input",{type:"tel",$:{focus:fn1,blur:fn2,focusin:fn3,focusout:fn4}});');
  });
});
