import { pastor } from '../data/config'

export default function Pastor(){
  return (
    <section id="paroco" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Pároco</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{pastor.name}</h2>
            <p className="mt-3 text-lg font-semibold text-slate-700">{pastor.since}</p>
            <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">{pastor.bio}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex h-48 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-extrabold text-blue-700">Pe.</div>
                <p className="mt-4 font-bold text-slate-800">{pastor.role}</p>
                <p className="text-sm text-slate-500">Resumo biográfico em breve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
