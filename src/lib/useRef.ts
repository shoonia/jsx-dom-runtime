import type { RefObject } from '../../index';

export const useRef = /*#__PURE__*/ <T>(current?: T): RefObject<T> => ({ current });
