describe('HTMLIFrameElement', () => {
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
    expect(<form autoComplete="on" />).toHaveAttribute('autocomplete', 'on');
    expect(<form autoComplete="off" />).toHaveAttribute('autocomplete', 'off');
  });

  it('should support enctype attribute', () => {
    expect(<form enctype="multipart/form-data" />).toHaveAttribute('enctype', 'multipart/form-data');
    expect(<form encType="multipart/form-data" />).toHaveAttribute('enctype', 'multipart/form-data');
  });
});
