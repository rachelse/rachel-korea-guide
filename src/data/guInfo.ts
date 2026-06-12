// Short descriptions for each of Seoul's 25 administrative districts (구).
// These are placeholders — replace the `description` text with your own notes
// over time. Keyed by the district `code` used in seoulGu.ts.

export interface GuInfo {
  /** Short blurb shown on hover. Edit me! */
  description: string
}

export const guInfo: Record<string, GuInfo> = {
  '11250': { description: 'Add a short note about Gangdong-gu (강동구) here.' },
  '11240': { description: 'Add a short note about Songpa-gu (송파구) here.' },
  '11230': { description: 'Add a short note about Gangnam-gu (강남구) here.' },
  '11220': { description: 'Add a short note about Seocho-gu (서초구) here.' },
  '11210': { description: 'Add a short note about Gwanak-gu (관악구) here.' },
  '11200': { description: 'Add a short note about Dongjak-gu (동작구) here.' },
  '11190': { description: 'Add a short note about Yeongdeungpo-gu (영등포구) here.' },
  '11180': { description: 'Add a short note about Geumcheon-gu (금천구) here.' },
  '11170': { description: 'Add a short note about Guro-gu (구로구) here.' },
  '11160': { description: 'Add a short note about Gangseo-gu (강서구) here.' },
  '11150': { description: 'Add a short note about Yangcheon-gu (양천구) here.' },
  '11140': { description: 'Add a short note about Mapo-gu (마포구) here.' },
  '11130': { description: 'Add a short note about Seodaemun-gu (서대문구) here.' },
  '11120': { description: 'Add a short note about Eunpyeong-gu (은평구) here.' },
  '11110': { description: 'Add a short note about Nowon-gu (노원구) here.' },
  '11100': { description: 'Add a short note about Dobong-gu (도봉구) here.' },
  '11090': { description: 'Add a short note about Gangbuk-gu (강북구) here.' },
  '11080': { description: 'Add a short note about Seongbuk-gu (성북구) here.' },
  '11070': { description: 'Add a short note about Jungnang-gu (중랑구) here.' },
  '11060': { description: 'Add a short note about Dongdaemun-gu (동대문구) here.' },
  '11050': { description: 'Add a short note about Gwangjin-gu (광진구) here.' },
  '11040': { description: 'Add a short note about Seongdong-gu (성동구) here.' },
  '11030': { description: 'Add a short note about Yongsan-gu (용산구) here.' },
  '11020': { description: 'Add a short note about Jung-gu (중구) here.' },
  '11010': { description: 'Add a short note about Jongno-gu (종로구) here.' },
}
