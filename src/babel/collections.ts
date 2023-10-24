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
  'oncancel', 'onclose',
]);

export const attributes = new Set([
  'tabindex', 'inputmode', 'referrerpolicy', 'enterkeyhint', 'maxlength', 'minlength',
  'itemprop', 'itemscope', 'itemtype', 'itemid', 'itemref', 'accesskey',
]);

export const booleanAttributes = new Set([
  'async', 'autofocus', 'autoplay', 'controls', 'checked', 'crossorigin',
  'capture', 'defer', 'disabled', 'contenteditable', 'formnovalidate', 'readonly',
  'multiple', 'loop', 'required', 'hidden', 'open', 'selected', 'nomodule',
  'novalidate', 'playsinline', 'reversed', 'inert', 'disablepictureinpicture',
  'disableremoteplayback', 'popover', 'itemscope',
]);

export const ariaAttributes = new Set([
  'aria-atomic', 'aria-braillelabel', 'aria-brailleroledescription', 'aria-busy',
  'aria-controls', 'aria-current', 'aria-describedby', 'aria-description', 'aria-details',
  'aria-disabled', 'aria-dropeffect', 'aria-errormessage', 'aria-flowto', 'aria-grabbed',
  'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label',
  'aria-labelledby', 'aria-live', 'aria-owns', 'aria-relevant', 'aria-roledescription',
  'aria-autocomplete', 'aria-checked', 'aria-expanded', 'aria-level', 'aria-modal',
  'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-placeholder',
  'aria-pressed', 'aria-readonly', 'aria-required', 'aria-selected', 'aria-sort',
  'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'aria-activedescendant',
  'aria-colcount', 'aria-colindex', 'aria-colindextext', 'aria-colspan', 'aria-posinset',
  'aria-rowcount', 'aria-rowindex', 'aria-rowindextext', 'aria-rowspan', 'aria-setsize',
]);

export const svgDOMAttributes = new Map(
  Object.entries({
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
  }),
);

export const htmlDOMAttributes = new Map(
  Object.entries({
    acceptCharset: 'accept-charset',
    className: 'class',
    httpEquiv: 'http-equiv',
    htmlFor: 'for',
  }),
);
