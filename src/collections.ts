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

export const htmlTags = new Set([
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
  'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins',
  'kbd',
  'label', 'legend', 'li', 'link',
  'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter',
  'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output',
  'p', 'param', 'picture', 'pre', 'progress',
  'q',
  'rb', 'rp', 'rt', 'rtc', 'ruby',
  's', 'samp', 'script', 'search', 'section', 'select', 'slot', 'small', 'source',
  'span', 'strong', 'style', 'sub', 'summary', 'sup',
  'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time',
  'title', 'tr', 'track',
  'u', 'ul',
  'var', 'video',
  'wbr',
  // non-standard
  'fencedframe', 'selectedcontent',
  // deprecated
  'acronym', 'applet', 'basefont', 'bgsound', 'big', 'blink', 'center', 'noframes',
  'tt', 'strike', 'xmp', 'isindex', 'keygen',
]);

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
