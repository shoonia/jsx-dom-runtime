describe('HTMLProgressElement', () => {
  it('should have render element', () => {
    expect(
      <progress id="progress-bar" value="70" max="100">70 %</progress>
    ).toHaveOuterHTML(
      '<progress id="progress-bar" value="70" max="100">70 %</progress>'
    );
  });

  it('should set `value` property', () => {
    expect(<progress max={200} value="100">100</progress>).toHaveValue(100);
    expect(<progress max={200} value={100}>100</progress>).toHaveValue(100);
    expect(<progress max={200} value={100}>100</progress>).toHaveAttribute('value', '100');
  });

  it('should have `max` property', () => {
    expect(<progress max={10}>0</progress>).toHaveProperty('max', 10);
    expect(<progress max="10">0</progress>).toHaveProperty('max', 10);
    expect(<progress max={10}>0</progress>).toHaveAttribute('max', '10');
  });

  it('should have text content', () => {
    expect(<progress max="20">11</progress>).toHaveTextContent('11');
    expect(<progress max="20">22</progress>).toHaveInnerHTML('22');
    expect(<progress max="20">33</progress>).toHaveProperty('textContent', '33');
  });
});
