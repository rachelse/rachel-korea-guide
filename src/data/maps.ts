// Rachel's curated Google Maps lists, shown on the landing page.
// Titles and descriptions were taken from the shared Google Maps lists.
export interface MapLink {
  label: string
  url: string
  note?: string
}

export const mapLinks: MapLink[] = [
  {
    label: "Rachel's Mat-zip",
    url: 'https://maps.app.goo.gl/Lwo6nBQTaSRk2ugf8',
    note: 'My favorite restaurants/cafes in Korea but biased to e.g. North Korean cold noodles, soybean noodles, desserts).',
  },
  {
    label: "Rachel's spots!",
    url: 'https://maps.app.goo.gl/yGQgVwiCEKGSuLJt7',
    note: 'Where I personally love — parks, streams, and walks.',
  },
  {
    label: 'Food guide',
    url: 'https://maps.app.goo.gl/PgqZaqe8ym7KGodq8',
    note: 'Authentic spots on my to-go list, trusted picks from friends, and places hyped among locals.',
  },
  {
    label: 'Tour',
    url: 'https://maps.app.goo.gl/AwjDMaFLEfj9WFPR7',
    note: 'A collection of touristic places worth visiting.',
  },
  {
    label: 'Cafes',
    url: 'https://maps.app.goo.gl/YNCdhrTsEjwZGFNQ6',
    note: 'Mostly cafes with a good view and a great vibe.',
  },
  {
    label: 'Bars / Pocha',
    url: 'https://maps.app.goo.gl/u5DKncgQknbBH3Te8',
    note: 'Bars and Korean-style pocha for a night out.',
  },
  {
    label: 'Entertainment',
    url: 'https://maps.app.goo.gl/RCzCCUjGJb1FwLVa7',
    note: 'Fun things to do around the city.',
  },
  {
    label: 'digital nomad cafes',
    url: 'https://maps.app.goo.gl/nCuBGVJcQH2czvKt6',
    note: 'Laptop-friendly cafes to work or study.',
  },
  {
    label: 'Vegan',
    url: 'https://maps.app.goo.gl/nDUkhEGDdVYzp4zS9',
    note: 'Vegan and vegetarian-friendly spots around Korea.',
  },
  // {
  //   label: 'Local vacation tips',
  //   url: 'https://maps.app.goo.gl/dADaH9MSt3Qfr9zt9',
  //   note: "Beyond touristic spots — good if you're planning a long holiday or want to see local life.",
  // },
]
