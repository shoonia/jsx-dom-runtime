const svg = new Set([
  'svg', 'animate', 'circle', 'animateTransform', 'clipPath', 'defs',
  'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer',
  'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology',
  'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence', 'filter',
  'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'stop', 'symbol', 'text', 'textPath', 'tspan', 'use',
]);

const maybeSvg = new Set(['a', 'link', 'script', 'style', 'title']);

export const isSvgElement = (path) => {
  return svg.has(path.node.name.name) ||
  (maybeSvg.has(path.node.name.name) && svg.has(path.parentPath.parent?.openingElement?.name?.name));
};
