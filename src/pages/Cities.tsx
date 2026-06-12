import PageHeader from '../components/PageHeader'
import { cities } from '../data/cities'

export default function Cities() {
  return (
    <div className="page">
      <PageHeader
        title="Other Cities"
        subtitle="When you have time beyond Seoul, here is where to go."
      />
      <div className="district-list">
        {cities.map((city) => (
          <article key={city.id} className="district-entry">
            <header>
              {city.koreanName && <span className="district-korean">{city.koreanName}</span>}
              <h2 className="district-name">{city.name}</h2>
            </header>
            <p>{city.description}</p>
            {city.highlights && (
              <ul className="city-highlights">
                {city.highlights.map((h) => (
                  <li key={h.title}>
                    <strong>{h.title}:</strong> {h.body}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
