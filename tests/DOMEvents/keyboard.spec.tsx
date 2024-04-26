import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('Keyboard Events', () => {
  it('should add `onkeydown` handler', () => {
    const spy = jest.fn();
    const input = <input onkeydown={spy} />;

    fireEvent.keyDown(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onkeyup` handler', () => {
    const spy = jest.fn();
    const input = <input onkeyup={spy} />;

    fireEvent.keyUp(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onkeypress` handler', () => {
    const spy = jest.fn();
    const input = <input onkeypress={spy} />;

    fireEvent.keyPress(input);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
