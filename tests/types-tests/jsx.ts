import { jsx } from 'jsx-dom-runtime';

// HTML

export const div = jsx('div', { class: 'hello' });
export const a = jsx('a', { href: '/' });

// SVG

export const svg = jsx('svg', { xmlns: 'http://www.w3.org/2000/svg' });
// @ts-expect-error
export const svg2 = jsx('svg', { xmlns: 'some' });

// MathML

export const math = jsx('math', { xmlns: 'http://www.w3.org/1998/Math/MathML' });
// @ts-expect-error
export const math2 = jsx('math', { xmlns: 'some' });

// Custom Elements

export const elem = jsx('my-elem', { class: 'hello', onclick() {/**/} });

// XML

export const xml = jsx('my:xml', { class: 'hello' });

// children

export const children0 = jsx('div', {});
export const children1 = jsx('div', {}, 'hello');
export const children2 = jsx('div', {}, 1);
export const children3 = jsx('div', {}, [1, 2]);
export const children4 = jsx('div', {}, jsx('p', {}));
export const children5 = jsx('div', {}, null);
export const children6 = jsx('div', {}, undefined);
export const children7 = jsx('div', {}, false);
export const children8 = jsx('div', {}, 1n);
