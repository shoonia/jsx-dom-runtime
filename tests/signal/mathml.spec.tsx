import { signal } from 'jsx-dom-runtime';

describe('MathML signal', () => {
  it('renders correctly text content', () => {
    const mn = signal(1);

    const math = (
      <math display="block">
        <mfrac>
          <mn>{mn}</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    ) as Element;

    expect(math.querySelector('mn')).toHaveTextContent('1');
    mn.set(3);
    expect(math.querySelector('mn')).toHaveTextContent('3');
  });

  it('renders correctly attributes value', () => {
    const display: JSX.MathMLMathElementAttributes['display'] = signal('block');

    const math = (
      <math display={display}>
        <mfrac>
          <mn>1</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    ) as Element;

    expect(math.getAttribute('display')).toBe('block');
    display.set('inline');
    expect(math.getAttribute('display')).toBe('inline');
  });
});