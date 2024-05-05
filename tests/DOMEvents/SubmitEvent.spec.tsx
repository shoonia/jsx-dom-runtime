import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('SubmitEvent', () => {
  it('should add `onsubmit` handler', () => {
    const spy = jest.fn();

    fireEvent.submit(<form onsubmit={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `on:submit` handler', () => {
    const spy = jest.fn();

    fireEvent.submit(<form on:submit={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should fire `submit` event', () => {
    const spy = jest.fn();

    <form
      ref={(form) => form.submit()}
      on:submit={spy}
    />;

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
