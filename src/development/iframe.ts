import { IframeHTMLAttributes } from '../..';
import T from './t';

export const iframe: IframeHTMLAttributes = {
  title: T.string,
  name: T.string,
  src: T.string,
  srcDoc: T.string,
  allowFullScreen: T.bool,
  allowfullscreen: T.bool,
  loading: T.oneOf(['eager', 'lazy']),
};
