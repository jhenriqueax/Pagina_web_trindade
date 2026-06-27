import { communities } from '../data/config'
import SectionHeader from './SectionHeader'

const pendingFields = ['Nome da comunidade', 'Endereço', 'Localização (mapa)', 'Responsável', 'Horário de Missas']

export default function Communities(){
  return (
    <section id="comunidades" className="section-pad bg-white/70">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Comunidades"
          title="Capelas e comunidades vinculadas"
          text="Espaço reservado para reunir endereço, mapa, responsável e horário de Missas de cada comunidade."
        />

        {communities.length > 0 ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {communities.map((community)=> {
              const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(community.mapQuery)}&output=embed`

              return (
                <article key={community.name} className="soft-card overflow-hidden rounded-[2rem]">
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
          <div className="mt-10 rounded-[2rem] border border-dashed border-[#c89b4a]/60 bg-white/60 p-6">
            <h3 className="text-2xl font-semibold">Relação em fase de conclusão</h3>
            <p className="mt-2 text-slate-600">A lista das comunidades será inserida assim que as informações oficiais forem consolidadas.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {pendingFields.map((field)=> (
                <div key={field} className="rounded-2xl bg-[var(--ivory)] px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-black/5">{field}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
