// Shared content types for the guide data modules.

export interface ContentNote {
  /** Short heading for the item. */
  title: string
  /** Optional longer description. Supports plain text. */
  body?: string
  /** Optional external links (Instagram, app, YouTube, etc.). */
  links?: { label: string; url: string }[]
}

export interface ContentGroup {
  /** Group heading, e.g. "Unique", "Desserts". */
  heading: string
  /** Optional intro text shown under the heading. */
  intro?: string
  items: ContentNote[]
}

export interface District {
  /** URL-safe id, e.g. "hongdae". */
  id: string
  /** English/romanized label. */
  name: string
  /** Korean label as written in the guide. */
  koreanName: string
  /** Rachel's description of the area. */
  description: string
  /**
   * Position of the pin on the stylized Seoul map, expressed as
   * percentages (0-100) of the map's width (x) and height (y).
   */
  x: number
  y: number
}

export interface City {
  id: string
  name: string
  koreanName?: string
  description: string
  highlights?: ContentNote[]
  /** Approximate map coordinates for the Korea map pin. */
  lon?: number
  lat?: number
}
