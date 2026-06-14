import type { ContentGroup } from './types'

export const foodGroups: ContentGroup[] = [
  {
    heading: 'Unique to Korea',
    intro:
      'Food that Koreans commonly eat but is hard to find elsewhere. Some of these are hardcore — try at your own pace.',
    items: [
      {
        title: 'Marinated raw crab (간장게장)',
        body: 'Raw crab marinated in soy sauce. Famously called a "rice thief" because you eat so much rice with it.',
      },
      {
        title: 'Octopus / webfoot octopus (낙지/쭈꾸미)',
        body: 'Often served stir-fried and spicy, or live (산낙지) for the adventurous.',
      },
      {
        title: 'Budae jjigae (부대찌개)',
        body: 'Spicy stew with an eclectic mix of ingredients like spam, sausages, ramen noodles, and kimchi. Originated during the Korean War using surplus US army rations.',
      },
      {
        title: 'Intestines',
        body: 'Gopchang (곱창) and makchang (막창) — grilled beef/pork intestines, a beloved drinking food.',
      },
      {
        title: 'Chicken feet (닭발, dakbal)',
        body: 'Spicy and chewy. If you are a beginner, start with the deboned version.',
      },
      {
        title: 'Fermented skate (홍어)',
        body: 'Smells of ammonia — even most Koreans cannot eat it. A true hardcore challenge.',
      },
    ],
  },
  {
    heading: 'Desserts',
    items: [
      { title: 'Bingsu (빙수)', body: 'Shaved ice with sweet toppings. The classic is 팥빙수 (patbingsu) with red beans, but there are endless variations.' },
      { title: 'Rice cakes (떡, tteok)', body: 'Chewy rice cakes in countless varieties, sweet and savory.' },
    ],
  },
  {
    heading: 'Franchise but good',
    items: [
      { title: '등촌샤브칼국수', body: 'Reliable shabu-shabu with kalguksu noodles.' },
      { title: '봉추찜닭', body: 'Andong-style braised chicken (jjimdak) chain.' },
    ],
  },
  {
    heading: 'Special foods',
    items: [
      { 
        title: 'Rainy day🌧️/After Hiking⛰: 파전 + 막걸리', 
        body: 'Savory scallion pancake (or any other pancake) with rice wine — the classic monsoon combo. You will also find lots of restaurants serving it near the mountains, the way to wrap up a hike.' 
      },
      { 
        title: 'Summer🥵: 닭백숙', 
        body: 'Whole-chicken soup eaten to beat the heat and recharge your energy.' 
      },
      {
        title: 'Summer🥵: 콩국수',
        body: "Cold soy-milk noodles. Slightly controversial, but I looooove it. There's an ongoing debate: some add salt, others add sugar. I add salt :)",
      },
      { title: 'Summer🥵: 냉면 / 평양냉면', body: 'Cold buckwheat noodles; Pyongyang-style is subtle and refreshing.' },
      { title: 'Winter❄️: 호떡 / 붕어빵', body: 'Street snacks: sweet syrup-filled pancakes and fish-shaped red-bean pastries.' },
      { title: 'Birthday🎂: 미역국', body: '미역국 (miyeok-guk, seaweed soup) is the traditional birthday breakfast — a 생일밥상 (saengil-bapsang, birthday meal) staple. Koreans also eat it after childbirth for recovery.' },
      { title: "New Year🎍: 떡국", body: '떡국 (tteokguk, sliced rice-cake soup) is eaten on 설날 (Seollal, Lunar New Year). Tradition says you gain a year of age once you finish your bowl.' },
    ],
  },
  {
    heading: 'Food guides & maps',
    items: [
      {
        title: '푸딘코 (Foodinco)',
        body:
          'A trusted crowd-curated restaurant guide. It has its own app, and you can also browse picks and updates on their Instagram — though it probably only supports Korean.',
        links: [{ label: 'Instagram', url: 'https://www.instagram.com/foodinco_/' }],
      },
      {
        title: '블루리본 (Blue Ribbon Survey)',
        body:
          "Korea's long-running fine-dining and restaurant rating guide (think Michelin-style ribbons).",
      },
      {
        title: '성시경 먹을텐데',
        body:
          "Singer Sung Si-kyung's hugely popular YouTube food series. Locals genuinely seek out the restaurants he features, and the spots he covers tend to blow up.",
        links: [{ label: 'YouTube', url: 'https://www.youtube.com/@sungsikyung' }],
      },
      {
        title: '최자로드',
        body:
          "Rapper Choiza's food-trip YouTube series, beloved for honest, down-to-earth local recommendations.",
        links: [{ label: 'YouTube', url: 'https://www.youtube.com/@choizaroad_official' }],
      },
    ],
  },
]
