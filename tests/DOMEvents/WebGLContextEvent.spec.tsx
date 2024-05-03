describe('WebGLContextEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform WebGLContextEvent events', async () => {
    await expect(`
      <canvas
        on:webGLContextLost={fn1}
        on:webGLContextRestored={fn2}
        on:webGLContextCreationError={fn3}
      />
    `).toBeTransform(i + '_jsx("canvas",{$:{webglcontextlost:fn1,webglcontextrestored:fn2,webglcontextcreationerror:fn3}});');
  });
});
