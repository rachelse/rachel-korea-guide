import PageHeader from '../components/PageHeader'
import NoteCard from '../components/NoteCard'
import { shopping } from '../data/shopping'

export default function Shopping() {
  return (
    <div className="page">
      <PageHeader
        title="Shopping"
        subtitle="Where to find everyday goods, skincare, and beauty deals."
      />
      <div className="note-grid">
        {shopping.map((item) => (
          <NoteCard key={item.title} note={item} />
        ))}
      </div>
    </div>
  )
}
