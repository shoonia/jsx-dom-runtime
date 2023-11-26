import { jest } from '@jest/globals';

describe('HTMLVideoElement', () => {
  it('should have `src` attribute & property', () => {
    expect(<video src="/video" />).toHaveProperty('src', 'http://localhost/video');
    expect(<video src="/video" />).toHaveAttribute('src', '/video');
  });

  it('should have `poster` attribute & property', () => {
    expect(<video poster="/poster" />).toHaveProperty('poster', 'http://localhost/poster');
    expect(<video poster="/poster" />).toHaveAttribute('poster', '/poster');
  });

  it('should have `playsInline` attribure & property', () => {
    expect(<video playsInline />).toHaveProperty('playsInline', true);
    expect(<video playsInline />).toHaveAttribute('playsinline', '');
  });

  it('should NOT have `playsInline` attribute', () => {
    expect(<video playsInline={false} />).not.toHaveAttribute('playsinline');
    expect(<video playsInline={false} />).toHaveProperty('playsInline', false);
  });

  it('should have `playsInline` attribure with string value', () => {
    expect(<video playsInline="" />).toHaveProperty('playsInline', true);
  });

  it('should have `controls` attributes', () => {
    expect(<video controls />).toHaveAttribute('controls', '');
    expect(<video controls />).toHaveProperty('controls', true);
  });

  it('should NOT have `controls` attributes', () => {
    expect(<video controls={false} />).not.toHaveAttribute('controls');
    expect(<video controls={false} />).toHaveProperty('controls', false);
  });

  it('should have `controls` attributes with string value', () => {
    expect(<video controls="" />).toHaveProperty('controls', true);
  });

  it('should have `autoplay` attributes', () => {
    expect(<video autoplay />).toHaveAttribute('autoplay', '');
    expect(<video autoplay />).toHaveProperty('autoplay', true);
  });

  it('should NOT have `autoplay` attributes', () => {
    expect(<video autoplay={false} />).not.toHaveAttribute('autoplay');
    expect(<video autoplay={false} />).toHaveProperty('autoplay', false);
  });

  it('should have `autoplay` attributes with string value', () => {
    expect(<video autoplay="" />).toHaveProperty('autoplay', true);
  });

  it('should have `loop` attributes', () => {
    expect(<video loop />).toHaveAttribute('loop', '');
    expect(<video loop />).toHaveProperty('loop', true);
  });

  it('should NOT have `loop` attributes', () => {
    expect(<video loop={false} />).not.toHaveAttribute('loop');
    expect(<video loop={false} />).toHaveProperty('loop', false);
  });

  it('should have `loop` attributes with string value', () => {
    expect(<video loop="" />).toHaveProperty('loop', true);
  });

  it('should have `controlslist` attributes', () => {
    expect(<video controlsList="nofullscreen" />).toHaveAttribute('controlslist', 'nofullscreen');
  });

  it('should have `preload` attributes', () => {
    expect(<video preload="metadata" />).toHaveAttribute('preload', 'metadata');
    expect(<video preload="auto" />).toHaveProperty('preload', 'auto');
  });

  it('should have `width` attributes', () => {
    expect(<video width={123} />).toHaveProperty('width', 123);
    expect(<video width={123} />).toHaveAttribute('width', '123');
  });

  it('should have `height` attributes', () => {
    expect(<video height={123} />).toHaveProperty('height', 123);
    expect(<video height={123} />).toHaveAttribute('height', '123');
  });

  it('should have `disablePictureInPicture` attributes', () => {
    expect(<video disablePictureInPicture />).toHaveAttribute('disablepictureinpicture', '');
    expect(<video disablePictureInPicture={false} />).not.toHaveAttribute('disablepictureinpicture');
  });

  it('should have `disableRemotePlayback` attributes', () => {
    expect(<video disableRemotePlayback />).toHaveAttribute('disableremoteplayback', '');
    expect(<video disableRemotePlayback={false} />).not.toHaveAttribute('disableremoteplayback');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<video crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<video crossOrigin="anonymous" />).toHaveAttribute('crossorigin', 'anonymous');
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<video crossOrigin />).toHaveProperty('crossOrigin', '');
    expect(<video crossOrigin />).toHaveAttribute('crossorigin', '');
  });

  it('should add `onresize` handler', () => {
    const spy = jest.fn();
    expect(<video onresize={spy} />).toHaveProperty('onresize', spy);
  });
});
