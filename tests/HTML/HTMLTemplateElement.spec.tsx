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

  it('should have `shadowRootMode` attribute/property', () => {
    expect(<template shadowRootMode="open" />).toHaveAttribute('shadowrootmode', 'open');
    expect(<template prop:shadowRootMode="open" />).toHaveProperty('shadowRootMode', 'open');
  });

  it('should have `shadowrootclonable` attribute/property', () => {
    expect(<template shadowRootClonable />).toHaveAttribute('shadowrootclonable', '');
    expect(<template prop:shadowRootClonable />).toHaveProperty('shadowRootClonable', true);
  });

  it('should have `shadowrootdelegatesfocus` attribute/property', () => {
    expect(<template shadowRootDelegatesFocus />).toHaveAttribute('shadowrootdelegatesfocus', '');
    expect(<template prop:shadowRootDelegatesFocus />).toHaveProperty('shadowRootDelegatesFocus', true);
  });

  it('should have `shadowRootSerializable` attribute/property', () => {
    expect(<template shadowRootSerializable />).toHaveAttribute('shadowrootserializable', '');
    expect(<template prop:shadowRootSerializable />).toHaveProperty('shadowRootSerializable', true);
  });

  it('should have `shadowRootSlotAssignment` attribute/property', () => {
    expect(<template shadowRootSlotAssignment="manual" />).toHaveAttribute('shadowrootslotassignment', 'manual');
    expect(<template prop:shadowRootSlotAssignment="manual" />).toHaveProperty('shadowRootSlotAssignment', 'manual');
  });

  it('should have `shadowRootCustomElementRegistry` attribute/property', () => {
    expect(<template shadowRootCustomElementRegistry="my-registry" />).toHaveAttribute('shadowrootcustomelementregistry', 'my-registry');
    expect(<template prop:shadowRootCustomElementRegistry="my-registry" />).toHaveProperty('shadowRootCustomElementRegistry', 'my-registry');
  });

});
