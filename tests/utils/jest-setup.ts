import '@testing-library/jest-dom';
import { diffStringsUnified } from 'jest-diff';
import { jest } from '@jest/globals';

import { t } from './t';
import * as jsxRuntime from '../../jsx-runtime';

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

jest.unstable_mockModule('jsx-dom-runtime', () => jsxRuntime);
jest.unstable_mockModule('jsx-dom-runtime/jsx-runtime', () => jsxRuntime);

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
    const result = await t(source);

    const pass = code === result;

    return {
      pass,
      message: () => pass
        ? 'expected code not to be equal reslut'
        : 'expected code to be equal reslut\n\n' + diffStringsUnified(code, result),
    };
  }
});
