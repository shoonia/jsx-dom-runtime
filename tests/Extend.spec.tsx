
import { Extend } from '..';

describe('Extend', () => {
  it('should add plugin with jsx', () => {
    <Extend
      plugin_1={(node) => {
        node.setAttribute('class', 'plugin_1');
      }}
    />;

    // @ts-expect-error
    expect(<div plugin_1 />).toHaveOuterHTML('<div class="plugin_1"></div>');
  });
});
