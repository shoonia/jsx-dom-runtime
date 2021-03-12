import { a } from './a';
import { element } from './element';

const map= new Map();

const assign = (...types) => Object.assign({}, ...types);

map.set('dev', element);
map.set('a', assign(element, a));

export { map };
