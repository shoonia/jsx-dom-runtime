import svgTags from 'svg-tags';
import htmlTags from 'html-tags';

// The tags, that exist in HTML and SVG too
export const maybeSvg = new Set(['a', 'script', 'style', 'title']);
export const sureSvg = new Set(svgTags.filter((i) => !maybeSvg.has(i)));
export const html = new Set<string>(htmlTags);
