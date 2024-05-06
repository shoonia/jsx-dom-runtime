/// <reference lib="dom" />
/// <reference lib="es2023" />
import type { Properties, Property } from 'csstype';

export interface RefObject<T> {
  readonly current: T
}

export type RefCallback<T> = (instance: T) => void

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
  | bigint
  | false
  | null
  | undefined

export type PropsWithChildren<P> = P & { children?: TChild | TChild[] }

export declare function jsx<
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

export type FunctionComponent<P = {}, T extends JSX.Element = JSX.Element> = JSX.FC<P, T>
export { FunctionComponent as FC };

export declare const properties: Set<string>;
export declare const extensions: Map<
  string,
  (node: HTMLElement | SVGElement | MathMLElement, value: any, key: string) => void
>;

export declare const svgNs = 'http://www.w3.org/2000/svg';
export declare const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

export declare function useRef<T = any>(current?: T): RefObject<T>
export declare function useText<T = string>(initContent?: T): readonly [
  Text,
  (content: T) => void
]

export declare function parseFromString(html: string): DocumentFragment
export declare function Fragment(children?: TChild | TChild[]): DocumentFragment
export declare function Template(props: { children: string }): DocumentFragment

export interface CurrentTarget<T> {
  readonly currentTarget: EventTarget & T
}

export interface EventObject<Ev, T> {
  handleEvent(event: Ev & CurrentTarget<T>): void
}

type EventHandler<Ev, T> = (this: T, event: Ev & CurrentTarget<T>) => void
type EventHandlerOrObject<Ev, T> = EventHandler<Ev, T> | EventObject<Ev, T>

export type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent, T>
export type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent, T>
export type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent, T>
export type DragEventHandler<T = Element> = EventHandler<DragEvent, T>
export type FocusEventHandler<T = Element> = EventHandler<FocusEvent, T>
export type FormDataEventHandler<T = Element> = EventHandler<FormDataEvent, T>
export type GenericEventHandler<T = Element> = EventHandler<Event, T>
export type InputEventHandler<T = Element> = EventHandler<InputEvent, T>
export type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent, T>
export type MediaEncryptedEventHandler<T = Element> = EventHandler<MediaEncryptedEvent, T>
export type MouseEventHandler<T = Element> = EventHandler<MouseEvent, T>
export type PictureInPictureEventHandler<T = Element> = EventHandler<PictureInPictureEvent, T>
export type PointerEventHandler<T = Element> = EventHandler<PointerEvent, T>
export type SubmitEventHandler<T = Element> = EventHandler<SubmitEvent, T>
export type ToggleEventHandler<T = Element> = EventHandler<ToggleEvent, T>
export type TouchEventHandler<T = Element> = EventHandler<TouchEvent, T>
export type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent, T>
export type UIEventHandler<T = Element> = EventHandler<UIEvent, T>
export type WebGLContextEventHandler<T = Element> = EventHandler<WebGLContextEvent, T>
export type WheelEventHandler<T = Element> = EventHandler<WheelEvent, T>

export interface DOMAttributes<T> extends JSX.Attributes {
  _?: string
  $?: Record<string, GenericEventHandler<T>>
  ref?: JSX.Ref<T>
  children?: TChild | TChild[]
  // ClipboardEvent
  oncopy?: ClipboardEventHandler<T>
  oncut?: ClipboardEventHandler<T>
  onpaste?: ClipboardEventHandler<T>
  'on:copy'?: JSX.ClipboardEventListener<T>
  'on:cut'?: JSX.ClipboardEventListener<T>
  'on:paste'?: JSX.ClipboardEventListener<T>
  // CompositionEvent
  oncompositionend?: CompositionEventHandler<T>
  oncompositionstart?: CompositionEventHandler<T>
  oncompositionupdate?: CompositionEventHandler<T>
  'on:compositionEnd'?: JSX.CompositionEventListener<T>
  'on:compositionStart'?: JSX.CompositionEventListener<T>
  'on:compositionUpdate'?: JSX.CompositionEventListener<T>
  // FocusEvent
  onfocus?: FocusEventHandler<T>
  onblur?: FocusEventHandler<T>
  'on:focus'?: JSX.FocusEventListener<T>
  'on:blur'?: JSX.FocusEventListener<T>
  'on:focusIn'?: JSX.FocusEventListener<T>
  'on:focusOut'?: JSX.FocusEventListener<T>
  // InputEvent
  onbeforeinput?: InputEventHandler<T>
  oninput?: InputEventHandler<T>
  'on:beforeInput'?: JSX.InputEventListener<T>
  'on:input'?: JSX.InputEventListener<T>
  // Form Events
  onchange?: GenericEventHandler<T>
  onreset?: GenericEventHandler<T>
  oninvalid?: GenericEventHandler<T>
  'on:change'?: JSX.EventListener<T>
  'on:reset'?: JSX.EventListener<T>
  'on:invalid'?: JSX.EventListener<T>
  // Submit Event
  onsubmit?: SubmitEventHandler<T>
  'on:submit'?: JSX.SubmitEventListener<T>
  // Image Events
  onload?: GenericEventHandler<T>
  onerror?: GenericEventHandler<T> // also a Media Event
  'on:load'?: JSX.EventListener<T>
  'on:error'?: JSX.EventListener<T>
  // KeyboardEvent
  onkeydown?: KeyboardEventHandler<T>
  onkeypress?: KeyboardEventHandler<T>
  onkeyup?: KeyboardEventHandler<T>
  'on:keyDown'?: JSX.KeyboardEventListener<T>
  'on:keyPress'?: JSX.KeyboardEventListener<T>
  'on:keyUp'?: JSX.KeyboardEventListener<T>
  // Media Events
  onabort?: GenericEventHandler<T>
  oncanplay?: GenericEventHandler<T>
  oncanplaythrough?: GenericEventHandler<T>
  ondurationchange?: GenericEventHandler<T>
  onemptied?: GenericEventHandler<T>
  onended?: GenericEventHandler<T>
  onloadeddata?: GenericEventHandler<T>
  onloadedmetadata?: GenericEventHandler<T>
  onloadstart?: GenericEventHandler<T>
  onpause?: GenericEventHandler<T>
  onplay?: GenericEventHandler<T>
  onplaying?: GenericEventHandler<T>
  onprogress?: GenericEventHandler<T>
  onratechange?: GenericEventHandler<T>
  onseeked?: GenericEventHandler<T>
  onseeking?: GenericEventHandler<T>
  onstalled?: GenericEventHandler<T>
  onsuspend?: GenericEventHandler<T>
  ontimeupdate?: GenericEventHandler<T>
  onvolumechange?: GenericEventHandler<T>
  onwaiting?: GenericEventHandler<T>
  'on:abort'?: JSX.EventListener<T>
  'on:canPlay'?: JSX.EventListener<T>
  'on:canPlayThrough'?: JSX.EventListener<T>
  'on:durationChange'?: JSX.EventListener<T>
  'on:emptied'?: JSX.EventListener<T>
  'on:ended'?: JSX.EventListener<T>
  'on:loadedData'?: JSX.EventListener<T>
  'on:loadedMetadata'?: JSX.EventListener<T>
  'on:loadStart'?: JSX.EventListener<T>
  'on:pause'?: JSX.EventListener<T>
  'on:play'?: JSX.EventListener<T>
  'on:playing'?: JSX.EventListener<T>
  'on:progress'?: JSX.EventListener<T>
  'on:rateChange'?: JSX.EventListener<T>
  'on:seeked'?: JSX.EventListener<T>
  'on:seeking'?: JSX.EventListener<T>
  'on:stalled'?: JSX.EventListener<T>
  'on:suspend'?: JSX.EventListener<T>
  'on:timeUpdate'?: JSX.EventListener<T>
  'on:volumeChange'?: JSX.EventListener<T>
  'on:waiting'?: JSX.EventListener<T>
  // MouseEvent
  onauxclick?: MouseEventHandler<T>
  onclick?: MouseEventHandler<T>
  oncontextmenu?: MouseEventHandler<T>
  ondblclick?: MouseEventHandler<T>
  onmousedown?: MouseEventHandler<T>
  onmouseenter?: MouseEventHandler<T>
  onmouseleave?: MouseEventHandler<T>
  onmousemove?: MouseEventHandler<T>
  onmouseout?: MouseEventHandler<T>
  onmouseover?: MouseEventHandler<T>
  onmouseup?: MouseEventHandler<T>
  'on:auxclick'?: MouseEventHandler<T>
  'on:click'?: JSX.MouseEventListener<T>
  'on:contextMenu'?: JSX.MouseEventListener<T>
  'on:dblClick'?: JSX.MouseEventListener<T>
  'on:mouseDown'?: JSX.MouseEventListener<T>
  'on:mouseEnter'?: JSX.MouseEventListener<T>
  'on:mouseLeave'?: JSX.MouseEventListener<T>
  'on:mouseMove'?: JSX.MouseEventListener<T>
  'on:mouseOut'?: JSX.MouseEventListener<T>
  'on:mouseOver'?: JSX.MouseEventListener<T>
  'on:mouseUp'?: JSX.MouseEventListener<T>
  // DragEvent
  ondrag?: DragEventHandler<T>
  ondragend?: DragEventHandler<T>
  ondragenter?: DragEventHandler<T>
  /** @deprecated */
  ondragexit?: DragEventHandler<T>
  ondragleave?: DragEventHandler<T>
  ondragover?: DragEventHandler<T>
  ondragstart?: DragEventHandler<T>
  ondrop?: DragEventHandler<T>
  'on:drag'?: JSX.DragEventListener<T>
  'on:dragEnd'?: JSX.DragEventListener<T>
  'on:dragEnter'?: JSX.DragEventListener<T>
  /** @deprecated */
  'on:dragExit'?: JSX.DragEventListener<T>
  'on:dragLeave'?: JSX.DragEventListener<T>
  'on:dragOver'?: JSX.DragEventListener<T>
  'on:dragStart'?: JSX.DragEventListener<T>
  'on:drop'?: JSX.DragEventListener<T>
  // Selection Events
  onselect?: GenericEventHandler<T>
  'on:select'?: JSX.EventListener<T>
  // TouchEvent
  ontouchcancel?: TouchEventHandler<T>
  ontouchend?: TouchEventHandler<T>
  ontouchmove?: TouchEventHandler<T>
  ontouchstart?: TouchEventHandler<T>
  'on:touchCancel'?: JSX.TouchEventListener<T>
  'on:touchEnd'?: JSX.TouchEventListener<T>
  'on:touchMove'?: JSX.TouchEventListener<T>
  'on:touchStart'?: JSX.TouchEventListener<T>
  // PointerEvent
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
  'on:pointerDown'?: JSX.PointerEventListener<T>
  'on:pointerMove'?: JSX.PointerEventListener<T>
  'on:pointerUp'?: JSX.PointerEventListener<T>
  'on:pointerCancel'?: JSX.PointerEventListener<T>
  'on:pointerEnter'?: JSX.PointerEventListener<T>
  'on:pointerLeave'?: JSX.PointerEventListener<T>
  'on:pointerOver'?: JSX.PointerEventListener<T>
  'on:pointerOut'?: JSX.PointerEventListener<T>
  'on:gotPointerCapture'?: JSX.PointerEventListener<T>
  'on:lostPointerCapture'?: JSX.PointerEventListener<T>
  // UIEvent
  onscroll?: UIEventHandler<T>
  onscrollend?: UIEventHandler<T>
  'on:scroll'?: JSX.UIEventListener<T>
  'on:scrollEnd'?: JSX.UIEventListener<T>
  // WheelEvent
  onwheel?: WheelEventHandler<T>
  'on:wheel'?: JSX.WheelEventListener<T>
  // AnimationEvent
  onanimationstart?: AnimationEventHandler<T>
  onanimationend?: AnimationEventHandler<T>
  onanimationiteration?: AnimationEventHandler<T>
  onanimationcancel?: AnimationEventHandler<T>
  'on:animationStart'?: JSX.AnimationEventListener<T>
  'on:animationEnd'?: JSX.AnimationEventListener<T>
  'on:animationIteration'?: JSX.AnimationEventListener<T>
  'on:animationCancel'?: JSX.AnimationEventListener<T>

  // TransitionEvent
  ontransitionstart?: TransitionEventHandler<T>
  ontransitionend?: TransitionEventHandler<T>
  ontransitionrun?: TransitionEventHandler<T>
  ontransitioncancel?: TransitionEventHandler<T>
  'on:transitionStart'?: JSX.TransitionEventListener<T>
  'on:transitionEnd'?: JSX.TransitionEventListener<T>
  'on:transitionRun'?: JSX.TransitionEventListener<T>
  'on:transitionCancel'?: JSX.TransitionEventListener<T>
  // Fullscreen API
  onfullscreenchange?: GenericEventHandler<T>
  onfullscreenerror?: GenericEventHandler<T>
  'on:fullscreenChange'?: JSX.EventListener<T>
  'on:fullscreenError'?: JSX.EventListener<T>
  // ToggleEvent
  ontoggle?: ToggleEventHandler<T>
  'on:toggle'?: JSX.ToggleEventListener<T>
}

export interface CSSProperties extends Properties<number | string> {
  cssText?: string | null
  [key: `--${string}`]: number | string
}

export type ControlsList = 'nodownload' | 'nofullscreen' | 'noremoteplayback'

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
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  'aria-colindextext'?: string
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
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  'aria-description'?: string
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
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  'aria-rowindextext'?: string
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
   * All the WAI-ARIA 1.2 role attribute values
   * @see https://www.w3.org/TR/wai-aria-1.2/#role_definitions
   */
  role?:
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'blockquote'
  | 'button'
  | 'caption'
  | 'cell'
  | 'checkbox'
  | 'code'
  | 'columnheader'
  | 'combobox'
  | 'command'
  | 'complementary'
  | 'composite'
  | 'contentinfo'
  | 'definition'
  | 'deletion'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'emphasis'
  | 'feed'
  | 'figure'
  | 'form'
  | 'generic'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'input'
  | 'insertion'
  | 'landmark'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'meter'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'paragraph'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'range'
  | 'region'
  | 'roletype'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'section'
  | 'sectionhead'
  | 'select'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'strong'
  | 'structure'
  | 'subscript'
  | 'superscript'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'time'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | 'widget'
  | 'window'
  | 'none presentation'
}

export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  accessKey?: string
  class?: string
  /**
   * Making document regions editable
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable
   */
  contentEditable?: boolean | '' | 'true' | 'false' | 'plaintext-only'
  /**
   * This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes
   * @deprecated
   */
  contextMenu?: string
  dir?: 'ltr' | 'rtl' | 'auto'
  /**
   * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<img draggable>` is forbidden. The correct usage is `<img draggable="true">`
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
   */
  draggable?: 'true' | 'false'
  hidden?: boolean | 'hidden' | 'until-found' | ''
  id?: string
  inert?: boolean | ''
  lang?: string
  slot?: string
  /**
   * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<input spellcheck>` is forbidden. The correct usage is `<input spellcheck="true">`
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
   */
  spellcheck?: 'true' | 'false'
  style?: string | CSSProperties
  tabIndex?: number | `${number}`
  title?: string
  translate?: 'yes' | 'no'
  // Unknown
  radioGroup?: string // <command>, <menuitem>
  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  property?: string
  resource?: string
  typeof?: string
  vocab?: string
  autocapitalize?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
  /**
   * Non-standard attribute. Safari only. A string which indicates whether to activate automatic correction while the user is editing this field
   */
  autocorrect?: 'on' | 'off'
  autosave?: string
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
  popover?: boolean | 'auto' | 'manual' | ''
  /**
   * A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the `::part` pseudo-element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part
   */
  part?: string
  /**
   * Allows you to select and style elements existing in nested shadow trees, by exporting their `part` names.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts
   */
  exportparts?: string
  /**
   * Used to indicate that an element is flagged for tracking by `PerformanceObserver` objects using the "element" type.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/elementtiming
   */
  elementTiming?: string
  /**
   * This is an experimental technology
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy
   */
  virtualkeyboardpolicy?: 'auto' | 'manual'
}

export interface SVGAttributes<T extends EventTarget> extends HTMLAttributes<T> {
  _?: typeof svgNs
  xmlns?: typeof svgNs
  href?: string
  cx?: number | string
  cy?: number | string
  fx?: number | string
  fy?: number | string
  fr?: string
  d?: string
  /**
   * The `accent-height` attribute defines the distance from the origin to the top of accent characters, measured by a distance within the font coordinate system
   * @deprecated
   */
  'accent-height'?: number | `${number}`
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?: Property.AlignmentBaseline
  allowReorder?: 'no' | 'yes'
  /** @deprecated */
  alphabetic?: number | string
  amplitude?: number | `${number}`
  /** @deprecated */
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  /**
   * The `ascent` attribute defines the maximum unaccented height of the font within the font coordinate system
   * @deprecated
   */
  ascent?: number | `${number}`
  attributeName?: string
  /** @deprecated */
  attributeType?: 'CSS' | 'XML' | 'auto'
  autoReverse?: number | string
  azimuth?: number | `${number}`
  baseFrequency?: number | string
  'baseline-shift'?: Property.BaselineShift
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
  clip?: Property.Clip
  'clip-path'?: Property.ClipPath
  clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'clip-rule'?: Property.ClipRule
  'color-interpolation'?: Property.ColorInterpolation
  'color-interpolation-filters'?: Property.ColorInterpolation
  /** @deprecated */
  'color-profile'?: Property.Color
  /** @deprecated */
  'color-rendering'?: Property.ColorRendering
  /** @deprecated */
  contentScriptType?: string
  /** @deprecated */
  contentStyleType?: string
  cursor?: Property.Cursor
  decelerate?: number | string
  descent?: number | string
  diffuseConstant?: number | `${number}`
  direction?: Property.Direction
  display?: Property.Display
  divisor?: number | string
  'dominant-baseline'?: Property.DominantBaseline
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
  fill?: Property.Fill
  'fill-opacity'?: Property.FillOpacity
  'fill-rule'?: Property.FillRule
  filter?: Property.Filter
  /** @deprecated */
  filterRes?: number | string
  filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'flood-color'?: Property.FloodColor
  'flood-opacity'?: Property.FillOpacity
  focusable?: 'true' | 'false' | 'auto'
  focusHighlight?: 'auto' | 'none'
  'font-family'?: Property.FontFamily
  'font-size'?: Property.FontSize
  'font-size-adjust'?: Property.FontSizeAdjust
  'font-stretch'?: Property.FontStretch
  'font-style'?: Property.FontStyle
  'font-variant'?: Property.FontVariant
  'font-weight'?: Property.FontWeight
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
  'glyph-orientation-vertical'?: Property.GlyphOrientationVertical
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
  'image-rendering'?: Property.ImageRendering
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
  'letter-spacing'?: Property.LetterSpacing
  'lighting-color'?: Property.LightingColor
  limitingConeAngle?: number | `${number}`
  marker?: Property.Marker
  'marker-start'?: Property.MarkerStart
  'marker-end'?: Property.MarkerEnd
  'marker-mid'?: Property.MarkerMid
  markerHeight?: number | string
  markerUnits?: 'userSpaceOnUse' | 'strokeWidth'
  markerWidth?: number | string
  local?: string
  mask?: Property.Mask
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
  offset?: Property.Offset
  opacity?: Property.Opacity
  operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic' | 'erode' | 'dilate'
  order?: Property.Order
  orient?: 'auto' | 'auto-start-reverse' | number | (string & {})
  /** @deprecated */
  orientation?: 'h' | 'v'
  origin?: 'default' | (string & {})
  overflow?: Property.Overflow
  'overline-position'?: number | `${number}`
  'overline-thickness'?: number | `${number}`
  'paint-order'?: Property.PaintOrder
  /** @deprecated */
  'panose-1'?: string
  path?: string
  pathLength?: number | `${number}`
  patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  patternTransform?: string
  patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  'pointer-events'?: Property.PointerEvents
  points?: string
  pointsAtX?: number | `${number}`
  pointsAtY?: number | `${number}`
  pointsAtZ?: number | `${number}`
  preserveAlpha?: 'true' | 'false'
  preserveAspectRatio?: string
  primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
  r?: number | string
  radius?: number | string
  refX?: 'left' | 'center' | 'right' | number | (string & {})
  refY?: 'top' | 'center' | 'bottom' | number | (string & {})
  renderingIntent?: number | string
  repeatCount?: 'indefinite' | number | `${number}`
  repeatDur?: 'indefinite' | number | (string & {})
  requiredExtensions?: number | string
  /** @deprecated */
  requiredFeatures?: string
  restart?: 'always' | 'whenNotActive' | 'never'
  result?: string
  rotate?: number | `${number}` | 'auto' | 'auto-reverse'
  rx?: 'auto' | number | (string & {})
  ry?: 'auto' | number | (string & {})
  scale?: number | `${number}`
  seed?: number | `${number}`
  'shape-rendering'?: Property.ShapeRendering
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
  'stop-color'?: Property.StopColor
  'stop-opacity'?: Property.StopOpacity
  'strikethrough-position'?: number | `${number}`
  'strikethrough-thickness'?: number | `${number}`
  /** @deprecated */
  string?: number | string
  stroke?: Property.Stroke
  'stroke-dasharray'?: Property.StrokeDasharray
  'stroke-dashoffset'?: Property.StrokeDashoffset
  'stroke-linecap'?: Property.StrokeLinecap
  'stroke-linejoin'?: Property.StrokeLinejoin
  'stroke-miterlimit'?: Property.StrokeMiterlimit
  'stroke-opacity'?: Property.StrokeOpacity
  'stroke-width'?: Property.StrokeWidth
  surfaceScale?: number | `${number}`
  systemLanguage?: string
  tabindex?: number | `${number}`
  tableValues?: number | string
  target?: '_self' | '_parent' | '_top' | '_blank' | (string & {})
  targetX?: number | string
  targetY?: number | string
  'text-anchor'?: Property.TextAnchor
  'text-decoration'?: Property.TextDecoration
  'text-rendering'?: Property.TextRendering
  textLength?: number | string
  to?: string
  transform?: Property.Transform
  'transform-origin'?: Property.TransformOrigin
  type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY' | (string & {})
  /** @deprecated */
  u1?: string
  /** @deprecated */
  u2?: string
  'underline-position'?: number | `${number}`
  'underline-thickness'?: number | `${number}`
  unicode?: string
  'unicode-bidi'?: Property.UnicodeBidi
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
  'vector-effect'?: Property.VectorEffect
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
  visibility?: Property.Visibility
  /** @deprecated */
  widths?: number | `${number}`
  'word-spacing'?: Property.WordSpacing
  'writing-mode'?: Property.WritingMode
  x1?: number | string
  x2?: number | string
  x?: number | string
  /** @deprecated */
  'x-height'?: number | `${number}`
  xChannelSelector?: 'R' | 'G' | 'B' | 'A'
  yChannelSelector?: 'R' | 'G' | 'B' | 'A'
  /** @deprecated */
  'xmlns:xlink'?: 'http://www.w3.org/1999/xlink',
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
  y1?: number | string
  y2?: number | string
  y?: number | string
  z?: number | `${number}`
  /** @deprecated */
  zoomAndPan?: 'disable' | 'magnify'
  height?: number | string
  width?: number | string
}

export interface MathMLAttributes extends HTMLAttributes<MathMLElement> {
  _?: typeof mathmlNs
  xmlns?: typeof mathmlNs
  dir?: 'ltr' | 'rtl'
  displaystyle?: 'true' | 'false'
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/href
   * @deprecated This feature is non-standard
   */
  href?: string
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathbackground
   * @deprecated
   */
  mathbackground?: Property.BackgroundColor
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathcolor
   * @deprecated
   */
  mathcolor?: Property.Color
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathsize
   * @deprecated
   */
  mathsize?: number | string
  nonce?: string
  scriptlevel?: number | string
}

declare global {
  namespace JSX {
    type Element = globalThis.Element | DocumentFragment
    interface Attributes { }
    interface ElementChildrenAttribute { children: {} }

    interface FC<P = {}, T extends Element = Element> {
      (props: PropsWithChildren<P>): T | null
    }

    type Ref<T> = RefCallback<T> | RefObject<T>

    type AnimationEventListener<T = globalThis.Element> = EventHandlerOrObject<AnimationEvent, T>
    type ClipboardEventListener<T = globalThis.Element> = EventHandlerOrObject<ClipboardEvent, T>
    type CompositionEventListener<T = globalThis.Element> = EventHandlerOrObject<CompositionEvent, T>
    type DragEventListener<T = globalThis.Element> = EventHandlerOrObject<DragEvent, T>
    type EventListener<T = globalThis.Element> = EventHandlerOrObject<Event, T>
    type FocusEventListener<T = globalThis.Element> = EventHandlerOrObject<FocusEvent, T>
    type FormDataEventListener<T = globalThis.Element> = EventHandlerOrObject<FormDataEvent, T>
    type InputEventListener<T = globalThis.Element> = EventHandlerOrObject<InputEvent, T>
    type KeyboardEventListener<T = globalThis.Element> = EventHandlerOrObject<KeyboardEvent, T>
    type MediaEncryptedEventListener<T = globalThis.Element> = EventHandlerOrObject<MediaEncryptedEvent, T>
    type MouseEventListener<T = globalThis.Element> = EventHandlerOrObject<MouseEvent, T>
    type PictureInPictureEventListener<T = globalThis.Element> = EventHandlerOrObject<PictureInPictureEvent, T>
    type PointerEventListener<T = globalThis.Element> = EventHandlerOrObject<PointerEvent, T>
    type SubmitEventListener<T = globalThis.Element> = EventHandlerOrObject<SubmitEvent, T>
    type ToggleEventListener<T = globalThis.Element> = EventHandlerOrObject<ToggleEvent, T>
    type TouchEventListener<T = globalThis.Element> = EventHandlerOrObject<TouchEvent, T>
    type TransitionEventListener<T = globalThis.Element> = EventHandlerOrObject<TransitionEvent, T>
    type UIEventListener<T = globalThis.Element> = EventHandlerOrObject<UIEvent, T>
    type WebGLContextEventListener<T = globalThis.Element> = EventHandlerOrObject<WebGLContextEvent, T>
    type WheelEventListener<T = globalThis.Element> = EventHandlerOrObject<WheelEvent, T>

    interface HTMLAnchorElementAttributes extends HTMLAttributes<HTMLAnchorElement> {
      /**
       * Instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. _Default value: none; Animatable: no_
       */
      download?: string
      href?: string
      /**
       * Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global `lang` attribute
       */
      hreflang?: string
      /**
       * A space-separated list of URLs. When the link is followed, the browser will send `POST` requests with the body `PING` to the URLs. Typically for tracking
       */
      ping?: string
      /**
       * The relationship of the linked URL as space-separated link types
       */
      rel?: string
      /**
       * Where to display the linked URL. _Default value: `_self`; Animatable: yes_
       */
      target?: '_blank' | '_self' | '_parent' | '_top' | (string & {})
      /**
       * Hints at the linked URL's format with a MIME type. No built-in functionality
       */
      type?: string
      referrerPolicy?: ReferrerPolicy
      /**
       * SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
       * @deprecated
       */
      'xlink:href'?: string
    }

    interface HTMLAudioElementAttributes extends HTMLMediaAttributes<HTMLAudioElement> { }

    interface HTMLAreaElementAttributes extends HTMLAttributes<HTMLAreaElement> {
      /** @deprecated */
      accessKey?: string
      alt?: string
      coords?: string
      /**
       * This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource. See `<a>` for a full description of the `download` attribute
       */
      download?: string
      /**
       * The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the `<area>` element does not represent a hyperlink
       */
      href?: string
      /**
       * Contains a space-separated list of URLs to which, when the hyperlink is followed, `POST` requests with the body PING will be sent by the browser (in the background). Typically used for tracking
       */
      ping?: string
      /** @deprecated */
      hreflang?: string
      media?: string
      /**
       * A string indicating which referrer to use when fetching the resource
       */
      referrerPolicy?: ReferrerPolicy
      rel?: string
      shape?: 'rect' | 'circle' | 'poly' | 'default' | (string & {})
      /**
       * A keyword or author-defined name of the browsing context to display the linked resource
       */
      target?: '_self' | '_parent' | '_top' | '_blank' | (string & {})
      /** @deprecated */
      nohref?: string
      /** @deprecated */
      tabIndex?: number | `${number}`
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLBaseElementAttributes extends HTMLAttributes<HTMLBaseElement> {
      href?: string
      target?: '_self' | '_parent' | '_top' | '_blank' | (string & {})
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLBRElementAttributes extends HTMLAttributes<HTMLBRElement> {
      /** @deprecated */
      clear?: string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLButtonElementAttributes extends HTMLAttributes<HTMLButtonElement> {
      autofocus?: boolean | ''
      disabled?: boolean | ''
      form?: string
      /**
       * The URL that processes the information submitted by the button. Overrides the `action` attribute of the button's form owner. Does nothing if there is no form owner
       */
      formAction?: string
      /**
       * Form data set encoding type to use for form submission. Attribute is only used for buttons with `type="submit"`
       */
      formEncType?: string
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: 'post' | 'get' | 'dialog' | (string & {})
      formNoValidate?: boolean | ''
      /**
       * If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form
       */
      formTarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
      name?: string
      type?: HTMLButtonElement['type']
      value?: number | string
      popovertarget?: string
      popovertargetaction?: 'hide' | 'show' | 'toggle'
    }

    interface HTMLCanvasElementAttributes extends HTMLAttributes<HTMLCanvasElement> {
      /**
       * The height of the coordinate space in CSS pixels. Defaults to 150
       */
      height?: number | string
      /**
       * The width of the coordinate space in CSS pixels. Defaults to 300
       */
      width?: number | string
      /**
       * Lets the canvas know whether translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized `canvas.getContext('2d', { alpha: false })` instead
       * @deprecated
       */
      'moz-opaque'?: boolean | ''
      'on:webGLContextLost'?: WebGLContextEventListener<HTMLCanvasElement>
      'on:webGLContextRestored'?: WebGLContextEventListener<HTMLCanvasElement>
      'on:webGLContextCreationError'?: WebGLContextEventListener<HTMLCanvasElement>
    }

    interface HTMLTableColElementAttributes extends HTMLAttributes<HTMLTableColElement> {
      span?: number | `${number}`
      width?: number | string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLDataElementAttributes extends HTMLAttributes<HTMLDataElement> {
      value?: number | string
    }

    interface HTMLDetailsElementAttributes extends HTMLAttributes<HTMLDetailsElement> {
      open?: boolean | ''
    }

    interface HTMLModElementAttributes extends HTMLAttributes<HTMLModElement> {
      cite?: string
      dateTime?: string
    }

    interface HTMLDialogElementAttributes extends HTMLAttributes<HTMLDialogElement> {
      open?: boolean | ''
      /**
       * Do not add the `tabindex` property to the `<dialog>` element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
       * @deprecated
       */
      tabIndex?: number | `${number}`
      onclose?: GenericEventHandler<HTMLDialogElement>
      oncancel?: GenericEventHandler<HTMLDialogElement>
      'on:close'?: EventListener<HTMLDialogElement>
      'on:cancel'?: EventListener<HTMLDialogElement>
    }

    interface HTMLEmbedElementAttributes extends HTMLAttributes<HTMLEmbedElement> {
      height?: number | string
      src?: string
      type?: string
      width?: number | string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLFieldSetElementAttributes extends HTMLAttributes<HTMLFieldSetElement> {
      disabled?: boolean | ''
      form?: string
      name?: string
    }

    export interface HTMLFormElementAttributes extends HTMLAttributes<HTMLFormElement> {
      /**
       * Comma-separated content types the server accepts
       * @deprecated
       */
      accept?: string
      'accept-charset'?: string
      action?: string
      autocomplete?: AutoFillBase
      enctype?: string
      /**
       * The HTTP method to submit the form with. The only allowed methods/values are (case insensitive)
       */
      method?: 'post' | 'get' | 'dialog' | (string & {})
      name?: string
      /**
       * Controls the annotations and what kinds of links the form creates. The rel value is a space-separated list of these enumerated values
       */
      rel?:
      | 'external'
      | 'nofollow'
      | 'opener'
      | 'noopener'
      | 'noreferrer'
      | 'help'
      | 'prev'
      | 'next'
      | 'search'
      | 'license'
      | (string & {})
      noValidate?: boolean | ''
      target?: '_self' | '_parent' | '_top' | '_blank' | (string & {})
      onformdata?: FormDataEventHandler<HTMLFormElement>
      'on:formData'?: FormDataEventListener<HTMLFormElement>
    }

    interface HTMLHRElementAttributes extends HTMLAttributes<HTMLHRElement> {
      /**
       * Sets or retrieves how the object is aligned with adjacent text.
       * @deprecated
       */
      align?: string;
      /** @deprecated */
      color?: Property.Color;
      /**
       * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
       * @deprecated
       */
      noShade?: boolean | '';
      /** @deprecated */
      size?: string;
      /**
       * Sets or retrieves the width of the object.
       * @deprecated
       */
      width?: string;
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
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
      allowFullScreen?: boolean | ''
      /**
       * This attribute is considered a legacy attribute and redefined as `allow="payment"`
       * @deprecated
       */
      allowPaymentRequest?: boolean | ''
      /** @deprecated  */
      allowTransparency?: boolean | ''
      /**
       * A Content Security Policy enforced for the embedded resource
       */
      csp?: string
      /** @deprecated */
      frameBorder?: number | string
      /**
       * The height of the frame in CSS pixels. Default is 150
       */
      height?: number | string
      loading?: 'eager' | 'lazy'
      /** @deprecated */
      marginHeight?: number | `${number}`
      /** @deprecated */
      marginWidth?: number | `${number}`
      name?: string
      referrerPolicy?: ReferrerPolicy
      /**
       * Controls the restrictions applied to the content embedded in the `<iframe>`. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens
       */
      sandbox?:
      | ''
      | 'allow-downloads'
      | 'allow-downloads-without-user-activation'
      | 'allow-forms'
      | 'allow-modals'
      | 'allow-orientation-lock'
      | 'allow-pointer-lock'
      | 'allow-popups'
      | 'allow-popups-to-escape-sandbox'
      | 'allow-presentation'
      | 'allow-same-origin'
      | 'allow-scripts'
      | 'allow-storage-access-by-user-activation'
      | 'allow-top-navigation'
      | 'allow-top-navigation-by-user-activation'
      | 'allow-top-navigation-to-custom-protocols'
      | (string & {})
      /**
       * Indicates when the browser should provide a scrollbar for the frame
       * @deprecated
       */
      scrolling?: 'auto' | 'yes' | 'no'
      /** @deprecated */
      seamless?: boolean | ''
      src?: string
      srcdoc?: string
      /**
       * The width of the frame in CSS pixels. Default is 300
       */
      width?: number | string
    }

    interface HTMLImageElementAttributes extends HTMLAttributes<HTMLImageElement> {
      alt?: string
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials'
      decoding?: HTMLImageElement['decoding']
      height?: number | string
      /**
       * This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server
       */
      ismap?: boolean | ''
      loading?: HTMLImageElement['loading']
      referrerPolicy?: ReferrerPolicy
      sizes?: string
      src?: string
      srcset?: string
      useMap?: string
      width?: number | string
      fetchPriority?: 'high' | 'low' | 'auto'
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLInputElementAttributes extends HTMLAttributes<HTMLInputElement> {
      accept?: string
      alt?: string
      autocomplete?: AutoFill
      autofocus?: boolean | ''
      /**
       * The capture attribute is supported on the `file` input type.
       */
      capture?: boolean | 'user' | 'environment' | ''
      checked?: boolean | ''
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials'
      disabled?: boolean | ''
      dirName?: 'rtl' | 'ltr'
      enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
      form?: string
      /**
       * URL to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formAction?: string
      /**
       * Form data set encoding type to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formEncType?: string
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: 'post' | 'get' | 'dialog' | (string & {})
      formNoValidate?: boolean | ''
      formTarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
      height?: number | string
      list?: string
      max?: number | string
      maxLength?: number | `${number}`
      min?: number | string
      minLength?: number | `${number}`
      multiple?: boolean | ''
      name?: string
      pattern?: string
      placeholder?: string
      readOnly?: boolean | ''
      required?: boolean | ''
      size?: number | `${number}`
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
      | 'week'
      value?: number | string
      width?: number | string
      popovertarget?: string
      popovertargetaction?: 'hide' | 'show' | 'toggle'
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLLabelElementAttributes extends HTMLAttributes<HTMLLabelElement> {
      for?: string
    }

    interface HTMLLIElementAttributes extends HTMLAttributes<HTMLLIElement> {
      value?: number | `${number}`
    }

    interface HTMLLinkElementAttributes extends HTMLAttributes<HTMLLinkElement> {
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | (string & {})
      title?: string
      /**
       * This attribute is required when `rel="preload"` has been set on the `<link>` element, optional when `rel="modulepreload"` has been set, and otherwise should not be used. It specifies the type of content being loaded by the <link>, which is necessary for request matching, application of correct content security policy, and setting of correct Accept request header.
       */
      as?:
      | 'audio'
      | 'document'
      | 'embed'
      | 'fetch'
      | 'font'
      | 'image'
      | 'object'
      | 'script'
      | 'style'
      | 'track'
      | 'video'
      | 'worker'
      | (string & {})
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials'
      disabled?: boolean | ''
      href?: string
      hreflang?: string
      /**
       * For `rel="preload"` and `as="image"` only, the `imagesizes` attribute is a sizes attribute that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes
       */
      imagesizes?: string
      /**
       * For `rel="preload"` and `as="image"` only, the imagesrcset attribute is a sourceset attribute that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes
       */
      imagesrcset?: string
      integrity?: string
      media?: 'all' | 'print' | (string & {})
      referrerPolicy?: ReferrerPolicy
      /**
       * Defines the relationship between a linked resource and the current document.
       */
      rel?:
      | 'alternate'
      | 'author'
      | 'apple-touch-icon' // Non-standard values
      | 'canonical'
      | 'dns-prefetch'
      | 'help'
      | 'icon'
      | 'license'
      | 'manifest'
      | 'me'
      | 'modulepreload'
      | 'next'
      | 'pingback'
      | 'preconnect'
      | 'prefetch'
      | 'preload'
      | 'prerender'
      | 'prev'
      | 'privacy-policy'
      | 'search'
      | 'stylesheet'
      | 'terms-of-service'
      | (string & {})
      /** @deprecated */
      rev?: string
      sizes?: string
      type?: string
      /** @deprecated */
      charset?: string
      fetchPriority?: 'high' | 'low' | 'auto'
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLMapElementAttributes extends HTMLAttributes<HTMLMapElement> {
      name?: string
    }

    interface HTMLMenuElementAttributes extends HTMLAttributes<HTMLMenuElement> {
      /** @deprecated */
      type?: string
    }

    interface HTMLMediaAttributes<T extends HTMLMediaElement> extends HTMLAttributes<T> {
      autoplay?: boolean | ''
      controls?: boolean | ''
      /**
       * A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.)
       */
      disableRemotePlayback?: boolean | ''
      /**
       * Offers a way to control the native controls elements/buttons that are being shown by the user agent in order to be able to remove some features that do not make sense or are not part of the expected user experience or only allowlist a limited amount of features
       */
      controlsList?: `${OptionalPrefixToken<ControlsList>}${OptionalPrefixToken<ControlsList>}${ControlsList}`
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials'
      loop?: boolean | ''
      mediaGroup?: string
      preload?: HTMLMediaElement['preload']
      src?: string
      onencrypted?: MediaEncryptedEventHandler<T>
      onwaitingforkey?: GenericEventHandler<T>
      'on:encrypted'?: MediaEncryptedEventListener<T>
      'on:waitingForKey'?: EventListener<T>
    }

    interface HTMLMetaElementAttributes extends HTMLAttributes<HTMLMetaElement> {
      charset?: string
      content?: string
      'http-equiv'?: string
      name?: string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLMeterElementAttributes extends HTMLAttributes<HTMLMeterElement> {
      form?: string
      high?: number | `${number}`
      low?: number | `${number}`
      max?: number | `${number}`
      min?: number | `${number}`
      optimum?: number | `${number}`
      value?: number | `${number}`
    }

    interface HTMLQuoteElementAttributes extends HTMLAttributes<HTMLQuoteElement> {
      cite?: string
    }

    interface HTMLObjectElementAttributes extends HTMLAttributes<HTMLObjectElement> {
      /**
       * A space-separated list of URIs for archives of resources for the object
       * @deprecated
       */
      archive?: string
      /**
       * The width of a border around the control, in pixels
       * @deprecated
       */
      border?: string
      /**
       * The URI of the object's implementation. It can be used together with, or in place of, the `data` attribute
       * @deprecated
       */
      classid?: string
      /**
       * The base path used to resolve relative URIs specified by `classid`, `data`, or `archive`. If not specified, the default is the base URI of the current document
       * @deprecated
       */
      codebase?: string
      /**
       * The content type of the data specified by `classid`
       * @deprecated
       */
      codetype?: string
      /**
       * The address of the resource as a valid URL. At least one of `data` and `type` must be defined
       */
      data?: string
      /**
       * The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. Repeat the `<object>` element completely each time the resource is reused
       * @deprecated
       */
      declare?: boolean
      /**
       * The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a `<form>` element in the same document
       */
      form?: string
      /**
       * The height of the displayed resource, in CSS pixels. — (Absolute values only. NO percentages)
       */
      height?: number | string
      /**
       * The name of valid browsing context (HTML5), or the name of the control (HTML 4)
       */
      name?: string
      /**
       * A message that the browser can show while loading the object's implementation and data
       * @deprecated
       */
      standby?: string
      /**
       * The content type of the resource specified by `data`. At least one of `data` and `type` must be defined
       */
      type?: string
      /**
       * A hash-name reference to a `<map>` element; that is a '#' followed by the value of a `name` of a map element
       */
      useMap?: string
      /**
       * The width of the display resource, in CSS pixels. — (Absolute values only. NO percentages)
       */
      width?: number | string
    }

    interface HTMLOListElementAttributes extends HTMLAttributes<HTMLOListElement> {
      reversed?: boolean | ''
      start?: number | `${number}`
      type?: '1' | 'a' | 'A' | 'i' | 'I'
    }

    interface HTMLOptGroupElementAttributes extends HTMLAttributes<HTMLOptGroupElement> {
      disabled?: boolean | ''
      label?: string
    }

    interface HTMLOptionElementAttributes extends HTMLAttributes<HTMLOptionElement> {
      disabled?: boolean | ''
      label?: string
      selected?: boolean | ''
      value?: number | string
    }

    interface HTMLOutputElementAttributes extends HTMLAttributes<HTMLOutputElement> {
      form?: string
      for?: string
      name?: string
      value?: number | string
    }

    interface HTMLParamElementAttributes extends HTMLAttributes<HTMLParamElement> {
      /** @deprecated */
      name?: string
      /** @deprecated */
      value?: number | string
      /** @deprecated */
      valuetype?: 'data' | 'ref' | 'object'
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLProgressElementAttributes extends HTMLAttributes<HTMLProgressElement> {
      max?: number | `${number}`
      value?: number | `${number}`
    }

    interface HTMLScriptElementAttributes extends HTMLAttributes<HTMLScriptElement> {
      async?: boolean | ''
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | (string & {})
      /** @deprecated */
      charset?: string
      crossOrigin?: boolean | '' | 'anonymous' | 'use-credentials'
      defer?: boolean | ''
      integrity?: string
      noModule?: boolean | ''
      nonce?: string
      referrerPolicy?: ReferrerPolicy
      src?: string
      /**
       * This attribute indicates the type of script represented
       */
      type?: 'importmap' | 'module' | 'speculationrules' | (string & {})
      fetchPriority?: 'high' | 'low' | 'auto'
    }

    interface HTMLSelectElementAttributes extends HTMLAttributes<HTMLSelectElement> {
      autocomplete?: AutoFill
      autofocus?: boolean | ''
      disabled?: boolean | ''
      form?: string
      multiple?: boolean | ''
      name?: string
      required?: boolean | ''
      size?: number | `${number}`
      value?: number | string
    }

    interface HTMLSlotElementAttributes extends HTMLAttributes<HTMLSlotElement> {
      name?: string
    }

    interface HTMLSourceElementAttributes extends HTMLAttributes<HTMLSourceElement> {
      /**
       * Specifies the media query for the resource's intended media
       */
      media?: string
      /**
       * Specifies a list of source sizes that describe the final rendered width of the image. Allowed if the parent of `<source>` is `<picture>`. Not allowed if the parent is `<audio> `or `<video>`
       */
      sizes?: string
      /**
       * Specifies the URL of the media resource. Required if the parent of `<source>` is `<audio>` or `<video>`. Not allowed if the parent is `<picture>`
       */
      src?: string
      /**
       * Specifies a comma-separated list of one or more image URLs and their descriptors. Required if the parent of `<source>` is `<picture>`. Not allowed if the parent is `<audio>` or `<video>`
       */
      srcset?: string
      /**
       * Specifies the MIME media type of the image or other media type, optionally including a codecs parameter
       */
      type?: string
      /**
       * Specifies the intrinsic height of the image in pixels. Allowed if the parent of `<source>` is a `<picture>`. Not allowed if the parent is `<audio>` or `<video>`. The height value must be an integer without any units
       */
      height?: number | `${number}`
      /**
       * Specifies the intrinsic width of the image in pixels. Allowed if the parent of `<source>` is a `<picture>`. Not allowed if the parent is `<audio> `or `<video>.` The width value must be an integer without any units
       */
      width?: number | `${number}`
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLStyleElementAttributes extends HTMLAttributes<HTMLStyleElement> {
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | (string & {})
      media?: string
      nonce?: string
      scoped?: boolean | ''
      /**
       * This attribute should not be provided: if it is, the only permitted values are the empty string or a case-insensitive match for `text/css`
       * @deprecated
       */
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
      bgColor?: Property.Color
      /**
       * To achieve a similar effect, use the CSS `border` property.
       * @deprecated
       */
      border?: string
      /**
       * To achieve a similar effect, apply the `border-collapse` CSS property to the `<table>` element, with its value set to collapse, and the `padding` property to the `<td>` elements.
       * @deprecated
       */
      cellPadding?: number | string
      /**
       * To achieve a similar effect, apply the `border-spacing` CSS property to the `<table>` element. `border-spacing` does not have any effect if `border-collapse` is set to `collapse`.
       * @deprecated
       */
      cellSpacing?: number | string
      /**
       * To achieve a similar effect, use the CSS the `border-style` and `border-width` properties.
       * @deprecated
       */
      frame?: string
      /**
       * Use the `<caption>` element instead
       * @deprecated
       */
      summary?: string
      /**
       * To achieve a similar effect, use the CSS `width` property instead.
       * @deprecated
       */
      width?: number | string
      /**
       * To achieve a similar effect, apply the CSS `border` property to the appropriate `<thead>`, `<tbody>`, `<tfoot>`, `<col>`, or `<colgroup>` elements.
       * @deprecated
       */
      rules?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
    }

    interface HTMLTemplateElementAttributes extends HTMLAttributes<HTMLTemplateElement> {
      /**
       * Creates a shadow root for the parent element. It is a declarative version of the `Element.attachShadow()` method and accepts the same enumerated values.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#shadowrootmode
       */
      shadowRootMode?: 'open' | 'closed'
    }

    interface HTMLTextAreaElementAttributes extends HTMLAttributes<HTMLTextAreaElement> {
      autocomplete?: AutoFill
      autofocus?: boolean | ''
      /**
       * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20
       */
      cols?: number | `${number}`
      dirName?: 'rtl' | 'ltr'
      disabled?: boolean | ''
      form?: string
      maxLength?: number | `${number}`
      minLength?: number | `${number}`
      name?: string
      placeholder?: string
      readOnly?: boolean | ''
      required?: boolean | ''
      /**
       * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2
       */
      rows?: number | `${number}`
      value?: number | string
      wrap?: 'hard' | 'soft' | 'off'
    }

    interface HTMLTableDataCellElementAttributes extends HTMLAttributes<HTMLTableCellElement> {
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: number | `${number}`
      headers?: string
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
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
      axis?: string
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property
       * @deprecated
       */
      char?: string
      /** @deprecated */
      charoff?: string
      /**
       * Only use this attribute with the `<th>` element to define the row or column for which it is a header
       * @deprecated
       */
      scope?: string
      /**
       * To achieve a similar effect, use the CSS `height` property instead
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
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: number | `${number}`
      headers?: string
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
      rowSpan?: number | `${number}`
      /**
       * This enumerated attribute defines the cells that the header (defined in the <th>) element relates to
       */
      scope?: 'row' | 'col' | 'rowgroup' | 'colgroup'
      /**
       * To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS `text-align` property to the element, the `char` value, give the `text-align` property the same value you would use for the `char`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right' | 'justify' | 'char'
      /** @deprecated */
      axis?: string
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property.
       * @deprecated
       */
      char?: string
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
      /**
       * Indicates the time and/or date in the machine-readable format, allowing for better search engine results or custom features such as reminders
       */
      dateTime?: string
    }

    interface HTMLTrackElementAttributes extends HTMLAttributes<HTMLTrackElement> {
      default?: boolean | ''
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
      label?: string
      src?: string
      srclang?: string
      oncuechange?: GenericEventHandler<HTMLTrackElement>
      'on:cueChange'?: EventListener<HTMLTrackElement>
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLVideoElementAttributes extends HTMLMediaAttributes<HTMLVideoElement> {
      height?: number | string
      playsInline?: boolean | ''
      poster?: string
      width?: number | string
      disablePictureInPicture?: boolean | ''
      onenterpictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>
      onleavepictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>
      onresize?: PictureInPictureEventHandler<HTMLVideoElement>
      'on:enterPictureInPicture'?: PictureInPictureEventListener<HTMLVideoElement>
      'on:leavePictureInPicture'?: PictureInPictureEventListener<HTMLVideoElement>
      'on:resize'?: PictureInPictureEventListener<HTMLVideoElement>
    }

    interface HTMLWBRElementAttributes extends HTMLAttributes<HTMLElement> {
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    interface HTMLWebViewElementAttributes extends HTMLAttributes<HTMLWebViewElement> {
      allowFullScreen?: boolean
      allowpopups?: boolean
      autofocus?: boolean | ''
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

    interface MathMLAnnotationElementAttributes extends MathMLAttributes {
      encoding?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src
       * @deprecated
       */
      src?: string
    }

    interface MathMLAnnotationXmlElementAttributes extends MathMLAttributes {
      encoding?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src
       * @deprecated
       */
      src?: string
    }

    interface MathMLMActionElemenAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype
       * @deprecated
       */
      actiontype?: 'statusline' | 'toggle'
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection
       * @deprecated
       */
      selection?: string
    }

    interface MathMLMathElementAttributes extends MathMLAttributes {
      display?: 'block' | 'inline'
    }

    interface MathMLMEncloseElementAttributes extends MathMLAttributes {
      notation?: string
    }

    interface MathMLMFencedElementAttributes extends MathMLAttributes {
      close?: string
      open?: string
      separators?: string
    }

    interface MathMLMFracElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign
       * @deprecated
       */
      denomalign?: 'center' | 'left' | 'right'
      linethickness?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign
       * @deprecated
       */
      numalign?: 'center' | 'left' | 'right'
    }

    interface MathMLMiElementAttributes extends MathMLAttributes {
      /**
       * The only value allowed in the current specification is normal (case insensitive)
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi#mathvariant
       */
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
    }

    interface MathMLMmultiScriptsElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#subscriptshift
       * @deprecated
       */
      subscriptshift?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#superscriptshift
       * @deprecated
       */
      superscriptshift?: string
    }

    interface MathMLMOElementAttributes extends MathMLAttributes {
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo#accent
       */
      accent?: 'true' | 'false'
      fence?: 'true' | 'false'
      largeop?: 'true' | 'false'
      lspace?: string
      maxsize?: string
      minsize?: string
      movablelimits?: 'true' | 'false'
      rspace?: string
      separator?: 'true' | 'false'
      stretchy?: 'true' | 'false'
      symmetric?: 'true' | 'false'
    }

    interface MathMLMOverElementAttributes extends MathMLAttributes {
      accent?: 'true' | 'false'
    }

    interface MathMLMPaddedElementAttributes extends MathMLAttributes {
      depth?: string
      height?: string
      lspace?: string
      voffset?: string
      width?: string
    }

    interface MathMLMSElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility
       * @deprecated
       */
      lquote?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility
       * @deprecated
       */
      rquote?: string
    }

    interface MathMLMStyleElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#background
       * @deprecated
       */
      background?: Property.BackgroundColor
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#color
       * @deprecated
       */
      color?: Property.Color
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontsize
       * @deprecated
       */
      fontsize?: Property.FontSize
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontstyle
       * @deprecated
       */
      fontstyle?: Property.FontStyle
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontweight
       * @deprecated
       */
      fontweight?: Property.FontWeight
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptminsize
       * @deprecated
       */
      scriptminsize?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptsizemultiplier
       * @deprecated
       */
      scriptsizemultiplier?: string
    }

    interface MathMLMSubElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub#subscriptshift
       * @deprecated
       */
      subscriptshift?: string
    }

    interface MathMLMSubsupElementAttributes extends MathMLAttributes {
      /**
       *  @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#subscriptshift
       *  @deprecated
       */
      subscriptshift?: string
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#superscriptshift
       * @deprecated
       */
      superscriptshift?: string
    }

    interface MathMLMSupElementAttributes extends MathMLAttributes {
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msup#superscriptshift
       * @deprecated
       */
      superscriptshift?: string
    }

    interface MathMLMTableElementAttributes extends MathMLAttributes {
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#align
       */
      align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines
       */
      columnlines?: 'dashed' | 'none' | 'solid' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnspacing
       */
      columnspacing?: string
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#frame
       */
      frame?: 'dashed' | 'none' | 'solid'
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#framespacing
       */
      framespacing?: string
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowalign
       */
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines
       */
      rowlines?: 'dashed' | 'none' | 'solid' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowspacing
       */
      rowspacing?: string
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#width
       */
      width?: string
    }

    interface MathMLMTdElementAttributes extends MathMLAttributes {
      columnspan?: number | `${number}`
      rowspan?: number | `${number}`
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign
       */
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | (string & {})
    }

    interface MathMLMTrElementAttributes extends MathMLAttributes {
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | (string & {})
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign
       */
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | (string & {})
    }

    interface MathMLMUnderElementAttributes extends MathMLAttributes {
      accentunder?: 'true' | 'false'
    }

    interface MathMLMUnderoverElementAttributes extends MathMLAttributes {
      accent?: 'true' | 'false'
      accentunder?: 'true' | 'false'
    }

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
      br: HTMLBRElementAttributes
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
      hr: HTMLHRElementAttributes
      html: HTMLHtmlElementAttributes
      i: HTMLAttributes<HTMLElement>
      iframe: HTMLIFrameElementAttributes
      img: HTMLImageElementAttributes
      input: HTMLInputElementAttributes
      ins: HTMLModElementAttributes
      kbd: HTMLAttributes<HTMLElement>
      /** @deprecated */
      keygen: HTMLAttributes<HTMLUnknownElement>
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
      search: HTMLAttributes<HTMLElement>
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
      template: HTMLTemplateElementAttributes
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
      wbr: HTMLWBRElementAttributes
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
      annotation: MathMLAnnotationElementAttributes
      'annotation-xml': MathMLAnnotationXmlElementAttributes
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction
       * @deprecated
       */
      maction: MathMLMActionElemenAttributes
      math: MathMLMathElementAttributes
      /**
       * This feature is non-standard
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/menclose
       */
      menclose: MathMLMEncloseElementAttributes
      merror: MathMLAttributes
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfenced
       * @deprecated
       */
      mfenced: MathMLMFencedElementAttributes
      mfrac: MathMLMFracElementAttributes
      mi: MathMLMiElementAttributes
      mmultiscripts: MathMLMmultiScriptsElementAttributes
      mn: MathMLAttributes
      mo: MathMLMOElementAttributes
      mover: MathMLMOverElementAttributes
      mpadded: MathMLMPaddedElementAttributes
      mphantom: MathMLAttributes
      mprescripts: MathMLAttributes
      mroot: MathMLAttributes
      mrow: MathMLAttributes
      ms: MathMLMSElementAttributes
      mspace: MathMLAttributes
      msqrt: MathMLAttributes
      mstyle: MathMLMStyleElementAttributes
      msub: MathMLMSubElementAttributes
      msubsup: MathMLMSubsupElementAttributes
      msup: MathMLMSupElementAttributes
      mtable: MathMLMTableElementAttributes
      mtd: MathMLMTdElementAttributes
      mtext: MathMLAttributes
      mtr: MathMLMTrElementAttributes
      munder: MathMLMUnderElementAttributes
      munderover: MathMLMUnderoverElementAttributes
      semantics: MathMLAttributes
    }
  }
}
