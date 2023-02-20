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
    expect(<audio controls={false} />).not.toHaveAttribute('controls');
    expect(<audio controls={false} />).toHaveProperty('controls', false);
  });

  it('should have `autoplay` attributes', () => {
    expect(<audio autoPlay />).toHaveAttribute('autoplay', '');
    expect(<audio autoPlay />).toHaveProperty('autoplay', true);
    expect(<audio autoPlay={false} />).not.toHaveAttribute('autoplay');
    expect(<audio autoPlay={false} />).toHaveProperty('autoplay', false);
  });

  it('should have `loop` attributes', () => {
    expect(<audio loop />).toHaveAttribute('loop', '');
    expect(<audio loop />).toHaveProperty('loop', true);
    expect(<audio loop={false} />).not.toHaveAttribute('loop');
    expect(<audio loop={false} />).toHaveProperty('loop', false);
  });

  it('should have `muted` property', () => {
    expect(<audio muted />).toHaveProperty('muted', true);
    expect(<audio muted={false} />).toHaveProperty('muted', false);
  });
});
