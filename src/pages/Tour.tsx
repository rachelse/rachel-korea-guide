import PageHeader from '../components/PageHeader'
import NoteCard from '../components/NoteCard'
import { tourGroups } from '../data/tour'

export default function Tour() {
  return (
    <div className="page">
      <PageHeader
        title="Tour"
        subtitle="Palaces, markets, the Han River, and uniquely Korean experiences."
      />
      {tourGroups.map((group) => (
        <section key={group.heading} className="content-group">
          <h2 className="group-heading">{group.heading}</h2>
          {group.intro && <p className="group-intro">{group.intro}</p>}
          <div className="note-grid">
            {group.items.map((item) => (
              <NoteCard key={item.title} note={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
