import { news } from '../data/config'

export default function News(){
  return (
    <section id="atualidades" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Atualidades</h2>
          <p className="mt-2 text-slate-600">Notícias, avisos e comunicados paroquiais em um espaço próprio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item)=> (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide text-blue-700">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
