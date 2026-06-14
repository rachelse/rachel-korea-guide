import type { ContentNote } from '../data/types'

interface Props {
  note: ContentNote
}

export default function NoteCard({ note }: Props) {
  return (
    <article className="note-card">
      <h3 className="note-title">{note.title}</h3>
      {note.body && (
        <p className="note-body">
          {note.body.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      )}
      {note.links && note.links.length > 0 && (
        <div className="note-links">
          {note.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="note-link"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
