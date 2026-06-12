import type { ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, children }: Props) {
  return (
    <section className="page-header">
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {children}
    </section>
  )
}
