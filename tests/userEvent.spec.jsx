import userEvent from '@testing-library/user-event';

describe('Click handler', () => {
  it('should add click handler', () => {
    const spyCallback = jest.fn();
    const btn = <button type="button" onClick={spyCallback}>click</button>;

    // @ts-ignore
    userEvent.click(btn);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });
});
