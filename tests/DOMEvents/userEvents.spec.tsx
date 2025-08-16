import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('User events', () => {
  it('should add a few handlers', () => {
    using spyClick = jest.fn();
    using spyChange = jest.fn();
    const input = <input onclick={spyClick} onchange={spyChange} />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should transform camel case naming handlers', () => {
    using spyClick = jest.fn();
    using spyChange = jest.fn();

    const input = <input
      // @ts-expect-error
      onClick={spyClick}
      onChange={spyChange}
    />;

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(spyClick).toHaveBeenCalledTimes(1);
    expect(spyChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('xyz');
  });

  it('should add property', () => {
    using spy = jest.fn();

    expect(<div onclick={spy} />).toHaveProperty('onclick', spy);
  });
});
