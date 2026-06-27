import { parish } from '../data/config'
import SectionHeader from './SectionHeader'
import { Mail, Phone } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contato" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Contato"
          title="Fale com a secretaria paroquial"
          text="Canais para atendimento, orientações sobre sacramentos, agendamentos, pastorais e informações gerais."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="soft-card rounded-3xl p-6">
            <Phone className="text-[var(--gold)]" size={24}/>
            <h3 className="mt-4 text-2xl font-semibold">Telefone</h3>
            <p className="mt-2 text-slate-600">Atendimento paroquial</p>
            <a href={`tel:+${parish.phone}`} className="mt-4 inline-flex font-semibold text-[var(--blue)]">{parish.phoneLabel}</a>
          </div>
          <div className="soft-card rounded-3xl p-6">
            <Mail className="text-[var(--gold)]" size={24}/>
            <h3 className="mt-4 text-2xl font-semibold">E-mail</h3>
            <p className="mt-2 text-slate-600">Secretaria e pedidos</p>
            <a href={`mailto:${parish.email}`} className="mt-4 inline-flex font-semibold text-[var(--blue)]">{parish.email}</a>
            <p className="mt-2 text-xs text-slate-500">E-mail oficial pendente de confirmação.</p>
          </div>
          <div className="soft-card rounded-3xl p-6">
            <h3 className="text-2xl font-semibold">Redes sociais</h3>
            <p className="mt-2 text-slate-600">Acompanhe avisos e transmissões.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={parish.socials.instagram} className="rounded-full bg-[var(--ivory)] px-4 py-2 text-sm font-semibold text-[var(--blue)] ring-1 ring-black/5">Instagram</a>
              <a href={parish.socials.youtube} className="rounded-full bg-[var(--ivory)] px-4 py-2 text-sm font-semibold text-[var(--blue)] ring-1 ring-black/5">YouTube</a>
              <a href={parish.socials.facebook} className="rounded-full bg-[var(--ivory)] px-4 py-2 text-sm font-semibold text-[var(--blue)] ring-1 ring-black/5">Facebook</a>
            </div>
            <p className="mt-4 text-xs text-slate-500">Links oficiais pendentes de confirmação.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
