import { properties } from 'jsx-dom-runtime';

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface HTMLAudioElementAttributes {
      volume?: number;
      muted?: boolean;
    }
  }
}

describe('properties', () => {
  it('should add support of `volume` property', () => {
    expect(<audio volume={0.9} />).toHaveAttribute('volume', '0.9');
    expect(<audio volume={0.9} />).toHaveProperty('volume', 1);

    properties.add('volume');

    expect(<audio volume={0.9} />).not.toHaveAttribute('volume');
    expect(<audio volume={0.9} />).toHaveProperty('volume', 0.9);

    properties.delete('volume');
  });

  it('should add support of `muted` property', () => {
    expect(<audio muted />).toHaveAttribute('muted', '');
    expect(<audio muted />).toHaveProperty('muted', false);

    properties.add('muted');

    expect(<audio muted />).not.toHaveAttribute('muted');
    expect(<audio muted />).toHaveProperty('muted', true);

    properties.delete('muted');
  });
});
