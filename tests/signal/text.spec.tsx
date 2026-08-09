import { render, signal } from 'jsx-dom-runtime';

describe('signal.text', () => {
  it('should add text', () => {
    const s = signal('hello');

    expect(<i>{s}</i>).toHaveOuterHTML('<i>hello</i>');
  });

  it('should add empty text', () => {
    const s = signal();

    expect(<s>{s}</s>).toHaveOuterHTML('<s></s>');
  });

  it('should update text', () => {
    const s = signal('old');

    render(s, document.body);

    expect(document.body).toHaveInnerHTML('old');

    s.set('new');

    expect(document.body).toHaveInnerHTML('new');
  });

  it('should update empty text', () => {
    const s = signal();

    render(s, document.body);

    expect(document.body).toHaveInnerHTML('');

    s.set('new one');

    expect(document.body).toHaveInnerHTML('new one');
  });

  it('should update multiple text nodes sharing the same signal', () => {
    const s = signal('hello');

    render(<>{s}{s}</>, document.body);

    expect(document.body).toHaveInnerHTML('hellohello');

    s.set('world');

    expect(document.body).toHaveInnerHTML('worldworld');
  });
});
