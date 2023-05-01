/// <reference lib="dom" />
/// <reference lib="es2022" />
import { Properties, SvgProperties } from 'csstype';

type Booleanish = boolean | 'true' | 'false'
type Numeric = number | `${number}`

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

export function jsx<K extends keyof HTMLElementTagNameMap>(
  type: K | HTMLElementTagNameMap[K],
  props: HTMLElementTagNameMap[K],
): HTMLElementTagNameMap[K]

export { jsx as jsxs, jsx as jsxDEV };

export interface FunctionComponent<P = {}, T extends JSX.Element = JSX.Element> {
  (props: PropsWithChildren<P>): T | null
}
export { FunctionComponent as FC };

export const properties: Set<string>;

export function useRef<T = any>(current?: T): RefObject<T>
export function useText<T = string>(initContent?: T): readonly [
  Text,
  (text: T) => void
]

export function Extend(props: Record<string, (node: HTMLElement, value: any) => void>): undefined
export function parseFromString(html: string): DocumentFragment
export function Fragment(props: { children?: TChild | TChild[] }): DocumentFragment
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

interface DOMAttributes<T> extends JSX.Attributes {
  __ns?: number;
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
  cssText?: string | null;
  [key: `--${string}`]: string | number;
}

export interface SVGProperties extends SvgProperties<string | number> { }

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
  'aria-readonly'?: Booleanish

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
  'aria-required'?: Booleanish
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
  'aria-selected'?: Booleanish
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

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  innerHTML?: string
  accessKey?: string
  class?: string
  contentEditable?: Booleanish | 'inherit'
  contextMenu?: string
  dir?: 'ltr' | 'rtl' | 'auto'
  draggable?: Booleanish
  hidden?: boolean
  id?: string
  lang?: string
  placeholder?: string
  slot?: string
  spellcheck?: 'true' | 'false'
  style?: string | CSSProperties
  tabIndex?: Numeric
  title?: string;
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
  autocapitalize?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
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

export interface SVGAttributes<T extends EventTarget> extends HTMLAttributes<T> {
  __ns?: 1,
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
  amplitude?: Numeric
  /** @deprecated */
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  /** @deprecated */
  ascent?: Numeric
  attributeName?: string
  /** @deprecated */
  attributeType?: 'CSS' | 'XML' | 'auto'
  autoReverse?: number | string
  azimuth?: Numeric
  baseFrequency?: number | string
  'baseline-shift'?: SVGProperties['baselineShift']
  baseProfile?: number | string
  /** @deprecated */
  bbox?: number | string
  begin?: number | string
  bias?: Numeric
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
  diffuseConstant?: Numeric
  direction?: 'ltr' | 'rtl'
  display?: SVGProperties['display']
  divisor?: number | string
  'dominant-baseline'?: SVGProperties['dominantBaseline']
  dur?: number | string
  dx?: number | string
  dy?: number | string
  edgeMode?: 'duplicate' | 'wrap' | 'none'
  elevation?: Numeric
  /** @deprecated */
  'enable-background'?: number | string
  end?: number | string
  exponent?: Numeric
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
  focusable?: number | string
  'font-family'?: SVGProperties['fontFamily']
  'font-size'?: SVGProperties['fontSize']
  'font-size-adjust'?:SVGProperties['fontSizeAdjust']
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
  'glyph-orientation-vertical'?:  string
  /** @deprecated */
  glyphRef?: string
  gradientTransform?: string
  gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  /** @deprecated */
  hanging?: Numeric
  /** @deprecated */
  'horiz-adv-x'?: Numeric
  /** @deprecated */
  'horiz-origin-x'?: Numeric
  /** @deprecated */
  'horiz-origin-y'?: Numeric
  /** @deprecated */
  ideographic?: Numeric
  'image-rendering'?: SVGProperties['imageRendering']
  in2?: string
  in?: string
  intercept?: Numeric
  k1?: Numeric
  k2?: Numeric
  k3?: Numeric
  k4?: Numeric
  /** @deprecated */
  k?: Numeric
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
  'letter-spacing'?:  SVGProperties['letterSpacing']
  'lighting-color'?: SVGProperties['lightingColor']
  limitingConeAngle?: Numeric
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
  mathematical?: Numeric
  max?: string
  min?: string
  media?: string
  method?: 'align' | 'stretch'
  mode?: string
  name?: string
  numOctaves?: number | string
  offset?: number | string
  opacity?: SVGProperties['opacity']
  operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic'
  order?: number | string
  orient?: 'auto' | 'auto-start-reverse' | number | string
  /** @deprecated */
  orientation?: 'h' | 'v'
  origin?: 'default' | string
  overflow?: SVGProperties['overflow']
  'overline-position'?: Numeric
  'overline-thickness'?: Numeric
  'paint-order'?: SVGProperties['paintOrder']
  /** @deprecated */
  'panose-1'?: string
  path?: string
  pathLength?: Numeric
  patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  patternTransform?: string
  patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'pointer-events'?: SVGProperties['pointerEvents']
  points?: string
  pointsAtX?: Numeric
  pointsAtY?: Numeric
  pointsAtZ?: Numeric
  preserveAlpha?: 'true' | 'false'
  preserveAspectRatio?: string
  primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  r?: number | string
  radius?: number | string
  refX?: number | string | 'left' | 'center' | 'right'
  refY?: number | string | 'top' | 'center' | 'bottom'
  renderingIntent?: number | string
  repeatCount?: Numeric | 'indefinite'
  repeatDur?: number | string | 'indefinite'
  requiredExtensions?: number | string
  /** @deprecated */
  requiredFeatures?: string
  restart?: 'always' | 'whenNotActive' | 'never'
  result?: string
  rotate?: Numeric | 'auto' | 'auto-reverse'
  rx?: number | string | 'auto'
  ry?: number | string | 'auto'
  scale?: Numeric
  seed?: Numeric
  'shape-rendering'?: SVGProperties['shapeRendering']
  side?: 'left' | 'right'
  /** @deprecated */
  slope?: Numeric
  spacing?: 'auto' | 'exact'
  specularConstant?: Numeric
  specularExponent?: Numeric
  speed?: number | string
  spreadMethod?: 'pad' | 'reflect' | 'repeat'
  startOffset?: number | string
  stdDeviation?: number | string
  /** @deprecated */
  stemh?: Numeric
  /** @deprecated */
  stemv?: Numeric
  stitchTiles?: 'noStitch' | 'stitch'
  'stop-color'?: SVGProperties['stopColor']
  'stop-opacity'?: SVGProperties['stopOpacity']
  'strikethrough-position'?: Numeric
  'strikethrough-thickness'?: Numeric
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
  surfaceScale?: Numeric
  systemLanguage?: string
  tabindex?: Numeric
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
  'underline-position'?: Numeric
  'underline-thickness'?: Numeric
  unicode?: string
  'unicode-bidi'?: SVGProperties['unicodeBidi']
  /** @deprecated */
  'unicode-range'?: string
  /** @deprecated */
  'units-per-em'?: Numeric
  /** @deprecated */
  'v-alphabetic'?: Numeric
  /** @deprecated */
  'v-hanging'?: Numeric
  /** @deprecated */
  'v-ideographic'?: Numeric
  /** @deprecated */
  'v-mathematical'?: Numeric
  values?: string
  'vector-effect'?: SVGProperties['vectorEffect']
  /** @deprecated */
  version?: '1.0' | '1.1'
  /** @deprecated */
  'vert-adv-y'?: Numeric
  /** @deprecated */
  'vert-origin-x'?: Numeric
  /** @deprecated */
  'vert-origin-y'?: Numeric
  viewBox?: string
  /** @deprecated */
  viewTarget?: string
  visibility?: SVGProperties['visibility']
  /** @deprecated */
  widths?: Numeric
  'word-spacing'?: SVGProperties['wordSpacing']
  'writing-mode'?: SVGProperties['writingMode']
  x1?: number | string
  x2?: number | string
  x?: number | string
  /** @deprecated */
  'x-height'?: Numeric
  xChannelSelector?: 'R' | 'G' | 'B' | 'A'
  yChannelSelector?: 'R' | 'G' | 'B' | 'A'
  // xlinkActuate?: string
  // xlinkArcrole?: string
  // xlinkHref?: string
  // xlinkRole?: string
  // xlinkShow?: string
  // xlinkTitle?: string
  // xlinkType?: string
  // xmlBase?: string
  // xmlLang?: string
  // xmlnsXlink?: string
  // xmlspace?: string
  xmlns?: string
  y1?: number | string
  y2?: number | string
  y?: number | string
  z?: Numeric
  /** @deprecated */
  zoomAndPan?: 'disable' | 'magnify'
  height?: number | string
  width?: number | string
}

export type HTMLAttrinuteCORS =
  | 'anonymous'
  | 'use-credentials'
  | ''

export type HTMLInputTypeAttribute =
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
  | 'week'

interface AnchorHTMLAttributes extends HTMLAttributes<HTMLAnchorElement> {
  download?: any;
  href?: string;
  hreflang?: string;
  ping?: string
  rel?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  type?: string;
  referrerPolicy?: ReferrerPolicy;
}

interface AudioHTMLAttributes extends MediaHTMLAttributes<HTMLAudioElement> { }

interface AreaHTMLAttributes extends HTMLAttributes<HTMLAreaElement> {
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

interface BaseHTMLAttributes extends HTMLAttributes<HTMLBaseElement> {
  href?: string
  target?: string
}

interface ButtonHTMLAttributes extends HTMLAttributes<HTMLButtonElement> {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  value?: string | number;
}

interface CanvasHTMLAttributes extends HTMLAttributes<HTMLCanvasElement> {
  height?: number | string;
  width?: number | string;
}

interface ColHTMLAttributes extends HTMLAttributes<HTMLTableColElement> {
  span?: number
  width?: number | string
}

interface ColgroupHTMLAttributes extends HTMLAttributes<HTMLTableColElement> {
  span?: number
}

interface DataHTMLAttributes extends HTMLAttributes<HTMLDataElement> {
  value?: string | number;
}

interface DetailsHTMLAttributes extends HTMLAttributes<HTMLDetailsElement> {
  open?: boolean;
  ontoggle?: TEventHandler<HTMLDetailsElement>;
}

interface DelHTMLAttributes extends HTMLAttributes<HTMLModElement> {
  cite?: string;
  dateTime?: string;
}

interface DialogHTMLAttributes extends HTMLAttributes<HTMLDialogElement> {
  open?: boolean
  ontoggle?: TEventHandler<HTMLDialogElement>;
}

interface EmbedHTMLAttributes extends HTMLAttributes<HTMLEmbedElement> {
  height?: number | string
  src?: string
  type?: string
  width?: number | string
}

interface FieldsetHTMLAttributes extends HTMLAttributes<HTMLFieldSetElement> {
  disabled?: boolean;
  form?: string
  name?: string;
}

export interface FormHTMLAttributes extends HTMLAttributes<HTMLFormElement> {
  'accept-charset'?: string;
  action?: string;
  autocomplete?: string;
  enctype?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string
}

interface HtmlHTMLAttributes extends HTMLAttributes<HTMLHtmlElement> {
  manifest?: string
}

interface IframeHTMLAttributes extends HTMLAttributes<HTMLIFrameElement> {
  allow?: string
  allowFullScreen?: boolean;
  allowTransparency?: boolean
  /** @deprecated */
  frameBorder?: number | string
  height?: number | string;
  loading?: 'eager' | 'lazy'
  /** @deprecated */
  marginHeight?: number;
  /** @deprecated */
  marginWidth?: number;
  name?: string;
  referrerPolicy?: ReferrerPolicy;
  sandbox?: string
  /** @deprecated */
  scrolling?: string
  seamless?: boolean
  src?: string;
  srcdoc?: string;
  width?: number | string;
}

interface ImgHTMLAttributes extends HTMLAttributes<HTMLImageElement> {
  alt?: string;
  crossOrigin?: HTMLAttrinuteCORS;
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

interface InsHTMLAttributes extends HTMLAttributes<HTMLModElement> {
  cite?: string
  dateTime?: string;
}

interface InputHTMLAttributes extends HTMLAttributes<HTMLInputElement> {
  accept?: string
  alt?: string
  autocomplete?: string;
  autofocus?: boolean;
  capture?: boolean | string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean;
  crossOrigin?: HTMLAttrinuteCORS;
  disabled?: boolean;
  dirName?: string;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  height?: number | string
  list?: string;
  max?: number | string
  maxLength?: number;
  min?: number | string
  minLength?: number;
  multiple?: boolean
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  src?: string
  step?: number | string;
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  width?: number | string
  onchange?: ChangeEventHandler<HTMLInputElement>
}

interface LabelHTMLAttributes extends HTMLAttributes<HTMLLabelElement> {
  for?: string
}

interface LiHTMLAttributes extends HTMLAttributes<HTMLLIElement> {
  value?: `${number}` | number;
}

interface LinkHTMLAttributes extends HTMLAttributes<HTMLLinkElement> {
  title?: string;
  as?: string;
  crossOrigin?: HTMLAttrinuteCORS;
  disabled?: boolean;
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

interface MapHTMLAttributes extends HTMLAttributes<HTMLMapElement> {
  name?: string
}

interface MenuHTMLAttributes extends HTMLAttributes<HTMLMenuElement> {
  /** @deprecated */
  type?: string;
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
  autoplay?: boolean;
  controls?: boolean;
  controlsList?: 'nodownload' | 'nofullscreen' | 'noremoteplayback'
  crossOrigin?: HTMLAttrinuteCORS;
  loop?: boolean;
  mediaGroup?: string
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  src?: string;
}

interface MetaHTMLAttributes extends HTMLAttributes<HTMLMetaElement> {
  charset?: string;
  content?: string;
  'http-equiv'?: string;
  name?: string;
}

interface MeterHTMLAttributes extends HTMLAttributes<HTMLMeterElement> {
  form?: string
  high?: number;
  low?: number;
  max?: number | string;
  min?: number | string;
  optimum?: number;
  value?: string | number;
}

interface QuoteHTMLAttributes extends HTMLAttributes<HTMLQuoteElement> {
  cite?: string;
}

interface ObjectHTMLAttributes extends HTMLAttributes<HTMLObjectElement> {
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

interface OlHTMLAttributes extends HTMLAttributes<HTMLOListElement> {
  reversed?: boolean;
  start?: number;
  type?: '1' | 'a' | 'A' | 'i' | 'I';
}

interface OptgroupHTMLAttributes extends HTMLAttributes<HTMLOptGroupElement> {
  disabled?: boolean;
  label?: string;
}

interface OptionHTMLAttributes extends HTMLAttributes<HTMLOptionElement> {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string | number;
}

interface OutputHTMLAttributes extends HTMLAttributes<HTMLOutputElement> {
  form?: string
  for?: string;
  name?: string;
  value?: string | number;
}

interface ParamHTMLAttributes extends HTMLAttributes<HTMLParamElement> {
  name?: string
  value?: string | number
}

interface ProgressHTMLAttributes extends HTMLAttributes<HTMLProgressElement> {
  max?: number | string;
  value?: string | number;
}

interface ScriptHTMLAttributes extends HTMLAttributes<HTMLScriptElement> {
  async?: boolean
  /** @deprecated */
  charset?: string;
  crossOrigin?: HTMLAttrinuteCORS;
  defer?: boolean;
  integrity?: string
  noModule?: boolean;
  nonce?: string
  referrerPolicy?: ReferrerPolicy;
  src?: string;
  type?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

interface SelectHTMLAttributes extends HTMLAttributes<HTMLSelectElement> {
  autocomplete?: string;
  autofocus?: boolean;
  disabled?: boolean;
  form?: string
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
  value?: string | number;
  onchange?: ChangeEventHandler<HTMLSelectElement>;
}

interface SlotHTMLAttributes extends HTMLAttributes<HTMLSlotElement> {
  name?: string;
}

interface SourceHTMLAttributes extends HTMLAttributes<HTMLSourceElement> {
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
  height?: number | string;
  width?: number | string;
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

interface TextareaHTMLAttributes extends HTMLAttributes<HTMLTextAreaElement> {
  autocomplete?: string;
  autofocus?: boolean;
  cols?: number;
  dirName?: string;
  disabled?: boolean;
  form?: string
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string | number;
  wrap?: 'hard' | 'soft' | 'off';
  onchange?: ChangeEventHandler<HTMLTextAreaElement>;
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

interface TimeHTMLAttributes extends HTMLAttributes<HTMLTimeElement> {
  dateTime?: string;
}

interface TrackHTMLAttributes extends HTMLAttributes<HTMLTrackElement> {
  default?: boolean;
  kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  label?: string;
  src?: string;
  srclang?: string;
}

interface VideoHTMLAttributes extends MediaHTMLAttributes<HTMLVideoElement> {
  height?: number | string;
  playsInline?: boolean;
  poster?: string;
  width?: number | string;
  disablePictureInPicture?: boolean;
  disableRemotePlayback?: boolean;

  onenterpictureinpicture?: TEventHandler<HTMLVideoElement>;
  onleavepictureinpicture?: TEventHandler<HTMLVideoElement>;
}

interface WebViewHTMLAttributes extends HTMLAttributes<HTMLWebViewElement> {
  allowFullScreen?: boolean
  allowpopups?: boolean
  autofocus?: boolean;
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

interface MarqueeHTMLElement extends HTMLAttributes<HTMLMarqueeElement> {
  behavior?: 'scroll' | 'slide' | 'alternate'
  bgColor?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  height?: number | string
  hspace?: number | string
  loop?: number | string
  scrollAmount?: number | string
  scrollDelay?: number | string
  trueSpeed?: boolean
  vspace?: number | string
  width?: number | string
}

type HTMLWebViewElement = HTMLElement

declare global {
  namespace JSX {
    type Element = HTMLElement | SVGElement | DocumentFragment
    type ElementType<P = any> =
      | {
        [K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
        ? K
        : never
      }[keyof IntrinsicElements]
      | FunctionComponent<P>

    interface Attributes { }

    interface ElementAttributesProperty { props: {} }
    interface ElementChildrenAttribute { children: {} }
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
      blockquote: QuoteHTMLAttributes
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
      keygen: HTMLAttributes<HTMLUnknownElement>;
      label: LabelHTMLAttributes
      legend: HTMLAttributes<HTMLLegendElement>
      li: LiHTMLAttributes
      link: LinkHTMLAttributes
      main: HTMLAttributes<HTMLElement>
      map: MapHTMLAttributes
      mark: HTMLAttributes<HTMLElement>
      marquee: HTMLAttributes<MarqueeHTMLElement>
      menu: MenuHTMLAttributes
      menuitem: HTMLAttributes<HTMLUnknownElement>
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
      picture: HTMLAttributes<HTMLPictureElement>
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

      animate: SVGAttributes<SVGAnimateElement>
      animateMotion: SVGAttributes<SVGAnimateMotionElement>
      animateTransform: SVGAttributes<SVGAnimateElement>
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
    }
  }
}
