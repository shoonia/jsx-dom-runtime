describe('HTMLHtmlElement: <html>', () => {
  it('should render html', () => {
    expect(<html lang="en"></html>).toHaveOuterHTML('<html lang="en"></html>');
  });

  it('should have `lang` attribute', () => {
    expect(<html lang="en"></html>).toHaveAttribute('lang', 'en');
    expect(<html lang="en"></html>).toHaveProperty('lang', 'en');
  });
});
