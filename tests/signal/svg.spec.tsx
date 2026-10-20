import { signal } from 'jsx-dom-runtime';

describe('SVG signal', () => {
  it('renders correctly', () => {
    const one = 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z';
    const two = 'M16.59 16.16 12 11.58l-4.59 4.58L6 14.75l6-6 6 6z';

    const d = signal(one);

    const svg = (
      <svg width="24" height="24" fill="#116dff">
        <path d={d} />
      </svg>
    );

    expect(svg.firstChild).toHaveAttribute('d', one);
    d.set(two);
    expect(svg.firstChild).toHaveAttribute('d', two);
  });
});