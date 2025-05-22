'use strict';

const svgTags = new Set(['altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use', 'view', 'vkern', 'discard', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'solidcolor']);
const htmlTags = new Set(['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'search', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'fencedframe', 'selectedcontent', 'acronym', 'applet', 'basefont', 'bgsound', 'big', 'blink', 'center', 'noframes', 'tt', 'strike', 'xmp', 'isindex', 'keygen']);
const mathmlTags = new Set(['annotation', 'annotation-xml', 'maction', 'math', 'merror', 'mfrac', 'mi', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mprescripts', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mfenced', 'menclose', 'mlabeledtr', 'maligngroup', 'malignmark']);

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of spread operator inside HTML, SVG, or MathML tags',
      category: 'SyntaxError',
      recommended: false
    },
    schema: [],
    messages: {
      noSpread: 'SyntaxError: Using the spread operator inside HTML, SVG, or MathML elements is not allowed and will cause your app to crash at runtime.'
    }
  },
  create: context => {
    return {
      JSXOpeningElement(node) {
        if ('JSXIdentifier' !== node.name.type) {
          return;
        }
        const tag = node.name.name;
        if (htmlTags.has(tag) || svgTags.has(tag) || mathmlTags.has(tag)) {
          for (const attr of node.attributes) {
            if ('JSXSpreadAttribute' === attr.type) {
              context.report({
                node: attr,
                messageId: 'noSpread'
              });
            }
          }
        }
      }
    };
  }
};

const rules = {
  'jsx-dom-runtime/no-spread-attribute-in-dom-element': rule
};

module.exports = rules;
