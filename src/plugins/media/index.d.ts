export declare function initMedia(): void

declare global {
  namespace JSX {
    interface HTMLAudioElementAttributes {
      volume?: number
      muted?: boolean
    }

    interface HTMLVideoElementAttributes {
      volume?: number
      muted?: boolean
    }
  }
}
