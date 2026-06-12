import PageHeader from '../components/PageHeader'
import NoteCard from '../components/NoteCard'
import { foodGroups } from '../data/food'

export default function Food() {
  return (
    <div className="page">
      <PageHeader
        title="Food"
        subtitle="What Koreans actually eat — from beginner-friendly to hardcore."
      />
      {foodGroups.map((group) => (
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
