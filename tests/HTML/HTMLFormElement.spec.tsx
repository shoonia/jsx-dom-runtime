describe('HTMLFormElement', () => {
  it('should set src', () => {
    expect(
      <form method="GET" action="/submit">
        <fieldset>
          <legend>Choose your favorite monster</legend>
          <input type="radio" id="kraken" name="monster" />
          <label for="kraken">Kraken</label><br />
          <input type="radio" id="sasquatch" name="monster" />
          <label for="sasquatch">Sasquatch</label><br />
          <input type="radio" id="mothman" name="monster" />
          <label for="mothman">Mothman</label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    ).toHaveOuterHTML(
      '<form method="GET" action="/submit"><fieldset><legend>Choose your favorite monster</legend><input type="radio" id="kraken" name="monster"><label for="kraken">Kraken</label><br><input type="radio" id="sasquatch" name="monster"><label for="sasquatch">Sasquatch</label><br><input type="radio" id="mothman" name="monster"><label for="mothman">Mothman</label><button type="submit">Submit</button></fieldset></form>'
    );
  });

  it('should support autocomplete attribute', () => {
    expect(<form autocomplete="on" />).toHaveAttribute('autocomplete', 'on');
    expect(<form autocomplete="off" />).toHaveAttribute('autocomplete', 'off');
  });

  it('should support enctype attribute', () => {
    expect(<form enctype="multipart/form-data" />).toHaveAttribute('enctype', 'multipart/form-data');
    expect(<form enctype="multipart/form-data" />).toHaveProperty('enctype', 'multipart/form-data');
  });

  it('should support enctype attribute', () => {
    expect(<form method="GET" />).toHaveProperty('method', 'get');
    expect(<form method="GET" />).toHaveAttribute('method', 'GET');
  });

  it('should have `accept-charset` attribute', () => {
    expect(<form accept-charset="ASCII" />).toHaveProperty('acceptCharset', 'ASCII');
    expect(<form accept-charset="ASCII" />).toHaveAttribute('accept-charset', 'ASCII');
  });

  it('should have `acceptCharset` property', () => {
    expect(<form prop:acceptCharset="ASCII" />).toHaveProperty('acceptCharset', 'ASCII');
    expect(<form prop:acceptCharset="ASCII" />).toHaveAttribute('accept-charset', 'ASCII');
  });

  it('should have `noValidate` attribute', () => {
    expect(<form noValidate />).toHaveProperty('noValidate', true);
    expect(<form noValidate />).toHaveAttribute('novalidate', '');
  });

  it('should NOT have `noValidate` attribute', () => {
    expect(<form noValidate={false} />).toHaveProperty('noValidate', false);
    expect(<form noValidate={false} />).not.toHaveAttribute('novalidate');
  });

  it('should have `noValidate` attribute with string value', () => {
    expect(<form noValidate="" />).toHaveProperty('noValidate', true);
  });

  it('should have `action` attribute', () => {
    expect(<form action="/" />).toHaveProperty('action', 'http://localhost/');
    expect(<form action="/" />).toHaveAttribute('action', '/');
  });

  it('should have `name` attribute', () => {
    expect(<form name="form" />).toHaveProperty('name', 'form');
    expect(<form name="form" />).toHaveAttribute('name', 'form');
  });

  it('should have `target` attribute', () => {
    expect(<form target="_blank" />).toHaveProperty('target', '_blank');
    expect(<form target="_self" />).toHaveAttribute('target', '_self');
  });
});
