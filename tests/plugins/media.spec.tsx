import { initMedia } from 'jsx-dom-runtime/plugins/media';

initMedia();

describe('plugins/media', () => {
  it('should add support `volume` property', () => {
    expect(<audio volume={0.9} />).not.toHaveAttribute('volume');
    expect(<audio volume={0.9} />).toHaveProperty('volume', 0.9);

    expect(<video volume={0.9} />).not.toHaveAttribute('volume');
    expect(<video volume={0.9} />).toHaveProperty('volume', 0.9);

  });

  it('should add support `muted` property', () => {
    expect(<audio muted />).not.toHaveAttribute('muted');
    expect(<audio muted />).toHaveProperty('muted', true);

    expect(<video muted />).not.toHaveAttribute('muted');
    expect(<video muted />).toHaveProperty('muted', true);
  });

  it('should transform', async () => {
    await expect('<video muted />').toBeTransform(
      'import{jsx as _jsx}from"jsx-dom-runtime";/*#__PURE__*/_jsx("video",{muted:true});'
    );
  });
});
