import PageHeader from '../components/PageHeader'
import NoteCard from '../components/NoteCard'
import { tips } from '../data/tips'
import { personalFavorites, localVacation } from '../data/personal'

export default function Tips() {
  return (
    <div className="page">
      <PageHeader
        title="Local Tips"
        subtitle="Small things that make a big difference when you travel in Korea."
      />
      <div className="note-grid">
        {tips.map((tip) => (
          <NoteCard key={tip.title} note={tip} />
        ))}
      </div>

      <section className="content-group">
        <h2 className="group-heading">Personal favorites</h2>
        <div className="note-grid">
          {personalFavorites.map((item) => (
            <NoteCard key={item.title} note={item} />
          ))}
        </div>
      </section>

      <section className="content-group">
        <h2 className="group-heading">Like a local</h2>
        <p className="group-intro">
          More local experiences most travelers miss on a short trip — worth it if you stay a while.
        </p>
        <div className="note-grid">
          {localVacation.map((item) => (
            <NoteCard key={item.title} note={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
