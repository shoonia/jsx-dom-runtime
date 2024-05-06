import { jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

describe('SubmitEvent', () => {
  it('should add `onsubmit` handler', () => {
    const handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form onsubmit={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:submit` handler', () => {
    const handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form on:submit={handleEvent} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should fire `submit` event', () => {
    const handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    <form
      ref={(form) => form.submit()}
      on:submit={handleEvent}
    />;

    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  it('should add `on:submit` object listener', () => {
    const handleEvent: JSX.SubmitEventListener<HTMLFormElement> = jest.fn();

    fireEvent.submit(<form on:submit={{ handleEvent }} />);
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });
});
