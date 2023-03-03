const tags = new Set([
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b',
  'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data',
  'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl',
  'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer',
  'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup',
  'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen',
  'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu',
  'menuitem', 'meta', 'meter', 'nav', 'noindex', 'noscript', 'object', 'ol',
  'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre',
  'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section',
  'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub',
  'summary', 'sup', 'table', 'template', 'tbody', 'td', 'textarea',
  'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul',
  'var', 'video', 'wbr', 'webview',
  // Deprecated
  'acronym', 'applet', 'bgsound', 'big', 'blink', 'center', 'dir', 'font',
  'frame', 'frameset', 'keygen', 'marquee', 'nobr', 'noembed', 'noframes',
  'param', 'plaintext', 'rb', 'rtc', 'spacer', 'strike', 'tt', 'xmp',
  // Non-standard
  'content', 'image', 'menuitem', 'shadow',
  // Experimental
  'portal',
]);

export const isHtmlTag = (tag) => tags.has(tag);
