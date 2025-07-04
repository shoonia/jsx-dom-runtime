import type { Node } from '@babel/types';

const events = [
  // ClipboardEvent
  'copy', 'cut', 'paste',
  // CompositionEvent
  'compositionend', 'compositionstart', 'compositionupdate',
  // [Form] Event
  'change', 'reset', 'invalid',
  // Event
  'load', 'error', 'select', 'selectionchange',
  // FocusEvent
  'focus', 'blur',
  // InputEvent
  'beforeinput', 'input',
  // SubmitEvent
  'submit',
  // FormDataEvent
  'formdata',
  // KeyboardEvent
  'keydown', 'keypress', 'keyup',
  // [Media] Event
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
  // TouchEvent
  'touchcancel', 'touchend', 'touchmove', 'touchstart',
  // PointerEvent
  'pointerdown', 'pointermove', 'pointerup', 'pointercancel',
  'pointerenter', 'pointerleave', 'pointerover', 'pointerout',
  'gotpointercapture', 'lostpointercapture',
  // UIEvent
  'scroll', 'scrollend',
  // WheelEvent
  'wheel',
  // AnimationEvent
  'animationstart', 'animationend', 'animationiteration', 'animationcancel',
  // TransitionEvent
  'transitionend', 'transitionstart', 'transitioncancel', 'transitionrun',
  // PictureInPicture Events
  'enterpictureinpicture', 'leavepictureinpicture', 'resize',
  // ToggleEvent
  'beforetoggle', 'toggle',
  // HTMLDialogElement
  'cancel', 'close',
  // Fullscreen API
  'fullscreenchange', 'fullscreenerror',
  // HTMLTrackElement
  'cuechange',
  // ContentVisibilityAutoStateChangeEvent
  'contentvisibilityautostatechange',
  // CommandEvent
  'command',
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
  'formaction', 'datetime', 'colspan', 'rowspan', 'srcset', 'shadowrootmode', 'closedby',
]);

export const booleanAttributes = new Set([
  'async', 'autofocus', 'autocomplete', 'autoplay', 'attributionsrc',
  'controls', 'checked', 'crossorigin',
  'capture', 'defer', 'disabled', 'contenteditable', 'formnovalidate', 'readonly',
  'multiple', 'loop', 'required', 'hidden', 'open', 'selected', 'nomodule', 'noshade',
  'novalidate', 'playsinline', 'reversed', 'inert', 'disablepictureinpicture',
  'disableremoteplayback', 'popover', 'itemscope', 'declare', 'moz-opaque', 'ismap',
  'shadowrootclonable', 'shadowrootdelegatesfocus', 'shadowrootserializable',
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
  'draggable', 'spellcheck', 'writingsuggestions',
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

export const jsxNode = new Set<Node['type']>(['JSXElement', 'JSXFragment']);

// [A-Z], [$] or [_]
export const charCode = new Set([36, 95]);
for (let i = 65; i <= 90; i++) charCode.add(i);
