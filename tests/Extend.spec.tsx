
import { Extend } from '../jsx-runtime';

describe('Extend', () => {
  it('should add plugin with the function call', () => {
    Extend({
      plugin_0: (node) => {
        node.setAttribute('class', 'plugin_0');
      },
    });

    // @ts-expect-error
    expect(<div plugin_0 />).toHaveOuterHTML('<div class="plugin_0"></div>');
  });

  it('should add plugin with jsx', () => {
    <Extend
      plugin_1={(node) => {
        node.setAttribute('class', 'plugin_1');
      }}
    />;

    // @ts-expect-error
    expect(<div plugin_1 />).toHaveOuterHTML('<div class="plugin_1"></div>');
  });

  it('should use correct value', () => {
    Extend({
      plugin_2: (node, value) => {
        node.setAttribute('class', value.join(' '));
      },
    });

    // @ts-expect-error
    expect(<div plugin_2={['one', 'two']} />).toHaveOuterHTML('<div class="one two"></div>');
  });
});
