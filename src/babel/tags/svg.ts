import svgTags from 'svg-tags';

const maybe = new Set(['a', 'script', 'style', 'title']);
const svg = new Set(svgTags.filter((i) => !maybe.has(i)));

export const isSvgTag = (tag) => svg.has(tag);
export const maybeSvg = (tag) => maybe.has(tag);
