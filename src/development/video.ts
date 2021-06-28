import { VideoHTMLAttributes } from '../..';
import T from './t';

const controlsList = T.oneOf([
  'nodownload',
  'nofullscreen',
  'noremoteplayback',
]);

export const video: VideoHTMLAttributes = {
  src: T.string,
  height: T.oneOfType([
    T.string,
    T.number,
  ]),
  width:T.oneOfType([
    T.string,
    T.number,
  ]),
  playsInline: T.bool,
  poster: T.string,
  // disablePictureInPicture?: boolean
  // disableRemotePlayback?: boolean
  autoPlay: T.bool,
  autoplay: T.bool,
  controls: T.bool,
  controlsList: controlsList,
  controlslist: controlsList,
  loop: T.bool,
  // muted: T.bool,
  preload: T.oneOf([
    'none',
    'metadata',
    'auto',
  ]),
};
