import { CORS } from './attributes/CORS';
import { ARIA } from './attributes/ARIA';
import { ReferrerPolicy } from './attributes/ReferrerPolicy';

import { element } from './element';

import { a } from './a';
import { img } from './img';
import { input } from './input';
import { button } from './button';
import { label } from './label';
import { textarea } from './textarea';
import { iframe } from './iframe';

const specMap = new Map<string, any>();

const defaultSpecs = Object.assign({}, element, ARIA);

const list = <const>[
  ['a', a, ReferrerPolicy],
  'abbr',
  'address',
  'applet',
  ['area', ReferrerPolicy],
  'article',
  'aside',
  ['audio', CORS],
  'b',
  'base',
  'basefont',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  ['button', button],
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  ['iframe', iframe, ReferrerPolicy],
  ['img', img, CORS, ReferrerPolicy],
  ['input', input, CORS],
  'ins',
  'kbd',
  ['label', label],
  'legend',
  'li',
  ['link', CORS, ReferrerPolicy],
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  ['script', CORS],
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  ['textarea', textarea],
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  ['video', CORS],
  'wbr',
];

list.forEach((item) => {
  if (Array.isArray(item)) {
    const [tagName, ...specs] = item;

    specMap.set(tagName, Object.assign({}, defaultSpecs, ...specs));
  } if (typeof item === 'string') {
    specMap.set(item, defaultSpecs);
  }
});

export { specMap };
