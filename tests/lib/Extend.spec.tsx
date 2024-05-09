import { extensions } from '../../jsx-runtime';

describe('Extend', () => {
  afterEach(() => {
    extensions.clear();
  });

  it('should add plugin', () => {
    extensions.set('plugin-1', (node: Element) => {
      node.setAttribute('class', 'plugin_1');
    });

    expect(<div plugin-1 />).toHaveOuterHTML('<div class="plugin_1"></div>');
  });

  it('should add two plugins', () => {
    extensions
      .set('plugin-2', (node: Element) => {
        node.classList.add('a');
      })
      .set('plugin-3', (node: Element) => {
        node.classList.add('b');
      });

    expect(<span plugin-2 plugin-3 />).toHaveOuterHTML('<span class="a b"></span>');
  });

  it('should work with passed value', () => {
    extensions.set('plugin-4', (node: Element, value: string) => {
      node.textContent = value;
    });

    expect(<p plugin-4="hello" />).toHaveOuterHTML('<p>hello</p>');
  });

  it('should set muted value', () => {
    extensions.set('plugin-5', (node: Element, value: boolean) => {
      // @ts-expect-error Test
      node.muted = value;
    });

    expect(<audio />).toHaveProperty('muted', false);
    expect(<audio plugin-5 />).toHaveProperty('muted', true);
    expect(<audio plugin-5={false} />).toHaveProperty('muted', false);
  });
});
