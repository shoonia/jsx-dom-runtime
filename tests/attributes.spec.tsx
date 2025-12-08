import { useAttr } from 'jsx-dom-runtime';

import { attrImport } from './utils/t';

describe('attributes property', () => {
  it('should set attribute', () => {
    const [role] = useAttr('role', 'button');

    expect(<div attributes={role} />).toHaveAttribute('role', 'button');
  });

  it('should set a few attributes', () => {
    const [id] = useAttr('id', 'test-div');
    const [className] = useAttr('class', 'my-class');

    const div = <div attributes={[id, className]} />;

    expect(div).toHaveAttribute('id', 'test-div');
    expect(div).toHaveClass('my-class');
  });

  it('should set empty string as attribute value when second argument is not provided', () => {
    const [disabled] = useAttr('disabled');
    expect(<button attributes={disabled} />).toHaveAttribute('disabled', '');
  });

  it('should update attribute', () => {
    const [title, setTitle] = useAttr('title', 'initial title');

    const div = <div attributes={title} />;

    expect(div).toHaveAttribute('title', 'initial title');
    setTitle('updated title');
    expect(div).toHaveAttribute('title', 'updated title');
  });

  it('should transform attribute(s) correctly', async () => {
    await expect('<div attributes={attr} />').toBeTransform(
      attrImport`_jsx("div",{ref:e=>_setAttributes(e,attr)});`
    );
  });
});
