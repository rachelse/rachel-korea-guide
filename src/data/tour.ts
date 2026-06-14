import type { ContentGroup } from './types'

export const tourGroups: ContentGroup[] = [
  {
    heading: 'Museums',
    items: [
      {
        title: 'National Museum of Korea (국중박)',
        body: 'The flagship national museum in Yongsan — vast, free, and beautifully designed. Worth a half day.',
      },
    ],
  },
  {
    heading: 'Palaces',
    intro: 'If you can get a ticket for a night viewing (야간개장), I highly recommend it. Tickets are competitive, but it\'s worth a shot.',
    items: [
      { title: 'Gyeongbokgung (경복궁)', body: 'The grand main palace. There\'s a changing of the guard ceremony.' },
      { title: 'Deoksugung (덕수궁)', body: 'Charming palace with a mix of Korean and Western architecture, lovely at dusk.' },
      { title: 'Changdeokgung (창덕궁)', body: 'A UNESCO site famous for its Secret Garden (Huwon).' },
    ],
  },
  {
    heading: 'Hanok & fortress wall (한옥 & 성곽)',
    items: [
      { title: 'Bukchon Hanok Village (북촌한옥마을)', body: 'Historic hanok streets between the palaces. Please keep quiet — people live here.' },
      {
        title: 'Naksan Park (낙산공원)',
        body: 'A hilltop park along the old Seoul City Wall (한양도성, Hanyangdoseong). An easy walk with great city views — especially beautiful at sunset and after dark when the wall is lit up.',
      },
    ],
  },
  {
    heading: 'Markets',
    items: [
      {
        title: 'Gwangjang Market (광장시장)',
        body: 'One of the most loved markets by both tourists and locals. Always crowded with great food. Known for beef tartare (육회, yukhoe), mung-bean pancake (빈대떡, bindaetteok), tteokbokki (떡볶이), and kimbap. There is even an Olive Young designed in a traditional concept for foreign visitors.',
      },
      {
        title: 'Namdaemun Market (남대문시장)',
        body: 'One of the biggest markets in Seoul — they have everything, plus a huge variety of street food.',
      },
    ],
  },
  {
    heading: 'Han River',
    intro: 'Han River ramen and delivery food by the water is a must-do local experience.',
    items: [
      { title: 'Banpo Bridge (반포대교)', body: 'Famous for its rainbow fountain show at night.' },
      { title: 'Ttukseom (뚝섬)', body: 'A lively riverside park (뚝섬한강공원). Easy to reach by subway.' },
      { title: 'Nodeul Island (노들섬)', body: 'A cultural island in the river — my favorite.' },
      { title: 'Seonyudo Park (선유도공원)', body: 'A peaceful park on a former water-treatment island.' },
    ],
  },
  {
    heading: 'Experiences',
    items: [

      {
        title: 'Jjimjilbang (찜질방)',
        body: 'Korean sauna with lots of entertainment (PC room, gaming, comic books). Eat sikhye (식혜) and roasted eggs with cider (Sprite).',
      },
      { title: '노래방 (Noraebang)', body: 'Karaoke rooms, a must-try night out. Especially, in 코인노래방 (coin karaoke), you pay per song (or a few songs for ₩1,000) instead of renting a whole room by the hour, so it is perfect for solo singers or a quick session with friends.' },
      { title: 'PC방 (PC bang)', body: 'Internet cafes packed with high-spec gaming PCs — a staple of Korean leisure. Cheap by the hour, and many serve fast food (ramyeon, fried snacks) right to your seat.' },
      {
        title: 'Dermatology clinics',
        body: "Korea's new visitor record was partly driven by skincare and derma tourism. Ask me for details if you are interested😉",
      }, 
      { title: 'Korean medicine clinic (한의원)', body: 'Try traditional Korean medicine and acupuncture.' },
    ],
  },
  {
    heading: 'Shopping',
    items: [
      {
        title: 'Daiso (다이소)',
        body:
          'You will find a store on practically every other street. "Daiso" sounds like "다 있어" (they have everything) in Korean — and they nearly do. Super cheap (1,000–5,000 won), covering more than 70% of everyday household items.',
      },
      {
        title: 'Olive Young (올리브영)',
        body:
          'The go-to Korean skincare and beauty drugstore. It is so dominant that Sephora withdrew from Korea. Most products are high quality — ask me for specific recommendations.',
      },
      {
        title: 'Beauty devices',
        body:
          'Home beauty/skincare devices are popular. You can get a big discount by buying from an online duty-free shop.',
      },
      {
        title: 'Clothes shopping',
        body:
          'Korean fashion is affordable and on-trend. Musinsa (무신사) is the most popular platform for everyday basics and trendy brands, with offline stores in hot spots like Hongdae and Seongsu. Also, there are plenty more brands to explore.',
      },
    ],
  },
]
