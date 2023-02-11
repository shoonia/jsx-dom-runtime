const svgTags = new Set([
  'svg',
  'animate',
  'circle',
  'animateTransform',
  'clipPath',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'feSpecularLighting',
  'feTile',
  'feTurbulence',
  'filter',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'symbol',
  'text',
  'textPath',
  'tspan',
  'use',
]);

export const jsxPlugin = (babel) => {
  const { types: t } = babel;

  const svgNsAttribute = () => {
    return t.jSXAttribute(
      t.jSXIdentifier('__ns'),
      t.JSXExpressionContainer(t.numericLiteral(1))
    );
  };

  return {
    visitor: {
      JSXOpeningElement(path) {
        if (svgTags.has(path.node.name.name)) {
          path.node.attributes.push(svgNsAttribute());
        }
      },
      JSXAttribute(path) {
        const attr = path.node.name;

        switch (attr.name) {
          case 'className':
          case 'classname': {
            attr.name = 'class';
            return;
          }

          case 'htmlFor':
          case 'htmlfor': {
            attr.name = 'for';
            return;
          }
        }

        if (attr.name.startsWith('on')) {
          attr.name = attr.name.toLowerCase();
          return;
        }
      }
    }
  };
};
