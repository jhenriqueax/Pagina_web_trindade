import { communities } from '../data/config'

const pendingFields = ['Nome da comunidade', 'Endereço', 'Localização (mapa)', 'Responsável', 'Horário de Missas']

export default function Communities(){
  return (
    <section id="comunidades" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">Comunidades</h2>
          <p className="mt-2 text-slate-600">Espaço reservado para as comunidades da paróquia, com endereço, mapa, responsável e horários de Missas.</p>
        </div>

        {communities.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {communities.map((community)=> {
              const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(community.mapQuery)}&output=embed`

              return (
                <article key={community.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{community.name}</h3>
                    <dl className="mt-4 space-y-3 text-sm text-slate-700">
                      <div>
                        <dt className="font-semibold text-slate-900">Endereço</dt>
                        <dd>{community.address}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Responsável</dt>
                        <dd>{community.responsible}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-900">Horário de Missas</dt>
                        <dd>{community.massTimes.join(', ')}</dd>
                      </div>
                    </dl>
                  </div>
                  <iframe title={`Mapa da comunidade ${community.name}`} className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapSrc}></iframe>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/70 p-6">
            <h3 className="text-xl font-bold text-blue-950">Relação em fase de conclusão</h3>
            <p className="mt-2 text-blue-900/80">A lista das comunidades será inserida assim que as informações oficiais forem consolidadas.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {pendingFields.map((field)=> (
                <div key={field} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-blue-100">{field}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
