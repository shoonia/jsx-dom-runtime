
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

  it('should set muted value', () => {
    Extend({
      plugin_5(node, value) {
        node.muted = value;
      }
    });

    expect(<audio />).toHaveProperty('muted', false);
    expect(<audio plugin_5 />).toHaveProperty('muted', true);
    expect(<audio plugin_5={false} />).toHaveProperty('muted', false);
  });

  it('should work as JSX tag', () => {
    <Extend
      plugin_6={(node, value) => {
        node.setAttribute('data-plugin', value);
      }}
    />;

    expect(<div plugin_6="test" />).toHaveOuterHTML('<div data-plugin="test"></div>');
  });
});
