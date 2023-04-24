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
    expect(<form accept-charset="utf-8" />).toHaveProperty('acceptCharset', 'utf-8');
    expect(<form accept-charset="utf-8" />).toHaveAttribute('accept-charset', 'utf-8');
  });

  it('should have `noValidate` attribute', () => {
    expect(<form noValidate />).toHaveProperty('noValidate', true);
    expect(<form noValidate />).toHaveAttribute('novalidate', '');
  });

  it('should NOT have `noValidate` attribute', () => {
    expect(<form noValidate={false} />).toHaveProperty('noValidate', false);
    expect(<form noValidate={false} />).not.toHaveAttribute('novalidate');
  });
});
