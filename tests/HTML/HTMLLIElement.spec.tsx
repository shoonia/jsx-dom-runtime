describe('HTMLLIElement', () => {
  it('should have `value` attribute', () => {
    expect(<li value="3" />).toHaveValue(3);
    expect(<li value={5} />).toHaveValue(5);
  });
});
