describe('HTMLAudioElement', () => {
  it('should render audio block', () => {
    expect(
      <audio controls>
        <source src="myAudio.mp3" type="audio/mpeg"/>
        <source src="myAudio.ogg" type="audio/ogg"/>
        <p>Your browser doesn't support HTML5 audio. Here is a
          <a href="myAudio.mp4">link to the audio</a> instead.</p>
      </audio>
    ).toHaveOuterHTML(
      '<audio controls=""><source src="myAudio.mp3" type="audio/mpeg"><source src="myAudio.ogg" type="audio/ogg"><p>Your browser doesn\'t support HTML5 audio. Here is a<a href="myAudio.mp4">link to the audio</a> instead.</p></audio>'
    );
  });

  it('should have `src` attributes', () => {
    expect(<audio src="/Run-DMC.mp3" />).toHaveAttribute('src', '/Run-DMC.mp3');
    expect(<audio src="/Run-DMC.mp3" />).toHaveProperty('src', 'http://localhost/Run-DMC.mp3');
  });

  it('should have `controls` attributes', () => {
    expect(<audio controls />).toHaveAttribute('controls', '');
    expect(<audio controls />).toHaveProperty('controls', true);
  });

  it('should NOT have `controls` attributes', () => {
    expect(<audio controls={false} />).not.toHaveAttribute('controls');
    expect(<audio controls={false} />).toHaveProperty('controls', false);
  });

  it('should have `controls` attributes with string value', () => {
    expect(<audio controls="" />).toHaveProperty('controls', true);
    expect(<audio controls="controls" />).toHaveProperty('controls', true);
  });

  it('should have `autoplay` attributes', () => {
    expect(<audio autoplay />).toHaveAttribute('autoplay', '');
    expect(<audio autoplay />).toHaveProperty('autoplay', true);
  });

  it('should NOT have `autoplay` attributes', () => {
    expect(<audio autoplay={false} />).not.toHaveAttribute('autoplay');
    expect(<audio autoplay={false} />).toHaveProperty('autoplay', false);
  });

  it('should have `autoplay` attributes with string value', () => {
    expect(<audio autoplay="" />).toHaveProperty('autoplay', true);
    expect(<audio autoplay="autoplay" />).toHaveProperty('autoplay', true);
  });

  it('should have `loop` attributes', () => {
    expect(<audio loop />).toHaveAttribute('loop', '');
    expect(<audio loop />).toHaveProperty('loop', true);
  });

  it('should NOT have `loop` attributes', () => {
    expect(<audio loop={false} />).not.toHaveAttribute('loop');
    expect(<audio loop={false} />).toHaveProperty('loop', false);
  });

  it('should have `loop` attributes with string value', () => {
    expect(<audio loop="" />).toHaveProperty('loop', true);
    expect(<audio loop="loop" />).toHaveProperty('loop', true);
  });

  it('should have `crossOrigin` attribute', () => {
    expect(<audio crossOrigin="anonymous" />).toHaveProperty('crossOrigin', 'anonymous');
    expect(<audio crossOrigin="anonymous" />).toHaveAttribute('crossOrigin', 'anonymous');
  });

  it('should have `preload` attributes', () => {
    expect(<audio preload="metadata" />).toHaveAttribute('preload', 'metadata');
    expect(<audio preload="auto" />).toHaveProperty('preload', 'auto');
  });
});
