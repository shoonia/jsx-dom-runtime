/// <reference lib="dom" />
/// <reference lib="es2020" />
import * as CSS from 'csstype';

type Booleanish = boolean | 'true' | 'false'

interface RefObject<T> {
  readonly current: T | null
}

type RefCallback<T> = (instance: T) => void

type Ref<T> = RefCallback<T> | RefObject<T> | null

interface Attributes {}

interface AttrWithRef<T> extends Attributes {
  ref?: Ref<T>
}

type TText = string | number
type TChild = Node | Text | TText
type TChildren = TNodeArray;

interface TNodeArray extends Array<TNode> {}

type TNode =
  | TChild
  | TChildren
  | DocumentFragment
  | Comment
  | false
  | null
  | undefined

type PropsWithChildren<P> = P & { children?: TNode | TChildren }

export function jsx<K extends keyof HTMLElementTagNameMap, T extends HTMLElementTagNameMap[K]>(
  type: K,
  props?: (HTMLAttributes<T> & AttrWithRef<T>),
): T

export { jsx as jsxs, jsx as jsxDEV };

export function Fragment(props: { children?: TNode | TChildren }): JSX.Element

export interface FunctionComponent<P = {}, T extends Element = JSX.Element> {
  (props: PropsWithChildren<P>): T | null
}

export { FunctionComponent as FC };

export function createRef<T = any>(): RefObject<T>

export function bindRef<T>(...refs: Ref<T>[]): RefCallback<T>

export function parseFromString(htmlOrSvg: string): Node[]

export function useText(initContent?: string): readonly [
  Text,
  (text: string) => void
]

// Events hint
type On = (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
type Off = (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void;
type ReadyCallback<T> = (on?: On, off?: Off, target?: T) => void;

export function events<T extends HTMLElement>(ready: ReadyCallback<T>): RefCallback<T>;

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

export type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = AttrWithRef<T> & E

interface DOMAttributes<T> {
  children?: TNode | TNodeArray
  innerHTML?: string;
  textContent?: string;

  // Clipboard Events
  onCopy?: ClipboardEventHandler<T>
  onCut?: ClipboardEventHandler<T>
  onPaste?: ClipboardEventHandler<T>

  // Composition Events
  onCompositionEnd?: CompositionEventHandler<T>
  onCompositionStart?: CompositionEventHandler<T>
  onCompositionUpdate?: CompositionEventHandler<T>

  // Focus Events
  onFocus?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>

  // Form Events
  onChange?: FormEventHandler<T>
  onBeforeInput?: FormEventHandler<T>
  onInput?: FormEventHandler<T>
  onReset?: FormEventHandler<T>
  onSubmit?: FormEventHandler<T>
  onInvalid?: FormEventHandler<T>

  // Image Events
  onLoad?: TEventHandler<T>
  onError?: TEventHandler<T> // also a Media Event

  // Keyboard Events
  onKeyDown?: KeyboardEventHandler<T>
  onKeyPress?: KeyboardEventHandler<T>
  onKeyUp?: KeyboardEventHandler<T>

  // Media Events
  onAbort?: TEventHandler<T>
  onCanPlay?: TEventHandler<T>
  onCanPlayThrough?: TEventHandler<T>
  onDurationChange?: TEventHandler<T>
  onEmptied?: TEventHandler<T>
  onEncrypted?: TEventHandler<T>
  onEnded?: TEventHandler<T>
  onLoadedData?: TEventHandler<T>
  onLoadedMetadata?: TEventHandler<T>
  onLoadStart?: TEventHandler<T>
  onPause?: TEventHandler<T>
  onPlay?: TEventHandler<T>
  onPlaying?: TEventHandler<T>
  onProgress?: TEventHandler<T>
  onRateChange?: TEventHandler<T>
  onSeeked?: TEventHandler<T>
  onSeeking?: TEventHandler<T>
  onStalled?: TEventHandler<T>
  onSuspend?: TEventHandler<T>
  onTimeUpdate?: TEventHandler<T>
  onVolumeChange?: TEventHandler<T>
  onWaiting?: TEventHandler<T>

  // MouseEvents
  onAuxClick?: MouseEventHandler<T>
  onClick?: MouseEventHandler<T>
  onContextMenu?: MouseEventHandler<T>
  onDoubleClick?: MouseEventHandler<T>
  onDrag?: DragEventHandler<T>
  onDragEnd?: DragEventHandler<T>
  onDragEnter?: DragEventHandler<T>
  onDragExit?: DragEventHandler<T>
  onDragLeave?: DragEventHandler<T>
  onDragOver?: DragEventHandler<T>
  onDragStart?: DragEventHandler<T>
  onDrop?: DragEventHandler<T>
  onMouseDown?: MouseEventHandler<T>
  onMouseEnter?: MouseEventHandler<T>
  onMouseLeave?: MouseEventHandler<T>
  onMouseMove?: MouseEventHandler<T>
  onMouseOut?: MouseEventHandler<T>
  onMouseOver?: MouseEventHandler<T>
  onMouseUp?: MouseEventHandler<T>

  // Selection Events
  onSelect?: TEventHandler<T>

  // Touch Events
  onTouchCancel?: TouchEventHandler<T>
  onTouchEnd?: TouchEventHandler<T>
  onTouchMove?: TouchEventHandler<T>
  onTouchStart?: TouchEventHandler<T>

  // Pointer Events
  onPointerDown?: PointerEventHandler<T>
  onPointerMove?: PointerEventHandler<T>
  onPointerUp?: PointerEventHandler<T>
  onPointerCancel?: PointerEventHandler<T>
  onPointerEnter?: PointerEventHandler<T>
  onPointerLeave?: PointerEventHandler<T>
  onPointerOver?: PointerEventHandler<T>
  onPointerOut?: PointerEventHandler<T>
  onGotPointerCapture?: PointerEventHandler<T>
  onLostPointerCapture?: PointerEventHandler<T>

  // UI Events
  onScroll?: UIEventHandler<T>

  // Wheel Events
  onWheel?: WheelEventHandler<T>

  // Animation Events
  onAnimationStart?: AnimationEventHandler<T>
  onAnimationEnd?: AnimationEventHandler<T>
  onAnimationIteration?: AnimationEventHandler<T>

  // Transition Events
  onTransitionEnd?: TransitionEventHandler<T>
}

export interface CSSProperties extends CSS.Properties<string | number> {}

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

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  innerHTML?: string
  textContent?: string
  // dataset?: {
  //   [key: string]: string
  // }
  accessKey?: string
  accesskey?: string
  className?: string | string[]
  class?: string
  contentEditable?: Booleanish | 'inherit'
  contextMenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: boolean
  id?: string
  lang?: string
  placeholder?: string
  slot?: string
  spellCheck?: Booleanish
  style?: string | CSSProperties
  tabIndex?: number
  tabindex?: number
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radioGroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

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
  /**
  * Specify that a standard HTML element should behave like a defined custom built-in element
  * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
  */
  is?: string
}

export type HTMLAttrinuteCORS =
  |'anonymous'
  |'use-credentials'
  | ''

export interface AnchorHTMLAttributes<T = HTMLAnchorElement> extends HTMLAttributes<T> {
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

interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
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

interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
  href?: string
  target?: string
}

interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string
}

export interface ButtonHTMLAttributes<T = HTMLButtonElement> extends HTMLAttributes<T> {
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

interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
  height?: number | string
  width?: number | string
}

interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
  span?: number
  width?: number | string
}

interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
  span?: number
}

interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
  value?: string | readonly string[] | number
}

interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
  open?: boolean
  onToggle?: TEventHandler<T>
}

interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string
  dateTime?: string
}

interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
  open?: boolean
}

interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
  height?: number | string
  src?: string
  type?: string
  width?: number | string
}

interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean
  form?: string
  name?: string
}

export interface FormHTMLAttributes<T = HTMLFontElement> extends HTMLAttributes<T> {
  acceptCharset?: string
  action?: string
  autoComplete?: string
  autocomplete?: string
  encType?: string
  enctype?: string
  method?: string
  name?: string
  noValidate?: boolean
  target?: string
}

interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
  manifest?: string
}

export interface IframeHTMLAttributes<T = HTMLIFrameElement> extends HTMLAttributes<T> {
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

export interface ImgHTMLAttributes<T = HTMLImageElement> extends HTMLAttributes<T> {
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

interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string
  dateTime?: string
}

export interface InputHTMLAttributes<T = HTMLInputElement> extends HTMLAttributes<T> {
  accept?: string
  alt?: string
  autoComplete?: string
  autocomplete?: string
  autoFocus?: boolean
  autofocus?: boolean
  capture?: boolean | string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean
  crossorigin?: HTMLAttrinuteCORS
  crossOrigin?: HTMLAttrinuteCORS
  disabled?: boolean
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
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
  min?: number | string
  minLength?: number
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

  onChange?: ChangeEventHandler<T>
}

interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
  autoFocus?: boolean
  autofocus?: boolean
  challenge?: string
  disabled?: boolean
  form?: string
  keyType?: string
  keyParams?: string
  name?: string
}

export interface LabelHTMLAttributes<T = HTMLLabelElement> extends HTMLAttributes<T> {
  form?: string
  htmlFor?: string
  for?: string
}

interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
  value?: string | readonly string[] | number
}

interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
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

interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string
}

interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
  type?: string
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
  autoPlay?: boolean
  controls?: boolean
  controlsList?: string
  crossorigin?: HTMLAttrinuteCORS
  crossOrigin?: HTMLAttrinuteCORS
  loop?: boolean
  mediaGroup?: string
  muted?: boolean
  playsInline?: boolean
  preload?: string
  src?: string
}

interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
  charSet?: string
  content?: string
  httpEquiv?: string
  name?: string
}

interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string
  high?: number
  low?: number
  max?: number | string
  min?: number | string
  optimum?: number
  value?: string | readonly string[] | number
}

interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
  cite?: string
}

interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
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

interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
  reversed?: boolean
  start?: number
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean
  label?: string
}

interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
  disabled?: boolean
  label?: string
  selected?: boolean
  value?: string | readonly string[] | number
}

interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
  form?: string
  htmlFor?: string
  name?: string
}

interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string
  value?: string | readonly string[] | number
}

interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
  max?: number | string
  value?: string | readonly string[] | number
}

interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
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

interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
  autoComplete?: string
  autoFocus?: boolean
  autofocus?: boolean
  disabled?: boolean
  form?: string
  multiple?: boolean
  name?: string
  required?: boolean
  size?: number
  value?: string | readonly string[] | number
  onChange?: ChangeEventHandler<T>
}

interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
  name?: string
}

interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
  media?: string
  sizes?: string
  src?: string
  srcSet?: string
  type?: string
}

interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
  media?: string
  nonce?: string
  scoped?: boolean
  type?: string
}

interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
  cellPadding?: number | string
  cellSpacing?: number | string
  summary?: string
  width?: number | string
}

export interface TextareaHTMLAttributes<T = HTMLTextAreaElement> extends HTMLAttributes<T> {
  autoComplete?: string
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

  onChange?: ChangeEventHandler<T>
}

interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
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

interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colSpan?: number
  headers?: string
  rowSpan?: number
  scope?: string
  abbr?: string
}

interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
  dateTime?: string
  datetime?: string
}

interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
  default?: boolean
  kind?: string
  label?: string
  src?: string
  srcLang?: string
}

interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
  height?: number | string
  playsInline?: boolean
  poster?: string
  width?: number | string
  disablePictureInPicture?: boolean
  disableRemotePlayback?: boolean
}

interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
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
    type Element = HTMLElement;

    // interface ElementAttributesProperty { props: {} }

    interface ElementChildrenAttribute {
      children: {}
    }

    interface IntrinsicAttributes extends Attributes {}

    interface IntrinsicElements {
      a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
      abbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      address: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      area: DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>
      article: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      aside: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      audio: DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>
      b: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      base: DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>
      bdi: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      bdo: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      big: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      blockquote: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>
      body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
      br: DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>
      button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
      canvas: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
      caption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      cite: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      code: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      col: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
      colgroup: DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
      data: DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>
      datalist: DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>
      dd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      del: DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement>
      details: DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>
      dfn: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      dialog: DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      dl: DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>
      dt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      embed: DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
      fieldset: DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>
      figcaption: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      figure: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      footer: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
      h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h2: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h4: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h5: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h6: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>
      header: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      hgroup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      hr: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>
      html: DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
      i: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      iframe: DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>
      img: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
      input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
      ins: DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>
      kbd: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      keygen: DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement>
      label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
      legend: DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>
      li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
      link: DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>
      main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      map: DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>
      mark: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      menu: DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>
      menuitem: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>
      meter: DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement>
      nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      noindex: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      noscript: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      object: DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>
      ol: DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>
      optgroup: DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
      option: DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
      output: DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement>
      p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
      param: DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>
      picture: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      pre: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
      progress: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>
      q: DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
      rp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      rt: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      ruby: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      s: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      samp: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      script: DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>
      section: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      select: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
      slot: DetailedHTMLProps<SlotHTMLAttributes<HTMLElement>, HTMLSlotElement>
      small: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      source: DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
      span: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      style: DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>
      sub: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      summary: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      sup: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>
      template: DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>
      tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      td: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
      textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
      tfoot: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      th: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
      thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
      time: DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>
      title: DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>
      tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
      track: DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>
      u: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
      var: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      video: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
      wbr: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      webview: DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>
    }
  }
}
