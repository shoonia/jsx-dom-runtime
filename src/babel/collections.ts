import svg from 'svg-tags';
import html from 'html-tags';

// The tags, that exist in HTML and SVG too
const crossTags = new Set(['a', 'script', 'style', 'title']);

export const svgTags = new Set(svg.filter((i) => !crossTags.has(i)));
export const htmlTags = new Set<string>(html);

export const mathmlTags = new Set([
  'annotation', 'annotation-xml', 'maction', 'math', 'merror', 'mfrac', 'mi',
  'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mprescripts',
  'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup',
  'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mfenced',
]);

export const DOMEvents = new Set([
  'oncopy', 'oncut', 'onpaste',
  // Composition Events
  'oncompositionend', 'oncompositionstart', 'oncompositionupdate',
  // Focus Events
  'onfocus', 'onblur',
  // Form Events
  'onchange', 'onbeforeinput', 'oninput', 'onreset', 'onsubmit', 'oninvalid',
  // Image Events
  'onload', 'onerror',
  // Keyboard Events
  'onkeydown', 'onkeypress', 'onkeyup',
  // Media Events
  'onabort', 'oncanplay', 'oncanplaythrough', 'ondurationchange',
  'onemptied', 'onencrypted', 'onended', 'onloadeddata', 'onloadedmetadata',
  'onloadstart', 'onpause', 'onplay', 'onplaying', 'onprogress',
  'onratechange', 'onseeked', 'onseeking', 'onstalled', 'onsuspend',
  'ontimeupdate', 'onvolumechange', 'onwaiting',
  // MouseEvents
  'onauxclick', 'onclick', 'oncontextmenu', 'ondblclick', 'ondrag',
  'ondragend', 'ondragenter', 'ondragexit', 'ondragleave', 'ondragover',
  'ondragstart', 'ondrop', 'onmousedown', 'onmouseenter', 'onmouseleave',
  'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup',
  // Selection Events
  'onselect',
  // Touch Events
  'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart',
  // Pointer Events
  'onpointerdown', 'onpointermove', 'onpointerup', 'onpointercancel',
  'onpointerenter', 'onpointerleave', 'onpointerover', 'onpointerout',
  'ongotpointercapture', 'onlostpointercapture',
  // UI Events
  'onscroll',
  // Wheel Events
  'onwheel',
  // Animation Events
  'onanimationstart', 'onanimationend', 'onanimationiteration',
  // Transition Events
  'ontransitionend', 'ontransitionstart', 'ontransitioncancel', 'ontransitionrun',
  // PictureInPicture Events
  'onenterpictureinpicture', 'onleavepictureinpicture', 'onresize',
  // HTMLDetailsElement & HTMLDialogElement
  'ontoggle',
  // HTMLDialogElement
  'oncancel', 'onclose'
]);

export const boolAttrs = new Set([
  'async', 'autofocus', 'autoplay', 'controls', 'checked', 'crossorigin',
  'capture', 'defer', 'disabled', 'contenteditable', 'formnovalidate', 'readonly',
  'multiple', 'loop', 'required', 'hidden', 'open', 'selected', 'nomodule',
  'novalidate', 'playsinline', 'reversed', 'inert', 'disablepictureinpicture',
  'disableremoteplayback'
]);
