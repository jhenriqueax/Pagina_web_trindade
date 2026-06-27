import { masses, activities, officeHours } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Schedule(){
  return (
    <section id="horarios" className="section-pad bg-white/70">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Horários"
          title="Missas e atividades semanais"
          text="Confira a programação semanal da Matriz Santíssima Trindade. Confissões na quarta e na Quinta-feira Eucarística acontecem mediante agendamento."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.35fr_.9fr]">
          <div className="soft-card rounded-[2rem] p-6">
            <h3 className="text-2xl font-semibold">Santa Missa</h3>
            <ul className="mt-5 space-y-4">
              {masses.map((m)=> (
                <li key={m.day} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                  <strong className="block text-sm uppercase tracking-[0.18em] text-[var(--blue)]">{m.day}</strong>
                  <span className="mt-1 block text-lg font-semibold text-slate-900">{m.times.join(' · ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="soft-card rounded-[2rem] p-6">
            <h3 className="text-2xl font-semibold">Atividades Semanais</h3>
            <ul className="mt-5 space-y-5">
              {activities.map((a)=> (
                <li key={a.day}>
                  <strong className="block text-sm uppercase tracking-[0.18em] text-[var(--blue)]">{a.day}</strong>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    {a.items.map((item)=> <li key={item} className="leading-7">{item}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="soft-card rounded-[2rem] p-6">
            <h3 className="text-2xl font-semibold">Secretaria</h3>
            <ul className="mt-5 space-y-4">
              {officeHours.map((item)=> (
                <li key={item.day}>
                  <strong className="block text-sm uppercase tracking-[0.18em] text-[var(--blue)]">{item.day}</strong>
                  <span className="mt-1 block text-slate-700">{item.times.join(' / ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
