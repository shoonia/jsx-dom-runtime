import { jest } from '@jest/globals';

describe('HTMLTrackElement', () => {
  it('should have `label` attribute', () => {
    expect(<track label="here" />).toHaveProperty('label', 'here');
    expect(<track label="here" />).toHaveAttribute('label', 'here');
  });

  it('should have `srclang` attribute', () => {
    expect(<track srclang="uk" />).toHaveProperty('srclang', 'uk');
    expect(<track srclang="uk" />).toHaveAttribute('srclang', 'uk');
  });

  it('should have `src` attribute', () => {
    expect(<track src="/url" />).toHaveProperty('src', 'http://localhost/url');
    expect(<track src="/url" />).toHaveAttribute('src', '/url');
  });

  it('should have `kind` attribute', () => {
    expect(<track kind="captions" />).toHaveProperty('kind', 'captions');
    expect(<track kind="captions" />).toHaveAttribute('kind', 'captions');
  });

  it('should have `default` attribute', () => {
    expect(<track default />).toHaveProperty('default', true);
    expect(<track default />).toHaveAttribute('default', '');
  });

  it('should NOT have `default` attribute', () => {
    expect(<track default={false} />).toHaveProperty('default', false);
    expect(<track default={false} />).not.toHaveAttribute('default');
  });

  it('should add `oncuechange` handler', () => {
    const spy = jest.fn();
    expect(<track oncuechange={spy} />).toHaveProperty('oncuechange', spy);
  });
});

describe('HTMLTrackElement prop:* support', () => {
  it('should support prop:default', () => {
    expect(<track prop:default />).toHaveProperty('default', true);
  });
  it('should support prop:kind', () => {
    expect(<track prop:kind="subtitles" />).toHaveProperty('kind', 'subtitles');
  });
  it('should support prop:label', () => {
    expect(<track prop:label="English" />).toHaveProperty('label', 'English');
  });
  it('should support prop:src', () => {
    expect(<track prop:src="/subs.vtt" />).toHaveProperty('src', 'http://localhost/subs.vtt');
  });
  it('should support prop:srclang', () => {
    expect(<track prop:srclang="en" />).toHaveProperty('srclang', 'en');
  });
});
