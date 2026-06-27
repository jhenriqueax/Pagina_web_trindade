import { ministries, ministriesPendingInfo } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Ministries(){
  return (
    <section id="ministerios" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Pastorais"
          title="Serviço, oração e evangelização"
          text="Relação das pastorais, grupos e movimentos com seus coordenadores ou responsáveis, conforme o material enviado."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ministries.map((m, index)=>(
            <article key={m.title} className="soft-card rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{m.title}</h3>
              {m.desc && <p className="mt-2 text-sm leading-6 text-slate-600">{m.desc}</p>}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Responsáveis</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{m.coordinators.join(', ')}</p>
              </div>
            </article>
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
