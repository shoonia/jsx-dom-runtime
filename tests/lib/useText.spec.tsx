import { useText } from '../..';

describe('useText', () => {
  it('should add text', () => {
    const [text] = useText('hello');

    expect(<i>{text}</i>).toHaveOuterHTML('<i>hello</i>');
  });

  it('should add empty text', () => {
    const [text] = useText();

    expect(<s>{text}</s>).toHaveOuterHTML('<s></s>');
  });

  it('should update text', () => {
    const [text, setText] = useText('old');

    document.body.append(text);

    expect(document.body).toHaveInnerHTML('old');

    setText('new');

    expect(document.body).toHaveInnerHTML('new');
  });

  it('should update empty text', () => {
    const [text, setText] = useText();

    document.body.append(text);

    expect(document.body).toHaveInnerHTML('');

    setText('new one');

    expect(document.body).toHaveInnerHTML('new one');
  });
});
