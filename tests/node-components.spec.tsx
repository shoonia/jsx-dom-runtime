
describe('Node Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should append children to body element', () => {
    const Body = document.body;

    <Body>
      <div>one</div>
      <div>two</div>
    </Body>;

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

    document.body.appendChild(<MyText textContent="new text" />);

    expect(document.body).toContainHTML('new text');
  });
});
