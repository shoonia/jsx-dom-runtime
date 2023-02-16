describe('Node Components', () => {
  it('should append children to body element', () => {
    <document.body>
      <div>one</div>
      <div>two</div>
    </document.body>;

    expect(document.body).toHaveInnerHTML('<div>one</div><div>two</div>');
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

    expect(List).toHaveInnerHTML(
      '<li>one</li><li>two</li><li>three</li><li>four</li>'
    );
  });

  it('should update element props', () => {
    const Item = <div data-value="1"/>;

    expect(Item).toHaveOuterHTML('<div data-value="1"></div>');
    <Item data-value="2" />;
    expect(Item).toHaveOuterHTML('<div data-value="2"></div>');
  });

  it('should update src on image', () => {
    const MyImage = new Image(100, 100);

    <document.body>
      <MyImage src="https://a.com" />
    </document.body>;

    expect(document.body).toHaveInnerHTML(
      '<img width="100" height="100" src="https://a.com">'
    );
  });

  it('should work with fragment node', () => {
    const MyFragment = new DocumentFragment();

    MyFragment.append(<div>hello</div>);

    <document.body>
      <MyFragment />
    </document.body>;

    expect(document.body).toHaveInnerHTML('<div>hello</div>');
  });

  it('should work with nodes as value', () => {
    const text0 = new Text('t');
    const text1 = document.createTextNode('t');
    const myImage = new Image(5, 5);
    const comment0 = new Comment('x');
    const comment1 = document.createComment('y');
    const myFragment0 = new DocumentFragment();
    const myFragment1 = document.createDocumentFragment();
    const myDiv = document.createElement('div');

    myFragment0.append('myFragment0');
    myFragment1.append('myFragment1');
    myDiv.append('myDiv');

    <document.body>
      {text0}
      {text1}
      {myImage}
      {comment0}
      {comment1}
      {myFragment0}
      {myFragment1}
      {myDiv}
    </document.body>;

    expect(document.body).toHaveInnerHTML(
      'tt<img width="5" height="5"><!--x--><!--y-->myFragment0myFragment1<div>myDiv</div>',
    );
  });
});
