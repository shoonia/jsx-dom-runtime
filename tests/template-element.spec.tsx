import { createRef } from '..';

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
    const ref = createRef<HTMLTemplateElement>();

    <template ref={ref}>
      <p>text here</p>
    </template>;

    expect(ref.current.content.querySelector('p')).toHaveInnerHTML('text here');
  });

  it('should update element attributes', () => {
    const Temp = (
      <template>
        <s>some text</s>
      </template>
    );

    expect(Temp).toHaveOuterHTML('<template><s>some text</s></template>');
    <Temp id="temp" />;
    expect(Temp).toHaveOuterHTML('<template id="temp"><s>some text</s></template>');
  });

  it('should update child node by ref', () => {
    const I = createRef();

    const Temp = (
      <template>
        <i ref={I}>some text</i>
      </template>
    );

    expect(Temp).toHaveOuterHTML('<template><i>some text</i></template>');
    <I.current class="one two" />;
    expect(Temp).toHaveOuterHTML('<template><i class="one two">some text</i></template>');
  });
});
