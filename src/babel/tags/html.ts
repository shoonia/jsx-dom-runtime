import htmlTags from 'html-tags';

const html = new Set(htmlTags);

export const isHtmlTag = (tag) => html.has(tag);
