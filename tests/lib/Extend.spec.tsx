
import { Extend } from '../../jsx-runtime';

describe('Extend', () => {
  it('should add plugin', () => {
    Extend({
      plugin_1(node) {
        node.setAttribute('class', 'plugin_1');
      },
    });

    // @ts-expect-error
    expect(<div plugin_1 />).toHaveOuterHTML('<div class="plugin_1"></div>');
  });

  it('should add two plugins', () => {
    Extend({
      plugin_2(node) {
        node.classList.add('a');
      },

      plugin_3(node) {
        node.classList.add('b');
      },
    });

    // @ts-expect-error
    expect(<span plugin_2 plugin_3 />).toHaveOuterHTML('<span class="a b"></span>');
  });

  it('should work with passed value', () => {
    Extend({
      plugin_4(node, value) {
        node.textContent = value;
      },
    });

    // @ts-expect-error
    expect(<p plugin_4="hello" />).toHaveOuterHTML('<p>hello</p>');
  });
});
