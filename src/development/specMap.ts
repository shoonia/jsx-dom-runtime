import { a } from './a';
import { element } from './element';

const specMap = new Map();

const assign = (...types) => Object.assign({}, ...types);

specMap.set('a', assign(element, a));
specMap.set('dev', element);

export { specMap };
