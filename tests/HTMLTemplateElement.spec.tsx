import { useRef } from 'jsx-dom-runtime';

describe('HTMLTemplateElement', () => {
  it('should append child node', () => {
    expect(
      <template>
        <p>hello</p>
      </template>
    ).toHaveOuterHTML('<template><p>hello</p></template>');
  });

  it('should get a child with querySelector', () => {
    const temp = (
      <template>
        <p>text here</p>
      </template>
    ) as HTMLTemplateElement;

    expect(temp.content.querySelector('p')).toHaveInnerHTML('text here');
  });

  it('should get a child with querySelector with ref', () => {
    const ref = useRef<HTMLTemplateElement>();

    <template ref={ref}>
      <p>text here</p>
    </template>;

    expect(ref.current.content.querySelector('p')).toHaveInnerHTML('text here');
  });

  it('should have `shadowRootMode` attribute', () => {
    expect(<template shadowRootMode="open" />).toHaveAttribute('shadowrootmode', 'open');
  });

  it('should have `shadowrootclonable` attribute', () => {
    expect(<template shadowRootClonable />).toHaveAttribute('shadowrootclonable', '');
  });

  it('should have `shadowrootdelegatesfocus` attribute', () => {
    expect(<template shadowRootDelegatesFocus />).toHaveAttribute('shadowrootdelegatesfocus', '');
  });

  it('should have `shadowRootSerializable` attribute', () => {
    expect(<template shadowRootSerializable />).toHaveAttribute('shadowrootserializable', '');
  });
});
