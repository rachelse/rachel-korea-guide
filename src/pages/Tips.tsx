import PageHeader from '../components/PageHeader'
import NoteCard from '../components/NoteCard'
import { tips } from '../data/tips'

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
    </div>
  )
}
