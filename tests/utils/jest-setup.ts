import '@testing-library/jest-dom';
import { diffStringsUnified } from 'jest-diff';
import { transformAsync } from '@babel/core';

import preset from '../../babel-preset/index.cjs';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

expect.extend({
  toHaveOuterHTML(node: HTMLElement, html: string) {
    const val = node.outerHTML;
    const pass = val === html;

    return {
      pass,
      message: () => pass
        ? 'expected value not to be equal outerHTML'
        : 'expected value to be equal outerHTML\n\n' + diffStringsUnified(val, html),
    };
  },

  toHaveInnerHTML(node: HTMLElement, html: string) {
    const val = node.innerHTML;
    const pass = val === html;

    return {
      pass,
      message: () => pass
        ? 'expected value not to be equal innerHTML'
        : 'expected value to be equal innerHTML\n\n' + diffStringsUnified(val, html),
    };
  },

  toHaveCssText(node: HTMLElement, css: string) {
    const val = node.style.cssText;
    const pass = val === css;

    return {
      pass,
      message: () => pass
        ? 'expected value not to be equal style.cssText'
        : 'expected value to be equal style.cssText\n\n' + diffStringsUnified(val, css),
    };
  },

  async toBeTransform(source: string, code: string) {
    const reslut = await transformAsync(source, {
      presets: [preset],
      ast: false,
      minified: true,
      babelrc: false,
      sourceMaps: false,
    });

    const pass = code === reslut?.code;

    return {
      pass,
      message: () => pass
        ? 'expected code not to be equal reslut'
        : 'expected code to be equal reslut\n\n' + diffStringsUnified(code, reslut?.code),
    };
  }
});
