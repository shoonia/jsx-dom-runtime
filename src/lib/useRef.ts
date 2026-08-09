import type { RefObject } from '../../index';

export const useRef = <T>(current?: T): RefObject<T> => /*#__PURE__*/({ current });
