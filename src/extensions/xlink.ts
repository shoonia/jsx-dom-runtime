// @ts-ignore
import { extensions } from '../jsx-runtime';

export const xlinkNS = 'http://www.w3.org/1999/xlink';

const handler = (node: SVGElement, value: string, key: string): void =>
  node.setAttributeNS(xlinkNS, key, value);

export const xLink = (): void => [
  'actuate',
  'arcrole',
  'href',
  'show',
  'title',
  'type',
  'role',
  'label',
  'from',
  'to',
].forEach((key) => extensions.set('xlink:' + key, handler));
