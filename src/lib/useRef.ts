import type { RefObject } from '../../index';

export const useRef = <T>(current?: T): RefObject<T> => ({ current });
