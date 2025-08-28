describe('HTMLOListElement', () => {
  it('should have `type` attribute', () => {
    expect(<ol type="a" />).toHaveProperty('type', 'a');
    expect(<ol type="a" />).toHaveAttribute('type', 'a');
  });

  it('should have `start` attribute', () => {
    expect(<ol start={2} />).toHaveProperty('start', 2);
    expect(<ol start={2} />).toHaveAttribute('start', '2');
  });

  it('should have `reversed` attribute', () => {
    expect(<ol reversed />).toHaveProperty('reversed', true);
    expect(<ol reversed />).toHaveAttribute('reversed', '');
  });

  it('should NOT have `reversed` attribute', () => {
    expect(<ol reversed={false} />).toHaveProperty('reversed', false);
    expect(<ol reversed={false} />).not.toHaveAttribute('reversed');
  });

  it('should have `reversed` attribute with string value', () => {
    expect(<ol reversed="" />).toHaveProperty('reversed', true);
  });

  it('should support prop:compact', () => {
    expect(<ol prop:compact />).toHaveProperty('compact', true);
  });

  it('should support prop:reversed true/false', () => {
    expect(<ol prop:reversed />).toHaveProperty('reversed', true);
    expect(<ol prop:reversed={false} />).toHaveProperty('reversed', false);
  });

  it('should support prop:start', () => {
    expect(<ol prop:start={5} />).toHaveProperty('start', 5);
  });

  it('should support prop:type', () => {
    expect(<ol prop:type="a" />).toHaveProperty('type', 'a');
    expect(<ol prop:type="1" />).toHaveProperty('type', '1');
  });
});
