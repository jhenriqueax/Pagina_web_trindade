import { agenda } from '../data/config'

export default function Agenda(){
  return (
    <section id="agenda" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Agenda</h2>
            <p className="mt-3 text-slate-600">Calendário para divulgação dos eventos e atividades da Paróquia Santíssima Trindade.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day)=> <div key={day}>{day}</div>)}
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {agenda.map((item)=> (
                <article key={item.title} className="rounded-2xl bg-blue-50 p-5 ring-1 ring-blue-100">
                  <div className="text-sm font-semibold text-blue-700">{item.date} · {item.time}</div>
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
