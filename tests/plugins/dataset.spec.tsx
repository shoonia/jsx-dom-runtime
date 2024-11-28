import { initDataset } from 'jsx-dom-runtime/plugins/dataset';

initDataset();

describe('plugins/dataset', () => {
  it('should add support `dataset` property', () => {
    expect(<div dataset={{ hello: 'world' }} />).toHaveAttribute('data-hello', 'world');
  });

  it('should add data-a,b,c attributes', () => {
    // @ts-expect-error Test
    expect(<div dataset={{ a: true, b: false, c: 0, d: null, e: undefined }} />).toHaveOuterHTML(
      '<div data-a="true" data-b="false" data-c="0"></div>'
    );
  });

  it('should transform', async () => {
    await expect('<div dataset={{ a: "a", b: "b", c: "c" }} />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("div",{dataset:{a:"a",b:"b",c:"c"}});'
    );
  });
});
