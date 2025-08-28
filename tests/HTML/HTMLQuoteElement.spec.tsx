describe('HTMLQuoteElement - HTML elements implementing this interface: <blockquote>, <q>', () => {
  describe('<q>', () => {
    it('should have `cite` attribute', () => {
      expect(<q cite="https://shooina.site" />).toHaveProperty('cite', 'https://shooina.site/');
      expect(<q cite="https://shooina.site" />).toHaveAttribute('cite', 'https://shooina.site');
    });
  });

  describe('<blockquote>', () => {
    it('should have `cite` attribute', () => {
      expect(<blockquote cite="https://shooina.site" />).toHaveProperty('cite', 'https://shooina.site/');
      expect(<blockquote cite="https://shooina.site" />).toHaveAttribute('cite', 'https://shooina.site');
    });
  });
});
