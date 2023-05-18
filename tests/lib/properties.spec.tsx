import { properties } from '../../jsx-runtime';

declare global {
  namespace JSX {
    // it should add types for all JSX elements
    interface Attributes {
      textContent?: string;
      innerHTML?: string;
    }

    // it should add types only for Audio element
    interface HTMLAudioElementAttributes {
      volume?: number;
      muted?: boolean;
    }
  }
}

describe('properties', () => {
  it('should add support of `textContent` property', () => {
    expect(<div textContent="hello" />).toHaveAttribute('textcontent', 'hello');
    expect(<div textContent="hello" />).toHaveTextContent('');

    properties.add('textContent');

    expect(<div textContent="hello" />).not.toHaveAttribute('textcontent');
    expect(<div textContent="hello" />).toHaveTextContent('hello');

    properties.delete('textContent');
  });

  it('should add html to component', () => {
    expect(<div innerHTML="<p>text</p>" />).toHaveAttribute('innerhtml', '<p>text</p>');
    expect(<div innerHTML="<p>text</p>" />).toHaveInnerHTML('');

    properties.add('innerHTML');

    expect(<div innerHTML="<p>text</p>" />).not.toHaveAttribute('innerhtml');
    expect(<div innerHTML="<p>text</p>" />).toHaveInnerHTML('<p>text</p>');

    properties.delete('innerHTML');
  });

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
