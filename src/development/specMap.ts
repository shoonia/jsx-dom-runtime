import { a } from './a';
import { element } from './element';

type TagNameMap = keyof HTMLElementTagNameMap;

const specMap = new Map<string, any>();

const setup = (tagName: TagNameMap, ...types): void => {
  specMap.set(tagName, Object.assign({}, ...types));
};

setup('a', element, a);
setup('div', element);

export { specMap };
