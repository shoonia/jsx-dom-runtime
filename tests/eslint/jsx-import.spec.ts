import { createRuleTester } from '../utils/eslint';

const error = (code: string, output: string): any => ({
  code,
  errors: [{ messageId: 'jsxImport' }],
  output,
});

createRuleTester('jsx-import', {
  valid: [
    'import { jsx } from \'jsx-dom-runtime\';',
    'import { jsx } from "jsx-dom-runtime";',
    'import { useText } from \'jsx-dom-runtime\';',
    'import something from \'other-package\';',
  ],
  invalid: [
    error(
      'import { jsx } from \'jsx-dom-runtime/jsx-runtime\';',
      'import { jsx } from \'jsx-dom-runtime\';',
    ),
    error(
      'import { useText } from \'jsx-dom-runtime/jsx-runtime\';',
      'import { useText } from \'jsx-dom-runtime\';',
    ),
    error(
      'import * as JSX from \'jsx-dom-runtime/jsx-runtime\';',
      'import * as JSX from \'jsx-dom-runtime\';',
    ),
    error(
      'import { jsx } from "jsx-dom-runtime/jsx-runtime";',
      'import { jsx } from "jsx-dom-runtime";',
    ),
  ],
});
