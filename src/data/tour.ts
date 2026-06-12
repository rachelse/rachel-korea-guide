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
    items: [
      { title: 'Gyeongbokgung (경복궁)', body: 'The grand main palace. Catch the changing of the guard ceremony.' },
      { title: 'Deoksugung (덕수궁)', body: 'Charming palace with a mix of Korean and Western architecture, lovely at dusk.' },
      { title: 'Changdeokgung (창덕궁)', body: 'A UNESCO site famous for its Secret Garden (Huwon).' },
    ],
  },
  {
    heading: 'Hanok (traditional houses)',
    items: [
      { title: 'Bukchon Hanok Village (북촌한옥마을)', body: 'Historic hanok streets between the palaces. Please keep quiet — people live here.' },
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
      { title: '노래방 (Noraebang)', body: 'Karaoke rooms, a must-try night out. Look for a 코인노래방 (coin karaoke): you pay per song (or a few songs for ₩1,000) instead of renting a whole room by the hour, so it is perfect for solo singers or a quick session with friends.' },
      { title: 'PC방 (PC bang)', body: 'Internet cafes packed with high-spec gaming PCs — a staple of Korean leisure. Cheap by the hour, and many serve surprisingly good food (ramyeon, fried snacks) right to your seat.' },
      {
        title: 'Dermatology clinics',
        body: "Korea's new visitor record was partly driven by skincare and derma tourism. Ask me for details if you are interested.",
      }, 
      { title: 'Korean medicine clinic (한의원)', body: 'Try traditional Korean medicine and acupuncture.' },
    ],
  },
]
