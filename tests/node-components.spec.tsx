describe('Node Component', () => {
  it('should append children to body element', () => {
    <document.body>
      <div>one</div>
      <div>two</div>
    </document.body>;

    expect(document.body).toContainHTML('<div>one</div><div>two</div>');
  });

  it('should add a new child node', () => {
    const List = (
      <ul>
        <li>one</li>
      </ul>
    );

    <List>
      <li>two</li>
    </List>;

    <List>
      <li>three</li>
      <li>four</li>
    </List>;

    expect(List).toContainHTML(
      '<li>one</li><li>two</li><li>three</li><li>four</li>'
    );
  });

  it('should update element props', () => {
    const Item = <div data-value="1"/>;

    expect(Item).toHaveOuterHTML('<div data-value="1"></div>');

    <Item data-value="2" />;

    expect(Item).toHaveOuterHTML('<div data-value="2"></div>');
  });

  it('should update content on text node', () => {
    const MyText = new Text();

    <document.body>
      <MyText textContent="new text" />
    </document.body>;

    expect(document.body).toContainHTML('new text');
  });
});
