import { parish } from '../data/config'
import SectionHeader from './SectionHeader'

export default function Dizimo(){
  return (
    <section id="dizimo" className="section-pad bg-white/70">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Dízimo"
              title="Gesto de fé, gratidão e compromisso"
              text="Conteúdo aprovado. Sua contribuição fortalece as ações pastorais, a evangelização, a caridade e a manutenção da paróquia."
            />
            <ul className="mt-8 space-y-3 text-slate-700">
              <li><strong>PIX:</strong> <span className="font-mono">{parish.pixKey}</span></li>
              <li><strong>Dados bancários:</strong> {parish.bankDetails}</li>
              <li><strong>Presencial:</strong> Secretaria paroquial, em horário de expediente.</li>
            </ul>
          </div>
          <div className="soft-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold">Transparência</h3>
            <p className="mt-3 leading-7 text-slate-600">Este bloco pode receber informações de prestação de contas, campanhas do dízimo e orientações para novos dizimistas.</p>
            <div className="mt-6 rounded-2xl bg-[var(--ivory)] p-5 text-sm leading-6 text-slate-600 ring-1 ring-black/5">Dados de PIX e banco ainda precisam ser informados para publicação final.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
