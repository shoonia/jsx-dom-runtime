describe('HTMLDataElement', () => {
  it('should have `value` attribute', () => {
    expect(<data value="3" />).toHaveValue('3');
    expect(<data value={5} />).toHaveValue('5');
  });

  it('should have text content', () => {
    expect(<data value="398">Mini Ketchup</data>).toHaveTextContent('Mini Ketchup');
  });
});
