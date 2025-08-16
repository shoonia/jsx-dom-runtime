import { jest } from '@jest/globals';

describe('HTMLDialogElement', () => {
  it('should have `open` attribute', () => {
    expect(<dialog open />).toHaveAttribute('open');
    expect(<dialog open />).toHaveProperty('open', true);
  });

  it('should NOT have `open` attribute', () => {
    expect(<dialog open={false} />).not.toHaveAttribute('open');
    expect(<dialog open={false} />).toHaveProperty('open', false);
  });

  it('should have `open` attribute with string value', () => {
    expect(<dialog open="" />).toHaveProperty('open', true);
  });

  it('should add `ontoggle` handler', () => {
    using spy = jest.fn();
    expect(<dialog ontoggle={spy} />).toHaveProperty('ontoggle', spy);
  });

  it('should add `oncancel` handler', () => {
    using spy = jest.fn();
    expect(<dialog oncancel={spy} />).toHaveProperty('oncancel', spy);
  });

  it('should add `onclose` handler', () => {
    using spy = jest.fn();
    expect(<dialog onclose={spy} />).toHaveProperty('onclose', spy);
  });

  it('should have `closedBy` attribute', () => {
    expect(<dialog closedBy="closerequest" />).toHaveAttribute('closedby', 'closerequest');
  });

  it('should have `closedBy` property', () => {
    expect(<dialog prop:closedBy="closerequest" />).toHaveProperty('closedBy', 'closerequest');
    expect(<dialog prop:closedBy="closerequest" />).not.toHaveAttribute('closedby');
  });

  it('should have `returnValue` property', () => {
    expect(<dialog prop:returnValue="hello" />).toHaveProperty('returnValue', 'hello');
    expect(<dialog prop:returnValue="hello" />).not.toHaveAttribute('returnvalue');
  });
});
