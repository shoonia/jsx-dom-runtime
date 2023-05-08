const events = new Set([
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
  'ontransitionend',
  // HTMLVideoElement
  'onenterpictureinpicture', 'onleavepictureinpicture',
  // HTMLDetailsElement & HTMLDialogElement
  'ontoggle',
]);

const boolAttrs = new Set([
  'async', 'autofocus', 'autoplay', 'controls', 'checked', 'defer', 'disabled',
  'formNoValidate', 'readOnly', 'multiple', 'loop', 'required', 'hidden',
  'open', 'selected', 'noModule', 'noValidate', 'playsInline', 'reversed',
  'inert', 'disablePictureInPicture', 'disableRemotePlayback'
]);

export const isDOMEvent = (name: string) => events.has(name);
export const isBoolAttribute = (name: string) => boolAttrs.has(name);
