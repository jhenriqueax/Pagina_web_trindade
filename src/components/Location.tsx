import { parish } from '../data/config'
import SectionHeader from './SectionHeader'
import { ExternalLink, MapPin } from 'lucide-react'

export default function Location(){
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(parish.mapQuery)}&output=embed`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parish.mapQuery)}`

  return (
    <section id="local" className="section-pad bg-white/70">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div>
            <SectionHeader
              eyebrow="Localização"
              title="Matriz Santíssima Trindade"
              text="Conteúdo aprovado. Use o mapa para chegar à Matriz e consulte a secretaria paroquial em horário de atendimento."
            />
            <div className="mt-8 rounded-3xl bg-[var(--ivory)] p-6 ring-1 ring-black/5">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-[var(--gold)]" size={20}/>
                <div>
                  <p className="font-semibold text-slate-900">{parish.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{parish.address}<br/>{parish.addressLine2}<br/>CEP: {parish.zipCode}</p>
                </div>
              </div>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-secondary mt-6 w-full">
                Abrir no Google Maps
                <ExternalLink className="ml-2" size={16}/>
              </a>
            </div>
          </div>
          <div className="soft-card overflow-hidden rounded-[2rem] p-2">
            <iframe title="Mapa da Paróquia Santíssima Trindade" className="h-[460px] w-full rounded-[1.5rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={mapSrc}></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
