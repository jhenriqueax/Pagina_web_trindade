import { news } from '../data/config'
import SectionHeader from './SectionHeader'

export default function News(){
  return (
    <section id="atualidades" className="section-pad bg-white/70">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Atualidades"
          title="Avisos e comunicados paroquiais"
          text="Um espaço simples para publicar notícias, comunicados, formações e orientações da vida paroquial."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((item)=> (
            <article key={item.title} className="soft-card rounded-3xl p-6">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
