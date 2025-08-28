describe('HTMLMeterElement', () => {
  it('should have `max` property', () => {
    expect(<meter max={10} />).toHaveProperty('max', 10);
    expect(<meter max={10} />).toHaveAttribute('max', '10');
  });

  it('should have `min` property', () => {
    expect(<meter min={11} />).toHaveProperty('min', 11);
    expect(<meter min={11} />).toHaveAttribute('min', '11');
  });

  it('should have `low` property', () => {
    expect(<meter low={12} max="100" />).toHaveProperty('low', 12);
    expect(<meter low={12} max="100" />).toHaveAttribute('low', '12');
  });

  it('should have `high` property', () => {
    expect(<meter high={13} max="100" />).toHaveProperty('high', 13);
    expect(<meter high={13} max="100" />).toHaveAttribute('high', '13');
  });

  it('should have `optimum` property', () => {
    expect(<meter optimum={14} max="100" />).toHaveProperty('optimum', 14);
    expect(<meter optimum={14} max="100" />).toHaveAttribute('optimum', '14');
  });

  it('should have `value` property', () => {
    expect(<meter value={15} max="100" />).toHaveValue(15);
  });

  it('should support prop:max', () => {
    expect(<meter prop:max={10} />).toHaveProperty('max', 10);
  });

  it('should support prop:min', () => {
    expect(<meter prop:min={11} />).toHaveProperty('min', 11);
  });

  it('should support prop:low', () => {
    expect(<meter prop:low={12} max="100" />).toHaveProperty('low', 12);
  });

  it('should support prop:high', () => {
    expect(<meter prop:high={13} max="100" />).toHaveProperty('high', 13);
  });

  it('should support prop:optimum', () => {
    expect(<meter prop:optimum={14} max="100" />).toHaveProperty('optimum', 14);
  });

  it('should support prop:value', () => {
    expect(<meter prop:value={15} max="100" />).toHaveProperty('value', 15);
    expect(<meter prop:value={15} max="100" />).toHaveValue(15);
  });
});
