import { fireEvent } from '@testing-library/dom';
import { jest } from '@jest/globals';

describe('Form Events', () => {
  it('should add `onchange` handler', () => {
    const spy = jest.fn();
    const form = <form onchange={spy} />;

    fireEvent.change(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oninput` handler', () => {
    const spy = jest.fn();
    const form = <form oninput={spy} />;

    fireEvent.input(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onreset` handler', () => {
    const spy = jest.fn();
    const form = <form onreset={spy} />;

    fireEvent.reset(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `onsubmit` handler', () => {
    const spy = jest.fn();
    const form = <form onsubmit={spy} />;

    fireEvent.submit(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should fire `submit` event', () => {
    const spy = jest.fn();
    const div = <form onsubmit={spy} /> as HTMLFormElement;

    div.submit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should add `oninvalid` handler', () => {
    const spy = jest.fn();
    const form = <form oninvalid={spy} />;

    fireEvent.invalid(form);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
