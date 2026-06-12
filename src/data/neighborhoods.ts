export interface Neighborhood {
  id: string
  /** English / romanized label. */
  name: string
  /** Korean label. */
  koreanName: string
  /** Rachel's description of the area. */
  description: string
  /** Real-world location used to place the pin on the gu map. */
  lon: number
  lat: number
}

// Approximate centers of each recommended neighborhood (lon, lat).
export const neighborhoods: Neighborhood[] = [
  {
    id: 'hongdae',
    name: 'Hongdae',
    koreanName: '홍대',
    description:
      'Youthful and energetic, centered on Hongik University. Packed with indie cafes, live music, street performances, and nightlife. Crowded but iconic.',
    lon: 126.9233,
    lat: 37.5563,
  },
  {
    id: 'hapjeong',
    name: 'Hapjeong',
    koreanName: '합정',
    description:
      'Right next to Hongdae but a touch calmer. Riverside cafes, bookstores, and the Mecenatpolis mall, with easy access toward the Han River.',
    lon: 126.9137,
    lat: 37.5495,
  },
  {
    id: 'yeonnam',
    name: 'Yeonnam',
    koreanName: '연남',
    description:
      'A relaxed, leafy neighborhood along the Gyeongui Line Forest Park ("Yeontral Park"). Cozy brunch spots, dessert cafes, and a laid-back local vibe.',
    lon: 126.9255,
    lat: 37.5605,
  },
  {
    id: 'mangwon',
    name: 'Mangwon',
    koreanName: '망원',
    description:
      'Quiet and homey with the beloved Mangwon Market, affordable eats, and Mangwon Hangang Park by the river. A favorite for slow, everyday Seoul.',
    lon: 126.9019,
    lat: 37.5556,
  },
  {
    id: 'seongsu',
    name: 'Seongsu / Ttukseom',
    koreanName: '성수/뚝섬',
    description:
      'A former industrial district turned trendiest neighborhood in Seoul. Converted warehouses now hold concept stores, flagship pop-ups, specialty coffee, and design studios. Near the Han River at Ttukseom.',
    lon: 127.0557,
    lat: 37.5445,
  },
  {
    id: 'apgujeong',
    name: 'Apgujeong Rodeo',
    koreanName: '압구정로데오',
    description:
      'Upscale and fashion-forward. High-end boutiques, dessert cafes, and Gangnam-style glamour. A hub for beauty clinics and luxury shopping.',
    lon: 127.0286,
    lat: 37.5274,
  },
  {
    id: 'yongsan',
    name: 'Yongsan / Samgakji',
    koreanName: '용산/삼각지',
    description:
      'Home to the National Museum of Korea and the redeveloped Yongsan area. Samgakji has a quietly growing food scene worth exploring.',
    lon: 126.9723,
    lat: 37.5347,
  },
  {
    id: 'myeongdong',
    name: 'Myeongdong',
    koreanName: '명동',
    description:
      'The classic tourist shopping street: cosmetics, street food, and brand stores. Busy and very tourist-oriented, but iconic for a first visit.',
    lon: 126.9849,
    lat: 37.5636,
  },
  {
    id: 'gangnam',
    name: 'Gangnam',
    koreanName: '강남',
    description:
      'Sleek, modern, and business-driven. Big shopping, restaurants, nightlife, and beauty clinics. Wide boulevards and a polished, upscale feel.',
    lon: 127.0276,
    lat: 37.498,
  },
  {
    id: 'yeouido',
    name: 'Yeouido',
    koreanName: '여의도',
    description:
      "Seoul's finance district on an island in the Han River. Great riverside parks, the cherry blossom festival in spring, and The Hyundai Seoul department store.",
    lon: 126.9244,
    lat: 37.5215,
  },
  {
    id: 'gwanghwamun',
    name: 'Gwanghwamun',
    koreanName: '광화문',
    description:
      'The civic and historic heart of Seoul, anchored by Gyeongbokgung Palace and Gwanghwamun Square. Grand boulevards framed by mountains.',
    lon: 126.9769,
    lat: 37.5725,
  },
  {
    id: 'jongno',
    name: 'Jongno / Euljiro',
    koreanName: '종로/을지로',
    description:
      'One of the best areas to feel the mixture of past and present. Old printing alleys and hardware shops now sit alongside hip retro bars and cafes ("Hipjiro").',
    lon: 126.9915,
    lat: 37.5664,
  },
  {
    id: 'bukchon',
    name: 'Anguk / Bukchon',
    koreanName: '안국/북촌',
    description:
      'Traditional hanok village streets, galleries, tea houses, and the area between Gyeongbokgung and Changdeokgung palaces. Beautiful for a slow walk.',
    lon: 126.9853,
    lat: 37.5826,
  },
  {
    id: 'itaewon',
    name: 'Itaewon',
    koreanName: '이태원',
    description:
      'The most international neighborhood in Seoul: diverse global food, bars, and crowds from all over the world. Lively, eclectic, and great for a night out.',
    lon: 126.9945,
    lat: 37.5345,
  },
  {
    id: 'hannam',
    name: 'Hannam',
    koreanName: '한남',
    description:
      'Refined and design-focused, just east of Itaewon. Home to the Leeum Museum, upscale boutiques, embassies, and stylish cafes and restaurants.',
    lon: 127.0017,
    lat: 37.5345,
  },
  {
    id: 'haebangchon',
    name: 'Haebangchon',
    koreanName: '해방촌',
    description:
      'A hillside neighborhood (HBC) just below Namsan with sweeping views, a creative expat scene, indie cafes, and a relaxed, bohemian atmosphere.',
    lon: 126.9866,
    lat: 37.5418,
  },
  {
    id: 'jamsil',
    name: 'Jamsil',
    koreanName: '잠실',
    description:
      'Home to Lotte World, Lotte World Tower (the tallest building in Korea), Seokchon Lake, and big shopping malls. Family-friendly and great for views.',
    lon: 127.1,
    lat: 37.5133,
  },
]
