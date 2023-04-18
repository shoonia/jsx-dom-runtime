import svgTags from 'svg-tags/lib/svg-tags.json';

const maybe = new Set(['a', 'script', 'style', 'title']);
const svg = new Set(svgTags.filter((i) => !maybe.has(i)));

export const isSvgTag = (tag) => svg.has(tag);
export const maybeSvg = (tag) => maybe.has(tag);
