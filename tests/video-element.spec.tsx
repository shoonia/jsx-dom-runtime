// TODO: add muted attr

describe('HTMLVideoElement', () => {
  it('should have `src` attributes', () => {
    expect(<video src="/Run-DMC.mp4" />).toHaveAttribute('src', '/Run-DMC.mp4');
    expect(<video src="/Run-DMC.mp4" />).toHaveProperty('src', 'http://localhost/Run-DMC.mp4');
  });

  it('should set width and height', () => {
    const video = <video width={123} height={123} />;

    expect(video).toHaveProperty('width', 123);
    expect(video).toHaveAttribute('width', '123');
    expect(video).toHaveProperty('height', 123);
    expect(video).toHaveAttribute('height', '123');
  });

  it('should have `controls` attributes', () => {
    expect(<video controls />).toHaveAttribute('controls', '');
    expect(<video controls />).toHaveProperty('controls', true);
    expect(<video controls={false} />).not.toHaveAttribute('controls');
    expect(<video controls={false} />).toHaveProperty('controls', false);
  });

  it('should have `controls` attributes', () => {
    expect(<video controls />).toHaveAttribute('controls', '');
    expect(<video controls />).toHaveProperty('controls', true);
    expect(<video controls={false} />).not.toHaveAttribute('controls');
    expect(<video controls={false} />).toHaveProperty('controls', false);
  });

  it('should have `autoplay` attributes', () => {
    expect(<video autoPlay />).toHaveAttribute('autoplay', '');
    expect(<video autoPlay />).toHaveProperty('autoplay', true);
    expect(<video autoPlay={false} />).not.toHaveAttribute('autoplay');
    expect(<video autoPlay={false} />).toHaveProperty('autoplay', false);

    expect(<video autoplay />).toHaveAttribute('autoplay', '');
    expect(<video autoplay={false} />).not.toHaveAttribute('autoplay');
  });

  it('should have `loop` attributes', () => {
    expect(<video loop />).toHaveAttribute('loop', '');
    expect(<video loop />).toHaveProperty('loop', true);
    expect(<video loop={false} />).not.toHaveAttribute('loop');
    expect(<video loop={false} />).toHaveProperty('loop', false);
  });

  it('should have `controlslist` attributes', () => {
    expect(<video controlslist="nodownload" />).toHaveAttribute('controlslist', 'nodownload');
    expect(<video controlsList="nofullscreen" />).toHaveAttribute('controlslist', 'nofullscreen');
  });

  it('should have `preload` attributes', () => {
    expect(<video preload="metadata" />).toHaveAttribute('preload', 'metadata');
    expect(<video preload="auto" />).toHaveProperty('preload', 'auto');
  });

  it('should have `preload` attributes', () => {
    expect(<video poster="/img.jpg" />).toHaveAttribute('poster', '/img.jpg');
    expect(<video poster="/img.jpg" />).toHaveProperty('poster', 'http://localhost/img.jpg');
  });
});
