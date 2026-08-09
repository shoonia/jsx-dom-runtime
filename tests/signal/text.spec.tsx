import { render, signal } from 'jsx-dom-runtime';

describe('signal.text', () => {
  it('should add text', () => {
    const s = signal('hello');

    expect(<i>{s.text()}</i>).toHaveOuterHTML('<i>hello</i>');
  });

  it('should add empty text', () => {
    const s = signal();

    expect(<s>{s.text()}</s>).toHaveOuterHTML('<s></s>');
  });

  it('should update text', () => {
    const s = signal('old');

    render(s.text(), document.body);

    expect(document.body).toHaveInnerHTML('old');

    s.set('new');

    expect(document.body).toHaveInnerHTML('new');
  });

  it('should update empty text', () => {
    const s = signal();

    render(s.text(), document.body);

    expect(document.body).toHaveInnerHTML('');

    s.set('new one');

    expect(document.body).toHaveInnerHTML('new one');
  });

  it('should update multiple text nodes sharing the same signal', () => {
    const s = signal('hello');

    render([s.text(), s.text()], document.body);

    expect(document.body).toHaveInnerHTML('hellohello');

    s.set('world');

    expect(document.body).toHaveInnerHTML('worldworld');
  });
});
