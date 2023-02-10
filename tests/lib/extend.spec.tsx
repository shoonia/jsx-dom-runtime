
import { extend } from '../../jsx-runtime';

describe('extend', () => {
  it('should add plugin', () => {
    extend({
      plugin_1(node) {
        node.setAttribute('class', 'plugin_1');
      },
    });

    // @ts-expect-error
    expect(<div plugin_1 />).toHaveOuterHTML('<div class="plugin_1"></div>');
  });

  it('should add two plugins', () => {
    extend({
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
    extend({
      plugin_4(node, value) {
        node.textContent = value;
      },
    });

    // @ts-expect-error
    expect(<p plugin_4="hello" />).toHaveOuterHTML('<p>hello</p>');
  });

  it('should set muted value', () => {
    extend({
      plugin_5(node, value) {
        node.muted = value;
      }
    });

    expect(<audio />).toHaveProperty('muted', false);
    expect(<audio plugin_5 />).toHaveProperty('muted', true);
    expect(<audio plugin_5={false} />).toHaveProperty('muted', false);
  });
});
