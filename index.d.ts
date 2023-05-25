/// <reference lib="dom" />
/// <reference lib="es2022" />
import { Properties, SvgProperties, Property } from 'csstype';

interface RefObject<T> {
  readonly current: T
}

type RefCallback<T> = (instance: T) => void

type TChild =
  | Node
  | Element
  | HTMLElement
  | SVGElement
  | DocumentFragment
  | Text
  | Comment
  | MathMLElement
  | TChild[]
  | string
  | number
  | false
  | null
  | undefined

type PropsWithChildren<P> = P & { children?: TChild | TChild[] }

export function jsx<
  K extends keyof JSX.IntrinsicElements,
  R = K extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[K]
  : K extends keyof HTMLElementDeprecatedTagNameMap
  ? HTMLElementDeprecatedTagNameMap[K]
  : K extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[K]
  : K extends keyof MathMLElementTagNameMap
  ? MathMLElementTagNameMap[K]
  : Element
>(
  tag: K,
  props: PropsWithChildren<JSX.IntrinsicElements[K]>,
): R

export interface FunctionComponent<P = {}, T extends JSX.Element = JSX.Element> {
  (props: PropsWithChildren<P>): T | null
}
export { FunctionComponent as FC };

export const properties: Set<string>;
export const extensions: Map<
  string,
  (node: HTMLElement | SVGElement | MathMLElement, value: any, key: string) => void
>;

export const xhtmlNS = 'http://www.w3.org/1999/xhtml';
export const svgNS = 'http://www.w3.org/2000/svg';
export const mathmlNS = 'http://www.w3.org/1998/Math/MathML';

export function useRef<T = any>(current?: T): RefObject<T>
export function useText<T = string>(initContent?: T): readonly [
  Text,
  (content: T) => void
]

export function parseFromString(html: string): DocumentFragment
export function Fragment(children?: TChild | TChild[]): DocumentFragment
export function Template(props: { children: string }): DocumentFragment

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
type PictureInPictureEventHandler<T = Element> = EventHandler<PictureInPictureEvent, T>

interface DOMAttributes<T> extends JSX.Attributes {
  ns?: typeof xhtmlNS | typeof svgNS | typeof mathmlNS;
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
  ontransitionstart?: TransitionEventHandler<T>
  ontransitionend?: TransitionEventHandler<T>
  ontransitionrun?: TransitionEventHandler<T>
  ontransitioncancel?: TransitionEventHandler<T>
}

export interface CSSProperties extends Properties<number | string> {
  cssText?: string | null;
  [key: `--${string}`]: number | string;
}

export interface SVGProperties extends SvgProperties<number | string> { }

export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: boolean | 'true' | 'false'
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  'aria-braillelabel'?: string
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  'aria-brailleroledescription'?: string
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: boolean | 'true' | 'false'
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: boolean | 'true' | 'false' | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: number | `${number}`
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: number | `${number}`
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: number | `${number}`
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'
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
  'aria-disabled'?: boolean | 'true' | 'false'
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
  'aria-expanded'?: boolean | 'true' | 'false'
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: boolean | 'true' | 'false'

  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: boolean | 'true' | 'false'
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling'
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
  'aria-level'?: number | `${number}`
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: boolean | 'true' | 'false'
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: boolean | 'true' | 'false'
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: boolean | 'true' | 'false'
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
  'aria-posinset'?: number | `${number}`
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: boolean | 'true' | 'false'

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
  'aria-required'?: boolean | 'true' | 'false'
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: number | `${number}`
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: number | `${number}`
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: number | `${number}`
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: boolean | 'true' | 'false'
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: number | `${number}`
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: number | `${number}`
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: number | `${number}`
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: number | `${number}`
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
  /**
   * All the WAI-ARIA 1.1 role attribute values
   * @see https://www.w3.org/TR/wai-aria-1.1/#role_definitions
   */
  role?:
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
  | 'none presentation'
}

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  accessKey?: string
  class?: string
  contentEditable?: boolean | '' | 'true' | 'false' | 'inherit'
  contextMenu?: string
  dir?: 'ltr' | 'rtl' | 'auto'
  /**
   * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<img draggable>` is forbidden. The correct usage is `<img draggable="true">`
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
   */
  draggable?: 'true' | 'false';
  hidden?: boolean | 'hidden' | 'until-found' | ''
  id?: string
  inert?: boolean | ''
  lang?: string
  placeholder?: string
  slot?: string
  /**
   * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<input spellcheck>` is forbidden. The correct usage is `<input spellcheck="true">`
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
   */
  spellcheck?: 'true' | 'false';
  style?: string | CSSProperties
  tabIndex?: number | `${number}`
  title?: string;
  translate?: 'yes' | 'no'
  // Unknown
  radioGroup?: string // <command>, <menuitem>
  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string
  autocapitalize?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
  autoCorrect?: string
  autoSave?: string
  color?: Property.Color
  itemProp?: string
  itemScope?: boolean | ''
  itemType?: string
  itemID?: string
  itemRef?: string
  results?: number | `${number}`
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

export interface SVGAttributes<T extends EventTarget> extends HTMLAttributes<T> {
  ns?: typeof svgNS,
  href?: string
  cx?: number | string
  cy?: number | string
  fx?: number | string
  fy?: number | string
  fr?: string
  d?: string
  accentHeight?: number | string
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?: SVGProperties['alignmentBaseline']
  allowReorder?: 'no' | 'yes'
  /** @deprecated */
  alphabetic?: number | string
  amplitude?: number | `${number}`
  /** @deprecated */
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  /** @deprecated */
  ascent?: number | `${number}`
  attributeName?: string
  /** @deprecated */
  attributeType?: 'CSS' | 'XML' | 'auto'
  autoReverse?: number | string
  azimuth?: number | `${number}`
  baseFrequency?: number | string
  'baseline-shift'?: SVGProperties['baselineShift']
  baseProfile?: number | string
  /** @deprecated */
  bbox?: number | string
  begin?: number | string
  bias?: number | `${number}`
  by?: number | string
  calcMode?: 'discrete' | 'linear' | 'paced' | 'spline'
  /** @deprecated */
  'cap-height'?: number | string
  /** @deprecated */
  clip?: SVGProperties['clip']
  'clip-path'?: SVGProperties['clipPath']
  clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'clip-rule'?: SVGProperties['clipRule']
  'color-interpolation'?: SVGProperties['colorInterpolation']
  'color-interpolation-filters'?: SVGProperties['colorInterpolation']
  /** @deprecated */
  'color-profile'?: string
  colorRendering?: number | string
  /** @deprecated */
  contentScriptType?: string
  /** @deprecated */
  contentStyleType?: string
  cursor?: SVGProperties['cursor']
  decelerate?: number | string
  descent?: number | string
  diffuseConstant?: number | `${number}`
  direction?: 'ltr' | 'rtl'
  display?: SVGProperties['display']
  divisor?: number | string
  'dominant-baseline'?: SVGProperties['dominantBaseline']
  dur?: number | string
  dx?: number | string
  dy?: number | string
  edgeMode?: 'duplicate' | 'wrap' | 'none'
  elevation?: number | `${number}`
  /** @deprecated */
  'enable-background'?: number | string
  end?: number | string
  exponent?: number | `${number}`
  externalResourcesRequired?: number | string
  fill?: SVGProperties['fill']
  'fill-opacity'?: SVGProperties['fillOpacity']
  'fill-rule'?: SVGProperties['fillRule']
  filter?: string
  /** @deprecated */
  filterRes?: number | string
  filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'flood-color'?: SVGProperties['floodColor']
  'flood-opacity'?: SVGProperties['floodOpacity']
  focusable?: 'true' | 'false' | 'auto'
  focusHighlight?: 'auto' | 'none'
  'font-family'?: SVGProperties['fontFamily']
  'font-size'?: SVGProperties['fontSize']
  'font-size-adjust'?: SVGProperties['fontSizeAdjust']
  'font-stretch'?: SVGProperties['fontStretch']
  'font-style'?: SVGProperties['fontStyle']
  'font-variant'?: SVGProperties['fontVariant']
  'font-weight'?: SVGProperties['fontWeight']
  /** @deprecated */
  format?: string
  from?: number | string
  /** @deprecated */
  g1?: number | string
  /** @deprecated */
  g2?: number | string
  /** @deprecated */
  'glyph-name'?: string
  /** @deprecated */
  'glyph-orientation-horizontal'?: string
  /** @deprecated */
  'glyph-orientation-vertical'?: string
  /** @deprecated */
  glyphRef?: string
  gradientTransform?: string
  gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  /** @deprecated */
  hanging?: number | `${number}`
  /** @deprecated */
  'horiz-adv-x'?: number | `${number}`
  /** @deprecated */
  'horiz-origin-x'?: number | `${number}`
  /** @deprecated */
  'horiz-origin-y'?: number | `${number}`
  /** @deprecated */
  ideographic?: number | `${number}`
  'image-rendering'?: SVGProperties['imageRendering']
  in2?: string
  in?: string
  intercept?: number | `${number}`
  k1?: number | `${number}`
  k2?: number | `${number}`
  k3?: number | `${number}`
  k4?: number | `${number}`
  /** @deprecated */
  k?: number | `${number}`
  kernelMatrix?: number | string
  /** @deprecated */
  kernelUnitLength?: number | string
  /** @deprecated */
  kerning?: number | string
  keyPoints?: number | string
  keySplines?: number | string
  keyTimes?: number | string
  lang?: string
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
  'letter-spacing'?: SVGProperties['letterSpacing']
  'lighting-color'?: SVGProperties['lightingColor']
  limitingConeAngle?: number | `${number}`
  marker?: SVGProperties['marker']
  'marker-start'?: SVGProperties['markerStart']
  'marker-end'?: SVGProperties['markerEnd']
  'marker-mid'?: SVGProperties['markerMid']
  markerHeight?: number | string
  markerUnits?: 'userSpaceOnUse' | 'strokeWidth'
  markerWidth?: number | string
  local?: string
  mask?: SVGProperties['mask']
  maskContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  maskUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  /** @deprecated */
  mathematical?: number | `${number}`
  max?: string
  min?: string
  media?: string
  method?: 'align' | 'stretch'
  mode?: string
  name?: string
  numOctaves?: number | `${number}`
  offset?: number | string
  opacity?: SVGProperties['opacity']
  operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic' | 'erode' | 'dilate'
  order?: number | string
  orient?: 'auto' | 'auto-start-reverse' | number | string
  /** @deprecated */
  orientation?: 'h' | 'v'
  origin?: 'default' | string
  overflow?: SVGProperties['overflow']
  'overline-position'?: number | `${number}`
  'overline-thickness'?: number | `${number}`
  'paint-order'?: SVGProperties['paintOrder']
  /** @deprecated */
  'panose-1'?: string
  path?: string
  pathLength?: number | `${number}`
  patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  patternTransform?: string
  patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'pointer-events'?: SVGProperties['pointerEvents']
  points?: string
  pointsAtX?: number | `${number}`
  pointsAtY?: number | `${number}`
  pointsAtZ?: number | `${number}`
  preserveAlpha?: 'true' | 'false'
  preserveAspectRatio?: string
  primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  r?: number | string
  radius?: number | string
  refX?: number | string | 'left' | 'center' | 'right'
  refY?: number | string | 'top' | 'center' | 'bottom'
  renderingIntent?: number | string
  repeatCount?: number | `${number}` | 'indefinite'
  repeatDur?: number | string | 'indefinite'
  requiredExtensions?: number | string
  /** @deprecated */
  requiredFeatures?: string
  restart?: 'always' | 'whenNotActive' | 'never'
  result?: string
  rotate?: number | `${number}` | 'auto' | 'auto-reverse'
  rx?: number | string | 'auto'
  ry?: number | string | 'auto'
  scale?: number | `${number}`
  seed?: number | `${number}`
  'shape-rendering'?: SVGProperties['shapeRendering']
  side?: 'left' | 'right'
  /** @deprecated */
  slope?: number | `${number}`
  spacing?: 'auto' | 'exact'
  specularConstant?: number | `${number}`
  specularExponent?: number | `${number}`
  speed?: number | string
  spreadMethod?: 'pad' | 'reflect' | 'repeat'
  startOffset?: number | string
  stdDeviation?: number | string
  /** @deprecated */
  stemh?: number | `${number}`
  /** @deprecated */
  stemv?: number | `${number}`
  stitchTiles?: 'noStitch' | 'stitch'
  'stop-color'?: SVGProperties['stopColor']
  'stop-opacity'?: SVGProperties['stopOpacity']
  'strikethrough-position'?: number | `${number}`
  'strikethrough-thickness'?: number | `${number}`
  /** @deprecated */
  string?: number | string
  stroke?: SVGProperties['stroke']
  'stroke-dasharray'?: SVGProperties['strokeDasharray']
  'stroke-dashoffset'?: SVGProperties['strokeDashoffset']
  'stroke-linecap'?: SVGProperties['strokeLinecap']
  'stroke-linejoin'?: SVGProperties['strokeLinejoin']
  'stroke-miterlimit'?: SVGProperties['strokeMiterlimit']
  'stroke-opacity'?: SVGProperties['strokeOpacity']
  'stroke-width'?: SVGProperties['strokeWidth']
  surfaceScale?: number | `${number}`
  systemLanguage?: string
  tabindex?: number | `${number}`
  tableValues?: number | string
  target?: string | '_self' | '_parent' | '_top' | '_blank'
  targetX?: number | string
  targetY?: number | string
  'text-anchor'?: SVGProperties['textAnchor']
  'text-decoration'?: SVGProperties['textDecoration']
  'text-rendering'?: SVGProperties['textRendering']
  textLength?: number | string
  to?: string
  transform?: string
  'transform-origin'?: string
  type?: string | 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'
  /** @deprecated */
  u1?: string
  /** @deprecated */
  u2?: string
  'underline-position'?: number | `${number}`
  'underline-thickness'?: number | `${number}`
  unicode?: string
  'unicode-bidi'?: SVGProperties['unicodeBidi']
  /** @deprecated */
  'unicode-range'?: string
  /** @deprecated */
  'units-per-em'?: number | `${number}`
  /** @deprecated */
  'v-alphabetic'?: number | `${number}`
  /** @deprecated */
  'v-hanging'?: number | `${number}`
  /** @deprecated */
  'v-ideographic'?: number | `${number}`
  /** @deprecated */
  'v-mathematical'?: number | `${number}`
  values?: string
  'vector-effect'?: SVGProperties['vectorEffect']
  /** @deprecated */
  version?: '1.0' | '1.1'
  /** @deprecated */
  'vert-adv-y'?: number | `${number}`
  /** @deprecated */
  'vert-origin-x'?: number | `${number}`
  /** @deprecated */
  'vert-origin-y'?: number | `${number}`
  viewBox?: string
  /** @deprecated */
  viewTarget?: string
  visibility?: SVGProperties['visibility']
  /** @deprecated */
  widths?: number | `${number}`
  'word-spacing'?: SVGProperties['wordSpacing']
  'writing-mode'?: SVGProperties['writingMode']
  x1?: number | string
  x2?: number | string
  x?: number | string
  /** @deprecated */
  'x-height'?: number | `${number}`
  xChannelSelector?: 'R' | 'G' | 'B' | 'A'
  yChannelSelector?: 'R' | 'G' | 'B' | 'A'
  /** @deprecated */
  'xlink:actuate'?: 'onLoad' | 'onRequest' | 'other' | 'none'
  /** @deprecated */
  'xlink:arcrole'?: string
  /**
   * SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
   * @deprecated
   */
  'xlink:href'?: string
  /** @deprecated */
  'xlink:show'?: 'new' | 'replace' | 'embed' | 'other' | 'none'
  /**
   * New content should use a `<title>` child element rather than a `xlink:title` attribute
   * @deprecated
   */
  'xlink:title'?: string
  /** @deprecated */
  'xlink:type'?: 'simple' | 'extended' | 'locator' | 'arc' | 'resource' | 'title' | 'none'
  /** @deprecated */
  'xlink:role'?: string
  /** @deprecated */
  'xlink:label'?: string
  /** @deprecated */
  'xlink:from'?: string
  /** @deprecated */
  'xlink:to'?: string
  /** @deprecated */
  'xml:base'?: string
  /**
   * There is also a `lang` attribute (without namespace)
   * @deprecated
   */
  'xml:lang'?: string
  /**
   * Instead of using the `xml:space` attribute, use the `white-space` CSS property
   * @deprecated
   */
  'xml:space'?: 'default' | 'preserve'
  xmlns?: string
  y1?: number | string
  y2?: number | string
  y?: number | string
  z?: number | `${number}`
  /** @deprecated */
  zoomAndPan?: 'disable' | 'magnify'
  height?: number | string
  width?: number | string
}

export interface MathMLAttributes extends AriaAttributes, DOMAttributes<MathMLElement> {
  ns?: typeof mathmlNS;
  xmlns?: typeof mathmlNS
  id?: string
  class?: string
  style?: string | CSSProperties
  tabIndex?: number | `${number}`
  dir?: 'ltr' | 'rtl'
  display?: 'block' | 'inline'
  displaystyle?: 'true' | 'false'
  /** @deprecated */
  mathbackground?: Property.Color
  /** @deprecated */
  mathcolor?: Property.Color
  /** @deprecated */
  mathsize?: number | string
  mathvariant?:
  | 'normal'
  | 'bold'
  | 'italic'
  | 'bold-italic'
  | 'double-struck'
  | 'bold-fraktur'
  | 'script'
  | 'bold-script'
  | 'fraktur'
  | 'sans-serif'
  | 'bold-sans-serif'
  | 'sans-serif-italic'
  | 'sans-serif-bold-italic'
  | 'monospace'
  | 'initial'
  | 'tailed'
  | 'looped'
  | 'stretched'
  scriptlevel?: number | string
  [key: string]: any
}

declare global {
  namespace JSX {
    type Element = HTMLElement | SVGElement | MathMLElement | DocumentFragment
    interface Attributes { }
    interface ElementChildrenAttribute { children: {} }

    interface HTMLAnchorElementAttributes extends HTMLAttributes<HTMLAnchorElement> {
      download?: any;
      href?: string;
      hreflang?: string;
      ping?: string
      rel?: string;
      target?: '_blank' | '_self' | '_parent' | '_top';
      type?: string;
      referrerPolicy?: ReferrerPolicy;
      /**
       * SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
       * @deprecated
       */
      'xlink:href'?: string
    }

    interface HTMLAudioElementAttributes extends HTMLMediaAttributes<HTMLAudioElement> { }

    interface HTMLAreaElementAttributes extends HTMLAttributes<HTMLAreaElement> {
      alt?: string
      coords?: string
      download?: any
      href?: string
      /** @deprecated */
      hreflang?: string;
      media?: string
      referrerPolicy?: ReferrerPolicy;
      rel?: string
      shape?: string
      target?: string
    }

    interface HTMLBaseElementAttributes extends HTMLAttributes<HTMLBaseElement> {
      href?: string
      target?: string
    }

    interface HTMLButtonElementAttributes extends HTMLAttributes<HTMLButtonElement> {
      autofocus?: boolean | '';
      disabled?: boolean | '';
      form?: string
      formAction?: string
      formEncType?: string
      formMethod?: string
      formNoValidate?: boolean | ''
      formTarget?: string
      name?: string;
      type?: 'submit' | 'reset' | 'button';
      value?: number | string;
    }

    interface HTMLCanvasElementAttributes extends HTMLAttributes<HTMLCanvasElement> {
      height?: number | string;
      width?: number | string;
    }

    interface HTMLTableColElementAttributes extends HTMLAttributes<HTMLTableColElement> {
      span?: number | `${number}`
      width?: number | string
    }

    interface HTMLDataElementAttributes extends HTMLAttributes<HTMLDataElement> {
      value?: number | string;
    }

    interface HTMLDetailsElementAttributes extends HTMLAttributes<HTMLDetailsElement> {
      open?: boolean | '';
      ontoggle?: TEventHandler<HTMLDetailsElement>;
    }

    interface HTMLModElementAttributes extends HTMLAttributes<HTMLModElement> {
      cite?: string;
      dateTime?: string;
    }

    interface HTMLDialogElementAttributes extends HTMLAttributes<HTMLDialogElement> {
      open?: boolean | '';
      ontoggle?: TEventHandler<HTMLDialogElement>;
      onclose?: TEventHandler<HTMLDialogElement>;
      oncancel?: TEventHandler<HTMLDialogElement>;
    }

    interface HTMLEmbedElementAttributes extends HTMLAttributes<HTMLEmbedElement> {
      height?: number | string
      src?: string
      type?: string
      width?: number | string
    }

    interface HTMLFieldSetElementAttributes extends HTMLAttributes<HTMLFieldSetElement> {
      disabled?: boolean | '';
      form?: string
      name?: string;
    }

    export interface HTMLFormElementAttributes extends HTMLAttributes<HTMLFormElement> {
      'accept-charset'?: string;
      action?: string;
      autocomplete?: string;
      enctype?: string;
      method?: string;
      name?: string;
      noValidate?: boolean | '';
      target?: string
    }

    interface HTMLHtmlElementAttributes extends HTMLAttributes<HTMLHtmlElement> {
      manifest?: string
      /** @deprecated */
      version?: string
      xmlns?: string
    }

    interface HTMLIFrameElementAttributes extends HTMLAttributes<HTMLIFrameElement> {
      allow?: string
      /**
       * This attribute is considered a legacy attribute and redefined as `allow="fullscreen"`
       * @deprecated
       */
      allowFullScreen?: boolean | '';
      /**
       * This attribute is considered a legacy attribute and redefined as `allow="payment"`
       * @deprecated
       */
      allowPaymentRequest?: boolean | ''
      /** @deprecated  */
      allowTransparency?: boolean | ''
      /** @deprecated */
      frameBorder?: number | string
      height?: number | string;
      loading?: 'eager' | 'lazy'
      /** @deprecated */
      marginHeight?: number | `${number}`;
      /** @deprecated */
      marginWidth?: number | `${number}`;
      name?: string;
      referrerPolicy?: ReferrerPolicy;
      sandbox?: string
      /** @deprecated */
      scrolling?: string
      /** @deprecated */
      seamless?: boolean | ''
      src?: string;
      srcdoc?: string;
      width?: number | string;
    }

    interface HTMLImageElementAttributes extends HTMLAttributes<HTMLImageElement> {
      alt?: string;
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials';
      decoding?: 'async' | 'auto' | 'sync';
      height?: number | string;
      loading?: 'eager' | 'lazy';
      referrerPolicy?: ReferrerPolicy;
      sizes?: string;
      src?: string;
      srcset?: string;
      useMap?: string;
      width?: number | string;
      fetchPriority?: 'high' | 'low' | 'auto';
    }

    interface HTMLInputElementAttributes extends HTMLAttributes<HTMLInputElement> {
      accept?: string
      alt?: string
      autocomplete?: string;
      autofocus?: boolean | '';
      capture?: boolean | 'user' | 'environment' | ''
      checked?: boolean | 'checked' | '';
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials';
      disabled?: boolean | '';
      dirName?: string;
      enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
      form?: string
      formAction?: string
      formEncType?: string
      formMethod?: string
      formNoValidate?: boolean | ''
      formTarget?: string
      height?: number | string
      list?: string;
      max?: number | string
      maxLength?: number | `${number}`;
      min?: number | string
      minLength?: number | `${number}`;
      multiple?: boolean | '';
      name?: string;
      pattern?: string;
      placeholder?: string;
      readOnly?: boolean | '';
      required?: boolean | '';
      size?: number | `${number}`;
      src?: string
      step?: number | `${number}`
      type?:
      | 'button'
      | 'checkbox'
      | 'color'
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'image'
      | 'month'
      | 'number'
      | 'password'
      | 'radio'
      | 'range'
      | 'reset'
      | 'search'
      | 'submit'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week';
      value?: number | string;
      width?: number | string
      onchange?: ChangeEventHandler<HTMLInputElement>
    }

    interface HTMLLabelElementAttributes extends HTMLAttributes<HTMLLabelElement> {
      for?: string
    }

    interface HTMLLIElementAttributes extends HTMLAttributes<HTMLLIElement> {
      value?: number | `${number}`;
    }

    interface HTMLLinkElementAttributes extends HTMLAttributes<HTMLLinkElement> {
      title?: string;
      as?: string;
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials';
      disabled?: boolean | '';
      href?: string
      hreflang?: string;
      integrity?: string
      media?: string;
      referrerPolicy?: ReferrerPolicy;
      rel?: string;
      /** @deprecated */
      rev?: string;
      sizes?: string;
      type?: string;
      /** @deprecated */
      charset?: string;
      fetchPriority?: 'high' | 'low' | 'auto';
    }

    interface HTMLMapElementAttributes extends HTMLAttributes<HTMLMapElement> {
      name?: string
    }

    interface HTMLMenuElementAttributes extends HTMLAttributes<HTMLMenuElement> {
      /** @deprecated */
      type?: string;
    }

    interface HTMLMediaAttributes<T> extends HTMLAttributes<T> {
      autoplay?: boolean | '';
      controls?: boolean | '';
      controlsList?: 'nodownload' | 'nofullscreen' | 'noremoteplayback'
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials';
      loop?: boolean | '';
      mediaGroup?: string
      preload?: 'none' | 'metadata' | 'auto';
      src?: string;
    }

    interface HTMLMetaElementAttributes extends HTMLAttributes<HTMLMetaElement> {
      charset?: string;
      content?: string;
      'http-equiv'?: string;
      name?: string;
    }

    interface HTMLMeterElementAttributes extends HTMLAttributes<HTMLMeterElement> {
      form?: string
      high?: number | `${number}`;
      low?: number | `${number}`;
      max?: number | string;
      min?: number | string;
      optimum?: number | `${number}`;
      value?: number | string;
    }

    interface HTMLQuoteElementAttributes extends HTMLAttributes<HTMLQuoteElement> {
      cite?: string;
    }

    interface HTMLObjectElementAttributes extends HTMLAttributes<HTMLObjectElement> {
      classID?: string
      data?: string
      form?: string
      height?: number | string
      name?: string
      type?: string
      useMap?: string;
      width?: number | string
      wmode?: string
    }

    interface HTMLOListElementAttributes extends HTMLAttributes<HTMLOListElement> {
      reversed?: boolean | '';
      start?: number | `${number}`;
      type?: '1' | 'a' | 'A' | 'i' | 'I';
    }

    interface HTMLOptGroupElementAttributes extends HTMLAttributes<HTMLOptGroupElement> {
      disabled?: boolean | '';
      label?: string;
    }

    interface HTMLOptionElementAttributes extends HTMLAttributes<HTMLOptionElement> {
      disabled?: boolean | '';
      label?: string;
      selected?: boolean | '';
      value?: number | string;
    }

    interface HTMLOutputElementAttributes extends HTMLAttributes<HTMLOutputElement> {
      form?: string
      for?: string;
      name?: string;
      value?: number | string;
    }

    interface HTMLParamElementAttributes extends HTMLAttributes<HTMLParamElement> {
      name?: string
      value?: number | string
    }

    interface HTMLProgressElementAttributes extends HTMLAttributes<HTMLProgressElement> {
      max?: number | `${number}`;
      value?: number | `${number}`;
    }

    interface HTMLScriptElementAttributes extends HTMLAttributes<HTMLScriptElement> {
      async?: boolean | ''
      /** @deprecated */
      charset?: string;
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials';
      defer?: boolean | '';
      integrity?: string
      noModule?: boolean | ''
      nonce?: string
      referrerPolicy?: ReferrerPolicy;
      src?: string;
      type?: string;
      fetchPriority?: 'high' | 'low' | 'auto';
    }

    interface HTMLSelectElementAttributes extends HTMLAttributes<HTMLSelectElement> {
      autocomplete?: string;
      autofocus?: boolean | '';
      disabled?: boolean | '';
      form?: string
      multiple?: boolean | '';
      name?: string;
      required?: boolean | '';
      size?: number | `${number}`;
      value?: number | string;
      onchange?: ChangeEventHandler<HTMLSelectElement>;
    }

    interface HTMLSlotElementAttributes extends HTMLAttributes<HTMLSlotElement> {
      name?: string;
    }

    interface HTMLSourceElementAttributes extends HTMLAttributes<HTMLSourceElement> {
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
      height?: number | string;
      width?: number | string;
    }

    interface HTMLStyleElementAttributes extends HTMLAttributes<HTMLStyleElement> {
      media?: string
      nonce?: string
      scoped?: boolean | ''
      /** @deprecated */
      type?: string
    }

    interface HTMLTableElementAttributes extends HTMLAttributes<HTMLTableElement> {
      /**
       * To achieve a similar effect, use the CSS properties `margin-left` and `margin-right` to `auto` or `margin` to `0 auto`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right'
      /**
       * To achieve a similar effect, use the CSS `background-color` property.
       * @deprecated
       */
      bgColor?: Property.Color;
      /**
       * To achieve a similar effect, use the CSS `border` property.
       * @deprecated
       */
      border?: string;
      /**
       * To achieve a similar effect, apply the `border-collapse` CSS property to the `<table>` element, with its value set to collapse, and the `padding` property to the `<td>` elements.
       * @deprecated
       */
      cellPadding?: number | string;
      /**
       * To achieve a similar effect, apply the `border-spacing` CSS property to the `<table>` element. `border-spacing` does not have any effect if `border-collapse` is set to `collapse`.
       * @deprecated
       */
      cellSpacing?: number | string;
      /**
       * To achieve a similar effect, use the CSS the `border-style` and `border-width` properties.
       * @deprecated
       */
      frame?: string;
      /**
       * Use the `<caption>` element instead
       * @deprecated
       */
      summary?: string
      /**
       * To achieve a similar effect, use the CSS `width` property instead.
       * @deprecated
       */
      width?: number | string;
      /**
       * To achieve a similar effect, apply the CSS `border` property to the appropriate `<thead>`, `<tbody>`, `<tfoot>`, `<col>`, or `<colgroup>` elements.
       * @deprecated
       */
      rules?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
    }

    interface HTMLTextAreaElementAttributes extends HTMLAttributes<HTMLTextAreaElement> {
      autocomplete?: string;
      autofocus?: boolean | '';
      cols?: number | `${number}`;
      dirName?: string;
      disabled?: boolean | '';
      form?: string
      maxLength?: number | `${number}`;
      minLength?: number | `${number}`;
      name?: string;
      placeholder?: string;
      readOnly?: boolean | '';
      required?: boolean | '';
      rows?: number | `${number}`;
      value?: number | string;
      wrap?: 'hard' | 'soft' | 'off';
      onchange?: ChangeEventHandler<HTMLTextAreaElement>;
    }

    interface HTMLTableDataCellElementAttributes extends HTMLAttributes<HTMLTableCellElement> {
      colSpan?: number | `${number}`
      headers?: string
      rowSpan?: number | `${number}`
      /**
       * Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the title attribute.
       * @deprecated
       */
      abbr?: string
      /**
       * To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS `text-align` property to the element, the `char` value, give the `text-align` property the same value you would use for the `char`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right' | 'justify' | 'char'
      /** @deprecated */
      axis?: string;
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color;
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property.
       * @deprecated
       */
      char?: string;
      /** @deprecated */
      charoff?: string
      /** @deprecated */
      scope?: string
      /**
       * To achieve a similar effect, use the CSS `height` property instead.
       * @deprecated
       */
      height?: number | string
      /**
       * To achieve a similar effect,use the CSS `width` property instead
       * @deprecated
       */
      width?: number | string
      /**
       * To achieve a similar effect, use the CSS `vertical-align` property
       * @deprecated
       */
      valign?: 'top' | 'middle' | 'bottom' | 'baseline'
    }

    interface HTMLTableHeaderCellElementAttributes extends HTMLAttributes<HTMLTableCellElement> {
      abbr?: string
      colSpan?: number | `${number}`
      headers?: string
      rowSpan?: number | `${number}`
      scope?: string
      /**
       * To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS `text-align` property to the element, the `char` value, give the `text-align` property the same value you would use for the `char`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right' | 'justify' | 'char'
      /** @deprecated */
      axis?: string;
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color;
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property.
       * @deprecated
       */
      char?: string;
      /** @deprecated */
      charoff?: string
      /**
       * To achieve a similar effect, use the CSS `height` property instead.
       * @deprecated
       */
      height?: number | string
      /**
       * To achieve a similar effect,use the CSS `width` property instead
       * @deprecated
       */
      width?: number | string
      /**
       * To achieve a similar effect, use the CSS `vertical-align` property
       * @deprecated
       */
      valign?: 'top' | 'middle' | 'bottom' | 'baseline'
    }

    interface HTMLTimeElementAttributes extends HTMLAttributes<HTMLTimeElement> {
      dateTime?: string;
    }

    interface HTMLTrackElementAttributes extends HTMLAttributes<HTMLTrackElement> {
      default?: boolean | '';
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
      label?: string;
      src?: string;
      srclang?: string;
    }

    interface HTMLVideoElementAttributes extends HTMLMediaAttributes<HTMLVideoElement> {
      height?: number | string;
      playsInline?: boolean | '';
      poster?: string;
      width?: number | string;
      disablePictureInPicture?: boolean | '';
      disableRemotePlayback?: boolean | '';
      onenterpictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>;
      onleavepictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>;
      onresize?: PictureInPictureEventHandler<HTMLVideoElement>;
    }

    interface HTMLWebViewElementAttributes extends HTMLAttributes<HTMLWebViewElement> {
      allowFullScreen?: boolean
      allowpopups?: boolean
      autofocus?: boolean | '';
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

    interface HTMLMarqueeElementAttributes extends HTMLAttributes<HTMLMarqueeElement> {
      behavior?: 'scroll' | 'slide' | 'alternate'
      bgColor?: Property.Color
      direction?: 'left' | 'right' | 'up' | 'down'
      height?: number | string
      hspace?: number | string
      loop?: number | string
      scrollAmount?: number | string
      scrollDelay?: number | string
      trueSpeed?: boolean | ''
      vspace?: number | string
      width?: number | string
    }

    type HTMLWebViewElement = HTMLElement

    interface IntrinsicElements {
      // HTML
      a: HTMLAnchorElementAttributes
      abbr: HTMLAttributes<HTMLElement>
      /** @deprecated */
      acronym: HTMLAttributes<HTMLElement>
      address: HTMLAttributes<HTMLElement>
      area: HTMLAreaElementAttributes
      article: HTMLAttributes<HTMLElement>
      aside: HTMLAttributes<HTMLElement>
      audio: HTMLAudioElementAttributes
      b: HTMLAttributes<HTMLElement>
      base: HTMLBaseElementAttributes
      bdi: HTMLAttributes<HTMLElement>
      bdo: HTMLAttributes<HTMLElement>
      /** @deprecated */
      big: HTMLAttributes<HTMLElement>
      /** @deprecated */
      blink: HTMLAttributes<HTMLUnknownElement>
      blockquote: HTMLQuoteElementAttributes
      body: HTMLAttributes<HTMLBodyElement>
      br: HTMLAttributes<HTMLBRElement>
      button: HTMLButtonElementAttributes
      canvas: HTMLCanvasElementAttributes
      caption: HTMLAttributes<HTMLElement>
      /** @deprecated */
      center: HTMLAttributes<HTMLElement>
      cite: HTMLAttributes<HTMLElement>
      code: HTMLAttributes<HTMLElement>
      col: HTMLTableColElementAttributes
      colgroup: HTMLTableColElementAttributes
      data: HTMLDataElementAttributes
      datalist: HTMLAttributes<HTMLDataListElement>
      dd: HTMLAttributes<HTMLElement>
      del: HTMLModElementAttributes
      details: HTMLDetailsElementAttributes
      dfn: HTMLAttributes<HTMLElement>
      dialog: HTMLDialogElementAttributes
      /** @deprecated */
      dir: HTMLAttributes<HTMLDirectoryElement>
      div: HTMLAttributes<HTMLDivElement>
      dl: HTMLAttributes<HTMLDListElement>
      dt: HTMLAttributes<HTMLElement>
      em: HTMLAttributes<HTMLElement>
      embed: HTMLEmbedElementAttributes
      fieldset: HTMLFieldSetElementAttributes
      figcaption: HTMLAttributes<HTMLElement>
      figure: HTMLAttributes<HTMLElement>
      /** @deprecated */
      font: HTMLAttributes<HTMLFontElement>
      footer: HTMLAttributes<HTMLElement>
      form: HTMLFormElementAttributes
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
      html: HTMLHtmlElementAttributes
      i: HTMLAttributes<HTMLElement>
      iframe: HTMLIFrameElementAttributes
      img: HTMLImageElementAttributes
      input: HTMLInputElementAttributes
      ins: HTMLModElementAttributes
      kbd: HTMLAttributes<HTMLElement>
      /** @deprecated */
      keygen: HTMLAttributes<HTMLUnknownElement>;
      label: HTMLLabelElementAttributes
      legend: HTMLAttributes<HTMLLegendElement>
      li: HTMLLIElementAttributes
      link: HTMLLinkElementAttributes
      main: HTMLAttributes<HTMLElement>
      map: HTMLMapElementAttributes
      mark: HTMLAttributes<HTMLElement>
      /** @deprecated */
      marquee: HTMLAttributes<HTMLMarqueeElementAttributes>
      menu: HTMLMenuElementAttributes
      menuitem: HTMLAttributes<HTMLUnknownElement>
      meta: HTMLMetaElementAttributes
      meter: HTMLMeterElementAttributes
      nav: HTMLAttributes<HTMLElement>
      /** @deprecated */
      nobr: HTMLAttributes<HTMLElement>
      /** @deprecated */
      noembed: HTMLAttributes<HTMLUnknownElement>
      /** @deprecated */
      noframes: HTMLAttributes<HTMLUnknownElement>
      noindex: HTMLAttributes<HTMLElement>
      noscript: HTMLAttributes<HTMLUnknownElement>
      object: HTMLObjectElementAttributes
      ol: HTMLOListElementAttributes
      optgroup: HTMLOptGroupElementAttributes
      option: HTMLOptionElementAttributes
      output: HTMLOutputElementAttributes
      p: HTMLAttributes<HTMLParagraphElement>
      /** @deprecated */
      param: HTMLParamElementAttributes
      picture: HTMLAttributes<HTMLPictureElement>
      /** @deprecated */
      plaintext: HTMLAttributes<HTMLElement>
      pre: HTMLAttributes<HTMLPreElement>
      progress: HTMLProgressElementAttributes
      q: HTMLQuoteElementAttributes
      /** @deprecated */
      rb: HTMLAttributes<HTMLElement>
      rp: HTMLAttributes<HTMLElement>
      rt: HTMLAttributes<HTMLElement>
      ruby: HTMLAttributes<HTMLElement>
      s: HTMLAttributes<HTMLElement>
      samp: HTMLAttributes<HTMLElement>
      script: HTMLScriptElementAttributes
      section: HTMLAttributes<HTMLElement>
      select: HTMLSelectElementAttributes
      slot: HTMLSlotElementAttributes
      small: HTMLAttributes<HTMLElement>
      source: HTMLSourceElementAttributes
      span: HTMLAttributes<HTMLSpanElement>
      /** @deprecated */
      strike: HTMLAttributes<HTMLElement>
      strong: HTMLAttributes<HTMLElement>
      style: HTMLStyleElementAttributes
      sub: HTMLAttributes<HTMLElement>
      summary: HTMLAttributes<HTMLElement>
      sup: HTMLAttributes<HTMLElement>
      table: HTMLTableElementAttributes
      template: HTMLAttributes<HTMLTemplateElement>
      tbody: HTMLAttributes<HTMLTableSectionElement>
      td: HTMLTableDataCellElementAttributes
      textarea: HTMLTextAreaElementAttributes
      tfoot: HTMLAttributes<HTMLTableSectionElement>
      th: HTMLTableHeaderCellElementAttributes
      thead: HTMLAttributes<HTMLTableSectionElement>
      time: HTMLTimeElementAttributes
      title: HTMLAttributes<HTMLTitleElement>
      tr: HTMLAttributes<HTMLTableRowElement>
      track: HTMLTrackElementAttributes
      /** @deprecated */
      tt: HTMLAttributes<HTMLElement>
      u: HTMLAttributes<HTMLElement>
      ul: HTMLAttributes<HTMLUListElement>
      var: HTMLAttributes<HTMLElement>
      video: HTMLVideoElementAttributes
      wbr: HTMLAttributes<HTMLElement>
      /** @deprecated */
      xmp: HTMLAttributes<HTMLPreElement>
      webview: HTMLWebViewElementAttributes

      // SVG
      animate: SVGAttributes<SVGAnimateElement>
      animateMotion: SVGAttributes<SVGAnimateMotionElement>
      animateTransform: SVGAttributes<SVGAnimateTransformElement>
      circle: SVGAttributes<SVGCircleElement>
      clipPath: SVGAttributes<SVGClipPathElement>
      defs: SVGAttributes<SVGDefsElement>
      desc: SVGAttributes<SVGDescElement>
      ellipse: SVGAttributes<SVGEllipseElement>
      feBlend: SVGAttributes<SVGFEBlendElement>
      feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>
      feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>
      feComposite: SVGAttributes<SVGFECompositeElement>
      feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>
      feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>
      feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>
      feDistantLight: SVGAttributes<SVGFEDistantLightElement>
      feDropShadow: SVGAttributes<SVGFEDropShadowElement>
      feFlood: SVGAttributes<SVGFEFloodElement>
      feFuncA: SVGAttributes<SVGFEFuncAElement>
      feFuncB: SVGAttributes<SVGFEFuncBElement>
      feFuncG: SVGAttributes<SVGFEFuncGElement>
      feFuncR: SVGAttributes<SVGFEFuncRElement>
      feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>
      feImage: SVGAttributes<SVGFEImageElement>
      feMerge: SVGAttributes<SVGFEMergeElement>
      feMergeNode: SVGAttributes<SVGFEMergeNodeElement>
      feMorphology: SVGAttributes<SVGFEMorphologyElement>
      feOffset: SVGAttributes<SVGFEOffsetElement>
      fePointLight: SVGAttributes<SVGFEPointLightElement>
      feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>
      feSpotLight: SVGAttributes<SVGFESpotLightElement>
      feTile: SVGAttributes<SVGFETileElement>
      feTurbulence: SVGAttributes<SVGFETurbulenceElement>
      filter: SVGAttributes<SVGFilterElement>
      foreignObject: SVGAttributes<SVGForeignObjectElement>
      g: SVGAttributes<SVGGElement>
      image: SVGAttributes<SVGImageElement>
      line: SVGAttributes<SVGLineElement>
      linearGradient: SVGAttributes<SVGLinearGradientElement>
      marker: SVGAttributes<SVGMarkerElement>
      mask: SVGAttributes<SVGMaskElement>
      metadata: SVGAttributes<SVGMetadataElement>
      mpath: SVGAttributes<SVGMPathElement>
      path: SVGAttributes<SVGPathElement>
      pattern: SVGAttributes<SVGPatternElement>
      polygon: SVGAttributes<SVGPolygonElement>
      polyline: SVGAttributes<SVGPolylineElement>
      radialGradient: SVGAttributes<SVGRadialGradientElement>
      rect: SVGAttributes<SVGRectElement>
      set: SVGAttributes<SVGSetElement>
      stop: SVGAttributes<SVGStopElement>
      svg: SVGAttributes<SVGSVGElement>
      switch: SVGAttributes<SVGSwitchElement>
      symbol: SVGAttributes<SVGSymbolElement>
      text: SVGAttributes<SVGTextElement>
      textPath: SVGAttributes<SVGTextPathElement>
      tspan: SVGAttributes<SVGTSpanElement>
      use: SVGAttributes<SVGUseElement>
      view: SVGAttributes<SVGViewElement>

      // MathML
      annotation: MathMLAttributes
      'annotation-xml': MathMLAttributes
      math: MathMLAttributes
      merror: MathMLAttributes
      mfrac: MathMLAttributes
      mi: MathMLAttributes
      mmultiscripts: MathMLAttributes
      mn: MathMLAttributes
      mo: MathMLAttributes
      mover: MathMLAttributes
      mpadded: MathMLAttributes
      mphantom: MathMLAttributes
      mprescripts: MathMLAttributes
      mroot: MathMLAttributes
      mrow: MathMLAttributes
      ms: MathMLAttributes
      mspace: MathMLAttributes
      msqrt: MathMLAttributes
      mstyle: MathMLAttributes
      msub: MathMLAttributes
      msubsup: MathMLAttributes
      msup: MathMLAttributes
      mtable: MathMLAttributes
      mtd: MathMLAttributes
      mtext: MathMLAttributes
      mtr: MathMLAttributes
      munder: MathMLAttributes
      munderover: MathMLAttributes
      semantics: MathMLAttributes
      /** @deprecated */
      maction: MathMLAttributes
      /** @deprecated */
      mfenced: MathMLAttributes
    }
  }
}
