import svgTags from 'svg-tags';
import htmlTags from 'html-tags';

// The tags, that exist in HTML and SVG too
const crossTags = new Set(['a', 'script', 'style', 'title']);

const onlySvg = new Set(svgTags.filter((i) => !crossTags.has(i)));
const html = new Set<string>(htmlTags);

export const sureSvg = (tag: string) => onlySvg.has(tag);
export const maybeSvg = (tag: string) => crossTags.has(tag);
export const isHtmlTag = (tag: string) => html.has(tag);
