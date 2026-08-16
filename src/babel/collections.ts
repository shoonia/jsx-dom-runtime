import type { Node } from '@babel/types';

export const eventTypes = new Set([
  // ClipboardEvent
  'copy', 'cut', 'paste',
  // CompositionEvent
  'compositionend', 'compositionstart', 'compositionupdate',
  // [Form] Event
  'change', 'reset', 'invalid',
  // Event
  'load', 'error', 'select', 'selectionchange', 'beforematch',
  // FocusEvent
  'focus', 'blur', 'focusin', 'focusout',
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
  // WebGLContextEvent
  'webglcontextlost', 'webglcontextrestored', 'webglcontextcreationerror',
]);

export const booleanAttributes = new Set([
  'async', 'autofocus', 'autocomplete', 'autoplay', 'attributionsrc',
  'controls', 'checked', 'crossorigin',
  'capture', 'defer', 'disabled', 'contenteditable', 'formnovalidate', 'readonly',
  'multiple', 'loop', 'required', 'hidden', 'open', 'selected', 'nomodule', 'noshade',
  'novalidate', 'playsinline', 'reversed', 'inert', 'disablepictureinpicture',
  'disableremoteplayback', 'popover', 'itemscope', 'declare', 'moz-opaque', 'ismap',
  'shadowrootclonable', 'shadowrootdelegatesfocus', 'shadowrootserializable',
  'webkitdirectory',
]);

export const enumerated = new Set([
  'draggable', 'spellcheck', 'writingsuggestions',
]);

