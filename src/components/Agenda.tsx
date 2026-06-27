import { agenda } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Agenda(){
  return (
    <section id="agenda" className="section-pad">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <SectionHeader
            eyebrow="Agenda"
            title="Calendário da paróquia"
            text="Calendário para divulgação dos eventos, celebrações especiais e atividades da Paróquia Santíssima Trindade."
          />
          <div className="soft-card rounded-[2rem] p-6">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day)=> <div key={day}>{day}</div>)}
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {agenda.map((item)=> (
                <article key={item.title} className="rounded-2xl bg-[var(--ivory)] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-[var(--blue)]">{item.date} · {item.time}</div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
