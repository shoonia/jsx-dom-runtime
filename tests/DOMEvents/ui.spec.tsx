import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('UI Events', () => {
  it('should add `onscroll` handler', () => {
    const spy = jest.fn();
    const main = <main onscroll={spy} />;

    fireEvent.scroll(main);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
