import { Link } from 'react-router-dom'
import SeoulMap from '../components/SeoulMap'
import { mapLinks } from '../data/maps'

const sections = [
  { to: '/tips', emoji: '💡', title: 'Local Tips', desc: 'Subway, apps, etiquette, and how locals actually get around.' },
  { to: '/food', emoji: '🍜', title: 'Food', desc: 'Unique dishes, seasonal eats, and where locals go.' },
  { to: '/tour', emoji: '⛩️', title: 'Tour', desc: 'Palaces, markets, the Han River, experiences, and shopping.' },
  { to: '/cities', emoji: '🚄', title: 'Other Cities', desc: 'Beyond Seoul: Jeju, Busan, Gyeongju, and more.' },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Welcome to Korea!</h1>
        <p className="hero-lede">
          Korea has more tourists than ever on record. I&rsquo;ve met so many people visiting my
          country lately, and I&rsquo;m glad to guide you and share some local tips.
        </p>
      </section>

      <section className="map-section">
        <h2 className="section-heading">Seoul at a glance</h2>
        <p className="section-intro map-intro">
          Seoul is divided into 25 districts (구, <em>gu</em>).
          <br/>
          Hover over a district to read about it, or hover a pin for my notes on the trendy neighborhoods.
        </p>
        <SeoulMap />
      </section>

      <section className="maps-section">
        <h2 className="section-heading">My Google Maps</h2>
        <p className="section-intro">
          My saved spots, organized into lists. Open any of them in Google Maps.
        </p>
        <div className="maps-grid">
          {mapLinks.map((m) => (
            <a
              key={m.url}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-card"
            >
              <span className="map-link-pin">📍</span>
              <span className="map-link-body">
                <span className="map-link-label">
                  {m.label}
                </span>
                {m.note && <span className="map-link-note">{m.note}</span>}
              </span>
              <span className="map-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-cards">
        <h2 className="section-heading">What&rsquo;s inside</h2>
        <div className="card-grid">
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className="overview-card">
              <span className="overview-emoji">{s.emoji}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
