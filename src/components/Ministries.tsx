import { ministries, ministriesPendingInfo } from '../data/config'
import SectionHeader from './SectionHeader'
import { ChevronDown, Phone } from 'lucide-react'

export default function Ministries(){
  return (
    <section id="ministerios" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Serviços Pastorais"
          title="Pastorais, grupos e movimentos"
          text="Cards expansíveis com os coordenadores e telefones enviados no material. Toque em uma pastoral para ver os contatos."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ministries.map((m, index)=>(
            <details key={m.title} className="group soft-card rounded-3xl p-5 open:bg-white">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mt-3 block text-2xl font-semibold leading-tight" style={{fontFamily: '"Cormorant Garamond", Georgia, serif'}}>{m.title}</span>
                  {m.desc && <span className="mt-2 block text-sm leading-6 text-slate-600">{m.desc}</span>}
                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">{m.coordinators.length} contato{m.coordinators.length > 1 ? 's' : ''}</span>
                </span>
                <ChevronDown className="mt-1 shrink-0 text-[var(--gold)] transition group-open:rotate-180" size={20}/>
              </summary>
              <div className="mt-5 space-y-3 border-t border-black/10 pt-5">
                {m.coordinators.map((coordinator)=> (
                  <div key={`${m.title}-${coordinator.name}-${coordinator.phone}`} className="rounded-2xl bg-[var(--ivory)] p-4 ring-1 ring-black/5">
                    <p className="text-sm font-semibold text-slate-900">{coordinator.name}</p>
                    <a href={`tel:${coordinator.phone.replace(/[^0-9+]/g, '')}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]">
                      <Phone size={15}/>
                      {coordinator.phone}
                    </a>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
        {ministriesPendingInfo.length > 0 && (
          <div className="mt-8 rounded-3xl border border-dashed border-[#c89b4a]/60 bg-white/50 p-6">
            <h3 className="text-2xl font-semibold">Pastorais citadas para completar dados</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Esses grupos aparecem no material, mas ainda precisam de confirmação de coordenadores/responsáveis para publicação completa.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {ministriesPendingInfo.map((item)=> <span key={item} className="rounded-full bg-[var(--ivory)] px-3 py-1.5 text-xs font-semibold text-[var(--blue)] ring-1 ring-black/5">{item}</span>)}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
