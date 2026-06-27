import { parish } from '../data/config'
import { MapPin, Phone } from 'lucide-react'

export default function Hero(){
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={parish.heroImage} alt="Interior da Paróquia Santíssima Trindade durante celebração" className="h-full min-h-[100svh] w-full object-cover" />
        <div className="absolute inset-0 bg-[#0d2345]/75"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"/>
      </div>
      <div className="section-shell">
        <div className="grid min-h-[calc(100svh-6rem)] items-center gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl text-white">
            <p className="eyebrow">Campina Grande — PB</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">Bem-vindos à Paróquia <span className="italic text-[var(--gold-soft)]">Santíssima Trindade</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82" style={{fontFamily: '"Lora", Georgia, serif'}}>Casa de fé, liturgia e comunhão no coração do Catolé, acolhendo famílias e fiéis para celebrar, servir e caminhar com Cristo.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#horarios" className="btn-primary bg-[var(--gold)] !text-[var(--blue-deep)] hover:bg-[var(--gold-soft)]">Ver horários</a>
              <a href="#local" className="btn-secondary">
                <MapPin size={17}/>
                <span className="ml-2">Como chegar</span>
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 text-sm text-white/78 sm:grid-cols-3">
              <div className="border-l border-[#c89b4a]/70 pl-4"><strong className="block text-white">Matriz</strong>{parish.neighborhood}</div>
              <div className="border-l border-[#c89b4a]/70 pl-4"><strong className="block text-white">Telefone</strong>{parish.phoneLabel}</div>
              <div className="border-l border-[#c89b4a]/70 pl-4"><strong className="block text-white">Secretaria</strong>{parish.officeHours}</div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="soft-card w-full max-w-xs rounded-[2rem] bg-white/92 p-8 text-center">
              <img src={parish.crest} alt="Brasão da Paróquia Santíssima Trindade" className="mx-auto h-56 w-44 object-contain" />
              <p className="eyebrow mt-5 !tracking-[0.2em]">Santíssima Trindade</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Brasão oficial em destaque, conforme referência enviada.</p>
              <a href={`tel:+${parish.phone}`} className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--blue)]">
                <Phone size={16}/> Ligar para a paróquia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
