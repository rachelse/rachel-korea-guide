import { useEffect, useRef, useState } from 'react'
import { koreaProvinces, KOREA_VIEWBOX, projectKorea } from '../data/koreaProvinces'
import { cities } from '../data/cities'
import './KoreaMap.css'

// Pre-compute city pin positions as percentages of the map box so they can be
// overlaid as HTML (for rich hover popups) on top of the responsive SVG.
const pins = cities
  .filter((c) => c.lon != null && c.lat != null)
  .map((c) => {
    const { x, y } = projectKorea(c.lon as number, c.lat as number)
    return {
      ...c,
      xPct: (x / KOREA_VIEWBOX.width) * 100,
      yPct: (y / KOREA_VIEWBOX.height) * 100,
    }
  })

export default function KoreaMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  // Tracks whether the last interaction came from touch, so we can ignore the
  // synthetic mouseenter/leave events a tap fires.
  const isTouch = useRef(false)

  // On touch devices, close the open pin popup when tapping outside a pin.
  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (e.pointerType !== 'touch') return
      const target = e.target as Element | null
      if (target && target.closest('.map-pin')) return
      setActiveId(null)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <div className="korea-map" role="group" aria-label="Map of South Korea with recommended cities">
      <svg
        className="korea-map-svg"
        viewBox={`0 0 ${KOREA_VIEWBOX.width} ${KOREA_VIEWBOX.height}`}
        role="img"
        aria-label="South Korea provinces"
      >
        {koreaProvinces.map((p) => (
          <path key={p.code} d={p.path} className="province-shape" />
        ))}
      </svg>

      {/* City pins overlaid on the map */}
      <div className="pin-layer">
        {pins.map((p) => {
          const isActive = activeId === p.id

          return (
            <div
              key={p.id}
              className={`map-pin ${isActive ? 'active' : ''}`}
              style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }}
              onMouseEnter={() => {
                if (isTouch.current) return
                setActiveId(p.id)
              }}
              onMouseLeave={() => {
                if (isTouch.current) return
                setActiveId((cur) => (cur === p.id ? null : cur))
              }}
            >
              <button
                className="pin-button"
                onPointerDown={(e) => {
                  isTouch.current = e.pointerType === 'touch'
                }}
                onFocus={() => {
                  if (isTouch.current) return
                  setActiveId(p.id)
                }}
                onBlur={() => {
                  if (isTouch.current) return
                  setActiveId((cur) => (cur === p.id ? null : cur))
                }}
                onClick={() => setActiveId((cur) => (cur === p.id ? null : p.id))}
                aria-expanded={isActive}
                aria-label={`${p.name}${p.koreanName ? ` (${p.koreanName})` : ''}`}
              >
                <span className="pin-dot" />
                <span className="pin-label">{p.name}</span>
              </button>
            </div>
          )
        })}
      </div>

      {/* Pin popups live in their own top layer so an open popup never has to
          raise its pin above neighbors. */}
      <div className="pin-popup-layer">
        {pins.map((p) => {
          const isActive = activeId === p.id
          const placement = p.yPct < 32 ? 'below' : 'above'
          const align = p.xPct < 24 ? 'left' : p.xPct > 76 ? 'right' : 'center'

          return (
            <div
              key={`${p.id}-popup`}
              className="pin-popup-anchor"
              style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }}
            >
              <div className={`pin-popup ${placement} ${align} ${isActive ? 'show' : ''}`} role="tooltip">
                {p.koreanName && <p className="popup-korean">{p.koreanName}</p>}
                <h4 className="popup-title">{p.name}</h4>
                <p className="popup-desc">{p.description}</p>
                {p.highlights && (
                  <ul className="popup-highlights">
                    {p.highlights.map((h) => (
                      <li key={h.title}>
                        <strong>{h.title}:</strong> {h.body}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
