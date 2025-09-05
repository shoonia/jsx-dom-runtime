/// <reference lib="dom" />
/// <reference lib="es2024" />
import type { Properties, Property } from 'csstype';

type AnyString = string & {}
type Booleanish = boolean | 'true' | 'false'
type Numeric = number | `${number}`

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
  | JSXChild[]

export interface RefObject<T> {
  readonly current: T
}

export type RefCallback<T> = (instance: T) => void

export type PropsWithChildren<P> = P & { children?: JSXChild | JSXChild[] }

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
  props: K extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[K]
    : JSX.HTMLAttributes<R>,
  children?: JSXChild | JSXChild[]
): R

export type FunctionComponent<P = {}> = JSX.FC<P>
export { FunctionComponent as FC };

export declare const extensions: Map<
  string,
  (node: Element, value: any, key: string) => void
>;

export declare const svgNs = 'http://www.w3.org/2000/svg';
export declare const mathmlNs = 'http://www.w3.org/1998/Math/MathML';

export declare function useRef<T = any>(current?: T): RefObject<T>
export declare function useText<T = string>(initContent?: T): readonly [
  Text,
  (content: T) => void
]

export declare function parseFromString(html: string): DocumentFragment
export declare function Fragment(children?: JSXChild | JSXChild[]): DocumentFragment
export declare function Template(props: { children: string }): DocumentFragment

/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent) */
interface CommandEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent/source) */
  readonly source: Element | null;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/CommandEvent/command) */
  readonly command: CommandEventType;
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

/**
 * All the WAI-ARIA 1.2 role attribute values
 * @see https://www.w3.org/TR/wai-aria-1.2/#role_definitions
 * All the Digital Publishing WAI-ARIA 1.0 role attribute values
 * @see https://www.w3.org/TR/dpub-aria-1.0/#role_definitions
 */
type AriaRoles =
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
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
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
  'aria-colcount'?: Numeric
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numeric
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see aria-rowindextext.
   */
  'aria-colindextext'?: string
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numeric
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
  'aria-level'?: Numeric
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
  'aria-posinset'?: Numeric
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
  'aria-rowcount'?: Numeric
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numeric
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see aria-colindextext.
   */
  'aria-rowindextext'?: string
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numeric
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numeric
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numeric
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numeric
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numeric
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string

  'prop:ariaActivedescendant'?: string
  'prop:ariaAtomic'?: Booleanish
  'prop:ariaAutocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'prop:ariaBraillelabel'?: string
  'prop:ariaBrailleroledescription'?: string
  'prop:ariaBusy'?: Booleanish
  'prop:ariaChecked'?: Booleanish | 'mixed'
  'prop:ariaColcount'?: Numeric
  'prop:ariaColindex'?: Numeric
  'prop:ariaColindextext'?: string
  'prop:ariaColspan'?: Numeric
  'prop:ariaControls'?: string
  'prop:ariaCurrent'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  'prop:ariaDescribedby'?: string
  'prop:ariaDescription'?: string
  'prop:ariaDetails'?: string
  'prop:ariaDisabled'?: Booleanish
  'prop:ariaDropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  'prop:ariaErrormessage'?: string
  'prop:ariaExpanded'?: Booleanish
  'prop:ariaFlowto'?: string
  'prop:ariaGrabbed'?: Booleanish
  'prop:ariaHaspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  'prop:ariaHidden'?: Booleanish
  'prop:ariaInvalid'?: Booleanish | 'grammar' | 'spelling'
  'prop:ariaKeyshortcuts'?: string
  'prop:ariaLabel'?: string
  'prop:ariaLabelledby'?: string
  'prop:ariaLevel'?: Numeric
  'prop:ariaLive'?: 'off' | 'assertive' | 'polite'
  'prop:ariaModal'?: Booleanish
  'prop:ariaMultiline'?: Booleanish
  'prop:ariaMultiselectable'?: Booleanish
  'prop:ariaOrientation'?: 'horizontal' | 'vertical'
  'prop:ariaOwns'?: string
  'prop:ariaPlaceholder'?: string
  'prop:ariaPosinset'?: Numeric
  'prop:ariaPressed'?: Booleanish | 'mixed'
  'prop:ariaReadonly'?: Booleanish
  'prop:ariaRelevant'?:
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
  'prop:ariaRequired'?: Booleanish
  'prop:ariaRoledescription'?: string
  'prop:ariaRowcount'?: Numeric
  'prop:ariaRowindex'?: Numeric
  'prop:ariaRowindextext'?: string
  'prop:ariaRowspan'?: Numeric
  'prop:ariaSelected'?: Booleanish
  'prop:ariaSetsize'?: Numeric
  'prop:ariaSort'?: 'none' | 'ascending' | 'descending' | 'other'
  'prop:ariaValuemax'?: Numeric
  'prop:ariaValuemin'?: Numeric
  'prop:ariaValuenow'?: Numeric
  'prop:ariaValuetext'?: string
}

interface AnyRole {
  /** Any `role` permitted */
  role?: AriaRoles
  'prop:role'?: AriaRoles
}

interface NoRolePermitted {
  /** No `role` permitted */
  role?: never
  'prop:role'?: never
}

type AnchorAriaRoles =
  | {
    href: string
    role?:
    | 'link'
    | 'button'
    | 'checkbox'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'radio'
    | 'switch'
    | 'tab'
    | 'treeitem'
    | 'doc-backlink'
    | 'doc-biblioref'
    | 'doc-glossref'
    | 'doc-noteref'
  }
  | {
    href?: never;
    role?: AriaRoles
  }

export type AreaAriaRoles =
  | {
    href: string
    role?: 'link'
  }
  | {
    href?: never
    role?: 'button' | 'link'
  };

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

    interface Attributes {
      accessKey?: string
      class?: string
      /**
       * Making document regions editable
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable
       */
      contentEditable?: '' | 'plaintext-only' | Booleanish
      /**
       * This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes
       * @deprecated
       */
      contextMenu?: string
      dir?: DirName | 'auto'
      /**
       * This attribute is enumerated and not Boolean. A value of `true` or `false` is mandatory, and shorthand like `<img draggable>` is forbidden. The correct usage is `<img draggable="true">`
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Enumerated
       */
      draggable?: 'true' | 'false'
      enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
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
      tabIndex?: Numeric
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
      results?: Numeric
      security?: string
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
      /**
       * In browsers that support them, writing suggestions are enabled by default. To disable them, set the writingsuggestions attribute's value to `false`. Setting the attribute's value to `true`, or omitting the value, enables writing suggestions
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/writingsuggestions
       */
      writingsuggestions?: Booleanish | ''
    }

    interface JSXDirectives<T> {
      // Attributes
      [key: `attr:${string}`]: string | number | bigint | null | undefined

      // Properties
      'prop:nodeValue'?: string | null
      'prop:classList'?: string
      'prop:className'?: string
      'prop:id'?: string
      'prop:innerHTML'?: string
      'prop:outerHTML'?: string
      'prop:part'?: string
      'prop:scrollLeft'?: number
      'prop:scrollTop'?: number
      'prop:slot'?: string
      'prop:accessKey'?: string
      'prop:autocapitalize'?: 'none' | 'off' | 'on' | 'sentences' | 'words' | 'characters'
      'prop:autocorrect'?: 'on' | 'off'
      'prop:autofocus'?: boolean
      'prop:contentEditable'?: 'true' | 'false' | 'plaintext-only'
      'prop:dir'?: DirName | 'auto' | ''
      'prop:draggable'?: 'true' | 'false'
      'prop:enterKeyHint'?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
      'prop:hidden'?: boolean
      'prop:inert'?: boolean
      'prop:innerText'?: string
      'prop:inputMode'?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
      'prop:lang'?: string
      'prop:outerText'?: string
      'prop:popover'?: 'auto' | 'manual' | 'hint' | null
      'prop:spellcheck'?: 'true' | 'false'
      'prop:tabIndex'?: number
      'prop:title'?: string
      'prop:translate'?: 'yes' | 'no'
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

    interface HTMLAttributes<T> extends AriaAttributes, Attributes, JSXDirectives<T> {
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
      contentScriptType?: string
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
      'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit'
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

    type HTMLAnchorElementAttributes = AnchorAriaRoles & HTMLAttributes<HTMLAnchorElement> & {
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
      type?: string
      referrerPolicy?: ReferrerPolicy
      /**
       * SVG 2 removed the need for the `xlink` namespace, so instead of `xlink:href` you should use `href`
       * @deprecated
       */
      'xlink:href'?: string

      'prop:charset'?: string
      'prop:coords'?: string
      'prop:download'?: string
      'prop:hreflang'?: string
      'prop:name'?: string
      'prop:ping'?: string
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:rel'?: HTMLAnchorElementAttributes['rel']
      'prop:relList'?: string
      'prop:rev'?: string
      'prop:shape'?: string
      'prop:target'?: Target
      'prop:text'?: string
      'prop:type'?: string
      'prop:hash'?: string
      'prop:host'?: string
      'prop:hostname'?: string
      'prop:href'?: string
      'prop:password'?: string
      'prop:pathname'?: string
      'prop:port'?: string
      'prop:protocol'?: string
      'prop:search'?: string
      'prop:username'?: string
    }

    type HTMLAudioElementAttributes = HTMLMediaAttributes<HTMLAudioElement>

    type HTMLAreaElementAttributes = AreaAriaRoles & HTMLAttributes<HTMLAreaElement> & {
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
      nohref?: string
      /** @deprecated */
      tabIndex?: Numeric
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    type HTMLBaseElementAttributes = HTMLAttributes<HTMLBaseElement> & {
      href?: string
      target?: Target
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:href'?: string
      'prop:target'?: Target
    }

    type HTMLBRElementAttributes = HTMLAttributes<HTMLBRElement> & {
      /** @deprecated */
      clear?: string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
      */
      children?: null

      'prop:clear'?: string
    }

    type HTMLButtonElementAttributes = HTMLAttributes<HTMLButtonElement> & {
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
      formEnctype?: FormEnctype
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: FormMethod
      formNoValidate?: boolean | ''
      /**
       * If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form
       */
      formTarget?: Target
      name?: string
      type?: 'submit' | 'reset' | 'button'
      value?: number | string
      popovertarget?: string
      popovertargetaction?: 'hide' | 'show' | 'toggle'
      /**
       * Specifies the action to be performed on an element being controlled by a control `<button>`, specified via the `commandfor` attribute.
       */
      command?: CommandEventType
      /**
       * Turns a <button> element into a command button, controlling the given interactive element; takes the ID of the element to control as its value. This is a more general version of `popovertarget`.
       */
      commandfor?: string
      /** Permitted ARIA role */
      role?:
      | 'checkbox'
      | 'combobox'
      | 'link'
      | 'menuitem'
      | 'menuitemcheckbox'
      | 'menuitemradio'
      | 'option'
      | 'radio'
      | 'switch'
      | 'tab'

      'prop:command'?: CommandEventType
      'prop:commandForElement'?: globalThis.Element | null
      'prop:disabled'?: boolean
      'prop:formAction'?: string
      'prop:formEnctype'?: FormEnctype
      'prop:formMethod'?: FormMethod
      'prop:formNoValidate'?: boolean
      'prop:formTarget'?: Target
      'prop:name'?: string
      'prop:type'?: 'submit' | 'reset' | 'button'
      'prop:value'?: string
      'prop:popoverTargetAction'?: 'hide' | 'show' | 'toggle'
      'prop:popoverTargetElement'?: globalThis.Element | null
      'prop:role'?: HTMLButtonElementAttributes['role']
    }

    type HTMLCanvasElementAttributes = HTMLAttributes<HTMLCanvasElement> & {
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

      'prop:height'?: number
      'prop:width'?: number
    }

    type HTMLTableColElementAttributes = HTMLAttributes<HTMLTableColElement> & {
      span?: Numeric
      width?: number | string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:align'?: string
      'prop:ch'?: string
      'prop:chOff'?: string
      'prop:span'?: number
      'prop:vAlign'?: string
      'prop:width'?: string
    }

    type HTMLDataElementAttributes = HTMLAttributes<HTMLDataElement> & {
      value?: number | string

      'prop:value'?: string
    }

    type HTMLDetailsElementAttributes = HTMLAttributes<HTMLDetailsElement> & {
      name?: string
      open?: boolean | ''

      'prop:name'?: string
      'prop:open'?: boolean
    }

    type HTMLDivElementAttributes = AnyRole & HTMLAttributes<HTMLDivElement>

    type HTMLModElementAttributes = HTMLAttributes<HTMLModElement> & {
      cite?: string
      dateTime?: string

      'prop:cite'?: string
      'prop:dateTime'?: string
    }

    type HTMLDialogElementAttributes = HTMLAttributes<HTMLDialogElement> & {
      open?: boolean | ''
      /**
       * Do not add the `tabindex` property to the `<dialog>` element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.
       * @deprecated
       */
      tabIndex?: Numeric
      /**
       * Specifies the types of user actions that can be used to close the `<dialog>` element
       */
      closedBy?: 'any' | 'closerequest' | 'none'
      /** @deprecated use `on:close` instead */
      onclose?: GenericEventHandler<HTMLDialogElement>
      /** @deprecated use `on:cancel` instead */
      oncancel?: GenericEventHandler<HTMLDialogElement>

      'on:close'?: EventListener<HTMLDialogElement>
      'on:cancel'?: EventListener<HTMLDialogElement>

      'prop:open'?: boolean
      'prop:closedBy'?: 'any' | 'closerequest' | 'none'
      'prop:returnValue'?: string
    }

    type HTMLEmbedElementAttributes = HTMLAttributes<HTMLEmbedElement> & {
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

      'prop:align'?: string
      'prop:height'?: string
      'prop:name'?: string
      'prop:src'?: string
      'prop:type'?: string
      'prop:width'?: string
    }

    type HTMLFieldSetElementAttributes = HTMLAttributes<HTMLFieldSetElement> & {
      disabled?: boolean | ''
      form?: string
      name?: string

      'prop:name'?: string
      'prop:disabled'?: boolean

      role?: 'radiogroup' | 'presentation' | 'none'
      'prop:role'?: 'radiogroup' | 'presentation' | 'none'
    }

    type HTMLFigcaptionElementAttributes = HTMLAttributes<HTMLElement> & {
      /** Permitted ARIA roles */
      role?: 'group' | 'presentation' | 'none'
      'prop:role'?: HTMLFigcaptionElementAttributes['role']
    }

    type HTMLFooterElementAttributes = HTMLAttributes<HTMLElement> & {
      /** Permitted ARIA roles */
      role?: 'group' | 'presentation' | 'none'

      'prop:role'?: HTMLFooterElementAttributes['role']
    }

    type HTMLFormElementAttributes = HTMLAttributes<HTMLFormElement> & {
      /**
       * Comma-separated content types the server accepts
       * @deprecated
       */
      accept?: string
      'accept-charset'?: 'UTF-8' | 'ISO-8859-1' | 'US-ASCII' | AnyString
      action?: string
      autocomplete?: boolean | AutoFillBase
      enctype?: FormEnctype
      /**
       * The HTTP method to submit the form with. The only allowed methods/values are (case insensitive)
       */
      method?: FormMethod
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
      | AnyString
      noValidate?: boolean | ''
      target?: Target
      /** Permitted ARIA roles */
      role?: 'search' | 'none' | 'presentation'
      /** @deprecated  use `on:formData` instead */
      onformdata?: FormDataEventHandler<HTMLFormElement>

      'on:formData'?: FormDataEventListener<HTMLFormElement>

      'prop:acceptCharset'?: 'UTF-8' | 'ISO-8859-1' | 'US-ASCII' | AnyString
      'prop:action'?: string
      'prop:autocomplete'?: AutoFillBase
      'prop:encoding'?: FormEnctype
      'prop:enctype'?: FormEnctype
      'prop:method'?: FormMethod
      'prop:name'?: string
      'prop:noValidate'?: boolean
      'prop:rel'?: HTMLFormElementAttributes['rel']
      'prop:relList'?: string
      'prop:target'?: Target
      'prop:role'?: HTMLFormElementAttributes['role']
    }

    type HTMLHeadingElementAttributes = HTMLAttributes<HTMLHeadingElement> & {
      /** Permitted ARIA roles */
      role?: 'tab' | 'presentation' | 'none';

      'prop:role'?: HTMLHeadingElementAttributes['role']
    }

    type HTMLHeadElementAttributes = NoRolePermitted & HTMLAttributes<HTMLHeadElement>;

    type HTMLHeaderElementAttributes = HTMLAttributes<HTMLElement> & {
      /** Permitted ARIA roles */
      role?: 'group' | 'presentation' | 'none';

      'prop:role'?: HTMLHeaderElementAttributes['role']
    }

    type HTMLHRElementAttributes = HTMLAttributes<HTMLHRElement> & {
      /**
       * Sets or retrieves how the object is aligned with adjacent text.
       * @deprecated
       */
      align?: string
      /** @deprecated */
      color?: Property.Color
      /**
       * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
       * @deprecated
       */
      noShade?: boolean | ''
      /** @deprecated */
      size?: string
      /**
       * Sets or retrieves the width of the object.
       * @deprecated
       */
      width?: string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
      /** Permitted ARIA roles */
      role?: 'presentation' | 'none'

      'prop:align'?: string
      'prop:color'?: Property.Color
      'prop:noShade'?: boolean
      'prop:size'?: string
      'prop:width'?: string
      'prop:role'?: HTMLHRElementAttributes['role']
    }

    type HTMLHtmlElementAttributes = NoRolePermitted & HTMLAttributes<HTMLHtmlElement> & {
      manifest?: string
      /** @deprecated */
      version?: string
      xmlns?: string
    }

    type HTMLIFrameElementAttributes = HTMLAttributes<HTMLIFrameElement> & {
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
      /** @deprecated */
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
      marginHeight?: Numeric
      /** @deprecated */
      marginWidth?: Numeric
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
      | AnyString
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
      /** Permitted ARIA roles */
      role?: 'application' | 'document' | 'img' | 'none' | 'presentation'

      'prop:align'?: string
      'prop:allow'?: string
      'prop:allowFullscreen'?: boolean
      'prop:frameBorder'?: string
      'prop:height'?: string
      'prop:loading'?: 'eager' | 'lazy'
      'prop:longDesc'?: string
      'prop:marginHeight'?: string
      'prop:marginWidth'?: string
      'prop:name'?: string
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:sandbox'?: HTMLIFrameElementAttributes['sandbox']
      'prop:scrolling'?: 'auto' | 'yes' | 'no'
      'prop:src'?: string
      'prop:srcdoc'?: string
      'prop:width'?: string
      'prop:role'?: HTMLIFrameElementAttributes['role']
    }

    type HTMLImageElementAttributes = HTMLAttributes<HTMLImageElement> & {
      alt?: string
      crossOrigin?: CrossOrigin
      decoding?: 'async' | 'sync' | 'auto'
      height?: number | string
      /**
       * This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server
       */
      ismap?: boolean | ''
      loading?: 'eager' | 'lazy'
      referrerPolicy?: ReferrerPolicy
      sizes?: string
      src?: string
      srcset?: string
      useMap?: string
      width?: number | string
      fetchPriority?: FetchPriority
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:align'?: string
      'prop:alt'?: string
      'prop:border'?: string
      'prop:crossOrigin'?: string | null
      'prop:decoding'?: 'async' | 'sync' | 'auto'
      'prop:fetchPriority'?: FetchPriority
      'prop:height'?: number
      'prop:hspace'?: number
      'prop:isMap'?: boolean
      'prop:loading'?: 'eager' | 'lazy'
      'prop:longDesc'?: string
      'prop:lowsrc'?: string
      'prop:name'?: string
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:sizes'?: string
      'prop:src'?: string
      'prop:srcset'?: string
      'prop:useMap'?: string
      'prop:vspace'?: number
      'prop:width'?: number
    }

    type HTMLInputElementAttributes = HTMLAttributes<HTMLInputElement> & {
      accept?: string
      alt?: string
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | ''
      /**
       * The capture attribute is supported on the `file` input type.
       */
      capture?: boolean | 'user' | 'environment' | ''
      checked?: boolean | ''
      crossOrigin?: CrossOrigin
      disabled?: boolean | ''
      dirName?: DirName
      form?: string
      /**
       * URL to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formAction?: string
      /**
       * Form data set encoding type to use for form submission. Attribute is only used for inputs with `type="submit"` or `type="image"`
       */
      formEnctype?: FormEnctype
      /**
       * A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form
       */
      formMethod?: FormMethod
      formNoValidate?: boolean | ''
      formTarget?: Target
      height?: number | string
      list?: string
      max?: number | string
      maxLength?: Numeric
      min?: number | string
      minLength?: Numeric
      multiple?: boolean | ''
      name?: string
      pattern?: string
      placeholder?: string
      readOnly?: boolean | ''
      required?: boolean | ''
      size?: Numeric
      src?: string
      step?: Numeric
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

      'prop:accept'?: string
      'prop:align'?: string
      'prop:alt'?: string
      'prop:autocomplete'?: AutoFill
      'prop:capture'?: string
      'prop:checked'?: boolean
      'prop:defaultChecked'?: boolean
      'prop:defaultValue'?: string
      'prop:dirName'?: DirName
      'prop:disabled'?: boolean
      'prop:files'?: FileList | null
      'prop:formAction'?: string
      'prop:formEnctype'?: FormEnctype
      'prop:formMethod'?: FormMethod
      'prop:formNoValidate'?: boolean
      'prop:formTarget'?: Target
      'prop:height'?: number
      'prop:indeterminate'?: boolean
      'prop:max'?: string
      'prop:maxLength'?: number
      'prop:min'?: string
      'prop:minLength'?: number
      'prop:multiple'?: boolean
      'prop:name'?: string
      'prop:pattern'?: string
      'prop:placeholder'?: string
      'prop:readOnly'?: boolean
      'prop:required'?: boolean
      'prop:selectionDirection'?: 'forward' | 'backward' | 'none' | null
      'prop:selectionEnd'?: number | null
      'prop:selectionStart'?: number | null
      'prop:size'?: number
      'prop:src'?: string
      'prop:step'?: string
      'prop:type'?: HTMLInputElementAttributes['type']
      'prop:useMap'?: string
      'prop:value'?: string
      'prop:valueAsDate'?: Date | null
      'prop:valueAsNumber'?: number
      'prop:webkitdirectory'?: boolean
      'prop:width'?: number
    }

    type HTMLLabelElementAttributes = NoRolePermitted & HTMLAttributes<HTMLLabelElement> & {
      for?: string
      'prop:htmlFor'?: string
    }

    type HTMLLegendElementAttributes = NoRolePermitted & HTMLAttributes<HTMLLegendElement>

    type HTMLLIElementAttributes = HTMLAttributes<HTMLLIElement> & {
      value?: Numeric

      'prop:type'?: string
      'prop:value'?: number
    }

    type HTMLLinkElementAttributes = HTMLAttributes<HTMLLinkElement> & {
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
      rev?: string
      sizes?: string
      type?: string
      /** @deprecated */
      charset?: string
      fetchPriority?: FetchPriority
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:as'?: HTMLLinkElementAttributes['as']
      'prop:blocking'?: 'render' | AnyString
      'prop:charset'?: string
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:disabled'?: boolean
      'prop:fetchPriority'?: FetchPriority
      'prop:href'?: string
      'prop:hreflang'?: string
      'prop:imageSizes'?: string
      'prop:imageSrcset'?: string
      'prop:integrity'?: string
      'prop:media'?: string
      'prop:referrerPolicy'?: string
      'prop:rel'?: HTMLLinkElementAttributes['rel']
      'prop:relList'?: string
      'prop:rev'?: string
      'prop:sizes'?: string
      'prop:target'?: string
      'prop:type'?: string
    }

    type HTMLMainElementAttributes = NoRolePermitted & HTMLAttributes<HTMLElement>

    type HTMLMapElementAttributes = NoRolePermitted & HTMLAttributes<HTMLMapElement> & {
      name?: string

      'prop:name'?: string
    }

    type HTMLMenuElementAttributes = HTMLAttributes<HTMLMenuElement> & {
      role?:
      | 'directory'
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
      'prop:compact'?: boolean
      'prop:role'?: HTMLMenuElementAttributes['role']
    }

    type HTMLMediaAttributes<T extends HTMLMediaElement> = HTMLAttributes<T> & {
      autoplay?: boolean | ''
      controls?: boolean | ''
      /**
       * A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.)
       */
      disableRemotePlayback?: boolean | ''
      /**
       * Offers a way to control the native controls elements/buttons that are being shown by the user agent in order to be able to remove some features that do not make sense or are not part of the expected user experience or only allowlist a limited amount of features
       */
      controlsList?: ControlsList
      crossOrigin?: CrossOrigin
      loop?: boolean | ''
      mediaGroup?: string
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string
      /** Permitted ARIA roles */
      role?: 'application'

      /** @deprecated use `on:encrypted` instead */
      onencrypted?: MediaEncryptedEventHandler<T>
      /** @deprecated use `on:waitingForKey` instead */
      onwaitingforkey?: GenericEventHandler<T>

      'on:encrypted'?: MediaEncryptedEventListener<T>
      'on:waitingForKey'?: EventListener<T>

      'prop:autoplay'?: boolean
      'prop:controls'?: boolean
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:currentTime'?: number
      /**
       * A `boolean` that reflects the [`muted`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted) HTML attribute, which indicates whether the media element's audio output should be muted by default.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultMuted
       * @see `prop:muted`
       */
      'prop:defaultMuted'?: boolean
      'prop:defaultPlaybackRate'?: number
      'prop:disableRemotePlayback'?: boolean
      'prop:loop'?: boolean
      /**
       * A `boolean` that determines whether audio is muted. true if the audio is muted and `false` otherwise.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted
       */
      'prop:muted'?: boolean
      'prop:playbackRate'?: number
      'prop:preload'?: 'none' | 'metadata' | 'auto' | ''
      /**
       * A `boolean` value that determines if the pitch of the sound will be preserved. If set to `false`, the pitch will adjust to the speed of the audio
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/preservesPitch
       */
      'prop:preservesPitch'?: boolean
      'prop:src'?: string
      'prop:srcObject'?: MediaProvider | null
      /**
       * A `double` indicating the audio volume, from `0.0` (silent) to `1.0` (loudest).
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
       */
      'prop:volume'?: number
      'prop:role'?: 'application'
    }

    type HTMLMetaElementAttributes = HTMLAttributes<HTMLMetaElement> & {
      charset?: string
      content?: string
      'http-equiv'?:
      | 'content-security-policy'
      | 'content-type'
      | 'default-style'
      | 'x-ua-compatible'
      | 'refresh'
      | AnyString
      name?: string
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:content'?: string
      'prop:httpEquiv'?: HTMLMetaElementAttributes['http-equiv']
      'prop:media'?: string
      'prop:name'?: string
      'prop:scheme'?: string
    }

    type HTMLMeterElementAttributes = NoRolePermitted & HTMLAttributes<HTMLMeterElement> & {
      form?: string
      high?: Numeric
      low?: Numeric
      max?: Numeric
      min?: Numeric
      optimum?: Numeric
      value?: Numeric

      'prop:high'?: number
      'prop:low'?: number
      'prop:max'?: number
      'prop:min'?: number
      'prop:optimum'?: number
      'prop:value'?: number
    }

    type HTMLNavElementAttributes = NoRolePermitted & HTMLAttributes<HTMLElement>

    type HTMLQuoteElementAttributes = HTMLAttributes<HTMLQuoteElement> & {
      cite?: string

      'prop:cite'?: string
    }

    type HTMLObjectElementAttributes = HTMLAttributes<HTMLObjectElement> & {
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

      'prop:align'?: string
      'prop:archive'?: string
      'prop:border'?: string
      'prop:code'?: string
      'prop:codeBase'?: string
      'prop:codeType'?: string
      'prop:data'?: string
      'prop:declare'?: boolean
      'prop:height'?: string
      'prop:hspace'?: number
      'prop:name'?: string
      'prop:standby'?: string
      'prop:type'?: string
      'prop:useMap'?: string
      'prop:vspace'?: number
      'prop:width'?: string
    }

    type HTMLOListElementAttributes = HTMLAttributes<HTMLOListElement> & {
      reversed?: boolean | ''
      start?: Numeric
      type?: '1' | 'a' | 'A' | 'i' | 'I'
      role?:
      | 'directory'
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

      'prop:compact'?: boolean
      'prop:reversed'?: boolean
      'prop:start'?: number
      'prop:type'?: '1' | 'a' | 'A' | 'i' | 'I'
      'prop:role'?: HTMLOListElementAttributes['role']
    }

    type HTMLOptGroupElementAttributes = NoRolePermitted & HTMLAttributes<HTMLOptGroupElement> & {
      disabled?: boolean | ''
      label?: string

      'prop:disabled'?: boolean
      'prop:label'?: string
    }

    type HTMLOptionElementAttributes = NoRolePermitted & HTMLAttributes<HTMLOptionElement> & {
      disabled?: boolean | ''
      label?: string
      selected?: boolean | ''
      value?: number | string

      'prop:defaultSelected'?: boolean
      'prop:disabled'?: boolean
      'prop:label'?: string
      'prop:selected'?: boolean
      'prop:text'?: string
      'prop:value'?: string
    }

    type HTMLOutputElementAttributes = HTMLAttributes<HTMLOutputElement> & {
      form?: string
      for?: string
      name?: string
      value?: number | string

      'prop:defaultValue'?: string
      'prop:htmlFor'?: string
      'prop:name'?: string
      'prop:value'?: string
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

      'prop:name'?: string
      'prop:type'?: string
      'prop:value'?: string
      'prop:valueType'?: 'data' | 'ref' | 'object'
    }

    type HTMLPictureElementAttributes = NoRolePermitted & HTMLAttributes<HTMLPictureElement>

    type HTMLProgressElementAttributes = NoRolePermitted & HTMLAttributes<HTMLProgressElement> & {
      max?: Numeric
      value?: Numeric

      'prop:max'?: number
      'prop:value'?: number
    }

    type HTMLScriptElementAttributes = HTMLAttributes<HTMLScriptElement> & {
      async?: boolean | ''
      /**
       * Specifies that you want the browser to send an `Attribution-Reporting-Eligible` header along with the script resource request
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attributionsrc
       */
      attributionsrc?: boolean | string
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | AnyString
      /** @deprecated */
      charset?: string
      crossOrigin?: CrossOrigin
      defer?: boolean | ''
      integrity?: string
      noModule?: boolean | ''
      nonce?: string
      referrerPolicy?: ReferrerPolicy
      src?: string
      /**
       * This attribute indicates the type of script represented
       */
      type?: 'importmap' | 'module' | 'speculationrules' | AnyString
      fetchPriority?: FetchPriority

      'prop:async'?: boolean
      'prop:blocking'?: 'render' | AnyString
      'prop:charset'?: string
      'prop:crossOrigin'?: CrossOrigin | null
      'prop:defer'?: boolean
      'prop:event'?: string
      'prop:fetchPriority'?: 'high' | 'low' | 'auto'
      'prop:htmlFor'?: string
      'prop:integrity'?: string
      'prop:noModule'?: boolean
      'prop:referrerPolicy'?: ReferrerPolicy
      'prop:src'?: string
      'prop:text'?: string
      'prop:type'?: 'importmap' | 'module' | 'speculationrules' | AnyString
    }

    type HTMLSearchElementAttributes = HTMLAttributes<HTMLElement> & {
      /** Permitted ARIA roles  */
      role?: 'form' | 'group' | 'none' | 'presentation' | 'region' | 'search'
      'prop:role'?: HTMLSearchElementAttributes['role']
    }

    type HTMLSectionElementAttributes = HTMLAttributes<HTMLElement> & {
      /** Permitted ARIA roles  */
      role?:
      | 'alert'
      | 'alertdialog'
      | 'application'
      | 'banner'
      | 'complementary'
      | 'contentinfo'
      | 'dialog'
      | 'document'
      | 'feed'
      | 'log'
      | 'main'
      | 'marquee'
      | 'navigation'
      | 'none'
      | 'note'
      | 'presentation'
      | 'search'
      | 'status'
      | 'tabpanel'
      'prop:role'?: HTMLSectionElementAttributes['role']
    }

    type HTMLSelectElementAttributes = HTMLAttributes<HTMLSelectElement> & {
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | ''
      disabled?: boolean | ''
      form?: string
      multiple?: boolean | ''
      name?: string
      required?: boolean | ''
      size?: Numeric
      value?: number | string

      'prop:autocomplete'?: AutoFill
      'prop:disabled'?: boolean
      'prop:length'?: number
      'prop:multiple'?: boolean
      'prop:name'?: string
      'prop:required'?: boolean
      'prop:selectedIndex'?: number
      'prop:size'?: number
      'prop:value'?: string
    }

    type HTMLSlotElementAttributes = HTMLAttributes<HTMLSlotElement> & {
      name?: string
      'prop:name'?: string
    }

    type HTMLSourceElementAttributes = HTMLAttributes<HTMLSourceElement> & {
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
      height?: Numeric
      /**
       * Specifies the intrinsic width of the image in pixels. Allowed if the parent of `<source>` is a `<picture>`. Not allowed if the parent is `<audio> `or `<video>.` The width value must be an integer without any units
       */
      width?: Numeric
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:height'?: number
      'prop:media'?: string
      'prop:sizes'?: string
      'prop:src'?: string
      'prop:srcset'?: string
      'prop:type'?: string
      'prop:width'?: number
    }

    type HTMLStyleElementAttributes = HTMLAttributes<HTMLStyleElement> & {
      /**
       * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. `@import`-ed stylesheets are generally considered as critical subresources, whereas `background-image` and fonts are not
       */
      blocking?: 'render' | AnyString
      media?: string
      nonce?: string
      scoped?: boolean | ''
      /**
       * This attribute should not be provided: if it is, the only permitted values are the empty string or a case-insensitive match for `text/css`
       * @deprecated
       */
      type?: string

      'prop:blocking'?: 'render' | AnyString
      'prop:disabled'?: boolean
      'prop:media'?: string
      'prop:type'?: string
    }

    type HTMLSummaryElementAttributes = NoRolePermitted & HTMLAttributes<HTMLElement>

    type HTMLTableElementAttributes = HTMLAttributes<HTMLTableElement> & {
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

      'prop:align'?: 'left' | 'center' | 'right' | AnyString
      'prop:bgColor'?: string
      'prop:border'?: string
      'prop:caption'?: HTMLTableCaptionElement | null
      'prop:cellPadding'?: string
      'prop:cellSpacing'?: string
      'prop:frame'?: string
      'prop:rules'?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
      'prop:summary'?: string
      'prop:tFoot'?: HTMLTableSectionElement | null
      'prop:tHead'?: HTMLTableSectionElement | null
      'prop:width'?: string
    }

    type HTMLTemplateElementAttributes = NoRolePermitted & HTMLAttributes<HTMLTemplateElement> & {
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

      'prop:shadowRootClonable'?: boolean
      'prop:shadowRootDelegatesFocus'?: boolean
      'prop:shadowRootMode'?: 'open' | 'closed'
      'prop:shadowRootSerializable'?: boolean
    }

    type HTMLTextAreaElementAttributes = HTMLAttributes<HTMLTextAreaElement> & {
      autocomplete?: boolean | AutoFill
      autofocus?: boolean | ''
      /**
       * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20
       */
      cols?: Numeric
      dirName?: DirName
      disabled?: boolean | ''
      form?: string
      maxLength?: Numeric
      minLength?: Numeric
      name?: string
      placeholder?: string
      readOnly?: boolean | ''
      required?: boolean | ''
      /**
       * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2
       */
      rows?: Numeric
      value?: number | string
      wrap?: 'hard' | 'soft' | 'off'

      /** @deprecated use `on:selectionChange` instead */
      onselectionchange?: GenericEventHandler<HTMLTextAreaElement>

      'on:selectionChange'?: EventListener<HTMLTextAreaElement>

      'prop:autocomplete'?: AutoFill
      'prop:cols'?: number
      'prop:defaultValue'?: string
      'prop:dirName'?: DirName
      'prop:disabled'?: boolean
      'prop:maxLength'?: number
      'prop:minLength'?: number
      'prop:name'?: string
      'prop:placeholder'?: string
      'prop:readOnly'?: boolean
      'prop:required'?: boolean
      'prop:rows'?: number
      'prop:selectionDirection'?: 'forward' | 'backward' | 'none'
      'prop:selectionEnd'?: number
      'prop:selectionStart'?: number
      'prop:value'?: string
      'prop:wrap'?: 'hard' | 'soft' | 'off'
    }

    type HTMLTableDataCellElementAttributes = HTMLAttributes<HTMLTableCellElement> & {
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: Numeric
      headers?: string
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
      rowSpan?: Numeric
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

      'prop:abbr'?: string
      'prop:align'?: 'left' | 'center' | 'right' | 'justify' | 'char'
      'prop:axis'?: string
      'prop:bgColor'?: Property.Color
      'prop:ch'?: string
      'prop:chOff'?: string
      'prop:colSpan'?: number
      'prop:headers'?: string
      'prop:height'?: string
      'prop:noWrap'?: boolean
      'prop:rowSpan'?: number
      'prop:scope'?: string
      'prop:vAlign'?: 'top' | 'middle' | 'bottom' | 'baseline'
      'prop:width'?: string
    }

    type HTMLTableHeaderCellElementAttributes = HTMLAttributes<HTMLTableCellElement> & {
      abbr?: string
      /**
       * A non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than `1000` will be considered as incorrect and will be set to the default value (`1`)
       */
      colSpan?: Numeric
      headers?: string
      /**
       * A non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section (`<thead>`, `<tbody>`, `<tfoot>`, even if implicitly defined), that the cell belongs to. Values higher than `65534` are clipped down to `65534`
       */
      rowSpan?: Numeric
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

      'prop:abbr'?: string
      'prop:align'?: 'left' | 'center' | 'right' | 'justify' | 'char'
      'prop:axis'?: string
      'prop:bgColor'?: Property.Color
      'prop:ch'?: string
      'prop:chOff'?: string
      'prop:colSpan'?: number
      'prop:headers'?: string
      'prop:height'?: string
      'prop:noWrap'?: boolean
      'prop:rowSpan'?: number
      'prop:scope'?: 'row' | 'col' | 'rowgroup' | 'colgroup'
      'prop:vAlign'?: 'top' | 'middle' | 'bottom' | 'baseline'
      'prop:width'?: string
    }

    type HTMLTimeElementAttributes = HTMLAttributes<HTMLTimeElement> & {
      /**
       * Indicates the time and/or date in the machine-readable format, allowing for better search engine results or custom features such as reminders
       */
      dateTime?: string
      'prop:dateTime'?: string
    }

    type HTMLTrackElementAttributes = NoRolePermitted & HTMLAttributes<HTMLTrackElement> & {
      default?: boolean | ''
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
      label?: string
      src?: string
      srclang?: string
      /** @deprecated use `on:cueChange` instead */
      oncuechange?: GenericEventHandler<HTMLTrackElement>

      'on:cueChange'?: EventListener<HTMLTrackElement>
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null

      'prop:default'?: boolean
      'prop:kind'?: HTMLTrackElementAttributes['kind']
      'prop:label'?: string
      'prop:src'?: string
      'prop:srclang'?: string
    }

    type HTMLUListElementAttributes = HTMLAttributes<HTMLUListElement> & {
      /** Permitted ARIA roles */
      role?:
      | 'directory'
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

      'prop:role'?: HTMLUListElementAttributes['role']
    }

    type HTMLVideoElementAttributes = HTMLMediaAttributes<HTMLVideoElement> & {
      height?: number | string
      playsInline?: boolean | ''
      poster?: string
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

      'prop:disablePictureInPicture'?: boolean
      'prop:height'?: number
      'prop:playsInline'?: boolean
      'prop:poster'?: string
      'prop:width'?: number
    }

    type HTMLWBRElementAttributes = HTMLAttributes<HTMLElement> & {
      /**
       * Void element cannot have any child nodes (i.e., nested elements or text nodes)
       * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
       * @deprecated
       */
      children?: null
    }

    type HTMLWebViewElementAttributes = HTMLAttributes<HTMLWebViewElement> & {
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

    type HTMLMarqueeElementAttributes = HTMLAttributes<HTMLMarqueeElement> & {
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

      'prop:behavior'?: 'scroll' | 'slide' | 'alternate'
      'prop:bgColor'?: Property.Color
      'prop:direction'?: 'left' | 'right' | 'up' | 'down'
      'prop:height'?: string
      'prop:hspace'?: number
      'prop:loop'?: number
      'prop:scrollAmount'?: number
      'prop:scrollDelay'?: number
      'prop:trueSpeed'?: boolean
      'prop:vspace'?: number
      'prop:width'?: string
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
      div: HTMLDivElementAttributes
      dl: HTMLAttributes<HTMLDListElement>
      dt: HTMLAttributes<HTMLElement>
      em: HTMLAttributes<HTMLElement>
      embed: HTMLEmbedElementAttributes
      fieldset: HTMLFieldSetElementAttributes
      figcaption: HTMLFigcaptionElementAttributes
      figure: HTMLAttributes<HTMLElement>
      /** @deprecated */
      font: HTMLAttributes<HTMLFontElement>
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
      legend: HTMLLegendElementAttributes
      li: HTMLLIElementAttributes
      link: HTMLLinkElementAttributes
      main: HTMLMainElementAttributes
      map: HTMLMapElementAttributes
      mark: HTMLAttributes<HTMLElement>
      /** @deprecated */
      marquee: HTMLAttributes<HTMLMarqueeElementAttributes>
      menu: HTMLMenuElementAttributes
      menuitem: HTMLAttributes<HTMLUnknownElement>
      meta: HTMLMetaElementAttributes
      meter: HTMLMeterElementAttributes
      nav: HTMLNavElementAttributes
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
      picture: HTMLPictureElementAttributes
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
      search: HTMLSearchElementAttributes
      section: HTMLSectionElementAttributes
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
      summary: HTMLSummaryElementAttributes
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
      ul: HTMLUListElementAttributes
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
