export const svgTags = new Set([
  /* 'a', */ 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform',
  'circle', 'clipPath', 'color-profile', 'cursor',
  'defs', 'desc',
  'ellipse',
  'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight',
  'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur',
  'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font',
  'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject',
  'g', 'glyph', 'glyphRef',
  'hkern',
  'image',
  'line', 'linearGradient',
  'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline',
  'radialGradient', 'rect',
  /* 'script', */ 'set', 'stop', /* 'style', */ 'svg', 'switch', 'symbol',
  'text', 'textPath', /* 'title', */ 'tref', 'tspan',
  'use',
  'view', 'vkern'
]);

export const htmlTags = new Set([
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
  'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
  'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
  'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
  'em', 'embed',
  'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins',
  'kbd',
  'label', 'legend', 'li', 'link',
  'main', 'map', 'mark', 'math', 'menu', 'menuitem', 'meta', 'meter',
  'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'output',
  'p', 'param', 'picture', 'pre', 'progress',
  'q',
  'rb', 'rp', 'rt', 'rtc', 'ruby',
  's', 'samp', 'script', 'search', 'section', 'select', 'slot', 'small', 'source',
  'span', 'strong', 'style', 'sub', 'summary', 'sup',
  'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time',
  'title', 'tr', 'track',
  'u', 'ul',
  'var', 'video',
  'wbr',
]);

export const mathmlTags = new Set([
  'annotation', 'annotation-xml', 'maction', 'math', 'merror', 'mfrac', 'mi',
  'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mprescripts',
  'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msubsup', 'msup',
  'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'mfenced',
]);

const events = [
  // Clipboard Events
  'copy', 'cut', 'paste',
  // Composition Events
  'compositionend', 'compositionstart', 'compositionupdate',
  // Form Events
  'change', 'reset', 'invalid',
  // FocusEvent
  'focus', 'blur', 'input', 'beforeinput',
  // SubmitEvent
  'submit',
  // FormDataEvent
  'formdata',
  // Image Events
  'load', 'error',
  // KeyboardEvent
  'keydown', 'keypress', 'keyup',
  // Media Events
  'abort', 'canplay', 'canplaythrough', 'durationchange',
  'emptied', 'ended', 'loadeddata', 'loadedmetadata',
  'loadstart', 'pause', 'play', 'playing', 'progress',
  'ratechange', 'seeked', 'seeking', 'stalled', 'suspend',
  'timeupdate', 'volumechange', 'waiting', 'waitingforkey',
  // MediaEncryptedEvent
  'encrypted',
  // MouseEvents
  'auxclick', 'click', 'contextmenu', 'dblclick',
  'mousedown', 'mouseenter', 'mouseleave',
  'mousemove', 'mouseout', 'mouseover', 'mouseup',
  // DragEvent
  'drag', 'dragend', 'dragenter', 'dragleave', 'dragover',
  'dragstart', 'drop', 'dragexit',
  // Selection Events
  'select',
  // TouchEvent
  'touchcancel', 'touchend', 'touchmove', 'touchstart',
  // Pointer Events
  'pointerdown', 'pointermove', 'pointerup', 'pointercancel',
  'pointerenter', 'pointerleave', 'pointerover', 'pointerout',
  'gotpointercapture', 'lostpointercapture',
  // UI Events
  'scroll', 'scrollend',
  // WheelEvent
  'wheel',
  // Animation Events
  'animationstart', 'animationend', 'animationiteration',
  // Transition Events
  'transitionend', 'transitionstart', 'transitioncancel', 'transitionrun',
  // PictureInPicture Events
  'enterpictureinpicture', 'leavepictureinpicture', 'resize',
  // ToggleEvent
  'toggle',
  // HTMLDialogElement
  'cancel', 'close',
  // Fullscreen API
  'fullscreenchange', 'fullscreenerror',
  // HTMLTrackElement
  'cuechange',
];

export const DOMEvents = new Set(events.map((e) => 'on' + e));

export const eventTypes = new Set([
  ...events,
  // FocusEvent
  'focusin', 'focusout',
  // WebGLContextEvent
  'webglcontextlost', 'webglcontextrestored', 'webglcontextcreationerror',
]);

export const attributes = new Set([
  'tabindex', 'inputmode', 'referrerpolicy', 'enterkeyhint', 'maxlength', 'minlength',
  'itemprop', 'itemtype', 'itemid', 'itemref', 'accesskey', 'elementtiming', 'usemap',
  'fetchpriority', 'controlslist', 'dirname', 'formtarget', 'formmethod', 'formenctype',
  'formaction', 'datetime', 'colspan', 'rowspan', 'srcset', 'shadowrootmode',
]);

export const booleanAttributes = new Set([
  'async', 'autofocus', 'autoplay', 'controls', 'checked', 'crossorigin', 'noshade',
  'capture', 'defer', 'disabled', 'contenteditable', 'formnovalidate', 'readonly',
  'multiple', 'loop', 'required', 'hidden', 'open', 'selected', 'nomodule',
  'novalidate', 'playsinline', 'reversed', 'inert', 'disablepictureinpicture',
  'disableremoteplayback', 'popover', 'itemscope', 'declare', 'moz-opaque', 'ismap',
]);

export const enumerated = new Set([
  // ARIA enumerated attributes
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
  // HTML enumerated attributes
  'draggable', 'spellcheck',
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
    // SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
    xlinkHref: 'href',
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
    // SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
    xlinkHref: 'href',
  }),
);
