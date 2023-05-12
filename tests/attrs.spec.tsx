describe('Props', () => {
  it('should have two attributes', () => {
    expect(<img src="/test" alt="test" />).toHaveOuterHTML('<img src="/test" alt="test">');
  });

  it('should have the role attribute', () => {
    expect(<div role="contentinfo" />).toHaveOuterHTML('<div role="contentinfo"></div>');
  });

  it('should support `for` attribute in <label />', () => {
    expect(<label for="some-1" />).toHaveOuterHTML('<label for="some-1"></label>');
    expect(<label for="some-2" />).toHaveProperty('htmlFor', 'some-2');
  });

  it('should support `dateTime`', () => {
    expect(<time dateTime="2021-03-16" />).toHaveOuterHTML('<time datetime="2021-03-16"></time>');
    expect(<time dateTime="2021-03-16" />).toHaveProperty('dateTime', '2021-03-16');
  });

  it('should have title', () => {
    expect(<abbr title="test text" />).toHaveOuterHTML('<abbr title="test text"></abbr>');
    expect(<abbr title="test text" />).toHaveProperty('title', 'test text');
  });

  it('should have attribute accesskey', () => {
    expect(<p accessKey="s" />).toHaveOuterHTML('<p accesskey="s"></p>');
  });

  it('should have property accessKey', () => {
    expect(<p accessKey="s" />).toHaveProperty('accessKey', 's');
  });

  it('should have id', () => {
    expect(<blockquote id="some-id" />).toHaveAttribute('id', 'some-id');
    expect(<blockquote id="some-id" />).toHaveProperty('id', 'some-id');
  });

  it('should have attribute translate', () => {
    expect(<u translate="no" />).toHaveAttribute('translate', 'no');
  });

  it('should have dir attribute', () => {
    expect(<s dir="ltr" />).toHaveAttribute('dir', 'ltr');
    expect(<s dir="ltr" />).toHaveProperty('dir', 'ltr');
  });

  it('should have lang attribute', () => {
    expect(<span lang="ua" />).toHaveAttribute('lang', 'ua');
    expect(<span lang="ua" />).toHaveProperty('lang', 'ua');
  });

  it('should add contentEditable attribute', () => {
    expect(<p contentEditable="true" />).toHaveAttribute('contenteditable', 'true');
    expect(<p contentEditable="false" />).toHaveAttribute('contenteditable', 'false');
  });

  it('should add `spellcheck` attribute', () => {
    expect(<p spellcheck="true" />).toHaveAttribute('spellcheck', 'true');
    expect(<p spellcheck="false" />).toHaveAttribute('spellcheck', 'false');
  });

  it('should add `draggable` attribute', () => {
    expect(<p draggable="true" />).toHaveAttribute('draggable', 'true');
    expect(<p draggable="false" />).toHaveAttribute('draggable', 'false');
  });

  it('should have `hidden` attribute', () => {
    expect(<strong hidden />).toHaveProperty('hidden', true);
    expect(<strong hidden="" />).toHaveProperty('hidden', true);
    expect(<strong hidden="hidden" />).toHaveProperty('hidden', true);
  });

  it('should have `capture` attribute', () => {
    expect(<input capture />).toHaveAttribute('capture', '');
    expect(<input capture="" />).toHaveAttribute('capture', '');
    expect(<input capture="user" />).toHaveAttribute('capture', 'user');
  });

  it('should add all attributes', () => {
    const props = {
      class: 'box',
    };

    expect(<p id="one" {...props} />).toHaveOuterHTML('<p id="one" class="box"></p>');
  });

  it('should add children nodes with spread', () => {
    const props = {
      children: <q />,
    };

    expect(<p {...props} />).toHaveOuterHTML('<p><q></q></p>');
  });
});
