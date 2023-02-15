const tags = new Set([
  'animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath',
  'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer',
  'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG',
  'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'filter', 'foreignObject', 'g', 'image', 'line', 'linearGradient',
  'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline',
  'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath',
  'tspan', 'use', 'view',
]);

const maybe = new Set(['a', 'script', 'style', 'title']);

export const isSvgTag = (tag) => tags.has(tag);
export const maybeSvg = (tag) => maybe.has(tag);
