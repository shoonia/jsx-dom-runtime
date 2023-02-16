import { properties } from '../../jsx-runtime';

describe('properties', () => {
  it('should add support of `textContent` property', () => {
    // @ts-expect-error
    expect(<div textContent="hello" />).toHaveInnerHTML('');
    // @ts-expect-error
    expect(<div textContent="hello" />).toHaveOuterHTML('<div textcontent="hello"></div>');

    properties.add('textContent');

    // @ts-expect-error
    expect(<div textContent="hello" />).toHaveInnerHTML('hello');
    // @ts-expect-error
    expect(<div textContent="hello" />).toHaveOuterHTML('<div>hello</div>');
  });
});
