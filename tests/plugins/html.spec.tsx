import { initHtml } from 'jsx-dom-runtime/plugins/html';

initHtml();

describe('plugins/html', () => {
  it('should add support `textContent` property', () => {
    expect(<div textContent="context" />).not.toHaveAttribute('textcontent');
    expect(<div textContent="context" />).toHaveInnerHTML('context');
  });

  it('should add support `innerHTML` property', () => {
    expect(<p innerHTML="<p>html</p>" />).not.toHaveAttribute('innerhtml');
    expect(<p innerHTML="<p>html</p>" />).toHaveInnerHTML('<p>html</p>');
  });

  it('should transform', async () => {
    await expect('<div textContent="context" />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{textContent:"context"});'
    );
  });
});
