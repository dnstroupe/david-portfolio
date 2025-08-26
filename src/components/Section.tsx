import { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 md:scroll-mt-32 py-14 md:py-20">
      <div className="container-nice">
        <h2 className="section-title mb-6">{title}</h2>
        {children}
      </div>
    </section>
  )
}
