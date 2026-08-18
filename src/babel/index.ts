import { jsxTransform } from './jsxTransform';

const preset = () => {
  return {
    plugins: [
      {
        manipulateOptions(_: any, parser: any) {
          parser.plugins.push('jsx');
        },
      },
      jsxTransform,
    ],
  };
};

export { preset as default };
