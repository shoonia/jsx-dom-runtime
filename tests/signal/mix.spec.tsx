import { signal } from 'jsx-dom-runtime';

describe('signal mix text and attr', () => {
  it('should update both text node and attribute from one signal', () => {
    const s = signal('hello');
    const div = <div class={s}>{s}</div>;

    expect(div).toHaveOuterHTML('<div class="hello">hello</div>');

    s.set('world');

    expect(div).toHaveOuterHTML('<div class="world">world</div>');
  });

  it('should update class attribute and multiple text nodes from one signal', () => {
    const s = signal('hello');
    const div = <div class={s}>{s}{s}</div>;

    expect(div).toHaveOuterHTML('<div class="hello">hellohello</div>');

    s.set('world');

    expect(div).toHaveOuterHTML('<div class="world">worldworld</div>');
  });
});
