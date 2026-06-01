import { masses, activities } from '../data/config'

export default function Schedule(){
  return (
    <section id="horarios" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Horários de Missas e Atividades Semanais</h2>
          <p className="mt-2 text-slate-600">Confira a programação semanal da Matriz Santíssima Trindade.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Horários de Missas</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {masses.map((m)=> (
                <li key={m.day} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <strong>{m.day}</strong>
                  <span>{m.times.join(' · ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-bold">Atividades Semanais</h3>
            <ul className="mt-4 space-y-4 text-slate-700">
              {activities.map((a)=> (
                <li key={a.day}>
                  <strong>{a.day}</strong>
                  <ul className="mt-1 space-y-1">
                    {a.items.map((item)=> <li key={item}>{item}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
