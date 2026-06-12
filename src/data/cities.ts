import type { City } from './types'

export const cities: City[] = [
  {
    id: 'jeju',
    name: 'Jeju',
    koreanName: '제주',
    description:
      "The best nature in Korea. But it is a windy island vulnerable to typhoons — be careful during typhoon season, as there isn't much to do in bad weather.",
    highlights: [
      { title: 'Food', body: 'Seafood (raw fish), black pork BBQ, and pork noodle soup (gogi-guksu).' },
      { title: 'Tour', body: 'Hills (oreum), beaches, and tangerine farms in winter.' },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    koreanName: '부산',
    description: 'A big coastal city with great nature and beaches. Relaxed seaside energy and fresh seafood.',
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    koreanName: '경주',
    description:
      "Definitely the most historic city in Korea. I traveled here a lot as a child since my hometown is nearby — which also means I'm a little burned out on it. Lots of history (maybe a bit boring to me, but genuinely significant).",
    highlights: [
      { title: 'Historical sites', body: 'Ancient Silla-era tombs, temples, and ruins throughout the city.' },
      { title: 'Gyeongju World', body: 'Amusement park with the California Beach / Blueone water park.' },
      { title: 'Local treats', body: '찰보리빵 (barley bread) and 황남빵 (red-bean pastry).' },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    koreanName: '강릉',
    description: 'East-coast city known for beaches and a strong specialty-coffee culture.',
  },
  {
    id: 'sokcho',
    name: 'Sokcho',
    koreanName: '속초',
    description: 'Gateway to Seoraksan National Park, with fresh seafood and a famous local market.',
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    koreanName: '전주',
    description: "Famous for its hanok village and bibimbap, though I personally don't find a lot to do there.",
  },
  {
    id: 'andong',
    name: 'Andong',
    koreanName: '안동',
    description: 'A center of Confucian heritage, known for the Hahoe folk village and Andong jjimdak.',
  },
  {
    id: 'geoje',
    name: 'Geoje',
    koreanName: '거제',
    description:
      'My personal favorite — but hard to reach with poor public transit connections. You will probably need to rent a car.',
  },
]
