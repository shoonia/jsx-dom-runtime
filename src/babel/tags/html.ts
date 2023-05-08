import htmlTags from 'html-tags';

const html = new Set<string>(htmlTags);

export const isHtmlTag = (tag: string) => html.has(tag);
