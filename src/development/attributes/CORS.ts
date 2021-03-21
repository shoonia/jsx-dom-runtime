import { HTMLAttrinuteCORS } from '../../..';
import T from '../t';

const type = T.oneOf<HTMLAttrinuteCORS>([
  'anonymous',
  'use-credentials',
  '',
]);

export const CORS = {
  crossorigin: type,
  crossOrigin: type,
};
