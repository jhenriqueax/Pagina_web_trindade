import { parish } from '../data/config'

export default function Hero(){
  return (
    <section id="inicio" className="relative isolate pt-28">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1920&auto=format&fit=crop" alt="Igreja" className="h-[620px] w-full object-cover" />
        <div className="absolute inset-0 h-[620px] bg-gradient-to-t from-slate-900/85 via-slate-900/55 to-transparent"/>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[620px] grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="max-w-2xl text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide ring-1 ring-white/20">Paróquia católica</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">Bem-vindos à Paróquia <span className="text-yellow-300">Santíssima Trindade</span></h1>
            <p className="mt-4 text-white/90">Uma comunidade de fé no coração de Campina Grande, dedicada à oração, serviço e acolhimento.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#sobre" className="inline-flex items-center rounded-2xl bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold shadow">Conheça a paróquia</a>
              <a href="#local" className="inline-flex items-center rounded-2xl bg-white/90 hover:bg-white px-5 py-3 font-semibold text-slate-900 shadow">Como chegar</a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-3xl bg-white/95 p-6 text-center shadow-2xl ring-1 ring-white/40 backdrop-blur">
              <img src={parish.crest} alt="Brasão da Paróquia Santíssima Trindade" className="mx-auto h-52 w-52 object-contain" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue-900">Brasão da Paróquia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
