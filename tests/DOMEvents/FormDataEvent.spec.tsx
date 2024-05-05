import { jest } from '@jest/globals';
import { fireEvent, createEvent } from '@testing-library/dom';

const formData = (node: Node) => fireEvent(node, createEvent('formdata', node));

describe('FormDataEvent', () => {
  const i = 'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/';

  it('should transform FormDataEvent events', async () => {
    await expect('<form on:formData={fn} />').toBeTransform(i + '_jsx("form",{$:{formdata:fn}});');
  });

  it('should add `formdata` handler', () => {
    const spy = jest.fn();

    formData(<form on:formData={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
