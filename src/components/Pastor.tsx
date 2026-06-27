import { pastor } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Pastor(){
  return (
    <section id="paroco" className="section-pad bg-white/60">
      <div className="section-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeader eyebrow="Pároco" title={pastor.name} text={pastor.bio} />
            <p className="mt-6 inline-flex rounded-full border border-[#c89b4a]/40 bg-white px-4 py-2 text-sm font-semibold text-[var(--blue)]">{pastor.since}</p>
          </div>
          <div className="soft-card rounded-[2rem] p-6">
            <div className="flex h-56 items-center justify-center rounded-[1.5rem] bg-[var(--ivory)] ring-1 ring-black/5">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--blue)] text-3xl font-semibold text-white" style={{fontFamily: '"Cormorant Garamond", Georgia, serif'}}>Pe.</div>
                <p className="mt-5 text-lg font-semibold text-slate-900">{pastor.role}</p>
                <p className="mt-1 text-sm text-slate-500">Resumo biográfico em breve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
