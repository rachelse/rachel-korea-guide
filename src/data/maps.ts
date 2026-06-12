// Rachel's curated Google Maps lists, shown on the landing page.
// Titles and descriptions were taken from the shared Google Maps lists.
export interface MapLink {
  label: string
  url: string
  note?: string
  count?: number
}

export const mapLinks: MapLink[] = [
  {
    label: "Rachel's Mat-zip",
    url: 'https://maps.app.goo.gl/Lwo6nBQTaSRk2ugf8',
    count: 104,
    note: 'My favorite restaurants & cafes in Korea (biased toward some controversial foods — North Korean cold noodles, soybean noodles, desserts).',
  },
  {
    label: "Rachel's spots!",
    url: 'https://maps.app.goo.gl/yGQgVwiCEKGSuLJt7',
    count: 8,
    note: 'Where I personally love — parks, streams, and walks.',
  },
  {
    label: 'Food guide',
    url: 'https://maps.app.goo.gl/PgqZaqe8ym7KGodq8',
    count: 111,
    note: 'Authentic spots on my to-go list, trusted picks from friends, and places hyped among locals.',
  },
  {
    label: 'Cafes',
    url: 'https://maps.app.goo.gl/YNCdhrTsEjwZGFNQ6',
    count: 43,
    note: 'Mostly cafes with a good view and a great vibe.',
  },
  {
    label: 'Bars / Pocha',
    url: 'https://maps.app.goo.gl/u5DKncgQknbBH3Te8',
    count: 18,
    note: 'Bars and Korean-style pocha for a night out.',
  },
  {
    label: 'Tour',
    url: 'https://maps.app.goo.gl/AwjDMaFLEfj9WFPR7',
    count: 54,
    note: 'A collection of touristic places worth visiting.',
  },
  {
    label: 'Entertainment',
    url: 'https://maps.app.goo.gl/RCzCCUjGJb1FwLVa7',
    count: 9,
    note: 'Fun things to do around the city.',
  },
    {
    label: 'digital nomad cafes',
    url: 'https://maps.app.goo.gl/nCuBGVJcQH2czvKt6',
    count: 48,
    note: 'Laptop-friendly cafes to work or study.',
  },
  {
    label: 'Local vacation tips',
    url: 'https://maps.app.goo.gl/dADaH9MSt3Qfr9zt9',
    count: 7,
    note: "Beyond touristic spots — good if you're planning a long holiday or want to see local life.",
  },
]
