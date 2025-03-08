import { useAttr } from 'jsx-dom-runtime';

describe('ARIA attribute', () => {
  it('should have the aria attributes', () => {
    expect(<i aria-label="test" />).toHaveOuterHTML('<i aria-label="test"></i>');
  });

  it('should set attribute with boolean value', () => {
    expect(<b aria-hidden />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={true} />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden={false} />).toHaveOuterHTML('<b aria-hidden="false"></b>');
    expect(<b aria-hidden="true" />).toHaveOuterHTML('<b aria-hidden="true"></b>');
    expect(<b aria-hidden="false" />).toHaveOuterHTML('<b aria-hidden="false"></b>');
  });

  it('shoud NOT set attribute with null or undefined', () => {
    // @ts-ignore
    expect(<span aria-disabled={null} />).toHaveOuterHTML('<span></span>');
    expect(<span aria-disabled={undefined} />).toHaveOuterHTML('<span></span>');
  });

  it('should set zero to attribute', () => {
    expect(<div aria-colindex={0} />).toHaveOuterHTML('<div aria-colindex="0"></div>');
  });

  it('should work with Attr', () => {
    const attr = useAttr('true');

    const div = <div aria-hidden={attr} /> as HTMLElement;

    expect(div).toHaveAttribute('aria-hidden', 'true');
    attr.value('false');
    expect(div).toHaveAttribute('aria-hidden', 'false');
  });
});
