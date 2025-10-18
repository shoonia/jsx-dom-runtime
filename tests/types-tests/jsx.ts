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

// Support event handlers $

export const $1 = jsx('my-elem', { $: { onclick: () => {} } });
export const $2 = jsx('div', { $: { onmouseover: () => {} } });
export const $3 = jsx('svg', { $: { onpointerdown: () => {} } });
export const $4 = jsx('math', { $: { oninput: () => {} } });

// XML

export const xml = jsx('my:xml', { class: 'hello' });

// children

export const children0 = jsx('div', {  });
export const children1 = jsx('div', {}, 'hello');
export const children2 = jsx('div', {}, 1);
export const children3 = jsx('div', {}, [1, 2]);
export const children4 = jsx('div', {}, jsx('p', {}));
export const children5 = jsx('div', {}, null);
export const children6 = jsx('div', {}, undefined);
export const children7 = jsx('div', {}, false);
export const children8 = jsx('div', {}, 1n);
export const children9 = jsx('div', {}, [jsx('p', {}), 'hello', 2, null, undefined, false, 3n]);

// @ts-expect-error
export const avoidChildren1 = jsx('div', { children: 'hello' });
// @ts-expect-error
export const avoidChildren2 = jsx('p', { children: null });
// @ts-expect-error
export const avoidChildren3 = jsx('a', { children: undefined });
// @ts-expect-error
export const avoidChildren4 = jsx('span', { children: false });
// @ts-expect-error
export const avoidChildren5 = jsx('input', { children: [1, 2, 3] });
// @ts-expect-error
export const avoidChildren6 = jsx('button', { children: jsx('p', {}) });
// @ts-expect-error
export const avoidChildren7 = jsx('details', { children: 1n });
// @ts-expect-error
export const avoidChildren8 = jsx('math', { children: 123 });
// @ts-expect-error
export const avoidChildren9 = jsx('svg', { children: 'text' });
// @ts-expect-error
export const avoidChildren10 = jsx('my-elem', { children: jsx('span', {}) });


// Exclude attributes

// @ts-expect-error
export const excludeProp1 = jsx('div', { 'prop:id': 'value' });
// @ts-expect-error
export const excludeProp2 = jsx('my-elem', { 'prop:id': 'value' });
// @ts-expect-error
export const excludeProp3 = jsx('svg', { 'prop:id': 'value' });
// @ts-expect-error
export const excludeProp4 = jsx('math', { 'prop:id': 'value' });

// @ts-expect-error
export const excludeAttr1 = jsx('div', { 'attr:id': 'value' });
// @ts-expect-error
export const excludeAttr2 = jsx('my-elem', { 'attr:id': 'value' });
// @ts-expect-error
export const excludeAttr3 = jsx('svg', { 'attr:id': 'value' });
// @ts-expect-error
export const excludeAttr4 = jsx('math', { 'attr:id': 'value' });

// @ts-expect-error
export const excludeOn1 = jsx('div', { 'on:click': () => {} });
// @ts-expect-error
export const excludeOn2 = jsx('my-elem', { 'on:click': () => {} });
// @ts-expect-error
export const excludeOn3 = jsx('svg', { 'on:click': () => {} });
// @ts-expect-error
export const excludeOn4 = jsx('math', { 'on:click': () => {} });

// @ts-expect-error
export const excludeHandler1 = jsx('div', { onclick: () => {} });
// @ts-expect-error
export const excludeHandler2 = jsx('my-elem', { onclick: () => {} });
// @ts-expect-error
export const excludeHandler3 = jsx('svg', { onclick: () => {} });
// @ts-expect-error
export const excludeHandler4 = jsx('math', { onclick: () => {} });
