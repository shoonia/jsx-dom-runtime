/// <reference lib="dom" />
/// <reference lib="es2024" />
import type { Properties, Property } from 'csstype'

type AnyString = string & {}
type Booleanish = boolean | 'true' | 'false'
type Numeric = number | `${number}`

type OmitAttrs<A, K> = {
  [T in keyof A as T extends K ? never : T]: A[T]
}

type JSXElement =
  | Element
  | DocumentFragment
  | Text
  | Comment

type JSXChild =
  | string
  | number
  | bigint
  | false
  | null
  | undefined
  | JSXElement
  | Signal<string | number | bigint | boolean | null | undefined>
  | JSXChild[]

export interface RefObject<T> {
  readonly current: T
}

export type RefCallback<T> = (instance: T) => void

export type PropsWithChildren<P> = P & { children?: JSXChild | JSXChild[] }

interface VoidElement {
  /**
   * Void element cannot have any child nodes (i.e., nested elements or text nodes)
   * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
   * @deprecated
   */
  children?: never | void | null
}

type ExcludeKey =
  | 'children'
  | 'dataset'
  | 'style'
  | 'attributes'
  | `on${string}`
  | `prop:${string}`
  | `attr:${string}`

export declare function jsx<
  K extends keyof JSX.IntrinsicElements | AnyString,
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
  props: OmitAttrs<K extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[K] : JSX.HTMLAttributes<R>, ExcludeKey>,
  children?: JSXChild | JSXChild[]
): R

export declare const svgNs: 'http://www.w3.org/2000/svg'
export declare const mathmlNs: 'http://www.w3.org/1998/Math/MathML'

export type SignalListener<T> = (value: T) => void

export interface Signal<T> {
  get(): Readonly<T>
  set(val: T): void
  on(fn: SignalListener<T>): () => boolean

  readonly [_s: symbol]: symbol
  _a(name: string): Attr
  _t(): Text
}

export type Signalish<T> = T | Signal<T>

export declare function signal<T = string>(value?: T): Signal<T>
export declare function useRef<T = any>(current?: T): RefObject<T>
export declare function useText<T = string>(initContent?: T): readonly [
  Text,
  (content: T) => void
]

export declare function parseFromString(html: string): DocumentFragment
export declare function Template(props: { children: string }): DocumentFragment
/**
 * Renders JSX content by appending it to the container with
 * [`Node.append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append).
 * Arrays are appended recursively and in order. `null`, `undefined`, and
 * `false` values are ignored.
 *
 * Existing content in the container is preserved.
 */
export declare function render(element: JSXChild | JSXChild[], container: Element | DocumentFragment): void

/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent) */
interface CommandEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent/source) */
  readonly source: Element | null
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent/command) */
  readonly command: CommandEventType
}

/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/SnapEvent) */
interface SnapEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/SnapEvent/snapTargetBlock) */
  readonly snapTargetBlock: Element | null
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/SnapEvent/snapTargetInline) */
  readonly snapTargetInline: Element | null
}

interface CurrentTarget<T> {
  readonly currentTarget: EventTarget & T
}

export interface EventHandlerObject<E = Event, T = Element> {
  handleEvent(event: E & CurrentTarget<T>): void
}

type EventHandlerFunction<E, T> = (this: T, event: E & CurrentTarget<T>) => void
type EventHandler<E, T> = EventHandlerFunction<E, T> | EventHandlerObject<E, T>

export type AnimationEventHandler<T = Element> = EventHandlerFunction<AnimationEvent, T>
export type ClipboardEventHandler<T = Element> = EventHandlerFunction<ClipboardEvent, T>
export type CompositionEventHandler<T = Element> = EventHandlerFunction<CompositionEvent, T>
export type DragEventHandler<T = Element> = EventHandlerFunction<DragEvent, T>
export type FocusEventHandler<T = Element> = EventHandlerFunction<FocusEvent, T>
export type FormDataEventHandler<T = Element> = EventHandlerFunction<FormDataEvent, T>
export type GenericEventHandler<T = Element> = EventHandlerFunction<Event, T>
export type InputEventHandler<T = Element> = EventHandlerFunction<InputEvent, T>
export type KeyboardEventHandler<T = Element> = EventHandlerFunction<KeyboardEvent, T>
export type MediaEncryptedEventHandler<T = Element> = EventHandlerFunction<MediaEncryptedEvent, T>
export type MouseEventHandler<T = Element> = EventHandlerFunction<MouseEvent, T>
export type PictureInPictureEventHandler<T = Element> = EventHandlerFunction<PictureInPictureEvent, T>
export type PointerEventHandler<T = Element> = EventHandlerFunction<PointerEvent, T>
export type SubmitEventHandler<T = Element> = EventHandlerFunction<SubmitEvent, T>
export type ToggleEventHandler<T = Element> = EventHandlerFunction<ToggleEvent, T>
export type TouchEventHandler<T = Element> = EventHandlerFunction<TouchEvent, T>
export type TransitionEventHandler<T = Element> = EventHandlerFunction<TransitionEvent, T>
export type UIEventHandler<T = Element> = EventHandlerFunction<UIEvent, T>
export type WebGLContextEventHandler<T = Element> = EventHandlerFunction<WebGLContextEvent, T>
export type WheelEventHandler<T = Element> = EventHandlerFunction<WheelEvent, T>
export type ContentVisibilityAutoStateChangeEventHandler<T = Element> = EventHandlerFunction<ContentVisibilityAutoStateChangeEvent, T>
export type CommandEventHandler<T = Element> = EventHandlerFunction<CommandEvent, T>
export type SnapEventHandler<T = Element> = EventHandlerFunction<SnapEvent, T>

export interface CSSProperties extends Properties<number | string> {
  cssText?: string | null
  [key: `--${string}`]: number | string
}

export type ControlsList =
  | 'nodownload'
  | 'nofullscreen'
  | 'noremoteplayback'
  | 'noplaybackrate'
  | AnyString
export type Target = '_self' | '_parent' | '_top' | '_blank' | '_unfencedTop' | AnyString
export type CrossOrigin = boolean | '' | 'anonymous' | 'use-credentials'
export type FetchPriority = 'high' | 'low' | 'auto'
export type CommandEventType =
  | 'show-modal'
  | 'close'
  | 'request-close'
  | 'show-popover'
  | 'hide-popover'
  | 'toggle-popover'
  | `--${string}`
export type FormEnctype =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'
  | AnyString
export type FormMethod = 'post' | 'get' | 'dialog' | AnyString
export type DirName = 'rtl' | 'ltr'
export type AriaRole =
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
  // the Digital Publishing WAI-ARIA
  | 'doc-abstract'
  | 'doc-acknowledgments'
  | 'doc-afterword'
  | 'doc-appendix'
  | 'doc-backlink'
  | 'doc-biblioentry'
  | 'doc-bibliography'
  | 'doc-biblioref'
  | 'doc-chapter'
  | 'doc-colophon'
  | 'doc-conclusion'
  | 'doc-cover'
  | 'doc-credit'
  | 'doc-credits'
  | 'doc-dedication'
  | 'doc-endnote'
  | 'doc-endnotes'
  | 'doc-epigraph'
  | 'doc-epilogue'
  | 'doc-errata'
  | 'doc-example'
  | 'doc-footnote'
  | 'doc-foreword'
  | 'doc-glossary'
  | 'doc-glossref'
  | 'doc-index'
  | 'doc-introduction'
  | 'doc-noteref'
  | 'doc-notice'
  | 'doc-pagebreak'
  | 'doc-pagelist'
  | 'doc-part'
  | 'doc-preface'
  | 'doc-prologue'
  | 'doc-pullquote'
  | 'doc-qna'
  | 'doc-subtitle'
  | 'doc-tip'
  | 'doc-toc'

export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: Signalish<string>
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Signalish<Booleanish>
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: Signalish<'none' | 'inline' | 'list' | 'both'>
  /**
   * Defines a string value that labels the current element, which is intended to be converted into Braille.
   * @see aria-label.
   */
  'aria-braillelabel'?: Signalish<string>
  /**
   * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
   * @see aria-roledescription.
   */
  'aria-brailleroledescription'?: Signalish<string>
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Signalish<Booleanish>
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: Signalish<Booleanish | 'mixed'>
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Signalish<Numeric>
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Signalish<Numeric>
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  'aria-colindextext'?: Signalish<string>
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Signalish<Numeric>
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: Signalish<string>
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Signalish<Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'>
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: Signalish<string>
  /**
   * Defines a string value that describes or annotates the current element.
   * @see related aria-describedby.
   */
  'aria-description'?: Signalish<string>
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: Signalish<string>
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Signalish<Booleanish>
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: Signalish<'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'>
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: Signalish<string>
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Signalish<Booleanish>
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: Signalish<string>
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Signalish<Booleanish>

  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Signalish<Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'>
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Signalish<Booleanish>
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: Signalish<Booleanish | 'grammar' | 'spelling'>
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: Signalish<string>
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: Signalish<string>
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: Signalish<string>
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Signalish<Numeric>
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: Signalish<'off' | 'assertive' | 'polite'>
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Signalish<Booleanish>
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Signalish<Booleanish>
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Signalish<Booleanish>
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: Signalish<'horizontal' | 'vertical'>
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: Signalish<string>
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: Signalish<string>
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Signalish<Numeric>
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: Signalish<Booleanish | 'mixed'>
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Signalish<Booleanish>
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: Signalish<
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
  >
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Signalish<Booleanish>
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: Signalish<string>
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Signalish<Numeric>
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Signalish<Numeric>
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  'aria-rowindextext'?: Signalish<string>
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Signalish<Numeric>
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Signalish<Booleanish>
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Signalish<Numeric>
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: Signalish<'none' | 'ascending' | 'descending' | 'other'>
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Signalish<Numeric>
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Signalish<Numeric>
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Signalish<Numeric>
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: Signalish<string>
  /**
   * All the WAI-ARIA 1.2 role attribute values
   * @see https://www.w3.org/TR/wai-aria-1.2/#role_definitions
   * All the Digital Publishing WAI-ARIA 1.0 role attribute values
   * @see https://www.w3.org/TR/dpub-aria-1.0/#role_definitions
   */
  role?: Signalish<AriaRole>

  'prop:ariaActivedescendant'?: Signalish<string>
  'prop:ariaAtomic'?: Signalish<Booleanish>
  'prop:ariaAutocomplete'?: Signalish<'none' | 'inline' | 'list' | 'both'>
  'prop:ariaBraillelabel'?: Signalish<string>
  'prop:ariaBrailleroledescription'?: Signalish<string>
  'prop:ariaBusy'?: Signalish<Booleanish>
  'prop:ariaChecked'?: Signalish<Booleanish | 'mixed'>
  'prop:ariaColcount'?: Signalish<Numeric>
  'prop:ariaColindex'?: Signalish<Numeric>
  'prop:ariaColindextext'?: Signalish<string>
  'prop:ariaColspan'?: Signalish<Numeric>
  'prop:ariaControls'?: Signalish<string>
  'prop:ariaCurrent'?: Signalish<Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'>
  'prop:ariaDescribedby'?: Signalish<string>
  'prop:ariaDescription'?: Signalish<string>
  'prop:ariaDetails'?: Signalish<string>
  'prop:ariaDisabled'?: Signalish<Booleanish>
  'prop:ariaDropeffect'?: Signalish<'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'>
  'prop:ariaErrormessage'?: Signalish<string>
  'prop:ariaExpanded'?: Signalish<Booleanish>
  'prop:ariaFlowto'?: Signalish<string>
  'prop:ariaGrabbed'?: Signalish<Booleanish>
  'prop:ariaHaspopup'?: Signalish<Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'>
  'prop:ariaHidden'?: Signalish<Booleanish>
  'prop:ariaInvalid'?: Signalish<Booleanish | 'grammar' | 'spelling'>
  'prop:ariaKeyshortcuts'?: Signalish<string>
  'prop:ariaLabel'?: Signalish<string>
  'prop:ariaLabelledby'?: Signalish<string>
  'prop:ariaLevel'?: Signalish<Numeric>
  'prop:ariaLive'?: Signalish<'off' | 'assertive' | 'polite'>
  'prop:ariaModal'?: Signalish<Booleanish>
  'prop:ariaMultiline'?: Signalish<Booleanish>
  'prop:ariaMultiselectable'?: Signalish<Booleanish>
  'prop:ariaOrientation'?: Signalish<'horizontal' | 'vertical'>
  'prop:ariaOwns'?: Signalish<string>
  'prop:ariaPlaceholder'?: Signalish<string>
  'prop:ariaPosinset'?: Signalish<Numeric>
  'prop:ariaPressed'?: Signalish<Booleanish | 'mixed'>
  'prop:ariaReadonly'?: Signalish<Booleanish>
  'prop:ariaRelevant'?: Signalish<
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
  >
  'prop:ariaRequired'?: Signalish<Booleanish>
  'prop:ariaRoledescription'?: Signalish<string>
  'prop:ariaRowcount'?: Signalish<Numeric>
  'prop:ariaRowindex'?: Signalish<Numeric>
  'prop:ariaRowindextext'?: Signalish<string>
  'prop:ariaRowspan'?: Signalish<Numeric>
  'prop:ariaSelected'?: Signalish<Booleanish>
  'prop:ariaSetsize'?: Signalish<Numeric>
  'prop:ariaSort'?: Signalish<'none' | 'ascending' | 'descending' | 'other'>
  'prop:ariaValuemax'?: Signalish<Numeric>
  'prop:ariaValuemin'?: Signalish<Numeric>
  'prop:ariaValuenow'?: Signalish<Numeric>
  'prop:ariaValuetext'?: Signalish<string>
  'prop:role'?: Signalish<AriaRole>
}

type RoleKey = 'role' | 'prop:role'

interface NoRolePermited {
  /** No `role` permitted */
  role?: never
  'prop:role'?: never
}

declare global {
  namespace JSX {
    type Element = JSXElement
    interface ElementChildrenAttribute { children: {} }

    type FC<P = {}> = (props: PropsWithChildren<P>) => JSXElement | null
    type Ref<T = unknown> = RefCallback<T> | RefObject<T>

    type AnimationEventListener<T = globalThis.Element> = EventHandler<AnimationEvent, T>
    type ClipboardEventListener<T = globalThis.Element> = EventHandler<ClipboardEvent, T>
    type CompositionEventListener<T = globalThis.Element> = EventHandler<CompositionEvent, T>
    type DragEventListener<T = globalThis.Element> = EventHandler<DragEvent, T>
    type EventListener<T = globalThis.Element> = EventHandler<Event, T>
    type FocusEventListener<T = globalThis.Element> = EventHandler<FocusEvent, T>
    type FormDataEventListener<T = globalThis.Element> = EventHandler<FormDataEvent, T>
    type InputEventListener<T = globalThis.Element> = EventHandler<InputEvent, T>
    type KeyboardEventListener<T = globalThis.Element> = EventHandler<KeyboardEvent, T>
    type MediaEncryptedEventListener<T = globalThis.Element> = EventHandler<MediaEncryptedEvent, T>
    type MouseEventListener<T = globalThis.Element> = EventHandler<MouseEvent, T>
    type PictureInPictureEventListener<T = globalThis.Element> = EventHandler<PictureInPictureEvent, T>
    type PointerEventListener<T = globalThis.Element> = EventHandler<PointerEvent, T>
    type SubmitEventListener<T = globalThis.Element> = EventHandler<SubmitEvent, T>
    type ToggleEventListener<T = globalThis.Element> = EventHandler<ToggleEvent, T>
    type TouchEventListener<T = globalThis.Element> = EventHandler<TouchEvent, T>
    type TransitionEventListener<T = globalThis.Element> = EventHandler<TransitionEvent, T>
    type UIEventListener<T = globalThis.Element> = EventHandler<UIEvent, T>
    type WebGLContextEventListener<T = globalThis.Element> = EventHandler<WebGLContextEvent, T>
    type WheelEventListener<T = globalThis.Element> = EventHandler<WheelEvent, T>
    type CommandEventListener<T = globalThis.Element> = EventHandler<CommandEvent, T>
    type ContentVisibilityAutoStateChangeEventListener<T = globalThis.Element> = EventHandler<ContentVisibilityAutoStateChangeEvent, T>
    type SnapEventListener<T = globalThis.Element> = EventHandler<SnapEvent, T>

    interface Attributes extends AriaAttributes {
      accessKey?: Signalish<string>
      class?: Signalish<string>
      /**
       * Making document regions editable
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable
       */
      contentEditable?: '' | 'plaintext-only' | Booleanish
      /**
       * This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes
       * @deprecated
       */
      contextMenu?: Signalish<string>
      dir?: DirName | 'auto'
      /**
       * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<img draggable>` is forbidden. The correct usage is `<img draggable="true">`
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
       */
      draggable?: 'true' | 'false'
      enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
      hidden?: boolean | 'hidden' | 'until-found' | ''
      id?: Signalish<string>
      inert?: boolean | '' | 'inert'
      lang?: Signalish<string>
      slot?: Signalish<string>
      /**
       * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<input spellcheck>` is forbidden. The correct usage is `<input spellcheck="true">`
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
       */
      spellcheck?: 'true' | 'false'
      style?: string | CSSProperties
      dataset?: DOMStringMap
      attributes?: Attr | Attr[]
      tabIndex?: Signalish<Numeric>
      title?: Signalish<string>
      translate?: 'yes' | 'no'
      // Unknown
      radioGroup?: Signalish<string> // <command>, <menuitem>
      // RDFa Attributes
      about?: Signalish<string>
      datatype?: Signalish<string>
      inlist?: any
      property?: Signalish<string>
      resource?: Signalish<string>
      typeof?: Signalish<string>
      vocab?: Signalish<string>
      autocapitalize?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
      /**
       * Non-standard attribute. Safari only. A string which indicates whether to activate automatic correction while the user is editing this field
       */
      autocorrect?: 'on' | 'off'
      autosave?: Signalish<string>
      color?: Property.Color
      itemProp?: Signalish<string>
      itemScope?: boolean | '' | 'itemscope'
      itemType?: Signalish<string>
      itemID?: Signalish<string>
      itemRef?: Signalish<string>
      results?: Signalish<Numeric>
      security?: Signalish<string>
      unselectable?: 'on' | 'off'
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
      popover?: boolean | 'auto' | 'manual' | 'hint' | ''
      /**
       * A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the `::part` pseudo-element.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part
       */
      part?: Signalish<string>
      /**
       * Allows you to select and style elements existing in nested shadow trees, by exporting their `part` names.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts
       */
      exportparts?: Signalish<string>
      /**
       * Used to indicate that an element is flagged for tracking by `PerformanceObserver` objects using the "element" type.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/elementtiming
       */
      elementTiming?: Signalish<string>
      /**
       * This is an experimental technology
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy
       */
      virtualKeyboardPolicy?: 'auto' | 'manual'
      /**
       * In browsers that support them, writing suggestions are enabled by default. To disable them, set the writingsuggestions attribute's value to `false`. Setting the attribute's value to `true`, or omitting the value, enables writing suggestions
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/writingsuggestions
       */
      writingSuggestions?: Booleanish | ''
    }

    interface JSXDirectives<T> {
      // Attributes
      [key: `attr:${string}`]: Signalish<string | number | bigint | null | undefined>

      // Properties
      'prop:nodeValue'?: Signalish<string | null>
      'prop:classList'?: Signalish<string>
      'prop:className'?: Signalish<string>
      'prop:id'?: Signalish<string>
      'prop:innerHTML'?: Signalish<string>
      'prop:outerHTML'?: Signalish<string>
      'prop:part'?: Signalish<string>
      'prop:scrollLeft'?: Signalish<number>
      'prop:scrollTop'?: Signalish<number>
      'prop:slot'?: Signalish<string>
      'prop:accessKey'?: Signalish<string>
      'prop:autocapitalize'?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
      'prop:autocorrect'?: 'on' | 'off'
      'prop:autofocus'?: Signalish<boolean>
      'prop:contentEditable'?: 'true' | 'false' | 'plaintext-only'
      'prop:dir'?: DirName | 'auto' | ''
      'prop:draggable'?: 'true' | 'false'
      'prop:enterKeyHint'?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
      'prop:hidden'?: Signalish<boolean>
      'prop:inert'?: Signalish<boolean>
      'prop:innerText'?: Signalish<string>
      'prop:inputMode'?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
      'prop:lang'?: Signalish<string>
      'prop:outerText'?: Signalish<string>
      'prop:popover'?: 'auto' | 'manual' | 'hint' | null
      'prop:spellcheck'?: 'true' | 'false'
      'prop:tabIndex'?: Signalish<number>
      'prop:title'?: Signalish<string>
      'prop:translate'?: 'yes' | 'no'
      'prop:elementTiming'?: Signalish<string>
      'prop:virtualKeyboardPolicy'?: 'auto' | 'manual'
      'prop:writingSuggestions'?: 'true' | 'false'
      [key: `prop:${string}`]: any

      // Event Listeners
      // ClipboardEvent
      'on:copy'?: ClipboardEventListener<T>
      'on:cut'?: ClipboardEventListener<T>
      'on:paste'?: ClipboardEventListener<T>
      // CompositionEvent
      'on:compositionEnd'?: CompositionEventListener<T>
      'on:compositionStart'?: CompositionEventListener<T>
      'on:compositionUpdate'?: CompositionEventListener<T>
      // FocusEvent
      'on:focus'?: FocusEventListener<T>
      'on:blur'?: FocusEventListener<T>
      'on:focusIn'?: FocusEventListener<T>
      'on:focusOut'?: FocusEventListener<T>
      // InputEvent
      'on:beforeInput'?: InputEventListener<T>
      'on:input'?: InputEventListener<T>
      // [Form] Event
      'on:change'?: EventListener<T>
      'on:reset'?: EventListener<T>
      'on:invalid'?: EventListener<T>
      // Event
      'on:load'?: EventListener<T>
      'on:error'?: EventListener<T>
      'on:select'?: EventListener<T>
      'on:beforeMatch'?: EventListener<T>
      // SubmitEvent
      'on:submit'?: SubmitEventListener<T>
      // KeyboardEvent
      'on:keyDown'?: KeyboardEventListener<T>
      /**
      * This feature is no longer recommended.
      * Since event has been deprecated, you should use `on:beforeInput` or `on:keyDown` instead
      * @deprecated
      */
      'on:keyPress'?: KeyboardEventListener<T>
      'on:keyUp'?: KeyboardEventListener<T>
      // [Media] Event
      'on:abort'?: EventListener<T>
      'on:canPlay'?: EventListener<T>
      'on:canPlayThrough'?: EventListener<T>
      'on:durationChange'?: EventListener<T>
      'on:emptied'?: EventListener<T>
      'on:ended'?: EventListener<T>
      'on:loadedData'?: EventListener<T>
      'on:loadedMetadata'?: EventListener<T>
      'on:loadStart'?: EventListener<T>
      'on:pause'?: EventListener<T>
      'on:play'?: EventListener<T>
      'on:playing'?: EventListener<T>
      'on:progress'?: EventListener<T>
      'on:rateChange'?: EventListener<T>
      'on:seeked'?: EventListener<T>
      'on:seeking'?: EventListener<T>
      'on:stalled'?: EventListener<T>
      'on:suspend'?: EventListener<T>
      'on:timeUpdate'?: EventListener<T>
      'on:volumeChange'?: EventListener<T>
      'on:waiting'?: EventListener<T>
      // MouseEvent
      'on:auxclick'?: MouseEventListener<T>
      'on:click'?: MouseEventListener<T>
      'on:contextMenu'?: MouseEventListener<T>
      'on:dblClick'?: MouseEventListener<T>
      'on:mouseDown'?: MouseEventListener<T>
      'on:mouseEnter'?: MouseEventListener<T>
      'on:mouseLeave'?: MouseEventListener<T>
      'on:mouseMove'?: MouseEventListener<T>
      'on:mouseOut'?: MouseEventListener<T>
      'on:mouseOver'?: MouseEventListener<T>
      'on:mouseUp'?: MouseEventListener<T>
      // DragEvent
      'on:drag'?: DragEventListener<T>
      'on:dragEnd'?: DragEventListener<T>
      'on:dragEnter'?: DragEventListener<T>
      /** @deprecated */
      'on:dragExit'?: DragEventListener<T>
      'on:dragLeave'?: DragEventListener<T>
      'on:dragOver'?: DragEventListener<T>
      'on:dragStart'?: DragEventListener<T>
      'on:drop'?: DragEventListener<T>
      // TouchEvent
      'on:touchCancel'?: TouchEventListener<T>
      'on:touchEnd'?: TouchEventListener<T>
      'on:touchMove'?: TouchEventListener<T>
      'on:touchStart'?: TouchEventListener<T>
      // PointerEvent
      'on:pointerDown'?: PointerEventListener<T>
      'on:pointerMove'?: PointerEventListener<T>
      'on:pointerUp'?: PointerEventListener<T>
      'on:pointerCancel'?: PointerEventListener<T>
      'on:pointerEnter'?: PointerEventListener<T>
      'on:pointerLeave'?: PointerEventListener<T>
      'on:pointerOver'?: PointerEventListener<T>
      'on:pointerOut'?: PointerEventListener<T>
      'on:gotPointerCapture'?: PointerEventListener<T>
      'on:lostPointerCapture'?: PointerEventListener<T>
      // UIEvent
      'on:scroll'?: UIEventListener<T>
      'on:scrollEnd'?: UIEventListener<T>
      // SnapEvent
      'on:scrollSnapChange'?: SnapEventListener<T>
      'on:scrollSnapChanging'?: SnapEventListener<T>
      // WheelEvent
      'on:wheel'?: WheelEventListener<T>
      // AnimationEvent
      'on:animationStart'?: AnimationEventListener<T>
      'on:animationEnd'?: AnimationEventListener<T>
      'on:animationIteration'?: AnimationEventListener<T>
      'on:animationCancel'?: AnimationEventListener<T>
      // TransitionEvent
      'on:transitionStart'?: TransitionEventListener<T>
      'on:transitionEnd'?: TransitionEventListener<T>
      'on:transitionRun'?: TransitionEventListener<T>
      'on:transitionCancel'?: TransitionEventListener<T>
      // Fullscreen API
      'on:fullscreenChange'?: EventListener<T>
      'on:fullscreenError'?: EventListener<T>
      // ToggleEvent
      'on:beforeToggle'?: ToggleEventListener<T>
      'on:toggle'?: ToggleEventListener<T>
      // ContentVisibilityAutoStateChangeEvent
      'on:contentVisibilityAutoStateChange'?: ContentVisibilityAutoStateChangeEventListener<T>
      // CommandEvent
      'on:command'?: CommandEventListener<T>
    }

    interface HTMLAttributes<T> extends Attributes, JSXDirectives<T> {
      _?: string
      $?: Record<string, EventListener<T>>
      ref?: Ref<T> | false | null | undefined | (Ref<T> | false | null | undefined)[]
      children?: JSXChild | JSXChild[]
      // ClipboardEvent
      /** @deprecated use `on:copy` instead */
      oncopy?: ClipboardEventHandler<T>
      /** @deprecated use `on:cut` instead */
      oncut?: ClipboardEventHandler<T>
      /** @deprecated use `on:paste` instead */
      onpaste?: ClipboardEventHandler<T>
      // CompositionEvent
      /** @deprecated use `on:compositionEnd` instead */
      oncompositionend?: CompositionEventHandler<T>
      /** @deprecated use `on:compositionStart` instead */
      oncompositionstart?: CompositionEventHandler<T>
      /** @deprecated use `on:compositionUpdate` instead */
      oncompositionupdate?: CompositionEventHandler<T>
      // FocusEvent
      /** @deprecated use `on:focus` instead */
      onfocus?: FocusEventHandler<T>
      /** @deprecated use `on:blur` instead */
      onblur?: FocusEventHandler<T>
      // InputEvent
      /** @deprecated use `on:beforeInput` instead */
      onbeforeinput?: InputEventHandler<T>
      /** @deprecated use `on:input` instead */
      oninput?: InputEventHandler<T>
      // [Form] Event
      /** @deprecated use `on:change` instead */
      onchange?: GenericEventHandler<T>
      /** @deprecated use `on:reset` instead */
      onreset?: GenericEventHandler<T>
      /** @deprecated use `on:invalid` instead */
      oninvalid?: GenericEventHandler<T>
      // Event
      /** @deprecated use `on:load` instead */
      onload?: GenericEventHandler<T>
      /** @deprecated use `on:error` instead */
      onerror?: GenericEventHandler<T>
      /** @deprecated use `on:select` instead */
      onselect?: GenericEventHandler<T>
      /** @deprecated use `on:beforeMatch` instead */
      onbeforematch?: GenericEventHandler<T>
      // SubmitEvent
      /** @deprecated use `on:submit` instead */
      onsubmit?: SubmitEventHandler<T>
      // KeyboardEvent
      /** @deprecated use `on:keyDown` instead */
      onkeydown?: KeyboardEventHandler<T>
      /**
       * This feature is no longer recommended.
       * Since event has been deprecated, you should use `on:beforeInput` or `on:keyDown` instead
       * @deprecated
       */
      onkeypress?: KeyboardEventHandler<T>
      /** @deprecated use `on:keyUp` instead */
      onkeyup?: KeyboardEventHandler<T>
      // [Media] Event
      /** @deprecated use `on:abort` instead */
      onabort?: GenericEventHandler<T>
      /** @deprecated use `on:canPlay` instead */
      oncanplay?: GenericEventHandler<T>
      /** @deprecated use `on:canPlayThrough` instead */
      oncanplaythrough?: GenericEventHandler<T>
      /** @deprecated use `on:durationChange` instead */
      ondurationchange?: GenericEventHandler<T>
      /** @deprecated use `on:emptied` instead */
      onemptied?: GenericEventHandler<T>
      /** @deprecated use `on:ended` instead */
      onended?: GenericEventHandler<T>
      /** @deprecated use `on:loadedData` instead */
      onloadeddata?: GenericEventHandler<T>
      /** @deprecated use `on:loadedMetadata` instead */
      onloadedmetadata?: GenericEventHandler<T>
      /** @deprecated use `on:loadStart` instead */
      onloadstart?: GenericEventHandler<T>
      /** @deprecated use `on:pause` instead */
      onpause?: GenericEventHandler<T>
      /** @deprecated use `on:play` instead */
      onplay?: GenericEventHandler<T>
      /** @deprecated use `on:playing` instead */
      onplaying?: GenericEventHandler<T>
      /** @deprecated use `on:progress` instead */
      onprogress?: GenericEventHandler<T>
      /** @deprecated use `on:rateChange` instead */
      onratechange?: GenericEventHandler<T>
      /** @deprecated use `on:seeked` instead */
      onseeked?: GenericEventHandler<T>
      /** @deprecated use `on:seeking` instead */
      onseeking?: GenericEventHandler<T>
      /** @deprecated use `on:stalled` instead */
      onstalled?: GenericEventHandler<T>
      /** @deprecated use `on:suspend` instead */
      onsuspend?: GenericEventHandler<T>
      /** @deprecated use `on:timeUpdate` instead */
      ontimeupdate?: GenericEventHandler<T>
      /** @deprecated use `on:volumeChange` instead */
      onvolumechange?: GenericEventHandler<T>
      /** @deprecated use `on:waiting` instead */
      onwaiting?: GenericEventHandler<T>
      // MouseEvent
      /** @deprecated use `on:auxclick` instead */
      onauxclick?: MouseEventHandler<T>
      /** @deprecated use `on:click` instead */
      onclick?: MouseEventHandler<T>
      /** @deprecated use `on:contextMenu` instead */
      oncontextmenu?: MouseEventHandler<T>
      /** @deprecated use `on:dblClick` instead */
      ondblclick?: MouseEventHandler<T>
      /** @deprecated use `on:mouseDown` instead */
      onmousedown?: MouseEventHandler<T>
      /** @deprecated use `on:mouseEnter` instead */
      onmouseenter?: MouseEventHandler<T>
      /** @deprecated use `on:mouseLeave` instead */
      onmouseleave?: MouseEventHandler<T>
      /** @deprecated use `on:mouseMove` instead */
      onmousemove?: MouseEventHandler<T>
      /** @deprecated use `on:mouseOut` instead */
      onmouseout?: MouseEventHandler<T>
      /** @deprecated use `on:mouseOver` instead */
      onmouseover?: MouseEventHandler<T>
      /** @deprecated use `on:mouseUp` instead */
      onmouseup?: MouseEventHandler<T>
      // DragEvent
      /** @deprecated use `on:drag` instead */
      ondrag?: DragEventHandler<T>
      /** @deprecated use `on:dragEnd` instead */
      ondragend?: DragEventHandler<T>
      /** @deprecated use `on:dragEnter` instead */
      ondragenter?: DragEventHandler<T>
      /** @deprecated use `on:dragExit` instead */
      ondragexit?: DragEventHandler<T>
      /** @deprecated use `on:dragLeave` instead */
      ondragleave?: DragEventHandler<T>
      /** @deprecated use `on:dragOver` instead */
      ondragover?: DragEventHandler<T>
      /** @deprecated use `on:dragStart` instead */
      ondragstart?: DragEventHandler<T>
      /** @deprecated use `on:drop` instead */
      ondrop?: DragEventHandler<T>
      // TouchEvent
      /** @deprecated use `on:touchCancel` instead */
      ontouchcancel?: TouchEventHandler<T>
      /** @deprecated use `on:touchEnd` instead */
      ontouchend?: TouchEventHandler<T>
      /** @deprecated use `on:touchMove` instead */
      ontouchmove?: TouchEventHandler<T>
      /** @deprecated use `on:touchStart` instead */
      ontouchstart?: TouchEventHandler<T>
      // PointerEvent
      /** @deprecated use `on:pointerDown` instead */
      onpointerdown?: PointerEventHandler<T>
      /** @deprecated use `on:pointerMove` instead */
      onpointermove?: PointerEventHandler<T>
      /** @deprecated use `on:pointerUp` instead */
      onpointerup?: PointerEventHandler<T>
      /** @deprecated use `on:pointerCancel` instead */
      onpointercancel?: PointerEventHandler<T>
      /** @deprecated use `on:pointerEnter` instead */
      onpointerenter?: PointerEventHandler<T>
      /** @deprecated use `on:pointerLeave` instead */
      onpointerleave?: PointerEventHandler<T>
      /** @deprecated use `on:pointerOver` instead */
      onpointerover?: PointerEventHandler<T>
      /** @deprecated use `on:pointerOut` instead */
      onpointerout?: PointerEventHandler<T>
      /** @deprecated use `on:gotPointerCapture` instead */
      ongotpointercapture?: PointerEventHandler<T>
      /** @deprecated use `on:lostPointerCapture` instead */
      onlostpointercapture?: PointerEventHandler<T>
      // UIEvent
      /** @deprecated use `on:scroll` instead */
      onscroll?: UIEventHandler<T>
      /** @deprecated use `on:scrollEnd` instead */
      onscrollend?: UIEventHandler<T>
      // SnapEvent
      /** @deprecated use `on:scrollSnapChange` instead */
      onscrollsnapchange?: SnapEventHandler<T>
      /** @deprecated use `on:scrollSnapChanging` instead */
      onscrollsnapchanging?: SnapEventHandler<T>
      // WheelEvent
      /** @deprecated use `on:wheel` instead */
      onwheel?: WheelEventHandler<T>
      // AnimationEvent
      /** @deprecated use `on:animationStart` instead */
      onanimationstart?: AnimationEventHandler<T>
      /** @deprecated use `on:animationEnd` instead */
      onanimationend?: AnimationEventHandler<T>
      /** @deprecated use `on:animationIteration` instead */
      onanimationiteration?: AnimationEventHandler<T>
      /** @deprecated use `on:animationCancel` instead */
      onanimationcancel?: AnimationEventHandler<T>
      // TransitionEvent
      /** @deprecated use `on:transitionStart` instead */
      ontransitionstart?: TransitionEventHandler<T>
      /** @deprecated use `on:transitionEnd` instead */
      ontransitionend?: TransitionEventHandler<T>
      /** @deprecated use `on:transitionRun` instead */
      ontransitionrun?: TransitionEventHandler<T>
      /** @deprecated use `on:transitionCancel` instead */
      ontransitioncancel?: TransitionEventHandler<T>
      // Fullscreen API
      /** @deprecated use `on:fullscreenChange` instead */
      onfullscreenchange?: GenericEventHandler<T>
      /** @deprecated use `on:fullscreenError` instead */
      onfullscreenerror?: GenericEventHandler<T>
      // ToggleEvent
      /** @deprecated use `on:beforeToggle` instead */
      onbeforetoggle?: ToggleEventHandler<T>
      /** @deprecated use `on:toggle` instead */
      ontoggle?: ToggleEventHandler<T>
      // ContentVisibilityAutoStateChangeEvent
      /** @deprecated use `on:contentVisibilityAutoStateChange` instead */
      oncontentvisibilityautostatechange?: ContentVisibilityAutoStateChangeEventHandler<T>
      // CommandEvent
      /** @deprecated use `on:command` instead */
      oncommand?: CommandEventHandler<T>
    }

    interface SVGAttributes<T extends EventTarget> extends HTMLAttributes<T> {
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
      'accent-height'?: Numeric
      accumulate?: 'none' | 'sum'
      additive?: 'replace' | 'sum'
      'alignment-baseline'?: Property.AlignmentBaseline
      allowReorder?: 'no' | 'yes'
      /** @deprecated */
      alphabetic?: number | string
      amplitude?: Numeric
      /** @deprecated */
      'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
      /**
       * The `ascent` attribute defines the maximum unaccented height of the font within the font coordinate system
       * @deprecated
       */
      ascent?: Numeric
      attributeName?: string
      /** @deprecated */
      attributeType?: 'CSS' | 'XML' | 'auto'
      autoReverse?: number | string
      azimuth?: Numeric
      baseFrequency?: number | string
      'baseline-shift'?: Property.BaselineShift
      /** @deprecated */
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
      contentScriptType?: 'application/ecmascript' | AnyString
      /** @deprecated */
      contentStyleType?: string
      cursor?: Property.Cursor
      decelerate?: number | string
      descent?: number | string
      diffuseConstant?: Numeric
      direction?: Property.Direction
      display?: Property.Display
      divisor?: number | string
      'dominant-baseline'?: Property.DominantBaseline
      dur?: number | string
      dx?: number | string
      dy?: number | string
      edgeMode?: 'duplicate' | 'wrap' | 'none'
      elevation?: Numeric
      /** @deprecated */
      'enable-background'?: number | string
      end?: number | string
      exponent?: Numeric
      /** @deprecated */
      externalResourcesRequired?: 'true' | 'false'
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
      hanging?: Numeric
      /** @deprecated */
      'horiz-adv-x'?: Numeric
      /** @deprecated */
      'horiz-origin-x'?: Numeric
      /** @deprecated */
      'horiz-origin-y'?: Numeric
      /** @deprecated */
      ideographic?: Numeric
      'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit'
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
      'letter-spacing'?: Property.LetterSpacing
      'lighting-color'?: Property.LightingColor
      limitingConeAngle?: Numeric
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
      mathematical?: Numeric
      max?: string
      min?: string
      media?: string
      method?: 'align' | 'stretch'
      mode?: string
      name?: string
      numOctaves?: Numeric
      offset?: Property.Offset
      opacity?: Property.Opacity
      operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'lighter' | 'arithmetic' | 'erode' | 'dilate'
      order?: Property.Order
      orient?: 'auto' | 'auto-start-reverse' | number | AnyString
      /** @deprecated */
      orientation?: 'h' | 'v'
      origin?: 'default' | AnyString
      overflow?: Property.Overflow
      'overline-position'?: Numeric
      'overline-thickness'?: Numeric
      'paint-order'?: Property.PaintOrder
      /** @deprecated */
      'panose-1'?: string
      path?: string
      pathLength?: Numeric
      patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
      patternTransform?: string
      patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
      'pointer-events'?: Property.PointerEvents
      points?: string
      pointsAtX?: Numeric
      pointsAtY?: Numeric
      pointsAtZ?: Numeric
      preserveAlpha?: 'true' | 'false'
      preserveAspectRatio?: string
      primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
      r?: number | string
      radius?: number | string
      refX?: 'left' | 'center' | 'right' | number | AnyString
      refY?: 'top' | 'center' | 'bottom' | number | AnyString
      renderingIntent?: number | string
      repeatCount?: 'indefinite' | Numeric
      repeatDur?: 'indefinite' | number | AnyString
      requiredExtensions?: number | string
      /** @deprecated */
      requiredFeatures?: string
      restart?: 'always' | 'whenNotActive' | 'never'
      result?: string
      rotate?: Numeric | 'auto' | 'auto-reverse'
      rx?: 'auto' | number | AnyString
      ry?: 'auto' | number | AnyString
      scale?: Numeric
      seed?: Numeric
      'shape-rendering'?: Property.ShapeRendering
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
      'stop-color'?: Property.StopColor
      'stop-opacity'?: Property.StopOpacity
      'strikethrough-position'?: Numeric
      'strikethrough-thickness'?: Numeric
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
      surfaceScale?: Numeric
      systemLanguage?: string
      tabindex?: Numeric
      tableValues?: number | string
      target?: Target
      targetX?: number | string
      targetY?: number | string
      'text-anchor'?: Property.TextAnchor
      'text-decoration'?: Property.TextDecoration
      'text-rendering'?: Property.TextRendering
      textLength?: number | string
      to?: string
      transform?: Property.Transform
      'transform-origin'?: Property.TransformOrigin
      type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY' | AnyString
      /** @deprecated */
      u1?: string
      /** @deprecated */
      u2?: string
      'underline-position'?: Numeric
      'underline-thickness'?: Numeric
      unicode?: string
      'unicode-bidi'?: Property.UnicodeBidi
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
      'vector-effect'?: Property.VectorEffect
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
      visibility?: Property.Visibility
      /** @deprecated */
      widths?: Numeric
      'word-spacing'?: Property.WordSpacing
      'writing-mode'?: Property.WritingMode
      x1?: number | string
      x2?: number | string
      x?: number | string
      /** @deprecated */
      'x-height'?: Numeric
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
      z?: Numeric
      /** @deprecated */
      zoomAndPan?: 'disable' | 'magnify'
      height?: number | string
      width?: number | string
    }

    interface SVGAnimationElementAttributes<T extends SVGAnimationElement> extends SVGAttributes<T> {
      /** @deprecated use `'on:beginEvent` instead */
      onbegin?: GenericEventHandler<T>
      /** @deprecated use `'on:endEvent` instead */
      onend?: GenericEventHandler<T>
      /** @deprecated use `'on:repeatEvent` instead */
      onrepeat?: GenericEventHandler<T>

      'on:beginEvent'?: EventListener<T>
      'on:endEvent'?: EventListener<T>
      'on:repeatEvent'?: EventListener<T>
    }

    interface MathMLAttributes extends HTMLAttributes<MathMLElement> {
      _?: typeof mathmlNs
      xmlns?: typeof mathmlNs
      dir?: DirName
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

    interface HTMLAnchorElementAttributes extends HTMLAttributes<HTMLAnchorElement> {
      /**
       * Instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. _Default value: none; Animatable: no_
       */
      download?: Signalish<string>
      href?: Signalish<string>
      /**
       * Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global `lang` attribute
       */
      hreflang?: Signalish<string>
      /**
       * A space-separated list of URLs. When the link is followed, the browser will send `POST` requests with the body `PING` to the URLs. Typically for tracking
       */
      ping?: Signalish<string>
      /**
       * The relationship of the linked URL as space-separated link types
       */
      rel?:
      | 'alternate'
      | 'author'
      | 'bookmark'
      | 'external'
      | 'help'
      | 'license'
      | 'next'
      | 'nofollow'
      | 'noopener'
      | 'noreferrer'
      | 'noreferrer noopener'
      | 'noopener noreferrer'
      | 'prev'
      | 'privacy-policy'
      | 'search'
      | 'tag'
      | 'terms-of-service'
      | 'me'
      | AnyString
      /**
       * Where to display the linked URL. _Default value: `_self`; Animatable: yes_
       */
      target?: Target
      /**
       * Hints at the linked URL's format with a MIME type. No built-in functionality
       */
      type?: Signalish<string>
      referrerPolicy?: ReferrerPolicy
      interestFor?: Signalish<string>

      /**
       * Non-standard attribute:
       * The attributionSourceId is used as part of the **Private Click Measurement** specification to identify the content that was clicked when following a link to another site.
       * @see https://privacycg.github.io/private-click-measurement/
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/attributionSourceId
       */
      attributionSourceId?: Signalish<Numeric>
      /**
       * Non-standard attribute:
       * The attributiondestination is used as part of the **Private Click Measurement** specification to identify the destination of a link that was clicked.
       * @see https://privacycg.github.io/private-click-measurement/
       */
      attributionDestination?: Signalish<string>

      /**
       * SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
       * @deprecated
       */
      'xlink:href'?: string

      'prop:charset'?: Signalish<string>
      'prop:coords'?: Signalish<string>
      'prop:download'?: Signalish<string>
      'prop:hreflang'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:ping'?: Signalish<string>
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:rel'?: HTMLAnchorElementAttributes['rel']
      'prop:relList'?: Signalish<string>
      'prop:rev'?: Signalish<string>
      'prop:shape'?: Signalish<string>
      'prop:target'?: Target
      'prop:text'?: Signalish<string>
      'prop:type'?: Signalish<string>
      'prop:hash'?: Signalish<string>
      'prop:host'?: Signalish<string>
      'prop:hostname'?: Signalish<string>
      'prop:href'?: Signalish<string>
      'prop:password'?: Signalish<string>
      'prop:pathname'?: Signalish<string>
      'prop:port'?: Signalish<string>
      'prop:protocol'?: Signalish<string>
      'prop:search'?: Signalish<string>
      'prop:username'?: Signalish<string>
      'prop:interestForElement'?: globalThis.Element | null

      'prop:attributionSourceId'?: Signalish<number>
      'prop:attributionDestination'?: Signalish<string>
    }

    interface HTMLAbbrElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLAcronymElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLAddressElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLArticleElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'article' | 'application' | 'document' | 'feed' | 'main' | 'none' | 'presentation' | 'region'

      'prop:role'?: HTMLArticleElementAttributes['role']
    }

    interface HTMLAsideElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?:
      | 'complementary'
      | 'feed'
      | 'none'
      | 'note'
      | 'presentation'
      | 'region'
      | 'search'
      | 'doc-dedication'
      | 'doc-example'
      | 'doc-footnote'
      | 'doc-glossary'
      | 'doc-pullquote'
      | 'doc-tip'

      'prop:role'?: HTMLAsideElementAttributes['role']
    }

    interface HTMLAudioElementAttributes extends HTMLMediaAttributes<HTMLAudioElement> {
    }

    interface HTMLAreaElementAttributes extends OmitAttrs<HTMLAttributes<HTMLAreaElement>, 'children'>, VoidElement {
      /** @deprecated */
      accessKey?: Signalish<string>
      alt?: Signalish<string>
      coords?: Signalish<string>
      /**
       * This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource. See `<a>` for a full description of the `download` attribute
       */
      download?: Signalish<string>
      /**
       * The hyperlink target for the area. Its value is a valid URL. This attribute may be omitted; if so, the `<area>` element does not represent a hyperlink
       */
      href?: Signalish<string>
      /**
       * Contains a space-separated list of URLs to which, when the hyperlink is followed, `POST` requests with the body PING will be sent by the browser (in the background). Typically used for tracking
       */
      ping?: Signalish<string>
      /** @deprecated */
      hreflang?: Signalish<string>
      media?: Signalish<string>
      /**
       * A string indicating which referrer to use when fetching the resource
       */
      referrerPolicy?: ReferrerPolicy
      rel?:
      | 'alternate'
      | 'author'
      | 'bookmark'
      | 'external'
      | 'help'
      | 'license'
      | 'next'
      | 'nofollow'
      | 'noopener'
      | 'noreferrer'
      | 'noreferrer noopener'
      | 'noopener noreferrer'
      | 'prev'
      | 'privacy-policy'
      | 'search'
      | 'tag'
      | 'terms-of-service'
      | AnyString
      shape?: 'rect' | 'circle' | 'poly' | 'default' | AnyString
      /**
       * A keyword or author-defined name of the browsing context to display the linked resource
       */
      target?: Target
      /** @deprecated */
      nohref?: Signalish<string>
      /** @deprecated */
      tabIndex?: Signalish<Numeric>
      interestFor?: Signalish<string>

      'prop:interestForElement'?: globalThis.Element | null
    }

    interface HTMLBElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLBaseElementAttributes extends OmitAttrs<HTMLAttributes<HTMLBaseElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      href?: Signalish<string>
      target?: Target

      'prop:href'?: string
      'prop:target'?: Target
    }

    interface HTMLBdiElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLBdoElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLBigElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLBrElementAttributes extends OmitAttrs<HTMLAttributes<HTMLBRElement>, 'children'>, VoidElement {
      /** @deprecated */
      clear?: Signalish<string>
      role?: 'presentation' | 'none'

      'prop:clear'?: Signalish<string>
      'prop:role'?: 'presentation' | 'none'
    }

    interface HTMLButtonElementAttributes extends HTMLAttributes<HTMLButtonElement> {
      autofocus?: boolean | '' | 'autofocus'
      disabled?: boolean | '' | 'disabled'
      form?: Signalish<string>
      /**
       * The URL that processes the information submitted by the button. Overrides the `action` attribute of the button's form owner. Does nothing if there is no form owner
       */
      formAction?: Signalish<string>
      /**
       * Form data set encoding type to use for form submission. Attribute is only used for buttons with `type="submit"`
       */
      formEnctype?: FormEnctype
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: FormMethod
      formNoValidate?: boolean | '' | 'formnovalidate'
      /**
       * If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form
       */
      formTarget?: Target
      name?: Signalish<string>
      type?: 'submit' | 'reset' | 'button'
      value?: Signalish<number | string>
      popoverTarget?: Signalish<string>
      popoverTargetAction?: 'hide' | 'show' | 'toggle'
      /**
       * Specifies the action to be performed on an element being controlled by a control `<button>`, specified via the `commandfor` attribute.
       */
      command?: CommandEventType
      /**
       * Turns a <button> element into a command button, controlling the given interactive element; takes the ID of the element to control as its value. This is a more general version of `popovertarget`.
       */
      commandFor?: Signalish<string>
      interestFor?: Signalish<string>
      /** Permitted ARIA roles */
      role?:
      | 'button'
      | 'checkbox'
      | 'combobox'
      | 'gridcell'
      | 'link'
      | 'menuitem'
      | 'menuitemcheckbox'
      | 'menuitemradio'
      | 'option'
      | 'radio'
      | 'separator'
      | 'slider'
      | 'switch'
      | 'tab'
      | 'treeitem'

      'prop:command'?: CommandEventType
      'prop:commandForElement'?: globalThis.Element | null
      'prop:disabled'?: Signalish<boolean>
      'prop:formAction'?: Signalish<string>
      'prop:formEnctype'?: FormEnctype
      'prop:formMethod'?: FormMethod
      'prop:formNoValidate'?: Signalish<boolean>
      'prop:formTarget'?: Target
      'prop:name'?: Signalish<string>
      'prop:type'?: 'submit' | 'reset' | 'button'
      'prop:value'?: Signalish<string>
      'prop:popoverTargetAction'?: 'hide' | 'show' | 'toggle'
      'prop:popoverTargetElement'?: globalThis.Element | null
      'prop:role'?: HTMLButtonElementAttributes['role']
      'prop:interestForElement'?: globalThis.Element | null
    }

    interface HTMLCanvasElementAttributes extends HTMLAttributes<HTMLCanvasElement> {
      /**
       * The height of the coordinate space in CSS pixels. Defaults to 150
       */
      height?: Signalish<number | string>
      /**
       * The width of the coordinate space in CSS pixels. Defaults to 300
       */
      width?: Signalish<number | string>

      /** @deprecated use `on:contextLost` instead */
      oncontextlost?: GenericEventHandler<HTMLCanvasElement>
      /** @deprecated use `on:contextRestored` instead */
      oncontextrestored?: GenericEventHandler<HTMLCanvasElement>
      /**
       * Lets the canvas know whether translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized `canvas.getContext('2d', { alpha: false })` instead
       * @deprecated
       */
      'moz-opaque'?: boolean | ''
      'on:webGLContextLost'?: WebGLContextEventListener<HTMLCanvasElement>
      'on:webGLContextRestored'?: WebGLContextEventListener<HTMLCanvasElement>
      'on:webGLContextCreationError'?: WebGLContextEventListener<HTMLCanvasElement>
      'on:contextLost'?: EventListener<HTMLCanvasElement>
      'on:contextRestored'?: EventListener<HTMLCanvasElement>

      'prop:height'?: Signalish<number>
      'prop:width'?: Signalish<number>
    }

    interface HTMLCaptionElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'caption'

      'prop:role'?: 'caption'
    }

    interface HTMLCenterElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLCiteElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLCodeElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLColElementAttributes extends OmitAttrs<HTMLAttributes<HTMLTableColElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      span?: Signalish<Numeric>
      width?: Signalish<number | string>

      'prop:align'?: Signalish<string>
      'prop:ch'?: Signalish<string>
      'prop:chOff'?: Signalish<string>
      'prop:span'?: Signalish<number>
      'prop:vAlign'?: Signalish<string>
      'prop:width'?: Signalish<string>
    }

    interface HTMLColgroupElementAttributes extends OmitAttrs<HTMLAttributes<HTMLTableColElement>, RoleKey>, NoRolePermited {
      span?: Signalish<Numeric>
      width?: Signalish<number | string>

      'prop:align'?: Signalish<string>
      'prop:ch'?: Signalish<string>
      'prop:chOff'?: Signalish<string>
      'prop:span'?: Signalish<number>
      'prop:vAlign'?: Signalish<string>
      'prop:width'?: Signalish<string>
    }

    interface HTMLDataElementAttributes extends HTMLAttributes<HTMLDataElement> {
      value?: Signalish<number | string>

      'prop:value'?: Signalish<string>
    }

    interface HTMLDataListElementAttributes extends HTMLAttributes<HTMLDataListElement> {
      /** Permitted ARIA roles */
      role?: 'listbox'

      'prop:role'?: 'listbox'
    }

    interface HTMLDdElementAttributes extends OmitAttrs<HTMLElementAttributes, RoleKey>, NoRolePermited {
    }

    interface HTMLDetailsElementAttributes extends HTMLAttributes<HTMLDetailsElement> {
      name?: Signalish<string>
      open?: boolean | '' | 'open'
      /** Permitted ARIA roles */
      role?: 'group'

      'prop:name'?: Signalish<string>
      'prop:open'?: Signalish<boolean>
      'prop:role'?: 'group'
    }

    interface HTMLDfnElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLModElementAttributes extends HTMLAttributes<HTMLModElement> {
      cite?: Signalish<string>
      dateTime?: Signalish<string>

      'prop:cite'?: Signalish<string>
      'prop:dateTime'?: Signalish<string>
    }

    interface HTMLKbdElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLDialogElementAttributes extends HTMLAttributes<HTMLDialogElement> {
      open?: boolean | '' | 'open'
      /**
       * Do not add the `tabindex` property to the `<dialog>` element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
       * @deprecated
       */
      tabIndex?: Signalish<Numeric>
      /**
       * Specifies the types of user actions that can be used to close the `<dialog>` element
       */
      closedBy?: 'any' | 'closerequest' | 'none'
      /** Permitted ARIA roles */
      role?: 'dialog' | 'alertdialog'

      /** @deprecated use `on:close` instead */
      onclose?: GenericEventHandler<HTMLDialogElement>
      /** @deprecated use `on:cancel` instead */
      oncancel?: GenericEventHandler<HTMLDialogElement>

      'on:close'?: EventListener<HTMLDialogElement>
      'on:cancel'?: EventListener<HTMLDialogElement>

      'prop:open'?: Signalish<boolean>
      'prop:closedBy'?: 'any' | 'closerequest' | 'none'
      'prop:returnValue'?: Signalish<string>
      'prop:role'?: 'dialog' | 'alertdialog'
    }

    interface HTMLDirElementAttributes extends HTMLAttributes<HTMLDirectoryElement> {
    }

    interface HTMLDivElementAttributes extends HTMLAttributes<HTMLDivElement> {
    }

    interface HTMLDlElementAttributes extends HTMLAttributes<HTMLDListElement> {
      /** Permitted ARIA roles */
      role?: 'group' | 'list' | 'none' | 'presentation'

      'prop:role'?: HTMLDlElementAttributes['role']
    }

    interface HTMLDtElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'listitem'

      'prop:role'?: 'listitem'
    }

    interface HTMLEmElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLEmbedElementAttributes extends OmitAttrs<HTMLAttributes<HTMLEmbedElement>, 'children'>, VoidElement {
      height?: Signalish<number | string>
      src?: Signalish<string>
      type?: Signalish<string>
      width?: Signalish<number | string>
      /** Permitted ARIA roles */
      role?: 'application' | 'document' | 'img' | 'none' | 'presentation'

      'prop:align'?: Signalish<string>
      'prop:height'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:src'?: Signalish<string>
      'prop:type'?: Signalish<string>
      'prop:width'?: Signalish<string>
      'prop:role'?: HTMLEmbedElementAttributes['role']
    }

    interface HTMLFieldSetElementAttributes extends HTMLAttributes<HTMLFieldSetElement> {
      disabled?: boolean | '' | 'disabled'
      form?: Signalish<string>
      name?: Signalish<string>
      /** Permitted ARIA roles */
      role?: 'group' | 'none' | 'presentation' | 'radiogroup'

      'prop:name'?: Signalish<string>
      'prop:disabled'?: Signalish<boolean>
      'prop:role'?: HTMLFieldSetElementAttributes['role']
    }

    interface HTMLFigcaptionElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'group' | 'none' | 'presentation'

      'prop:role'?: 'group' | 'none' | 'presentation'
    }

    interface HTMLFigureElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLFontElementAttributes extends HTMLAttributes<HTMLFontElement> {
    }

    interface HTMLFooterElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'contentinfo' | 'group' | 'none' | 'presentation' | 'doc-footnote'

      'prop:role'?: HTMLFooterElementAttributes['role']
    }

    interface HTMLFormElementAttributes extends HTMLAttributes<HTMLFormElement> {
      /**
       * Comma-separated content types the server accepts
       * @deprecated
       */
      accept?: Signalish<string>
      'accept-charset'?: 'UTF-8' | 'ISO-8859-1' | 'US-ASCII' | AnyString
      action?: Signalish<string>
      autocomplete?: boolean | AutoFillBase
      enctype?: FormEnctype
      /**
       * The HTTP method to submit the form with. The only allowed methods/values are (case insensitive)
       */
      method?: FormMethod
      name?: Signalish<string>
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
      | AnyString
      noValidate?: boolean | '' | 'novalidate'
      target?: Target
      /** Permitted ARIA roles */
      role?: 'form' | 'none' | 'presentation' | 'search'
      /** @deprecated  use `on:formData` instead */
      onformdata?: FormDataEventHandler<HTMLFormElement>

      'on:formData'?: FormDataEventListener<HTMLFormElement>

      'prop:acceptCharset'?: 'UTF-8' | 'ISO-8859-1' | 'US-ASCII' | AnyString
      'prop:action'?: Signalish<string>
      'prop:autocomplete'?: AutoFillBase
      'prop:encoding'?: FormEnctype
      'prop:enctype'?: FormEnctype
      'prop:method'?: FormMethod
      'prop:name'?: Signalish<string>
      'prop:noValidate'?: Signalish<boolean>
      'prop:rel'?: HTMLFormElementAttributes['rel']
      'prop:relList'?: Signalish<string>
      'prop:target'?: Target
      'prop:role'?: HTMLFormElementAttributes['role']
    }

    interface HTMLHeadingElementAttributes extends HTMLAttributes<HTMLHeadingElement> {
      /** Permitted ARIA roles */
      role?: 'heading' | 'none' | 'presentation' | 'tab' | 'doc-subtitle'

      /** @deprecated */
      'prop:align'?: 'left' | 'right' | 'justify' | 'center'
      'prop:role'?: HTMLHeadingElementAttributes['role']
    }

    interface HTMLHeadElementAttributes extends OmitAttrs<HTMLAttributes<HTMLHeadElement>, RoleKey>, NoRolePermited {
    }

    interface HTMLHeaderElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'banner' | 'group' | 'none' | 'presentation'

      'prop:role'?: HTMLHeaderElementAttributes['role']
    }

    interface HTMLHGroupElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLHrElementAttributes extends OmitAttrs<HTMLAttributes<HTMLHRElement>, 'children'>, VoidElement {
      /**
       * Sets or retrieves how the object is aligned with adjacent text.
       * @deprecated
       */
      align?: Signalish<string>
      /** @deprecated */
      color?: Property.Color
      /**
       * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
       * @deprecated
       */
      noShade?: boolean | ''
      /** @deprecated */
      size?: Signalish<string>
      /**
       * Sets or retrieves the width of the object.
       * @deprecated
       */
      width?: Signalish<string>
      /** Permitted ARIA roles */
      role?: 'separator' | 'none' | 'presentation' | 'doc-pagebreak'

      'prop:align'?: Signalish<string>
      'prop:color'?: Property.Color
      'prop:noShade'?: Signalish<boolean>
      'prop:size'?: Signalish<string>
      'prop:width'?: Signalish<string>
      'prop:role'?: HTMLHrElementAttributes['role']
    }

    interface HTMLHtmlElementAttributes extends HTMLAttributes<HTMLHtmlElement> {
      manifest?: Signalish<string>
      /** @deprecated */
      version?: Signalish<string>
      xmlns?: Signalish<string>
      /** Permitted ARIA roles */
      role?: 'document'

      'prop:role'?: 'document'
    }

    interface HTMLIElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLIFrameElementAttributes extends HTMLAttributes<HTMLIFrameElement> {
      allow?: Signalish<string>
      /**
       * This attribute is considered a legacy attribute and redefined as `allow="fullscreen"`
       * @deprecated
       */
      allowFullScreen?: boolean | '' | 'allowfullscreen'
      /**
       * This attribute is considered a legacy attribute and redefined as `allow="payment"`
       * @deprecated
       */
      allowPaymentRequest?: boolean | ''
      /** @deprecated */
      allowTransparency?: boolean | ''
      /**
       * A Content Security Policy enforced for the embedded resource
       */
      csp?: Signalish<string>
      /** @deprecated */
      frameBorder?: Signalish<number | string>
      /**
       * The height of the frame in CSS pixels. Default is 150
       */
      height?: Signalish<number | string>
      loading?: 'eager' | 'lazy'
      /** @deprecated */
      marginHeight?: Signalish<Numeric>
      /** @deprecated */
      marginWidth?: Signalish<Numeric>
      name?: Signalish<string>
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
      | AnyString
      /**
       * Indicates when the browser should provide a scrollbar for the frame
       * @deprecated
       */
      scrolling?: 'auto' | 'yes' | 'no'
      /** @deprecated */
      seamless?: boolean | ''
      src?: Signalish<string>
      srcdoc?: Signalish<string>
      /**
       * The width of the frame in CSS pixels. Default is 300
       */
      width?: Signalish<number | string>
      /** Permitted ARIA roles */
      role?: 'application' | 'document' | 'img' | 'none' | 'presentation'

      'prop:align'?: Signalish<string>
      'prop:allow'?: Signalish<string>
      'prop:allowFullscreen'?: Signalish<boolean>
      'prop:frameBorder'?: Signalish<string>
      'prop:height'?: Signalish<string>
      'prop:loading'?: 'eager' | 'lazy'
      'prop:longDesc'?: Signalish<string>
      'prop:marginHeight'?: Signalish<string>
      'prop:marginWidth'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:sandbox'?: HTMLIFrameElementAttributes['sandbox']
      'prop:scrolling'?: 'auto' | 'yes' | 'no'
      'prop:src'?: Signalish<string>
      'prop:srcdoc'?: Signalish<string>
      'prop:width'?: Signalish<string>
      'prop:role'?: HTMLIFrameElementAttributes['role']
    }

    interface HTMLImageElementAttributes extends OmitAttrs<HTMLAttributes<HTMLImageElement>, 'children'>, VoidElement {
      alt?: Signalish<string>
      crossOrigin?: CrossOrigin
      decoding?: 'async' | 'sync' | 'auto'
      height?: Signalish<number | string>
      /**
       * This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server
       */
      ismap?: boolean | '' | 'ismap'
      loading?: 'eager' | 'lazy'
      referrerPolicy?: ReferrerPolicy
      sizes?: Signalish<string>
      src?: Signalish<string>
      srcset?: Signalish<string>
      useMap?: Signalish<string>
      width?: Signalish<number | string>
      fetchPriority?: FetchPriority
      // TODO: role attribute

      'prop:align'?: Signalish<string>
      'prop:alt'?: Signalish<string>
      'prop:border'?: Signalish<string>
      'prop:crossOrigin'?: Signalish<string | null>
      'prop:decoding'?: 'async' | 'sync' | 'auto'
      'prop:fetchPriority'?: FetchPriority
      'prop:height'?: Signalish<number>
      'prop:hspace'?: Signalish<number>
      'prop:isMap'?: Signalish<boolean>
      'prop:loading'?: 'eager' | 'lazy'
      'prop:longDesc'?: Signalish<string>
      'prop:lowsrc'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:sizes'?: Signalish<string>
      'prop:src'?: Signalish<string>
      'prop:srcset'?: Signalish<string>
      'prop:useMap'?: Signalish<string>
      'prop:vspace'?: Signalish<number>
      'prop:width'?: Signalish<number>
    }

    interface HTMLInputElementAttributes extends OmitAttrs<HTMLAttributes<HTMLInputElement>, 'children'>, VoidElement {
      accept?: Signalish<string>
      alt?: Signalish<string>
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | '' | 'autofocus'
      /**
       * The capture attribute is supported on the `file` input type.
       */
      capture?: boolean | 'user' | 'environment' | ''
      checked?: boolean | '' | 'checked'
      crossOrigin?: CrossOrigin
      disabled?: boolean | '' | 'disabled'
      dirName?: DirName
      form?: Signalish<string>
      /**
       * URL to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formAction?: Signalish<string>
      /**
       * Form data set encoding type to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formEnctype?: FormEnctype
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: FormMethod
      formNoValidate?: boolean | '' | 'formnovalidate'
      formTarget?: Target
      height?: Signalish<number | string>
      list?: Signalish<string>
      max?: Signalish<number | string>
      maxLength?: Signalish<Numeric>
      min?: Signalish<number | string>
      minLength?: Signalish<Numeric>
      multiple?: boolean | '' | 'multiple'
      name?: Signalish<string>
      pattern?: Signalish<string>
      placeholder?: Signalish<string>
      readOnly?: boolean | '' | 'readonly'
      required?: boolean | '' | 'required'
      size?: Signalish<Numeric>
      src?: Signalish<string>
      step?: Signalish<Numeric>
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
      value?: Signalish<number | string>
      width?: Signalish<number | string>
      /**
       * Allow to select entire folders instead of individual files. Attribute is only used for inputs with `type="file"`
       */
      webkitdirectory?: boolean | '' | 'webkitdirectory'
      popoverTarget?: Signalish<string>
      popoverTargetAction?: 'hide' | 'show' | 'toggle'
      // TODO: role attribute

      'prop:accept'?: Signalish<string>
      'prop:align'?: Signalish<string>
      'prop:alt'?: Signalish<string>
      'prop:autocomplete'?: AutoFill
      'prop:capture'?: Signalish<string>
      'prop:checked'?: Signalish<boolean>
      'prop:defaultChecked'?: Signalish<boolean>
      'prop:defaultValue'?: Signalish<string>
      'prop:dirName'?: DirName
      'prop:disabled'?: Signalish<boolean>
      'prop:files'?: FileList | null
      'prop:formAction'?: Signalish<string>
      'prop:formEnctype'?: FormEnctype
      'prop:formMethod'?: FormMethod
      'prop:formNoValidate'?: Signalish<boolean>
      'prop:formTarget'?: Target
      'prop:height'?: Signalish<number>
      'prop:indeterminate'?: Signalish<boolean>
      'prop:max'?: Signalish<string>
      'prop:maxLength'?: Signalish<number>
      'prop:min'?: Signalish<string>
      'prop:minLength'?: Signalish<number>
      'prop:multiple'?: Signalish<boolean>
      'prop:name'?: Signalish<string>
      'prop:pattern'?: Signalish<string>
      'prop:placeholder'?: Signalish<string>
      'prop:readOnly'?: Signalish<boolean>
      'prop:required'?: Signalish<boolean>
      'prop:selectionDirection'?: 'forward' | 'backward' | 'none' | null
      'prop:selectionEnd'?: Signalish<number> | null
      'prop:selectionStart'?: Signalish<number> | null
      'prop:size'?: Signalish<number>
      'prop:src'?: Signalish<string>
      'prop:step'?: Signalish<string>
      'prop:type'?: HTMLInputElementAttributes['type']
      'prop:useMap'?: Signalish<string>
      'prop:value'?: Signalish<string>
      'prop:valueAsDate'?: Date | null
      'prop:valueAsNumber'?: Signalish<number>
      'prop:webkitdirectory'?: Signalish<boolean>
      'prop:width'?: Signalish<number>
      'prop:popoverTargetAction'?: 'hide' | 'show' | 'toggle'
      'prop:popoverTargetElement'?: globalThis.Element | null
    }

    interface HTMLLabelElementAttributes extends OmitAttrs<HTMLAttributes<HTMLLabelElement>, RoleKey>, NoRolePermited {
      for?: Signalish<string>

      'prop:htmlFor'?: Signalish<string>
    }

    interface HTMLLegendElementAttributes extends OmitAttrs<HTMLAttributes<HTMLLegendElement>, RoleKey>, NoRolePermited {
    }

    interface HTMLLIElementAttributes extends HTMLAttributes<HTMLLIElement> {
      value?: Signalish<Numeric>

      'prop:type'?: Signalish<string>
      'prop:value'?: Signalish<number>
    }

    interface HTMLLinkElementAttributes extends OmitAttrs<HTMLAttributes<HTMLLinkElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | AnyString
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
      | AnyString
      crossOrigin?: CrossOrigin
      disabled?: boolean | '' | 'disabled'
      href?: Signalish<string>
      hreflang?: Signalish<string>
      /**
       * For `rel="preload"` and `as="image"` only, the `imagesizes` attribute is a sizes attribute that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes
       */
      imagesizes?: Signalish<string>
      /**
       * For `rel="preload"` and `as="image"` only, the imagesrcset attribute is a sourceset attribute that indicates to preload the appropriate resource used by an `img` element with corresponding values for its `srcset` and `sizes` attributes
       */
      imagesrcset?: Signalish<string>
      integrity?: Signalish<string>
      media?: 'all' | 'print' | AnyString
      referrerPolicy?: ReferrerPolicy
      /**
       * Defines the relationship between a linked resource and the current document.
       */
      rel?:
      | 'alternate'
      | 'author'
      | 'apple-touch-icon' // Non-standard values
      | 'apple-touch-startup-image' // Non-standard values
      | 'canonical'
      | 'dns-prefetch'
      | 'expect'
      | 'help'
      | 'icon'
      | 'shortcut'
      | 'shortcut icon'
      | 'license'
      | 'manifest'
      | 'me'
      | 'modulepreload'
      | 'next'
      | 'opener'
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
      | AnyString
      /** @deprecated */
      rev?: Signalish<string>
      sizes?: Signalish<string>
      type?: Signalish<string>
      /** @deprecated */
      charset?: Signalish<string>
      fetchPriority?: FetchPriority

      'prop:as'?: HTMLLinkElementAttributes['as']
      'prop:blocking'?: 'render' | AnyString
      'prop:charset'?: Signalish<string>
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:disabled'?: Signalish<boolean>
      'prop:fetchPriority'?: FetchPriority
      'prop:href'?: Signalish<string>
      'prop:hreflang'?: Signalish<string>
      'prop:imageSizes'?: Signalish<string>
      'prop:imageSrcset'?: Signalish<string>
      'prop:integrity'?: Signalish<string>
      'prop:media'?: Signalish<string>
      'prop:referrerPolicy'?: Signalish<string>
      'prop:rel'?: HTMLLinkElementAttributes['rel']
      'prop:relList'?: Signalish<string>
      'prop:rev'?: Signalish<string>
      'prop:sizes'?: Signalish<string>
      'prop:target'?: Signalish<string>
      'prop:type'?: Signalish<string>
    }

    interface HTMLMainElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'main'

      'prop:role'?: 'main'
    }

    interface HTMLMapElementAttributes extends OmitAttrs<HTMLAttributes<HTMLMapElement>, RoleKey>, NoRolePermited {
      name?: Signalish<string>

      'prop:name'?: Signalish<string>
    }

    interface HTMLMarkElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLMenuElementAttributes extends HTMLAttributes<HTMLMenuElement> {
      /** Permitted ARIA roles */
      role?:
      | 'list'
      | 'group'
      | 'listbox'
      | 'menu'
      | 'menubar'
      | 'none'
      | 'presentation'
      | 'radiogroup'
      | 'tablist'
      | 'toolbar'
      | 'tree'

      /** @deprecated */
      'prop:compact'?: Signalish<boolean>
      'prop:role'?: HTMLMenuElementAttributes['role']
    }

    interface HTMLMediaAttributes<T extends HTMLMediaElement> extends HTMLAttributes<T> {
      autoplay?: boolean | '' | 'autoplay'
      controls?: boolean | '' | 'controls'
      /**
       * A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.)
       */
      disableRemotePlayback?: boolean | ''
      /**
       * Offers a way to control the native controls elements/buttons that are being shown by the user agent in order to be able to remove some features that do not make sense or are not part of the expected user experience or only allowlist a limited amount of features
       */
      controlsList?: ControlsList
      crossOrigin?: CrossOrigin
      loop?: boolean | '' | 'loop'
      muted?: boolean | '' | 'muted'
      playsInline?: boolean | '' | 'playsinline'
      mediaGroup?: Signalish<string>
      preload?: 'none' | 'metadata' | 'auto' | ''
      src?: Signalish<string>
      /** @deprecated use `on:encrypted` instead */
      onencrypted?: MediaEncryptedEventHandler<T>
      /** @deprecated use `on:waitingForKey` instead */
      onwaitingforkey?: GenericEventHandler<T>
      /** Permitted ARIA roles */
      role?: 'application'

      'on:encrypted'?: MediaEncryptedEventListener<T>
      'on:waitingForKey'?: EventListener<T>

      'prop:autoplay'?: Signalish<boolean>
      'prop:controls'?: Signalish<boolean>
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:currentTime'?: Signalish<number>
      'prop:defaultMuted'?: Signalish<boolean>
      'prop:defaultPlaybackRate'?: Signalish<number>
      'prop:disableRemotePlayback'?: Signalish<boolean>
      'prop:loop'?: Signalish<boolean>
      'prop:muted'?: Signalish<boolean>
      'prop:playbackRate'?: Signalish<number>
      'prop:preload'?: 'none' | 'metadata' | 'auto' | ''
      'prop:preservesPitch'?: Signalish<boolean>
      'prop:src'?: Signalish<string>
      'prop:srcObject'?: MediaProvider | null
      'prop:volume'?: Signalish<number>
      'prop:role'?: 'application'
    }

    interface HTMLMetaElementAttributes extends OmitAttrs<HTMLAttributes<HTMLMetaElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      charset?: Signalish<string>
      content?: Signalish<string>
      'http-equiv'?:
      | 'content-security-policy'
      | 'content-type'
      | 'default-style'
      | 'x-ua-compatible'
      | 'refresh'
      | AnyString
      name?: Signalish<string>

      'prop:content'?: Signalish<string>
      'prop:httpEquiv'?: HTMLMetaElementAttributes['http-equiv']
      'prop:media'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:scheme'?: Signalish<string>
    }

    interface HTMLMeterElementAttributes extends HTMLAttributes<HTMLMeterElement> {
      form?: Signalish<string>
      high?: Signalish<Numeric>
      low?: Signalish<Numeric>
      max?: Signalish<Numeric>
      min?: Signalish<Numeric>
      optimum?: Signalish<Numeric>
      value?: Signalish<Numeric>
      /** Permitted ARIA roles */
      role?: 'meter'

      'prop:high'?: Signalish<number>
      'prop:low'?: Signalish<number>
      'prop:max'?: Signalish<number>
      'prop:min'?: Signalish<number>
      'prop:optimum'?: Signalish<number>
      'prop:value'?: Signalish<number>
      'prop:role'?: 'meter'
    }

    interface HTMLNavElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?:
      | 'navigation'
      | 'menu'
      | 'menubar'
      | 'none'
      | 'presentation'
      | 'tablist'

      'prop:role'?: HTMLNavElementAttributes['role']
    }

    interface HTMLNoBrElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'none' | 'presentation'

      'prop:role'?: 'none' | 'presentation'
    }

    interface HTMLQuoteElementAttributes extends HTMLAttributes<HTMLQuoteElement> {
      cite?: Signalish<string>

      'prop:cite'?: Signalish<string>
    }

    interface HTMLBodyElementAttributes extends HTMLAttributes<HTMLBodyElement> {
    }

    interface HTMLNoScriptElementAttributes extends OmitAttrs<HTMLUnknownElementAttributes, RoleKey>, NoRolePermited {
    }

    interface HTMLObjectElementAttributes extends HTMLAttributes<HTMLObjectElement> {
      /**
       * A space-separated list of URIs for archives of resources for the object
       * @deprecated
       */
      archive?: Signalish<string>
      /**
       * The width of a border around the control, in pixels
       * @deprecated
       */
      border?: Signalish<string>
      /**
       * The URI of the object's implementation. It can be used together with, or in place of, the `data` attribute
       * @deprecated
       */
      classid?: Signalish<string>
      /**
       * The base path used to resolve relative URIs specified by `classid`, `data`, or `archive`. If not specified, the default is the base URI of the current document
       * @deprecated
       */
      codebase?: Signalish<string>
      /**
       * The content type of the data specified by `classid`
       * @deprecated
       */
      codetype?: Signalish<string>
      /**
       * The address of the resource as a valid URL. At least one of `data` and `type` must be defined
       */
      data?: Signalish<string>
      /**
       * The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. Repeat the `<object>` element completely each time the resource is reused
       * @deprecated
       */
      declare?: boolean
      /**
       * The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a `<form>` element in the same document
       */
      form?: Signalish<string>
      /**
       * The height of the displayed resource, in CSS pixels. — (Absolute values only. NO percentages)
       */
      height?: Signalish<number | string>
      /**
       * The name of valid browsing context (HTML5), or the name of the control (HTML 4)
       */
      name?: Signalish<string>
      /**
       * A message that the browser can show while loading the object's implementation and data
       * @deprecated
       */
      standby?: Signalish<string>
      /**
       * The content type of the resource specified by `data`. At least one of `data` and `type` must be defined
       */
      type?: Signalish<string>
      /**
       * A hash-name reference to a `<map>` element; that is a '#' followed by the value of a `name` of a map element
       */
      useMap?: Signalish<string>
      /**
       * The width of the display resource, in CSS pixels. — (Absolute values only. NO percentages)
       */
      width?: Signalish<number | string>
      /** Permitted ARIA roles */
      role?: 'application' | 'document' | 'img'

      'prop:align'?: Signalish<string>
      'prop:archive'?: Signalish<string>
      'prop:border'?: Signalish<string>
      'prop:code'?: Signalish<string>
      'prop:codeBase'?: Signalish<string>
      'prop:codeType'?: Signalish<string>
      'prop:data'?: Signalish<string>
      'prop:declare'?: Signalish<boolean>
      'prop:height'?: Signalish<string>
      'prop:hspace'?: Signalish<number>
      'prop:name'?: Signalish<string>
      'prop:standby'?: Signalish<string>
      'prop:type'?: Signalish<string>
      'prop:useMap'?: Signalish<string>
      'prop:vspace'?: Signalish<number>
      'prop:width'?: Signalish<string>
      'prop:role'?: 'application' | 'document' | 'img'
    }

    interface HTMLOListElementAttributes extends HTMLAttributes<HTMLOListElement> {
      reversed?: boolean | '' | 'reversed'
      start?: Signalish<Numeric>
      type?: '1' | 'a' | 'A' | 'i' | 'I'
      /** Permitted ARIA roles */
      role?:
      | 'list'
      | 'group'
      | 'listbox'
      | 'menu'
      | 'menubar'
      | 'none'
      | 'presentation'
      | 'radiogroup'
      | 'tablist'
      | 'toolbar'
      | 'tree'

      'prop:compact'?: Signalish<boolean>
      'prop:reversed'?: Signalish<boolean>
      'prop:start'?: Signalish<number>
      'prop:type'?: '1' | 'a' | 'A' | 'i' | 'I'
      'prop:role'?: HTMLOListElementAttributes['role']
    }

    interface HTMLOptGroupElementAttributes extends HTMLAttributes<HTMLOptGroupElement> {
      disabled?: boolean | '' | 'disabled'
      label?: Signalish<string>
      /** Permitted ARIA roles */
      role?: 'group'

      'prop:disabled'?: Signalish<boolean>
      'prop:label'?: Signalish<string>
      'prop:role'?: 'group'
    }

    interface HTMLOptionElementAttributes extends HTMLAttributes<HTMLOptionElement> {
      disabled?: boolean | '' | 'disabled'
      label?: Signalish<string>
      selected?: boolean | '' | 'selected'
      value?: Signalish<number | string>
      /** Permitted ARIA roles */
      role?: 'option'

      'prop:defaultSelected'?: Signalish<boolean>
      'prop:disabled'?: Signalish<boolean>
      'prop:label'?: Signalish<string>
      'prop:selected'?: Signalish<boolean>
      'prop:text'?: Signalish<string>
      'prop:value'?: Signalish<string>
      'prop:role'?: 'option'
    }

    interface HTMLOutputElementAttributes extends HTMLAttributes<HTMLOutputElement> {
      form?: Signalish<string>
      for?: Signalish<string>
      name?: Signalish<string>
      value?: Signalish<number | string>

      'prop:defaultValue'?: Signalish<string>
      'prop:htmlFor'?: Signalish<string>
      'prop:name'?: Signalish<string>
      'prop:value'?: Signalish<string>
    }

    interface HTMLPElementAttributes extends HTMLAttributes<HTMLParagraphElement> {
    }

    interface HTMLParamElementAttributes extends OmitAttrs<HTMLAttributes<HTMLParamElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      /** @deprecated */
      name?: Signalish<string>
      /** @deprecated */
      value?: Signalish<number | string>
      /** @deprecated */
      valuetype?: 'data' | 'ref' | 'object'

      'prop:name'?: Signalish<string>
      'prop:type'?: Signalish<string>
      'prop:value'?: Signalish<string>
      'prop:valueType'?: 'data' | 'ref' | 'object'
    }

    interface HTMLPictureElementAttributes extends OmitAttrs<HTMLAttributes<HTMLPictureElement>, RoleKey>, NoRolePermited {
    }

    interface HTMLProgressElementAttributes extends HTMLAttributes<HTMLProgressElement> {
      max?: Signalish<Numeric>
      value?: Signalish<Numeric>
      /** Permitted ARIA roles */
      role?: 'progressbar'

      'prop:max'?: Signalish<number>
      'prop:value'?: Signalish<number>
      'prop:role'?: 'progressbar'
    }

    interface HTMLPlainTextElementAttributes extends HTMLElementAttributes {
    }

    interface HTMLPreElementAttributes extends HTMLAttributes<HTMLPreElement> {
    }

    interface HTMLScriptElementAttributes extends OmitAttrs<HTMLAttributes<HTMLScriptElement>, RoleKey>, NoRolePermited {
      async?: boolean | '' | 'async'
      /**
       * Specifies that you want the browser to send an `Attribution-Reporting-Eligible` header along with the script resource request
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attributionsrc
       */
      attributionsrc?: boolean | string
      blocking?: 'render' | AnyString
      /** @deprecated */
      charset?: Signalish<string>
      crossOrigin?: CrossOrigin
      defer?: boolean | '' | 'defer'
      integrity?: Signalish<string>
      noModule?: boolean | '' | 'nomodule'
      nonce?: Signalish<string>
      referrerPolicy?: ReferrerPolicy
      src?: Signalish<string>
      type?: 'importmap' | 'module' | 'speculationrules' | 'text/javascript' | AnyString
      fetchPriority?: FetchPriority

      'prop:async'?: Signalish<boolean>
      'prop:blocking'?: 'render' | AnyString
      'prop:charset'?: Signalish<string>
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:defer'?: Signalish<boolean>
      'prop:event'?: Signalish<string>
      'prop:fetchPriority'?: FetchPriority
      'prop:htmlFor'?: Signalish<string>
      'prop:integrity'?: Signalish<string>
      'prop:noModule'?: Signalish<boolean>
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:src'?: Signalish<string>
      'prop:text'?: Signalish<string>
      'prop:type'?: HTMLScriptElementAttributes['type']
    }

    interface HTMLSearchElementAttributes extends HTMLElementAttributes {
      /** Permitted ARIA roles */
      role?: 'search' | 'form' | 'group' | 'none' | 'presentation' | 'region'

      'prop:role'?: HTMLSearchElementAttributes['role']
    }

    interface HTMLSelectElementAttributes extends HTMLAttributes<HTMLSelectElement> {
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | '' | 'autofocus'
      disabled?: boolean | '' | 'disabled'
      form?: Signalish<string>
      multiple?: boolean | '' | 'multiple'
      name?: Signalish<string>
      required?: boolean | '' | 'required'
      size?: Signalish<Numeric>
      value?: Signalish<number | string>
      // TODO: role attribute

      'prop:autocomplete'?: AutoFill
      'prop:disabled'?: Signalish<boolean>
      'prop:length'?: Signalish<number>
      'prop:multiple'?: Signalish<boolean>
      'prop:name'?: Signalish<string>
      'prop:required'?: Signalish<boolean>
      'prop:selectedIndex'?: Signalish<number>
      'prop:size'?: Signalish<number>
      'prop:value'?: Signalish<string>
    }

    interface HTMLSlotElementAttributes extends OmitAttrs<HTMLAttributes<HTMLSlotElement>, RoleKey>, NoRolePermited {
      name?: Signalish<string>
      'prop:name'?: Signalish<string>
    }

    interface HTMLSourceElementAttributes extends OmitAttrs<HTMLAttributes<HTMLSourceElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      /**
       * Specifies the media query for the resource's intended media
       */
      media?: Signalish<string>
      /**
       * Specifies a list of source sizes that describe the final rendered width of the image. Allowed if the parent of `<source>` is `<picture>`. Not allowed if the parent is `<audio> `or `<video>`
       */
      sizes?: Signalish<string>
      /**
       * Specifies the URL of the media resource. Required if the parent of `<source>` is `<audio>` or `<video>`. Not allowed if the parent is `<picture>`
       */
      src?: Signalish<string>
      /**
       * Specifies a comma-separated list of one or more image URLs and their descriptors. Required if the parent of `<source>` is `<picture>`. Not allowed if the parent is `<audio>` or `<video>`
       */
      srcset?: Signalish<string>
      /**
       * Specifies the MIME media type of the image or other media type, optionally including a codecs parameter
       */
      type?: Signalish<string>
      /**
       * Specifies the intrinsic height of the image in pixels. Allowed if the parent of `<source>` is a `<picture>`. Not allowed if the parent is `<audio>` or `<video>`. The height value must be an integer without any units
       */
      height?: Signalish<Numeric>
      /**
       * Specifies the intrinsic width of the image in pixels. Allowed if the parent of `<source>` is a `<picture>`. Not allowed if the parent is `<audio> `or `<video>.` The width value must be an integer without any units
       */
      width?: Signalish<Numeric>

      'prop:height'?: Signalish<number>
      'prop:media'?: Signalish<string>
      'prop:sizes'?: Signalish<string>
      'prop:src'?: Signalish<string>
      'prop:srcset'?: Signalish<string>
      'prop:type'?: Signalish<string>
      'prop:width'?: Signalish<number>
    }

    interface HTMLSpanElementAttributes extends HTMLAttributes<HTMLSpanElement> {
    }

    interface HTMLStyleElementAttributes extends OmitAttrs<HTMLAttributes<HTMLStyleElement>, RoleKey>, NoRolePermited {
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | AnyString
      media?: Signalish<string>
      nonce?: Signalish<string>
      scoped?: boolean | ''
      /**
       * This attribute should not be provided: if it is, the only permitted values are the empty string or a case-insensitive match for `text/css`
       * @deprecated
       */
      type?: Signalish<string>

      'prop:blocking'?: 'render' | AnyString
      'prop:disabled'?: Signalish<boolean>
      'prop:media'?: Signalish<string>
      'prop:type'?: Signalish<string>
    }

    interface HTMLTableElementAttributes extends HTMLAttributes<HTMLTableElement> {
      /**
       * To achieve a similar effect, use the CSS properties `margin-left` and `margin-right` to `auto` or `margin` to `0 auto`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right' | AnyString
      /**
       * To achieve a similar effect, use the CSS `background-color` property.
       * @deprecated
       */
      bgColor?: Property.Color
      /**
       * To achieve a similar effect, use the CSS `border` property.
       * @deprecated
       */
      border?: Signalish<string>
      /**
       * To achieve a similar effect, apply the `border-collapse` CSS property to the `<table>` element, with its value set to collapse, and the `padding` property to the `<td>` elements.
       * @deprecated
       */
      cellPadding?: Signalish<number | string>
      /**
       * To achieve a similar effect, apply the `border-spacing` CSS property to the `<table>` element. `border-spacing` does not have any effect if `border-collapse` is set to `collapse`.
       * @deprecated
       */
      cellSpacing?: Signalish<number | string>
      /**
       * To achieve a similar effect, use the CSS the `border-style` and `border-width` properties.
       * @deprecated
       */
      frame?: Signalish<string>
      /**
       * Use the `<caption>` element instead
       * @deprecated
       */
      summary?: Signalish<string>
      /**
       * To achieve a similar effect, use the CSS `width` property instead.
       * @deprecated
       */
      width?: Signalish<number | string>
      /**
       * To achieve a similar effect, apply the CSS `border` property to the appropriate `<thead>`, `<tbody>`, `<tfoot>`, `<col>`, or `<colgroup>` elements.
       * @deprecated
       */
      rules?: 'none' | 'groups' | 'rows' | 'cols' | 'all'

      'prop:align'?: 'left' | 'center' | 'right' | AnyString
      'prop:bgColor'?: Signalish<string>
      'prop:border'?: Signalish<string>
      'prop:caption'?: HTMLTableCaptionElement | null
      'prop:cellPadding'?: Signalish<string>
      'prop:cellSpacing'?: Signalish<string>
      'prop:frame'?: Signalish<string>
      'prop:rules'?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
      'prop:summary'?: Signalish<string>
      'prop:tFoot'?: HTMLTableSectionElement | null
      'prop:tHead'?: HTMLTableSectionElement | null
      'prop:width'?: Signalish<string>
    }

    interface HTMLTemplateElementAttributes extends OmitAttrs<HTMLAttributes<HTMLTemplateElement>, RoleKey>, NoRolePermited {
      /**
       * Creates a shadow root for the parent element. It is a declarative version of the `Element.attachShadow()` method and accepts the same enumerated values.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#shadowrootmode
       */
      shadowRootMode?: 'open' | 'closed'
      /**
       * Sets the value of the `clonable` property of a `ShadowRoot` created using this element to `true`. If set, a clone of the shadow host (the parent element of this `<template>`) created with `Node.cloneNode()` or `Document.importNode()` will include a shadow root in the copy
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#shadowrootclonable
       */
      shadowRootClonable?: boolean | ''
      /**
       * Sets the value of the `delegatesFocus` property of a `ShadowRoot` created using this element to `true`. If this is set and a non-focusable element in the shadow tree is selected, then focus is delegated to the first focusable element in the tree. The value defaults to `false`
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#shadowrootclonable
       */
      shadowRootDelegatesFocus?: boolean | ''
      /**
       * Sets the value of the `serializable` property of a `ShadowRoot` created using this element to true. If set, the shadow root may be serialized by calling the `Element.getHTML()` or `ShadowRoot.getHTML()` methods with the `options.serializableShadowRoots` parameter set `true`. The value defaults to `false`
       * @see https://developer.mozilla.org/docs/Web/API/HTMLTemplateElement/shadowRootSerializable
        */
      shadowRootSerializable?: boolean | ''
      /**
       * Sets the `slotAssignment` property of a `ShadowRoot` created using this element. This is the declarative equivalent of the `slotAssignment` option of the `Element.attachShadow()` method
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#shadowrootslotassignment
       */
      shadowRootSlotAssignment?: 'none' | 'manual'
      /**
       * Sets the `customElementRegistry` property of a `ShadowRoot` created using this element to `null`, rather than the document's custom element registry
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/shadowRootCustomElementRegistry
       */
      shadowRootCustomElementRegistry?: Signalish<string>

      'prop:shadowRootClonable'?: Signalish<boolean>
      'prop:shadowRootDelegatesFocus'?: Signalish<boolean>
      'prop:shadowRootMode'?: 'open' | 'closed'
      'prop:shadowRootSerializable'?: Signalish<boolean>
      'prop:shadowRootSlotAssignment'?: 'none' | 'manual'
      'prop:shadowRootCustomElementRegistry'?: Signalish<string>
    }

    interface HTMLTextAreaElementAttributes extends HTMLAttributes<HTMLTextAreaElement> {
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | '' | 'autofocus'
      /**
       * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20
       */
      cols?: Signalish<Numeric>
      dirName?: DirName
      disabled?: boolean | '' | 'disabled'
      form?: Signalish<string>
      maxLength?: Signalish<Numeric>
      minLength?: Signalish<Numeric>
      name?: Signalish<string>
      placeholder?: Signalish<string>
      readOnly?: boolean | '' | 'readonly'
      required?: boolean | '' | 'required'
      /**
       * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2
       */
      rows?: Signalish<Numeric>
      value?: Signalish<number | string>
      wrap?: 'hard' | 'soft' | 'off'
      /** Permitted ARIA roles */
      role?: 'textbox'

      /** @deprecated use `on:selectionChange` instead */
      onselectionchange?: GenericEventHandler<HTMLTextAreaElement>

      'on:selectionChange'?: EventListener<HTMLTextAreaElement>

      'prop:autocomplete'?: AutoFill
      'prop:cols'?: Signalish<number>
      'prop:defaultValue'?: Signalish<string>
      'prop:dirName'?: DirName
      'prop:disabled'?: Signalish<boolean>
      'prop:maxLength'?: Signalish<number>
      'prop:minLength'?: Signalish<number>
      'prop:name'?: Signalish<string>
      'prop:placeholder'?: Signalish<string>
      'prop:readOnly'?: Signalish<boolean>
      'prop:required'?: Signalish<boolean>
      'prop:rows'?: Signalish<number>
      'prop:selectionDirection'?: 'forward' | 'backward' | 'none'
      'prop:selectionEnd'?: Signalish<number>
      'prop:selectionStart'?: Signalish<number>
      'prop:value'?: Signalish<string>
      'prop:wrap'?: 'hard' | 'soft' | 'off'
      'prop:role'?: 'textbox'
    }

    interface HTMLTdElementAttributes extends HTMLAttributes<HTMLTableCellElement> {
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: Signalish<Numeric>
      headers?: Signalish<string>
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
      rowSpan?: Signalish<Numeric>
      /**
       * Do not use this attribute as it is obsolete in the l atest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the title attribute.
       * @deprecated
       */
      abbr?: Signalish<string>
      /**
       * To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS `text-align` property to the element, the `char` value, give the `text-align` property the same value you would use for the `char`.
       * @deprecated
       */
      align?: 'left' | 'center' | 'right' | 'justify' | 'char'
      /** @deprecated */
      axis?: Signalish<string>
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property
       * @deprecated
       */
      char?: Signalish<string>
      /** @deprecated */
      charoff?: Signalish<string>
      /**
       * Only use this attribute with the `<th>` element to define the row or column for which it is a header
       * @deprecated
       */
      scope?: Signalish<string>
      /**
       * To achieve a similar effect, use the CSS `height` property instead
       * @deprecated
       */
      height?: Signalish<number | string>
      /**
       * To achieve a similar effect,use the CSS `width` property instead
       * @deprecated
       */
      width?: Signalish<number | string>
      /**
       * To achieve a similar effect, use the CSS `vertical-align` property
       * @deprecated
       */
      valign?: 'top' | 'middle' | 'bottom' | 'baseline'

      'prop:abbr'?: Signalish<string>
      'prop:align'?: 'left' | 'center' | 'right' | 'justify' | 'char'
      'prop:axis'?: Signalish<string>
      'prop:bgColor'?: Property.Color
      'prop:ch'?: Signalish<string>
      'prop:chOff'?: Signalish<string>
      'prop:colSpan'?: Signalish<number>
      'prop:headers'?: Signalish<string>
      'prop:height'?: Signalish<string>
      'prop:noWrap'?: Signalish<boolean>
      'prop:rowSpan'?: Signalish<number>
      'prop:scope'?: Signalish<string>
      'prop:vAlign'?: 'top' | 'middle' | 'bottom' | 'baseline'
      'prop:width'?: Signalish<string>
    }

    interface HTMLThElementAttributes extends HTMLAttributes<HTMLTableCellElement> {
      abbr?: Signalish<string>
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: Signalish<Numeric>
      headers?: Signalish<string>
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
      rowSpan?: Signalish<Numeric>
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
      char?: Signalish<string>
      /**
       * To achieve a similar effect, use the CSS `background-color` property
       * @deprecated
       */
      bgColor?: Property.Color
      /**
       * To achieve the same effect, you can specify the character as the first value of the `text-align` property.
       * @deprecated
       */
      char?: Signalish<string>
      /** @deprecated */
      charoff?: Signalish<string>
      /**
       * To achieve a similar effect, use the CSS `height` property instead.
       * @deprecated
       */
      height?: Signalish<number | string>
      /**
       * To achieve a similar effect,use the CSS `width` property instead
       * @deprecated
       */
      width?: Signalish<number | string>
      /**
       * To achieve a similar effect, use the CSS `vertical-align` property
       * @deprecated
       */
      valign?: 'top' | 'middle' | 'bottom' | 'baseline'

      'prop:abbr'?: Signalish<string>
      'prop:align'?: 'left' | 'center' | 'right' | 'justify' | 'char'
      'prop:axis'?: Signalish<string>
      'prop:bgColor'?: Property.Color
      'prop:ch'?: Signalish<string>
      'prop:chOff'?: Signalish<string>
      'prop:colSpan'?: Signalish<number>
      'prop:headers'?: Signalish<string>
      'prop:height'?: Signalish<string>
      'prop:noWrap'?: Signalish<boolean>
      'prop:rowSpan'?: Signalish<number>
      'prop:scope'?: 'row' | 'col' | 'rowgroup' | 'colgroup'
      'prop:vAlign'?: 'top' | 'middle' | 'bottom' | 'baseline'
      'prop:width'?: Signalish<string>
    }

    interface HTMLTableSectionElementAttributes extends HTMLAttributes<HTMLTableSectionElement> {
    }

    interface HTMLTrElementAttributes extends HTMLAttributes<HTMLTableRowElement> {
    }

    interface HTMLTimeElementAttributes extends HTMLAttributes<HTMLTimeElement> {
      /**
       * Indicates the time and/or date in the machine-readable format, allowing for better search engine results or custom features such as reminders
       */
      dateTime?: Signalish<string>
      'prop:dateTime'?: Signalish<string>
    }

    interface HTMLTitleElementAttributes extends OmitAttrs<HTMLAttributes<HTMLTitleElement>, RoleKey>, NoRolePermited {
    }

    interface HTMLTrackElementAttributes extends OmitAttrs<HTMLAttributes<HTMLTrackElement>, 'children' | RoleKey>, VoidElement, NoRolePermited {
      default?: boolean | '' | 'default'
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
      label?: Signalish<string>
      src?: Signalish<string>
      srclang?: Signalish<string>
      /** @deprecated use `on:cueChange` instead */
      oncuechange?: GenericEventHandler<HTMLTrackElement>

      'on:cueChange'?: EventListener<HTMLTrackElement>

      'prop:default'?: Signalish<boolean>
      'prop:kind'?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
      'prop:label'?: Signalish<string>
      'prop:src'?: Signalish<string>
      'prop:srclang'?: Signalish<string>
    }

    interface HTMLVideoElementAttributes extends HTMLMediaAttributes<HTMLVideoElement> {
      height?: Signalish<number | string>
      playsInline?: boolean | '' | 'playsinline'
      poster?: Signalish<string>
      width?: number | string
      disablePictureInPicture?: boolean | ''
      /** @deprecated use `on:enterPictureInPicture` instead */
      onenterpictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>
      /** @deprecated use `on:leavePictureInPicture` instead */
      onleavepictureinpicture?: PictureInPictureEventHandler<HTMLVideoElement>
      /** @deprecated use `on:resize` instead */
      onresize?: PictureInPictureEventHandler<HTMLVideoElement>

      'on:enterPictureInPicture'?: PictureInPictureEventListener<HTMLVideoElement>
      'on:leavePictureInPicture'?: PictureInPictureEventListener<HTMLVideoElement>
      'on:resize'?: PictureInPictureEventListener<HTMLVideoElement>

      'prop:disablePictureInPicture'?: Signalish<boolean>
      'prop:height'?: Signalish<number>
      'prop:playsInline'?: Signalish<boolean>
      'prop:poster'?: Signalish<string>
      'prop:width'?: Signalish<number>
    }

    interface HTMLWbrElementAttributes extends OmitAttrs<HTMLElementAttributes, 'children'>, VoidElement {
      /** Permitted ARIA roles */
      role?: 'none' | 'presentation'

      'prop:role'?: 'none' | 'presentation'
    }

    interface HTMLWebViewElementAttributes extends HTMLAttributes<HTMLWebViewElement> {
      allowFullScreen?: boolean
      allowpopups?: boolean
      autofocus?: boolean | ''
      autosize?: boolean
      blinkfeatures?: Signalish<string>
      disableblinkfeatures?: Signalish<string>
      disableguestresize?: boolean
      disablewebsecurity?: boolean
      guestinstance?: Signalish<string>
      httpreferrer?: Signalish<string>
      nodeintegration?: boolean
      partition?: Signalish<string>
      plugins?: boolean
      preload?: Signalish<string>
      src?: Signalish<string>
      useragent?: Signalish<string>
      webpreferences?: Signalish<string>
    }

    interface HTMLMarqueeElementAttributes extends HTMLAttributes<HTMLMarqueeElement> {
      behavior?: 'scroll' | 'slide' | 'alternate'
      bgColor?: Property.Color
      direction?: 'left' | 'right' | 'up' | 'down'
      height?: Signalish<number | string>
      hspace?: Signalish<number | string>
      loop?: Signalish<number | string>
      scrollAmount?: Signalish<number | string>
      scrollDelay?: Signalish<number | string>
      trueSpeed?: boolean | ''
      vspace?: Signalish<number | string>
      width?: Signalish<number | string>

      'prop:behavior'?: 'scroll' | 'slide' | 'alternate'
      'prop:bgColor'?: Property.Color
      'prop:direction'?: 'left' | 'right' | 'up' | 'down'
      'prop:height'?: Signalish<string>
      'prop:hspace'?: Signalish<number>
      'prop:loop'?: Signalish<number>
      'prop:scrollAmount'?: Signalish<number>
      'prop:scrollDelay'?: Signalish<number>
      'prop:trueSpeed'?: Signalish<boolean>
      'prop:vspace'?: Signalish<number>
      'prop:width'?: Signalish<string>
    }

    interface HTMLUlElementAttributes extends HTMLAttributes<HTMLUListElement> {
      /** Permitted ARIA roles */
      role?:
      | 'list'
      | 'group'
      | 'listbox'
      | 'menu'
      | 'menubar'
      | 'none'
      | 'presentation'
      | 'radiogroup'
      | 'tablist'
      | 'toolbar'
      | 'tree'

      'prop:role'?: HTMLUlElementAttributes['role']
    }

    interface HTMLUnknownElementAttributes extends HTMLAttributes<HTMLUnknownElement> {
    }

    interface HTMLElementAttributes extends HTMLAttributes<HTMLElement> {
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
      align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | AnyString
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | AnyString
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines
       */
      columnlines?: 'dashed' | 'none' | 'solid' | AnyString
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
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | AnyString
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines
       */
      rowlines?: 'dashed' | 'none' | 'solid' | AnyString
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
      columnspan?: Numeric
      rowspan?: Numeric
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | AnyString
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign
       */
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | AnyString
    }

    interface MathMLMTrElementAttributes extends MathMLAttributes {
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign
       */
      columnalign?: 'center' | 'left' | 'right' | AnyString
      /**
       * Non-standard attribute
       * @see https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign
       */
      rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | AnyString
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
      abbr: HTMLAbbrElementAttributes
      address: HTMLAddressElementAttributes
      area: HTMLAreaElementAttributes
      article: HTMLArticleElementAttributes
      aside: HTMLAsideElementAttributes
      audio: HTMLAudioElementAttributes
      b: HTMLBElementAttributes
      base: HTMLBaseElementAttributes
      bdi: HTMLBdiElementAttributes
      bdo: HTMLBdoElementAttributes
      blockquote: HTMLQuoteElementAttributes
      body: HTMLBodyElementAttributes
      br: HTMLBrElementAttributes
      button: HTMLButtonElementAttributes
      canvas: HTMLCanvasElementAttributes
      caption: HTMLCaptionElementAttributes
      cite: HTMLCiteElementAttributes
      code: HTMLCodeElementAttributes
      col: HTMLColElementAttributes
      colgroup: HTMLColgroupElementAttributes
      data: HTMLDataElementAttributes
      datalist: HTMLDataListElementAttributes
      dd: HTMLDdElementAttributes
      del: HTMLModElementAttributes
      details: HTMLDetailsElementAttributes
      dfn: HTMLDfnElementAttributes
      dialog: HTMLDialogElementAttributes
      div: HTMLDivElementAttributes
      dl: HTMLDlElementAttributes
      dt: HTMLDtElementAttributes
      em: HTMLEmElementAttributes
      embed: HTMLEmbedElementAttributes
      fieldset: HTMLFieldSetElementAttributes
      figcaption: HTMLFigcaptionElementAttributes
      figure: HTMLFigureElementAttributes
      footer: HTMLFooterElementAttributes
      form: HTMLFormElementAttributes
      h1: HTMLHeadingElementAttributes
      h2: HTMLHeadingElementAttributes
      h3: HTMLHeadingElementAttributes
      h4: HTMLHeadingElementAttributes
      h5: HTMLHeadingElementAttributes
      h6: HTMLHeadingElementAttributes
      head: HTMLHeadElementAttributes
      header: HTMLHeaderElementAttributes
      hgroup: HTMLHGroupElementAttributes
      hr: HTMLHrElementAttributes
      html: HTMLHtmlElementAttributes
      i: HTMLIElementAttributes
      iframe: HTMLIFrameElementAttributes
      img: HTMLImageElementAttributes
      input: HTMLInputElementAttributes
      ins: HTMLModElementAttributes
      kbd: HTMLKbdElementAttributes
      label: HTMLLabelElementAttributes
      legend: HTMLLegendElementAttributes
      li: HTMLLIElementAttributes
      link: HTMLLinkElementAttributes
      main: HTMLMainElementAttributes
      map: HTMLMapElementAttributes
      mark: HTMLMarkElementAttributes
      menu: HTMLMenuElementAttributes
      menuitem: HTMLUnknownElementAttributes
      meta: HTMLMetaElementAttributes
      meter: HTMLMeterElementAttributes
      nav: HTMLNavElementAttributes
      noindex: HTMLUnknownElementAttributes
      noscript: HTMLNoScriptElementAttributes
      object: HTMLObjectElementAttributes
      ol: HTMLOListElementAttributes
      optgroup: HTMLOptGroupElementAttributes
      option: HTMLOptionElementAttributes
      output: HTMLOutputElementAttributes
      p: HTMLPElementAttributes
      picture: HTMLPictureElementAttributes
      pre: HTMLPreElementAttributes
      progress: HTMLProgressElementAttributes
      q: HTMLQuoteElementAttributes
      rp: HTMLElementAttributes
      rt: HTMLElementAttributes
      ruby: HTMLElementAttributes
      s: HTMLElementAttributes
      samp: HTMLElementAttributes
      script: HTMLScriptElementAttributes
      search: HTMLSearchElementAttributes
      section: HTMLElementAttributes
      select: HTMLSelectElementAttributes
      slot: HTMLSlotElementAttributes
      small: HTMLElementAttributes
      source: HTMLSourceElementAttributes
      span: HTMLSpanElementAttributes
      strong: HTMLElementAttributes
      style: HTMLStyleElementAttributes
      sub: HTMLElementAttributes
      summary: HTMLElementAttributes
      sup: HTMLElementAttributes
      table: HTMLTableElementAttributes
      template: HTMLTemplateElementAttributes
      tbody: HTMLTableSectionElementAttributes
      td: HTMLTdElementAttributes
      textarea: HTMLTextAreaElementAttributes
      tfoot: HTMLTableSectionElementAttributes
      th: HTMLThElementAttributes
      thead: HTMLTableSectionElementAttributes
      time: HTMLTimeElementAttributes
      title: HTMLTitleElementAttributes
      tr: HTMLTrElementAttributes
      track: HTMLTrackElementAttributes
      u: HTMLElementAttributes
      ul: HTMLUlElementAttributes
      var: HTMLElementAttributes
      video: HTMLVideoElementAttributes
      wbr: HTMLWbrElementAttributes
      webview: HTMLWebViewElementAttributes

      // Deprecated HTML

      /** @deprecated */
      acronym: HTMLAcronymElementAttributes
      /** @deprecated */
      big: HTMLBigElementAttributes
      /** @deprecated */
      blink: HTMLUnknownElementAttributes
      /** @deprecated */
      center: HTMLCenterElementAttributes
      /** @deprecated */
      dir: HTMLDirElementAttributes
      /** @deprecated */
      font: HTMLFontElementAttributes
      /** @deprecated */
      keygen: HTMLUnknownElementAttributes
      /** @deprecated */
      marquee: HTMLMarqueeElementAttributes
      /** @deprecated */
      nobr: HTMLNoBrElementAttributes
      /** @deprecated */
      noembed: HTMLUnknownElementAttributes
      /** @deprecated */
      noframes: HTMLUnknownElementAttributes
      /** @deprecated */
      param: HTMLParamElementAttributes
      /** @deprecated */
      plaintext: HTMLPlainTextElementAttributes
      /** @deprecated */
      rb: HTMLElementAttributes
      /** @deprecated */
      strike: HTMLElementAttributes
      /** @deprecated */
      tt: HTMLElementAttributes
      /** @deprecated */
      xmp: HTMLPreElementAttributes

      // Non-standard HTML

      /**
       * Non-standard element, only supported in Chrome and Edge.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fencedframe
       */
      fencedframe: HTMLElementAttributes
      /**
       * Non-standard element, only supported in Chrome and Edge.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/geolocation
       */
      geolocation: HTMLElementAttributes
      /**
       * Non-standard element, only supported in Chrome and Edge.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/selectedcontent
       */
      selectedcontent: HTMLElementAttributes

      // SVG

      animate: SVGAnimationElementAttributes<SVGAnimateElement>
      animateMotion: SVGAnimationElementAttributes<SVGAnimateMotionElement>
      animateTransform: SVGAnimationElementAttributes<SVGAnimateTransformElement>
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
      set: SVGAnimationElementAttributes<SVGSetElement>
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
