import type { City } from './types'

export const cities: City[] = [
  {
    id: 'jeju',
    name: 'Jeju',
    koreanName: '제주',
    lon: 126.5312,
    lat: 33.4996,
    description:
      "The best nature in Korea. But it is a windy island vulnerable to typhoons — be careful during typhoon season, as there isn't much to do in bad weather.",
    highlights: [
      { title: 'Food', body: '회 (hoe, raw fish), 흑돼지 (heukdwaeji, black pork BBQ), and 고기국수 (gogi-guksu, pork noodle soup).' },
      { title: 'Tour', body: '오름 (oreum, volcanic hills), beaches, and tangerine farms in winter.' },
      { title: 'Hallasan (한라산)', body: 'South Korea\'s tallest mountain, a dormant volcano at the heart of the island. The hike is long but rewarding, with a crater lake at the summit.' },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    koreanName: '부산',
    lon: 129.0756,
    lat: 35.1796,
    description: 'A big coastal city with great nature and beaches. Fancy seaside vibe and fresh seafood.',
    highlights: [
      { title: 'Food', body: '돼지국밥 (dwaeji-gukbap, pork-and-rice soup), 꼼장어 (kkomjangeo, grilled hagfish), and 밀면 (milmyeon, cold wheat noodles) — all Busan signatures.' },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    koreanName: '대구',
    lon: 128.6014,
    lat: 35.8714,
    description: 'My hometown, haha :)',
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    koreanName: '경주',
    lon: 129.2247,
    lat: 35.8562,
    description:
      "The most historic city in Korea. I traveled here a lot as a child since my hometown is nearby — so I'll admit I got a little tired of it. Still, it's full of historical sites, plus a fun amusement park.",
    highlights: [
      { title: 'Historical sites', body: 'Ancient Silla-era tombs, temples, and ruins throughout the city.' },
      { title: 'Anapji Pond (안압지)', body: 'A restored Silla palace pond — go after dark for a beautiful night view of the illuminations.' },
      { title: 'Gyeongju World', body: 'Amusement park with the California Beach / Blueone water park.' },
      { title: 'Local treats', body: '찰보리빵 (chalboribbang, chewy barley bread) and 황남빵 (hwangnambbang, red-bean pastry) — most people go for the red-bean pastry, but trust me the barley bread is way better.' },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    koreanName: '강릉',
    lon: 128.8761,
    lat: 37.7519,
    description: 'East-coast city known for beaches and a strong specialty-coffee culture.',
    highlights: [
      { title: 'Food', body: '꼬막 (kkomak, cockles), 짬뽕순두부 (jjamppong-sundubu, spicy seafood soft-tofu stew), and coffee from local roasters.' },
      { title: 'Tour', body: 'Gyeongpo Beach, Anmok Beach, and Jeongdongjin for sunrise.' },
    ],
  },
  {
    id: 'sokcho',
    name: 'Sokcho',
    koreanName: '속초',
    lon: 128.5918,
    lat: 38.2070,
    description: 'Gateway to Seoraksan National Park, with fresh seafood and a famous local market.',
    highlights: [
      { title: 'Food', body: '회 (hoe, raw fish), 오징어순대 (ojingeo-sundae, squid stuffed with noodles and vegetables), and 닭강정 (dakgangjeong, sweet and spicy fried chicken).' },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    koreanName: '전주',
    lon: 127.1480,
    lat: 35.8242,
    description: "Famous for its 한옥마을 (hanok-maeul, traditional Korean house village) and 비빔밥 (bibimbap), though I personally don't find a lot to do there.",
    highlights: [
      { title: 'Food', body: '비빔밥 (bibimbap, mixed rice with vegetables and meat) and 콩나물국밥 (kongnamul-gukbap, bean-sprout soup with rice). The Jeolla province has high-quality foods in general.' },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    koreanName: '여수',
    lon: 127.6622,
    lat: 34.7604,
    description: 'A charming coastal city with a romantic vibe, known for its night views and fresh seafood.',
    highlights: [
      { title: 'Food', body: '간장게장 (ganjang-gejang, soy-marinated raw crab), 갓김치 (gat-kimchi, kimchi made with mustard greens), and 모찌 (mochi, soft rice cakes).' },
      { title: '여수밤바다 (Yeosu night sea)', body: 'Made famous by Busker Busker\'s hit song, the romantic night view over the sea is the city\'s signature. Stroll along the waterfront after dark.' },
    ],
  },
  {
    id: 'andong',
    name: 'Andong',
    koreanName: '안동',
    lon: 128.7294,
    lat: 36.5684,
    description: 'A center of Confucian heritage, known for the 하회마을 (Hahoe-maeul, folk village) and 안동찜닭 (Andong-jjimdak).',
    highlights: [
      { title: 'Food', body: '안동찜닭 (Andong-jjimdak, braised chicken with vegetables and glass noodles), 간고등어 (gangodeungeo, salt-cured grilled mackerel), and 헛제사밥 (heotjesabap, a ritual dish of rice and side dishes).' },
    ],
  },
  {
    id: 'geoje',
    name: 'Geoje',
    koreanName: '거제',
    lon: 128.6211,
    lat: 34.8806,
    description:
      'My personal favorite. I only have good memories here, but hard to reach with poor public transit connections. You will probably need to rent a car.',
  },
]
