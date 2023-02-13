import { parseFromString } from '../..';

describe('parseFromString', () => {
  it('should have append a div', () => {
    const children = parseFromString('<div />');

    expect(<span>{children}</span>).toHaveInnerHTML('<div></div>');
  });

  it('should have append a text', () => {
    const children = parseFromString('text');

    expect(<div>{children}</div>).toHaveInnerHTML('text');
  });

  it('should have append all nodes', () => {
    const children = parseFromString(
      'start<div><span>text</span></div>end',
    );

    expect(<div>{children}</div>).toHaveInnerHTML(
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
});
