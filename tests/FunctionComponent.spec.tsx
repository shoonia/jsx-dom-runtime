describe('FunctionComponent', () => {
  it('should support function component', () => {
    const Input: JSX.FC = () => (
      <input type="text" />
    );

    expect(<Input />).toHaveOuterHTML('<input type="text">');
  });

  it('should render children nodes as text', () => {
    const Text: JSX.FC = ({ children }) => (
      <p>{children}</p>
    );

    expect(<Text>hello</Text>).toHaveOuterHTML('<p>hello</p>');
  });

  it('should render children node', () => {
    const Text: JSX.FC = ({ children }) => (
      <p>{children}</p>
    );

    expect(
      <Text>
        <b>message</b>
      </Text>
    ).toHaveOuterHTML('<p><b>message</b></p>');
  });

  it('should render a few children nodes', () => {
    const Text: JSX.FC = ({ children }) => (
      <p>{children}</p>
    );

    expect(
      <Text>
        <b>message</b>
        <b>message</b>
        message
      </Text>
    ).toHaveOuterHTML('<p><b>message</b><b>message</b>message</p>');
  });

  it('should support children node and props', () => {
    interface Props {
      id: string;
    }

    const Text: JSX.FC<Props> = ({ id, children }) => (
      <p id={id}>{children}</p>
    );

    expect(<Text id="x">text</Text>).toHaveOuterHTML('<p id="x">text</p>');
  });

  it('should support naming starts with `$`', () => {
    const $: JSX.FC = () => <p>text</p>;

    expect(<$ />).toHaveOuterHTML('<p>text</p>');
  });

  it('should support naming starts with `_`', () => {
    const _: JSX.FC = () => <p>text</p>;

    expect(<_ />).toHaveOuterHTML('<p>text</p>');
  });
});
