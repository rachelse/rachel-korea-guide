import { useState } from 'react'
import { guDistricts, GU_VIEWBOX, projectLonLat } from '../data/seoulGu'
import { guInfo } from '../data/guInfo'
import { neighborhoods } from '../data/neighborhoods'
import './SeoulMap.css'

// Pre-compute pin positions as percentages of the map box so they can be
// overlaid as HTML (for rich hover popups) on top of the responsive SVG.
const pins = neighborhoods.map((n) => {
  const { x, y } = projectLonLat(n.lon, n.lat)
  return {
    ...n,
    xPct: (x / GU_VIEWBOX.width) * 100,
    yPct: (y / GU_VIEWBOX.height) * 100,
  }
})

// Pre-compute gu label/centroid positions as percentages for the HTML
// tooltip overlay (so the hover card can sit on top of the SVG).
const guPoints = guDistricts.map((g) => ({
  ...g,
  xPct: (g.cx / GU_VIEWBOX.width) * 100,
  yPct: (g.cy / GU_VIEWBOX.height) * 100,
}))

// Strip the administrative "-gu" suffix for cleaner English labels.
function shortEng(nameEng: string): string {
  return nameEng.replace(/-gu$/i, '')
}

export default function SeoulMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [activeGu, setActiveGu] = useState<string | null>(null)

  return (
    <div className="seoul-map" role="group" aria-label="Map of Seoul districts with recommended areas">
      <svg
        className="seoul-map-svg"
        viewBox={`0 0 ${GU_VIEWBOX.width} ${GU_VIEWBOX.height}`}
        role="img"
        aria-label="Seoul administrative districts"
      >
        {guDistricts.map((g) => (
          <path
            key={g.code}
            d={g.path}
            className={`gu-shape ${activeGu === g.code ? 'active' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`${shortEng(g.nameEng)} (${g.name})`}
            onMouseEnter={() => setActiveGu(g.code)}
            onMouseLeave={() => setActiveGu((cur) => (cur === g.code ? null : cur))}
            onFocus={() => setActiveGu(g.code)}
            onBlur={() => setActiveGu((cur) => (cur === g.code ? null : cur))}
          />
        ))}

        {/* English district labels */}
        {guDistricts.map((g) => (
          <text key={`${g.code}-label`} x={g.cx} y={g.cy} className="gu-label">
            {shortEng(g.nameEng)}
          </text>
        ))}
      </svg>

      {/* Hoverable district (구) tooltips */}
      <div className="gu-tooltip-layer">
        {guPoints.map((g) => {
          const isActive = activeGu === g.code
          const placement = g.yPct < 28 ? 'below' : 'above'
          const align = g.xPct < 22 ? 'left' : g.xPct > 78 ? 'right' : 'center'

          return (
            <div
              key={`${g.code}-tip`}
              className={`gu-tooltip-anchor ${isActive ? 'active' : ''}`}
              style={{ left: `${g.xPct}%`, top: `${g.yPct}%` }}
            >
              <div className={`gu-tooltip ${placement} ${align} ${isActive ? 'show' : ''}`} role="tooltip">
                <p className="gu-tooltip-korean">{g.name}</p>
                <h4 className="gu-tooltip-title">{shortEng(g.nameEng)}</h4>
                <p className="gu-tooltip-desc">{guInfo[g.code]?.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Hoverable neighborhood pins overlaid on the map */}
      <div className="pin-layer">
        {pins.map((p) => {
          const isActive = activeId === p.id
          const placement = p.yPct < 32 ? 'below' : 'above'
          const align = p.xPct < 24 ? 'left' : p.xPct > 76 ? 'right' : 'center'

          return (
            <div
              key={p.id}
              className={`map-pin ${isActive ? 'active' : ''}`}
              style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }}
              onMouseEnter={() => setActiveId(p.id)}
              onMouseLeave={() => setActiveId((cur) => (cur === p.id ? null : cur))}
            >
              <button
                className="pin-button"
                onFocus={() => setActiveId(p.id)}
                onBlur={() => setActiveId((cur) => (cur === p.id ? null : cur))}
                onClick={() => setActiveId((cur) => (cur === p.id ? null : p.id))}
                aria-expanded={isActive}
                aria-label={`${p.name} (${p.koreanName})`}
              >
                <span className="pin-dot" />
                <span className="pin-label">{p.name}</span>
              </button>

              <div className={`pin-popup ${placement} ${align} ${isActive ? 'show' : ''}`} role="tooltip">
                <p className="popup-korean">{p.koreanName}</p>
                <h4 className="popup-title">{p.name}</h4>
                <p className="popup-desc">{p.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
