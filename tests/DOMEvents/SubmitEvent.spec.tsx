import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('SubmitEvent', () => {
  it('should add `onsubmit` handler', () => {
    using handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form onsubmit={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:submit` handler', () => {
    using handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form on:submit={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:submit` object listener', () => {
    using handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form on:submit={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
