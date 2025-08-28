describe('HTMLTableElement', () => {
  it('should render a table', () => {
    expect(
      <table>
        <caption>Title</caption>
        <thead>
          <tr>
            <th colSpan={2}>The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    ).toHaveOuterHTML(
      '<table><caption>Title</caption><thead><tr><th colspan="2">The table header</th></tr></thead><tbody><tr><td>The table body</td><td>with two columns</td></tr></tbody></table>'
    );
  });

  it('should have `cellPadding` attribute', () => {
    expect(<table cellPadding={5} />).toHaveProperty('cellPadding', '5');
    expect(<table cellPadding={5} />).toHaveAttribute('cellpadding', '5');
  });

  it('should have `cellSpacing` attribute', () => {
    expect(<table cellSpacing={1} />).toHaveProperty('cellSpacing', '1');
    expect(<table cellSpacing={1} />).toHaveAttribute('cellspacing', '1');
  });

  it('should have `width` attribute', () => {
    expect(<table width="100%" />).toHaveProperty('width', '100%');
    expect(<table width={1} />).toHaveAttribute('width', '1');
  });
});
