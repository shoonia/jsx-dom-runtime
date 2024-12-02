describe('plugins/style', () => {
  it('should stringify object value is plugin is not apply', () => {
    expect(<div style={{}} />).toHaveCssText('');
    expect(<div style={{}} />).toHaveAttribute('style', '[object Object]');
  });
});
