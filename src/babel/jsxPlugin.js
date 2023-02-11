export const jsxPlugin = () => {
  return {
    name: 'jsx-dom-runtime/jsx-plugin',
    visitor: {
      JSXAttribute(path) {
        const { node, parent } = path;

        if (typeof parent.name.name === 'string') {
          if (node.name.name.startsWith('on')) {
            node.name.name = node.name.name.toLowerCase();
            return;
          }
        }
      },
    },
  };
};
