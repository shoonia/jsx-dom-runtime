const t = new Date().toISOString();

describe('HTMLModElement - HTML elements implementing this interface: <ins>, <del>', () => {
  describe('<ins>', () => {
    it('should have `dateTime` attribute', () => {
      expect(<ins dateTime={t} />).toHaveProperty('dateTime', t);
      expect(<ins dateTime={t} />).toHaveAttribute('datetime', t);
    });

    it('should have `cite` attribute', () => {
      expect(<ins cite="https://shoonia.site/" />).toHaveProperty('cite', 'https://shoonia.site/');
      expect(<ins cite="https://shoonia.site/" />).toHaveAttribute('cite', 'https://shoonia.site/');
    });
  });

  describe('<del>', () => {
    it('should have `dateTime` attribute', () => {
      expect(<del dateTime={t} />).toHaveProperty('dateTime', t);
      expect(<del dateTime={t} />).toHaveAttribute('datetime', t);
    });

    it('should have `cite` attribute', () => {
      expect(<del cite="https://shoonia.site/" />).toHaveProperty('cite', 'https://shoonia.site/');
      expect(<del cite="https://shoonia.site/" />).toHaveAttribute('cite', 'https://shoonia.site/');
    });
  });
});
