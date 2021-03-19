import { parseFromString } from '../..';

describe('parseFromString', () => {
  it('should have append a div', () => {
    const children = parseFromString('<div />');

    <document.body>
      {children}
    </document.body>;

    expect(document.body).toHaveInnerHTML('<div></div>');
  });

  it('should have append a text', () => {
    const children = parseFromString('text');

    <document.body>
      {children}
    </document.body>;

    expect(document.body).toHaveInnerHTML('text');
  });

  it('should have append a text', () => {
    const children = parseFromString('text');

    <document.body>
      {children}
    </document.body>;

    expect(document.body).toHaveInnerHTML('text');
  });

  it('should have append all nodes', () => {
    const children = parseFromString(
      'start<div><span>text</span></div>end',
    );

    <document.body>
      {children}
    </document.body>;

    expect(document.body).toHaveInnerHTML(
      'start<div><span>text</span></div>end',
    );
  });

  it('should have append all nodes as a props', () => {
    const children = parseFromString(
      'one<div><span>two</span></div>three',
    );

    expect(<div children={children} />).toHaveInnerHTML(
      'one<div><span>two</span></div>three',
    );
  });

  it('should have array with correct children nodes', () => {
    const list = parseFromString('text<div>one</div>text');

    expect(list).toHaveLength(3);
    expect(list[0] instanceof Text).toBe(true);
    expect(list[1] instanceof HTMLDivElement).toBe(true);
    expect(list[2] instanceof Text).toBe(true);
  });
});
