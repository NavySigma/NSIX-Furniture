import type { ReactNode } from "react"

interface Props {
  subtitle?: string
  children: ReactNode
  light?: boolean
}

export default function SectionTitle({ subtitle, children, light }: Props) {
  return (
    <div className="section-title" data-light={light || undefined}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-heading">{children}</h2>
    </div>
  )
}
