export const svgTags = new Set([
  /* 'a', */ 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform',
  'circle', 'clipPath', 'color-profile', 'cursor',
  'defs', 'desc',
  'ellipse',
  'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight',
  'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur',
  'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font',
  'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject',
  'g', 'glyph', 'glyphRef',
  'hkern',
  'image',
  'line', 'linearGradient',
  'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline',
  'radialGradient', 'rect',
  /* 'script', */ 'set', 'stop', /* 'style', */ 'svg', 'switch', 'symbol',
  'text', 'textPath', /* 'title', */ 'tref', 'tspan',
  'use',
  'view', 'vkern',
  // non-standard
  'discard', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'solidcolor',
]);

export const voidHTMLTags = [
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
];

const allHTMLTags = [
  ...voidHTMLTags,
  'a', 'abbr', 'address', 'article', 'aside', 'audio',
  'b', 'bdi', 'bdo', 'blockquote', 'body', 'button',
  'canvas', 'caption', 'cite', 'code', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
  'em',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'html',
  'i', 'iframe', 'ins',
  'kbd',
  'label', 'legend', 'li',
  'main', 'map', 'mark', 'menu', 'menuitem', 'meter',
  'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output',
  'p', 'picture', 'pre', 'progress',
  'q',
  'rb', 'rp', 'rt', 'rtc', 'ruby',
  's', 'samp', 'script', 'search', 'section', 'select', 'slot', 'small',
  'span', 'strong', 'style', 'sub', 'summary', 'sup',
  'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time',
  'title', 'tr',
  'u', 'ul',
  'var', 'video',
  // non-standard
  'fencedframe', 'selectedcontent',
  // deprecated
  'acronym', 'applet', 'basefont', 'bgsound', 'big', 'blink', 'center', 'noframes',
  'tt', 'strike', 'xmp', 'isindex', 'keygen',
];

export const htmlTags = new Set(allHTMLTags);

export const mathmlTags = new Set([
  'annotation', 'annotation-xml', 'maction', 'math', 'merror', 'mfrac', 'mi',
  'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mprescripts',
  'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup',
  'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mfenced',
  // non-standard
  'menclose', 'mlabeledtr', 'maligngroup', 'malignmark',
]);

export const htmlDOMAttributes = new Map(
  Object.entries({
    acceptCharset: 'accept-charset',
    className: 'class',
    httpEquiv: 'http-equiv',
    htmlFor: 'for',
    // SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
    xlinkHref: 'href',
  }),
);
