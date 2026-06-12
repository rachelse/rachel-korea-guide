import type { ContentNote } from '../data/types'

interface Props {
  note: ContentNote
}

export default function NoteCard({ note }: Props) {
  return (
    <article className="note-card">
      <h3 className="note-title">{note.title}</h3>
      {note.body && <p className="note-body">{note.body}</p>}
    </article>
  )
}
