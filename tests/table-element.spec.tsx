describe('HTMLTableElement', () => {
  it('should render a table', () => {
    expect(
      <table>
        <thead>
          <tr>
            <th colspan="2">The table header</th>
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
      '<table><thead><tr><th colspan="2">The table header</th></tr></thead><tbody><tr><td>The table body</td><td>with two columns</td></tr></tbody></table>'
    );
  });
});
