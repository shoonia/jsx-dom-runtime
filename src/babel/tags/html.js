import htmlTags from 'html-tags/html-tags.json';

const html = new Set(htmlTags);

export const isHtmlTag = (tag) => html.has(tag);
