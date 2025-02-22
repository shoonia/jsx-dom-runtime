import { useAttr } from 'jsx-dom-runtime';

describe('useAttr', () => {
  it('should render correct class name', () => {
    const className = useAttr('hello');

    expect(<div class={className} />).toHaveClass('hello');
  });

  it('should render correct class name', () => {
    const className = useAttr('');
    const div = <div class={className} /> as HTMLDivElement;

    expect(div).toHaveAttribute('class', '');
    className.value('foo');
    expect(div).toHaveClass('foo');
    className.value('bar');
    expect(div).toHaveClass('bar');
  });

  it('should create a few attributes', () => {
    const data = useAttr('foo');
    const div = <div data-one={data} data-two={data} /> as HTMLDivElement;

    expect(div).toHaveOuterHTML('<div data-one="foo" data-two="foo"></div>');
    data.value('bar');
    expect(div).toHaveOuterHTML('<div data-one="bar" data-two="bar"></div>');
  });
});
