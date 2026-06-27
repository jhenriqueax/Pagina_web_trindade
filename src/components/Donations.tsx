import { parish } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Donations(){
  return (
    <section id="doacoes" className="relative overflow-hidden py-24 text-white">
      <img src={parish.ctaImage} alt="Luz entrando na igreja" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0d2345]/90" />
      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <SectionHeader
            light
            eyebrow="Doações"
            title="Ajude a sustentar a missão paroquial"
            text="Espaço específico para recebimento de doações, campanhas, ofertas e contribuições para ações sociais e pastorais."
          />
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">Recebimento</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/82">
              <li><strong>PIX:</strong> <span className="font-mono">{parish.pixKey}</span></li>
              <li><strong>Dados bancários:</strong> {parish.bankDetails}</li>
              <li><strong>Presencial:</strong> Secretaria paroquial.</li>
            </ul>
            <div className="mt-6 flex h-40 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-500">QR Code do PIX</div>
          </div>
        </div> 
      </div>
    </section>
  )
}
