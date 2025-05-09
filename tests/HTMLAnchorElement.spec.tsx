describe('HTMLAnchorElement', () => {
  it('should have `href` attribute', () => {
    expect(<a href="/" />).toHaveProperty('href', 'http://localhost/');
    expect(<a href="/" />).toHaveAttribute('href', '/');
  });

  it('should have `target` attribute', () => {
    expect(<a target="_blank" />).toHaveProperty('target', '_blank');
    expect(<a target="_blank" />).toHaveAttribute('target', '_blank');
  });

  it('should have `rel` attribute', () => {
    expect(<a rel="noopener" />).toHaveProperty('rel', 'noopener');
    expect(<a rel="noopener" />).toHaveAttribute('rel', 'noopener');
  });

  it('should have `download` attribute', () => {
    expect(<a download="img.png" />).toHaveProperty('download', 'img.png');
    expect(<a download="img.png" />).toHaveAttribute('download', 'img.png');
  });

  it('should have `type` attribute', () => {
    expect(<a type="image/png" />).toHaveProperty('type', 'image/png');
    expect(<a type="image/png" />).toHaveAttribute('type', 'image/png');
  });

  it('should have the `referrerPolicy` attribute', () => {
    expect(<a referrerPolicy="origin" />).toHaveAttribute('referrerpolicy', 'origin');
  });

  it('should have the `ping` attribute', () => {
    expect(<a ping="/ping" />).toHaveAttribute('ping', '/ping');
  });

  it('should have `hreflang` attribute', () => {
    expect(<a hreflang="en" />).toHaveProperty('hreflang', 'en');
    expect(<a hreflang="en" />).toHaveAttribute('hreflang', 'en');
  });

  it('should update `hostname` using `prop:hostname`', () => {
    const anchor = <a href="http://example.com" prop:hostname="site.com" />;

    expect(anchor).toHaveProperty('hostname', 'site.com');
    expect(anchor).toHaveProperty('href', 'http://site.com/');
  });

  it('should update `pathname` in `href` attribute using `prop:pathname`', () => {
    const anchor = <a href="http://example.com/old-path" prop:pathname="/new-path" />;

    expect(anchor).toHaveProperty('pathname', '/new-path');
    expect(anchor).toHaveProperty('href', 'http://example.com/new-path');
  });

  it('should update `protocol` in `href` attribute using `prop:protocol`', () => {
    const anchor = <a href="http://example.com" prop:protocol="https:" />;

    expect(anchor).toHaveProperty('protocol', 'https:');
    expect(anchor).toHaveProperty('href', 'https://example.com/');
  });

  it('should update `hash` in `href` attribute using `prop:hash`', () => {
    const anchor = <a href="http://example.com" prop:hash="#section" />;

    expect(anchor).toHaveProperty('hash', '#section');
    expect(anchor).toHaveProperty('href', 'http://example.com/#section');
  });

  it('should update `search` in `href` attribute using `prop:search`', () => {
    const anchor = <a href="http://example.com" prop:search="?query=test" />;

    expect(anchor).toHaveProperty('search', '?query=test');
    expect(anchor).toHaveProperty('href', 'http://example.com/?query=test');
  });

  it('should update `port` in `href` attribute using `prop:port`', () => {
    const anchor = <a href="http://example.com" prop:port="8080" />;

    expect(anchor).toHaveProperty('port', '8080');
    expect(anchor).toHaveProperty('href', 'http://example.com:8080/');
  });

  it('should update `host` in `href` attribute using `prop:host`', () => {
    const anchor = <a href="http://example.com" prop:host="site.com:3000" />;

    expect(anchor).toHaveProperty('host', 'site.com:3000');
    expect(anchor).toHaveProperty('href', 'http://site.com:3000/');
  });
});
