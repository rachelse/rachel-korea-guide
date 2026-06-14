// One-off build script: converts the South Korea provinces (시도) GeoJSON into a
// compact TS data module with simplified SVG path strings + label centroids,
// fitted to a viewBox. Mirrors build-seoul-gu.mjs.
import fs from 'node:fs'

const PAD = 24
const TARGET_H = 980 // target content height in px; width derived from data aspect
const EPS = 0.6 // Douglas-Peucker tolerance in projected px (higher = simpler)

// Crop window: keeps the mainland + Jeju but drops far-flung islands
// (Ulleungdo/Dokdo, distant southwest islets) that would stretch the viewBox.
const WIN = { minLon: 125.5, maxLon: 130.0, minLat: 33.0, maxLat: 38.7 }

const geo = JSON.parse(fs.readFileSync('/tmp/korea.json', 'utf8'))

function eachRing(feature, fn) {
  const g = feature.geometry
  if (g.type === 'Polygon') {
    g.coordinates.forEach((ring) => fn(ring))
  } else if (g.type === 'MultiPolygon') {
    g.coordinates.forEach((poly) => poly.forEach((ring) => fn(ring)))
  }
}

// A ring is kept only if at least one vertex falls inside the crop window.
function ringInWindow(ring) {
  return ring.some(
    ([lon, lat]) =>
      lon >= WIN.minLon && lon <= WIN.maxLon && lat >= WIN.minLat && lat <= WIN.maxLat,
  )
}

// Bounds come from the crop window so the projection is stable.
const minLon = WIN.minLon
const maxLon = WIN.maxLon
const minLat = WIN.minLat
const maxLat = WIN.maxLat

// Equirectangular projection corrected for latitude.
const midLat = (minLat + maxLat) / 2
const lonScale = Math.cos((midLat * Math.PI) / 180)
const geoW = (maxLon - minLon) * lonScale
const geoH = maxLat - minLat
const scale = (TARGET_H - PAD * 2) / geoH
const W = Math.round(geoW * scale + PAD * 2)
const H = Math.round(geoH * scale + PAD * 2)
const offsetX = PAD
const offsetY = PAD

function project(lon, lat) {
  const x = offsetX + (lon - minLon) * lonScale * scale
  const y = offsetY + (maxLat - lat) * scale
  return [x, y]
}

// Perpendicular distance from point p to line a-b.
function perpDist(p, a, b) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy) || 1e-9
  return Math.abs((p[0] - a[0]) * dy - (p[1] - a[1]) * dx) / len
}

// Douglas-Peucker simplification on an array of [x,y] points.
function simplify(points, eps) {
  if (points.length < 3) return points
  let maxD = 0
  let idx = 0
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpDist(points[i], points[0], points[points.length - 1])
    if (d > maxD) {
      maxD = d
      idx = i
    }
  }
  if (maxD > eps) {
    const left = simplify(points.slice(0, idx + 1), eps)
    const right = simplify(points.slice(idx), eps)
    return left.slice(0, -1).concat(right)
  }
  return [points[0], points[points.length - 1]]
}

// Simplify a CLOSED ring. Plain Douglas-Peucker degenerates on closed rings
// (start == end makes the baseline zero-length), so split the ring at the
// vertex farthest from the start into two open chains and simplify each.
function simplifyRing(points, eps) {
  const open = points.length > 1 && points[0][0] === points[points.length - 1][0] && points[0][1] === points[points.length - 1][1]
    ? points.slice(0, -1)
    : points.slice()
  if (open.length < 4) return open
  let far = 0
  let farD = -1
  for (let i = 1; i < open.length; i++) {
    const d = Math.hypot(open[i][0] - open[0][0], open[i][1] - open[0][1])
    if (d > farD) {
      farD = d
      far = i
    }
  }
  const a = open.slice(0, far + 1)
  const b = open.slice(far).concat([open[0]])
  const sa = simplify(a, eps)
  const sb = simplify(b, eps)
  return sa.slice(0, -1).concat(sb)
}

function ringToPath(ring) {
  let pts = ring.map(([lon, lat]) => project(lon, lat))
  pts = simplifyRing(pts, EPS)
  if (pts.length < 3) return ''
  return (
    pts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`)
      .join(' ') + 'Z'
  )
}

function featureToPath(feature) {
  const parts = []
  eachRing(feature, (ring) => {
    if (!ringInWindow(ring)) return
    const p = ringToPath(ring)
    if (p) parts.push(p)
  })
  return parts.join(' ')
}

// Centroid of the largest ring, for label placement.
function featureCentroid(feature) {
  let best = null
  let bestArea = 0
  eachRing(feature, (ring) => {
    let area = 0
    let cx = 0
    let cy = 0
    for (let i = 0; i < ring.length - 1; i++) {
      const [x0, y0] = project(ring[i][0], ring[i][1])
      const [x1, y1] = project(ring[i + 1][0], ring[i + 1][1])
      const a = x0 * y1 - x1 * y0
      area += a
      cx += (x0 + x1) * a
      cy += (y0 + y1) * a
    }
    area /= 2
    if (Math.abs(area) > Math.abs(bestArea) && area !== 0) {
      bestArea = area
      best = [cx / (6 * area), cy / (6 * area)]
    }
  })
  if (best) return best
  let sx = 0
  let sy = 0
  let n = 0
  eachRing(feature, (ring) =>
    ring.forEach(([lon, lat]) => {
      const [x, y] = project(lon, lat)
      sx += x
      sy += y
      n++
    }),
  )
  return [sx / n, sy / n]
}

const provinces = geo.features.map((f) => {
  const [cx, cy] = featureCentroid(f)
  return {
    code: f.properties.code,
    name: f.properties.name,
    nameEng: f.properties.name_eng,
    path: featureToPath(f),
    cx: Math.round(cx),
    cy: Math.round(cy),
  }
})

const out = `// AUTO-GENERATED by scripts/build-korea-provinces.mjs from a South Korea
// provinces GeoJSON. Do not edit by hand; re-run the script to regenerate.
export interface KoreaProvince {
  code: string
  name: string
  nameEng: string
  path: string
  cx: number
  cy: number
}

export const KOREA_VIEWBOX = { width: ${W}, height: ${H} }

// Projection parameters so other modules (e.g. city pins) can map lon/lat to
// the same SVG coordinate space.
export const KOREA_PROJECTION = {
  minLon: ${minLon},
  maxLat: ${maxLat},
  lonScale: ${lonScale},
  scale: ${scale},
  offsetX: ${offsetX},
  offsetY: ${offsetY},
}

/** Project [lon, lat] into the KOREA_VIEWBOX coordinate space. */
export function projectKorea(lon: number, lat: number): { x: number; y: number } {
  return {
    x: KOREA_PROJECTION.offsetX + (lon - KOREA_PROJECTION.minLon) * KOREA_PROJECTION.lonScale * KOREA_PROJECTION.scale,
    y: KOREA_PROJECTION.offsetY + (KOREA_PROJECTION.maxLat - lat) * KOREA_PROJECTION.scale,
  }
}

export const koreaProvinces: KoreaProvince[] = ${JSON.stringify(provinces, null, 2)}
`

fs.writeFileSync('src/data/koreaProvinces.ts', out)
const bytes = Buffer.byteLength(out, 'utf8')
console.log(`Wrote src/data/koreaProvinces.ts (${(bytes / 1024).toFixed(1)} kB, ${provinces.length} provinces, viewBox ${W}x${H})`)
