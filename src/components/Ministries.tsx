import { ministries } from '../data/config'

export default function Ministries(){
  return (
    <section id="ministerios" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Pastorais</h2>
          <p className="mt-2 text-slate-600">Relação das pastorais e seus respectivos coordenadores ou responsáveis.</p>
        </div>
        {ministries.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m)=>(
              <div key={m.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-lg">{m.title}</h3>
                <p className="mt-2 text-sm font-semibold text-blue-700">Responsável: {m.coordinator}</p>
                {m.desc && <p className="mt-2 text-slate-600">{m.desc}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Lista em fase de conclusão</h3>
            <p className="mt-2 text-slate-600">A relação oficial das pastorais e seus coordenadores/responsáveis será publicada neste espaço.</p>
          </div>
        )}
      </div>
    </section>
  )
}
