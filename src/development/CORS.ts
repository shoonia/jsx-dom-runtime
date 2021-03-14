import T from './t';

const type = T.oneOf([
  'anonymous',
  'use-credentials',
]);

export const CORS = {
  crossorigin: type,
  crossOrigin: type,
};
