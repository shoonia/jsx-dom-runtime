import { render } from 'jsx-dom-runtime';

describe('render', () => {
  it('should append an element to an Element container', () => {
    render(<p>hello</p>, document.body);
    expect(document.body).toHaveInnerHTML('<p>hello</p>');
  });

  it('should append an array of elements in order', () => {
    render([
      <span>one</span>,
      <strong>two</strong>,
    ], document.body);

    expect(document.body).toHaveInnerHTML(
      '<span>one</span><strong>two</strong>',
    );
  });

  it('should append an element to a DocumentFragment container', () => {
    const container = <></>;

    render(<section>content</section>, container);

    expect(container.childNodes).toHaveLength(1);
    expect(container.firstChild).toHaveOuterHTML(
      '<section>content</section>',
    );
  });

  it('should preserve content already in the container', () => {
    render(<i>existing</i>, document.body);
    render(<b>new</b>, document.body);

    expect(document.body).toHaveInnerHTML('<i>existing</i><b>new</b>');
  });
});
