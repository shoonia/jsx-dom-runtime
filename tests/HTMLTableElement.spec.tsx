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

  it('should add cellPadding', () => {
    expect(<table cellPadding={5}/>).toHaveProperty('cellPadding', '5');
    expect(<table cellPadding={5}/>).toHaveAttribute('cellpadding', '5');
  });
});