/// <reference lib="dom" />
/// <reference lib="es2022" />
import { Properties } from 'csstype';

type Booleanish = boolean | 'true' | 'false'

interface Attributes { }

interface RefObject<T> {
  readonly current: T
}

type RefCallback<T> = (instance: T) => void

type TChild =
  | Node
  | Element
  | SVGElement
  | DocumentFragment
  | Comment
  | Text
  | TChild[]
  | string
  | number
  | false
  | null
  | undefined

type PropsWithChildren<P> = P & { children?: TChild | TChild[] }

export const properties: Set<string>;

export function jsx<K extends keyof HTMLElementTagNameMap>(
  type: K | HTMLElementTagNameMap[K],
  props: JSX.IntrinsicElements[K],
): HTMLElementTagNameMap[K]

export { jsx as jsxs, jsx as jsxDEV };

export function Fragment(props: { children?: TChild | TChild[] }): DocumentFragment;
export function Template(props: { children: string }): DocumentFragment;

export interface FunctionComponent<P = {}, T extends JSX.Element = JSX.Element> {
  (props: PropsWithChildren<P>): T | null | string
}
export { FunctionComponent as FC };

export function createRef<T = any>(current?: T): RefObject<T>
export { createRef as useRef };

export function parseFromString(htmlOrSvg: string): DocumentFragment;

export function useText(initContent?: string): readonly [
  Text,
  (text: string) => void
]

export function Extend(props: Record<string, (node: HTMLElement, value: any) => void>): void;

interface CurrentTarget<T> {
  currentTarget: EventTarget & T
}

type FormEvent = Event
type ChangeEvent = Event

type EventHandler<E extends Event, T> = (this: T, event: E & CurrentTarget<T>) => void

type TEventHandler<T = Element> = EventHandler<Event, T>

type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent, T>
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent, T>
type DragEventHandler<T = Element> = EventHandler<DragEvent, T>
type FocusEventHandler<T = Element> = EventHandler<FocusEvent, T>
type FormEventHandler<T = Element> = EventHandler<FormEvent, T>
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent, T>
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent, T>
type MouseEventHandler<T = Element> = EventHandler<MouseEvent, T>
type TouchEventHandler<T = Element> = EventHandler<TouchEvent, T>
type PointerEventHandler<T = Element> = EventHandler<PointerEvent, T>
type UIEventHandler<T = Element> = EventHandler<UIEvent, T>
type WheelEventHandler<T = Element> = EventHandler<WheelEvent, T>
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent, T>
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent, T>

interface DOMAttributes<T> {
  ref?: RefCallback<T> | RefObject<T>
  children?: TChild | TChild[]
  // Clipboard Events
  oncopy?: ClipboardEventHandler<T>
  oncut?: ClipboardEventHandler<T>
  onpaste?: ClipboardEventHandler<T>
  // Composition Events
  oncompositionend?: CompositionEventHandler<T>
  oncompositionstart?: CompositionEventHandler<T>
  oncompositionupdate?: CompositionEventHandler<T>
  // Focus Events
  onfocus?: FocusEventHandler<T>
  onblur?: FocusEventHandler<T>
  // Form Events
  onchange?: FormEventHandler<T>
  onbeforeinput?: FormEventHandler<T>
  oninput?: FormEventHandler<T>
  onreset?: FormEventHandler<T>
  onsubmit?: FormEventHandler<T>
  oninvalid?: FormEventHandler<T>
  // Image Events
  onload?: TEventHandler<T>
  onerror?: TEventHandler<T> // also a Media Event
  // Keyboard Events
  onkeydown?: KeyboardEventHandler<T>
  onkeypress?: KeyboardEventHandler<T>
  onkeyup?: KeyboardEventHandler<T>
  // Media Events
  onabort?: TEventHandler<T>
  oncanplay?: TEventHandler<T>
  oncanplaythrough?: TEventHandler<T>
  ondurationchange?: TEventHandler<T>
  onemptied?: TEventHandler<T>
  onencrypted?: TEventHandler<T>
  onended?: TEventHandler<T>
  onloadeddata?: TEventHandler<T>
  onloadedmetadata?: TEventHandler<T>
  onloadstart?: TEventHandler<T>
  onpause?: TEventHandler<T>
  onplay?: TEventHandler<T>
  onplaying?: TEventHandler<T>
  onprogress?: TEventHandler<T>
  onratechange?: TEventHandler<T>
  onseeked?: TEventHandler<T>
  onseeking?: TEventHandler<T>
  onstalled?: TEventHandler<T>
  onsuspend?: TEventHandler<T>
  ontimeupdate?: TEventHandler<T>
  onvolumechange?: TEventHandler<T>
  onwaiting?: TEventHandler<T>
  // Mouse Events
  onauxclick?: MouseEventHandler<T>
  onclick?: MouseEventHandler<T>
  oncontextmenu?: MouseEventHandler<T>
  ondblclick?: MouseEventHandler<T>
  ondrag?: DragEventHandler<T>
  ondragend?: DragEventHandler<T>
  ondragenter?: DragEventHandler<T>
  /** @deprecated Not supported */
  ondragexit?: DragEventHandler<T>
  ondragleave?: DragEventHandler<T>
  ondragover?: DragEventHandler<T>
  ondragstart?: DragEventHandler<T>
  ondrop?: DragEventHandler<T>
  onmousedown?: MouseEventHandler<T>
  onmouseenter?: MouseEventHandler<T>
  onmouseleave?: MouseEventHandler<T>
  onmousemove?: MouseEventHandler<T>
  onmouseout?: MouseEventHandler<T>
  onmouseover?: MouseEventHandler<T>
  onmouseup?: MouseEventHandler<T>
  // Selection Events
  onselect?: TEventHandler<T>
  // Touch Events
  ontouchcancel?: TouchEventHandler<T>
  ontouchend?: TouchEventHandler<T>
  ontouchmove?: TouchEventHandler<T>
  ontouchstart?: TouchEventHandler<T>
  // Pointer Events
  onpointerdown?: PointerEventHandler<T>
  onpointermove?: PointerEventHandler<T>
  onpointerup?: PointerEventHandler<T>
  onpointercancel?: PointerEventHandler<T>
  onpointerenter?: PointerEventHandler<T>
  onpointerleave?: PointerEventHandler<T>
  onpointerover?: PointerEventHandler<T>
  onpointerout?: PointerEventHandler<T>
  ongotpointercapture?: PointerEventHandler<T>
  onlostpointercapture?: PointerEventHandler<T>
  // UI Events
  onscroll?: UIEventHandler<T>
  // Wheel Events
  onwheel?: WheelEventHandler<T>
  // Animation Events
  onanimationstart?: AnimationEventHandler<T>
  onanimationend?: AnimationEventHandler<T>
  onanimationiteration?: AnimationEventHandler<T>
  // Transition Events
  ontransitionend?: TransitionEventHandler<T>
}

export interface CSSProperties extends Properties<string | number> {
  cssText?: string | null
}

export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
  /**
  * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
  * presented if they are made.
  */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish
  /**
  * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
  * @see aria-pressed @see aria-selected.
  */
  'aria-checked'?: Booleanish | 'mixed'
  /**
  * Defines the total number of columns in a table, grid, or treegrid.
  * @see aria-colindex.
  */
  'aria-colcount'?: number
  /**
  * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
  * @see aria-colcount @see aria-colspan.
  */
  'aria-colindex'?: number
  /**
  * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
  * @see aria-colindex @see aria-rowspan.
  */
  'aria-colspan'?: number
  /**
  * Identifies the element (or elements) whose contents or presence are controlled by the current element.
  * @see aria-owns.
  */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
  * Identifies the element (or elements) that describes the object.
  * @see aria-labelledby
  */
  'aria-describedby'?: string
  /**
  * Identifies the element that provides a detailed, extended description for the object.
  * @see aria-describedby.
  */
  'aria-details'?: string
  /**
  * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
  * @see aria-hidden @see aria-readonly.
  */
  'aria-disabled'?: Booleanish
  /**
  * Indicates what functions can be performed when a dragged object is released on the drop target.
  * @deprecated in ARIA 1.1
  */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
  * Identifies the element that provides an error message for the object.
  * @see aria-invalid @see aria-describedby.
  */
  'aria-errormessage'?: string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish
  /**
  * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
  * allows assistive technology to override the general default of reading in document source order.
  */
  'aria-flowto'?: string
  /**
  * Indicates an element's "grabbed" state in a drag-and-drop operation.
  * @deprecated in ARIA 1.1
  */
  'aria-grabbed'?: Booleanish

  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
  * Indicates whether the element is exposed to an accessibility API.
  * @see aria-disabled.
  */
  'aria-hidden'?: Booleanish
  /**
  * Indicates the entered value does not conform to the format expected by the application.
  * @see aria-errormessage.
  */
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string
  /**
  * Defines a string value that labels the current element.
  * @see aria-labelledby.
  */
  'aria-label'?: string
  /**
  * Identifies the element (or elements) that labels the current element.
  * @see aria-describedby.
  */
  'aria-labelledby'?: string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: number
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical'
  /**
  * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
  * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
  * @see aria-controls.
  */
  'aria-owns'?: string
  /**
  * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
  * A hint could be a sample value or a brief description of the expected format.
  */
  'aria-placeholder'?: string
  /**
  * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
  * @see aria-setsize.
  */
  'aria-posinset'?: number
  /**
  * Indicates the current "pressed" state of toggle buttons.
  * @see aria-checked @see aria-selected.
  */
  'aria-pressed'?: Booleanish | 'mixed'
  /**
  * Indicates that the element is not editable, but is otherwise operable.
  * @see aria-disabled.
  */
  'aria-readonly'?: Booleanish;

  /**
  * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
  * @see aria-atomic.
  */
  'aria-relevant'?:
  | 'additions'
  | 'additions removals'
  | 'additions text'
  | 'all'
  | 'removals'
  | 'removals additions'
  | 'removals text'
  | 'text'
  | 'text additions'
  | 'text removals'

  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish;
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
  * Defines the total number of rows in a table, grid, or treegrid.
  * @see aria-rowindex.
  */
  'aria-rowcount'?: number
  /**
  * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
  * @see aria-rowcount @see aria-rowspan.
  */
  'aria-rowindex'?: number
  /**
  * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
  * @see aria-rowindex @see aria-colspan.
  */
  'aria-rowspan'?: number
  /**
  * Indicates the current "selected" state of various widgets.
  * @see aria-checked @see aria-pressed.
  */
  'aria-selected'?: Booleanish;
  /**
  * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
  * @see aria-posinset.
  */
  'aria-setsize'?: number
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: number
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: number
  /**
  * Defines the current value for a range widget.
  * @see aria-valuetext.
  */
  'aria-valuenow'?: number
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
}

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | (string & {});

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  innerHTML?: string
  accessKey?: string
  accesskey?: string
  class?: string
  contentEditable?: Booleanish | 'inherit'
  contenteditable?: Booleanish | 'inherit'
  contextMenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: boolean
  id?: string
  lang?: string
  placeholder?: string
  slot?: string
  spellcheck?: 'true' | 'false'
  style?: string | CSSProperties
  tabIndex?: number
  tabindex?: number
  title?: string
  translate?: 'yes' | 'no'
  // Unknown
  radioGroup?: string // <command>, <menuitem>
  // WAI-ARIA
  role?: AriaRole
  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string
  // Non-standard Attributes
  autoCapitalize?: string
  autoCorrect?: string
  autoSave?: string
  color?: string
  itemProp?: string
  itemScope?: boolean
  itemType?: string
  itemID?: string
  itemRef?: string
  results?: number
  security?: string
  unselectable?: 'on' | 'off'
  // Living Standard
  /**
  * Hints at the type of data that might be entered by the user while editing the element or its contents
  * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
  */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  /**
  * Specify that a standard HTML element should behave like a defined custom built-in element
  * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
  */
  is?: string
}

export type HTMLAttrinuteCORS =
  | 'anonymous'
  | 'use-credentials'
  | ''

export type TAutocomplete =
  | 'on'
  | 'off'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'email'
  | 'impp'
  | 'webauthn'

export interface AnchorHTMLAttributes extends HTMLAttributes<HTMLAnchorElement> {
  download?: any
  href?: string
  hrefLang?: string
  media?: string
  ping?: string
  rel?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: string
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
}

interface AudioHTMLAttributes extends MediaHTMLAttributes<HTMLAudioElement> { }

interface AreaHTMLAttributes extends HTMLAttributes<HTMLAreaElement> {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hrefLang?: string
  media?: string
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
  rel?: string
  shape?: string
  target?: string
}

interface BaseHTMLAttributes extends HTMLAttributes<HTMLBaseElement> {
  href?: string
  target?: string
}

interface BlockquoteHTMLAttributes extends HTMLAttributes<HTMLElement> {
  cite?: string
}

export interface ButtonHTMLAttributes extends HTMLAttributes<HTMLButtonElement> {
  autoFocus?: boolean
  autofocus?: boolean
  disabled?: boolean
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | readonly string[] | number
}

interface CanvasHTMLAttributes extends HTMLAttributes<HTMLCanvasElement> {
  height?: number | string
  width?: number | string
}

interface ColHTMLAttributes extends HTMLAttributes<HTMLTableColElement> {
  span?: number
  width?: number | string
}

interface ColgroupHTMLAttributes extends HTMLAttributes<HTMLTableColElement> {
  span?: number
}

interface DataHTMLAttributes extends HTMLAttributes<HTMLDataElement> {
  value?: string | readonly string[] | number
}

interface DetailsHTMLAttributes extends HTMLAttributes<HTMLElement> {
  open?: boolean
  ontoggle?: TEventHandler<HTMLElement>
}

interface DelHTMLAttributes extends HTMLAttributes<HTMLElement> {
  cite?: string
  dateTime?: string
}

interface DialogHTMLAttributes extends HTMLAttributes<HTMLDialogElement> {
  open?: boolean
}

interface EmbedHTMLAttributes extends HTMLAttributes<HTMLEmbedElement> {
  height?: number | string
  src?: string
  type?: string
  width?: number | string
}

interface FieldsetHTMLAttributes extends HTMLAttributes<HTMLFieldSetElement> {
  disabled?: boolean
  form?: string
  name?: string
}

export interface FormHTMLAttributes extends HTMLAttributes<HTMLFormElement> {
  acceptCharset?: string
  action?: string
  autoComplete?: TAutocomplete
  autocomplete?: TAutocomplete
  encType?: string
  enctype?: string
  method?: string
  name?: string
  noValidate?: boolean
  target?: string
}

interface HtmlHTMLAttributes extends HTMLAttributes<HTMLHtmlElement> {
  manifest?: string
}

export interface IframeHTMLAttributes extends HTMLAttributes<HTMLIFrameElement> {
  allow?: string
  allowFullScreen?: boolean
  allowfullscreen?: boolean
  allowTransparency?: boolean
  /** @deprecated */
  frameBorder?: number | string
  height?: number | string
  loading?: 'eager' | 'lazy'
  /** @deprecated */
  marginHeight?: number
  /** @deprecated */
  marginWidth?: number
  name?: string
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
  sandbox?: string
  /** @deprecated */
  scrolling?: string
  seamless?: boolean
  src?: string
  srcDoc?: string
  srcdoc?: string
  width?: number | string
}

export interface ImgHTMLAttributes extends HTMLAttributes<HTMLImageElement> {
  alt?: string
  crossOrigin?: HTMLAttrinuteCORS
  crossorigin?: HTMLAttrinuteCORS
  decoding?: 'async' | 'auto' | 'sync'
  height?: number | string
  loading?: 'eager' | 'lazy'
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
  sizes?: string
  src?: string
  srcSet?: string
  srcset?: string
  useMap?: string
  width?: number | string
}

interface InsHTMLAttributes extends HTMLAttributes<HTMLModElement> {
  cite?: string
  dateTime?: string
}

export interface InputHTMLAttributes extends HTMLAttributes<HTMLInputElement> {
  accept?: string
  alt?: string
  autoComplete?: TAutocomplete
  autocomplete?: TAutocomplete
  autoFocus?: boolean
  autofocus?: boolean
  capture?: boolean | string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean
  crossorigin?: HTMLAttrinuteCORS
  crossOrigin?: HTMLAttrinuteCORS
  disabled?: boolean
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  height?: number | string
  list?: string
  max?: number | string
  maxLength?: number
  maxlength?: number
  min?: number | string
  minLength?: number
  minlength?: number
  multiple?: boolean
  name?: string
  pattern?: string
  placeholder?: string
  readOnly?: boolean
  readonly?: boolean
  required?: boolean
  size?: number
  src?: string
  step?: number | string
  type?: string
  value?: string | readonly string[] | number
  width?: number | string
  onchange?: ChangeEventHandler<HTMLInputElement>
}

interface KeygenHTMLAttributes extends HTMLAttributes<HTMLElement> {
  autoFocus?: boolean
  autofocus?: boolean
  challenge?: string
  disabled?: boolean
  form?: string
  keyType?: string
  keyParams?: string
  name?: string
}

export interface LabelHTMLAttributes extends HTMLAttributes<HTMLLabelElement> {
  for?: string
}

interface LiHTMLAttributes extends HTMLAttributes<HTMLLIElement> {
  value?: string | readonly string[] | number
}

interface LinkHTMLAttributes extends HTMLAttributes<HTMLLinkElement> {
  as?: string
  crossOrigin?: HTMLAttrinuteCORS
  crossorigin?: HTMLAttrinuteCORS
  href?: string
  hrefLang?: string
  integrity?: string
  media?: string
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
  rel?: string
  sizes?: string
  type?: string
  charSet?: string
}

interface MapHTMLAttributes extends HTMLAttributes<HTMLMapElement> {
  name?: string
}

interface MenuHTMLAttributes extends HTMLAttributes<HTMLElement> {
  type?: string
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
  autoPlay?: boolean
  autoplay?: boolean
  controls?: boolean
  controlsList?: 'nodownload' | 'nofullscreen' | 'noremoteplayback'
  controlslist?: 'nodownload' | 'nofullscreen' | 'noremoteplayback'
  crossorigin?: HTMLAttrinuteCORS
  crossOrigin?: HTMLAttrinuteCORS
  loop?: boolean
  mediaGroup?: string
  muted?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
  src?: string
}

interface MetaHTMLAttributes extends HTMLAttributes<HTMLMetaElement> {
  charSet?: string
  content?: string
  httpEquiv?: string
  name?: string
}

interface MeterHTMLAttributes extends HTMLAttributes<HTMLElement> {
  form?: string
  high?: number
  low?: number
  max?: number | string
  min?: number | string
  optimum?: number
  value?: string | readonly string[] | number
}

interface QuoteHTMLAttributes extends HTMLAttributes<HTMLQuoteElement> {
  cite?: string
}

interface ObjectHTMLAttributes extends HTMLAttributes<HTMLObjectElement> {
  classID?: string
  data?: string
  form?: string
  height?: number | string
  name?: string
  type?: string
  useMap?: string
  width?: number | string
  wmode?: string
}

interface OlHTMLAttributes extends HTMLAttributes<HTMLOListElement> {
  reversed?: boolean
  start?: number
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

interface OptgroupHTMLAttributes extends HTMLAttributes<HTMLOptGroupElement> {
  disabled?: boolean
  label?: string
}

interface OptionHTMLAttributes extends HTMLAttributes<HTMLOptionElement> {
  disabled?: boolean
  label?: string
  selected?: boolean
  value?: string | readonly string[] | number
}

interface OutputHTMLAttributes extends HTMLAttributes<HTMLElement> {
  form?: string
  for?: string
  name?: string
}

interface ParamHTMLAttributes extends HTMLAttributes<HTMLParamElement> {
  name?: string
  value?: string | readonly string[] | number
}

interface ProgressHTMLAttributes extends HTMLAttributes<HTMLProgressElement> {
  max?: number | string
  value?: string | readonly string[] | number
}

interface ScriptHTMLAttributes extends HTMLAttributes<HTMLScriptElement> {
  async?: boolean
  /** @deprecated */
  charSet?: string
  crossorigin?: HTMLAttrinuteCORS
  crossOrigin?: HTMLAttrinuteCORS
  defer?: boolean
  integrity?: string
  noModule?: boolean
  nonce?: string
  referrerPolicy?: ReferrerPolicy
  referrerpolicy?: ReferrerPolicy
  src?: string
  type?: string
}

interface SelectHTMLAttributes extends HTMLAttributes<HTMLSelectElement> {
  autoComplete?: TAutocomplete
  autocomplete?: TAutocomplete
  autoFocus?: boolean
  autofocus?: boolean
  disabled?: boolean
  form?: string
  multiple?: boolean
  name?: string
  required?: boolean
  size?: number
  value?: string | readonly string[] | number
  onchange?: ChangeEventHandler<HTMLSelectElement>
}

interface SlotHTMLAttributes extends HTMLAttributes<HTMLElement> {
  name?: string
}

interface SourceHTMLAttributes extends HTMLAttributes<HTMLSourceElement> {
  media?: string
  sizes?: string
  src?: string
  srcSet?: string
  srcset?: string
  type?: string
}

interface StyleHTMLAttributes extends HTMLAttributes<HTMLStyleElement> {
  media?: string
  nonce?: string
  scoped?: boolean
  type?: string
}

interface TableHTMLAttributes extends HTMLAttributes<HTMLTableElement> {
  cellPadding?: number | string
  cellSpacing?: number | string
  summary?: string
  width?: number | string
}

export interface TextareaHTMLAttributes extends HTMLAttributes<HTMLTextAreaElement> {
  autoComplete?: TAutocomplete
  autocomplete?: TAutocomplete
  autoFocus?: boolean
  autofocus?: boolean
  cols?: number
  dirName?: string
  disabled?: boolean
  form?: string
  maxLength?: number
  minLength?: number
  name?: string
  placeholder?: string
  readOnly?: boolean
  readonly?: boolean
  required?: boolean
  rows?: number
  value?: string | readonly string[] | number
  wrap?: string
  onchange?: ChangeEventHandler<HTMLTextAreaElement>
}

interface TdHTMLAttributes extends HTMLAttributes<HTMLTableDataCellElement> {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colSpan?: number
  headers?: string
  rowSpan?: number
  scope?: string
  abbr?: string
  height?: number | string
  width?: number | string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

interface ThHTMLAttributes extends HTMLAttributes<HTMLTableHeaderCellElement> {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colSpan?: number
  headers?: string
  rowSpan?: number
  scope?: string
  abbr?: string
}

interface TimeHTMLAttributes extends HTMLAttributes<HTMLElement> {
  dateTime?: string
  datetime?: string
}

interface TrackHTMLAttributes extends HTMLAttributes<HTMLTrackElement> {
  default?: boolean
  kind?: string
  label?: string
  src?: string
  srcLang?: string
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes<HTMLVideoElement> {
  height?: number | string
  playsInline?: boolean
  poster?: string
  width?: number | string
  disablePictureInPicture?: boolean
  disablepictureinpicture?: boolean
  disableRemotePlayback?: boolean
  disableremoteplayback?: boolean
}

interface WebViewHTMLAttributes extends HTMLAttributes<HTMLWebViewElement> {
  allowFullScreen?: boolean
  allowpopups?: boolean
  autoFocus?: boolean
  autofocus?: boolean
  autosize?: boolean
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: boolean
  disablewebsecurity?: boolean
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: boolean
  partition?: string
  plugins?: boolean
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}

type HTMLWebViewElement = HTMLElement

declare global {
  namespace JSX {
    type Element = HTMLElement
    type ElementType<P = any> =
      | {
        [K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
        ? K
        : never;
      }[keyof IntrinsicElements]
      | HTMLElement;

    interface ElementAttributesProperty { props: {}; }
    interface ElementChildrenAttribute { children: {}; }

    interface IntrinsicAttributes extends Attributes { }

    interface IntrinsicElements {
      a: AnchorHTMLAttributes
      abbr: HTMLAttributes<HTMLElement>
      address: HTMLAttributes<HTMLElement>
      area: AreaHTMLAttributes
      article: HTMLAttributes<HTMLElement>
      aside: HTMLAttributes<HTMLElement>
      audio: AudioHTMLAttributes
      b: HTMLAttributes<HTMLElement>
      base: BaseHTMLAttributes
      bdi: HTMLAttributes<HTMLElement>
      bdo: HTMLAttributes<HTMLElement>
      big: HTMLAttributes<HTMLElement>
      blockquote: BlockquoteHTMLAttributes
      body: HTMLAttributes<HTMLBodyElement>
      br: HTMLAttributes<HTMLBRElement>
      button: ButtonHTMLAttributes
      canvas: CanvasHTMLAttributes
      caption: HTMLAttributes<HTMLElement>
      cite: HTMLAttributes<HTMLElement>
      code: HTMLAttributes<HTMLElement>
      col: ColHTMLAttributes
      colgroup: ColgroupHTMLAttributes
      data: DataHTMLAttributes
      datalist: HTMLAttributes<HTMLDataListElement>
      dd: HTMLAttributes<HTMLElement>
      del: DelHTMLAttributes
      details: DetailsHTMLAttributes
      dfn: HTMLAttributes<HTMLElement>
      dialog: DialogHTMLAttributes
      div: HTMLAttributes<HTMLDivElement>
      dl: HTMLAttributes<HTMLDListElement>
      dt: HTMLAttributes<HTMLElement>
      em: HTMLAttributes<HTMLElement>
      embed: EmbedHTMLAttributes
      fieldset: FieldsetHTMLAttributes
      figcaption: HTMLAttributes<HTMLElement>
      figure: HTMLAttributes<HTMLElement>
      footer: HTMLAttributes<HTMLElement>
      form: FormHTMLAttributes
      h1: HTMLAttributes<HTMLHeadingElement>
      h2: HTMLAttributes<HTMLHeadingElement>
      h3: HTMLAttributes<HTMLHeadingElement>
      h4: HTMLAttributes<HTMLHeadingElement>
      h5: HTMLAttributes<HTMLHeadingElement>
      h6: HTMLAttributes<HTMLHeadingElement>
      head: HTMLAttributes<HTMLHeadElement>
      header: HTMLAttributes<HTMLElement>
      hgroup: HTMLAttributes<HTMLElement>
      hr: HTMLAttributes<HTMLHRElement>
      html: HtmlHTMLAttributes
      i: HTMLAttributes<HTMLElement>
      iframe: IframeHTMLAttributes
      img: ImgHTMLAttributes
      input: InputHTMLAttributes
      ins: InsHTMLAttributes
      kbd: HTMLAttributes<HTMLElement>
      keygen: KeygenHTMLAttributes
      label: LabelHTMLAttributes
      legend: HTMLAttributes<HTMLLegendElement>
      li: LiHTMLAttributes
      link: LinkHTMLAttributes
      main: HTMLAttributes<HTMLElement>
      map: MapHTMLAttributes
      mark: HTMLAttributes<HTMLElement>
      menu: MenuHTMLAttributes
      menuitem: HTMLAttributes<HTMLElement>
      meta: MetaHTMLAttributes
      meter: MeterHTMLAttributes
      nav: HTMLAttributes<HTMLElement>
      noindex: HTMLAttributes<HTMLElement>
      noscript: HTMLAttributes<HTMLElement>
      object: ObjectHTMLAttributes
      ol: OlHTMLAttributes
      optgroup: OptgroupHTMLAttributes
      option: OptionHTMLAttributes
      output: OutputHTMLAttributes
      p: HTMLAttributes<HTMLParagraphElement>
      param: ParamHTMLAttributes
      picture: HTMLAttributes<HTMLElement>
      pre: HTMLAttributes<HTMLPreElement>
      progress: ProgressHTMLAttributes
      q: QuoteHTMLAttributes
      rp: HTMLAttributes<HTMLElement>
      rt: HTMLAttributes<HTMLElement>
      ruby: HTMLAttributes<HTMLElement>
      s: HTMLAttributes<HTMLElement>
      samp: HTMLAttributes<HTMLElement>
      script: ScriptHTMLAttributes
      section: HTMLAttributes<HTMLElement>
      select: SelectHTMLAttributes
      slot: SlotHTMLAttributes
      small: HTMLAttributes<HTMLElement>
      source: SourceHTMLAttributes
      span: HTMLAttributes<HTMLSpanElement>
      strong: HTMLAttributes<HTMLElement>
      style: StyleHTMLAttributes
      sub: HTMLAttributes<HTMLElement>
      summary: HTMLAttributes<HTMLElement>
      sup: HTMLAttributes<HTMLElement>
      table: TableHTMLAttributes
      template: HTMLAttributes<HTMLTemplateElement>
      tbody: HTMLAttributes<HTMLTableSectionElement>
      td: TdHTMLAttributes
      textarea: TextareaHTMLAttributes
      tfoot: HTMLAttributes<HTMLTableSectionElement>
      th: ThHTMLAttributes
      thead: HTMLAttributes<HTMLTableSectionElement>
      time: TimeHTMLAttributes
      title: HTMLAttributes<HTMLTitleElement>
      tr: HTMLAttributes<HTMLTableRowElement>
      track: TrackHTMLAttributes
      u: HTMLAttributes<HTMLElement>
      ul: HTMLAttributes<HTMLUListElement>
      var: HTMLAttributes<HTMLElement>
      video: VideoHTMLAttributes
      wbr: HTMLAttributes<HTMLElement>
      webview: WebViewHTMLAttributes

      // TODO:
      animate: any
      animateMotion: any
      animateTransform: any
      circle: any
      clipPath: any
      defs: any
      desc: any
      ellipse: any
      feBlend: any
      feColorMatrix: any
      feComponentTransfer: any
      feComposite: any
      feConvolveMatrix: any
      feDiffuseLighting: any
      feDisplacementMap: any
      feDistantLight: any
      feDropShadow: any
      feFlood: any
      feFuncA: any
      feFuncB: any
      feFuncG: any
      feFuncR: any
      feGaussianBlur: any
      feImage: any
      feMerge: any
      feMergeNode: any
      feMorphology: any
      feOffset: any
      fePointLight: any
      feSpecularLighting: any
      feSpotLight: any
      feTile: any
      feTurbulence: any
      filter: any
      foreignObject: any
      g: any
      image: any
      line: any
      linearGradient: any
      marker: any
      mask: any
      metadata: any
      mpath: any
      path: any
      pattern: any
      polygon: any
      polyline: any
      radialGradient: any
      rect: any
      set: any
      stop: any
      svg: any
      switch: any
      symbol: any
      text: any
      textPath: any
      tspan: any
      use: any
      view: any
    }
  }
}
