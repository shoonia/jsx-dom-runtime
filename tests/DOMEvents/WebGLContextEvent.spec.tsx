import { jest } from '@jest/globals';
import { fireEvent, createEvent } from '@testing-library/dom';

import { jsxImport } from '../utils/t';

const contextLost = (node: Node) => fireEvent(node, createEvent('contextlost', node));
const contextRestored = (node: Node) => fireEvent(node, createEvent('contextrestored', node));

describe('WebGLContextEvent', () => {
  it('should transform WebGLContextEvent events', async () => {
    await expect(`
      <canvas
        on:webGLContextLost={fn1}
        on:webGLContextRestored={fn2}
        on:webGLContextCreationError={fn3}
      />
    `).toBeTransform(jsxImport`_jsx("canvas",{$:{webglcontextlost:fn1,webglcontextrestored:fn2,webglcontextcreationerror:fn3}});`);
  });

  it('should transform deprecated context events', async () => {
    await expect(`
      <canvas
        on:contextLost={fn1}
        on:contextRestored={fn2}
      />
    `).toBeTransform(jsxImport`_jsx("canvas",{$:{contextlost:fn1,contextrestored:fn2}});`);
  });

    it('should add `contextLost` function handler', () => {
      const spy: JSX.EventListener<HTMLCanvasElement> = jest.fn();

      contextLost(<canvas on:contextLost={spy} />);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should add `contextRestored` function handler', () => {
      const spy: JSX.EventListener<HTMLCanvasElement> = jest.fn();

      contextRestored(<canvas on:contextRestored={spy} />);
      expect(spy).toHaveBeenCalledTimes(1);
    });
});
