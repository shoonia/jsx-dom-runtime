import { attrImport } from './utils/t';

describe('attributes property', () => {
  it('should set attribute', () => {
    const attr = document.createAttribute('role');
    attr.value = 'button';

    expect(<div attributes={attr} />).toHaveAttribute('role', 'button');
  });

  it('should set a few attributes', () => {
    const attr = document.createAttribute('id');
    attr.value = 'test-div';
    const attr2 = document.createAttribute('class');
    attr2.value = 'my-class';

    const div = <div attributes={[attr, attr2]} />;

    expect(div).toHaveAttribute('id', 'test-div');
    expect(div).toHaveClass('my-class');
  });

  it('should transform attribute(s) correctly', async () => {
    await expect('<div attributes={attr} />').toBeTransform(
      attrImport`_jsx("div",{ref:e=>_setAttributes(e,attr)});`
    );
  });
});
