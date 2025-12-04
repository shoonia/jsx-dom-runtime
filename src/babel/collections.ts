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
  // SnapEvent
  'scrollsnapchange', 'scrollsnapchanging',
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
  // HTMLCanvasElement
  'contextlost', 'contextrestored',
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

export const jsxNode = new Set<Node['type']>(['JSXElement', 'JSXFragment']);

// [A-Z], [$] or [_]
export const charCode = new Set([36, 95]);
for (let i = 65; i <= 90; i++) charCode.add(i);
