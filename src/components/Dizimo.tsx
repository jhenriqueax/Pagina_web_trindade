import { parish } from '../data/config'

export default function Dizimo(){
  return (
    <section id="dizimo" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Dízimo</h2>
            <p className="mt-4 text-slate-600">Sua contribuição fortalece as ações pastorais e a manutenção da paróquia.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>PIX (Chave):</strong> <span className="font-mono">{parish.pixKey}</span></li>
              <li><strong>Banco/Agência/Conta:</strong> [Dados bancários, se houver]</li>
              <li><strong>Presencial:</strong> Secretaria paroquial, em horário de expediente.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-bold">Transparência</h3>
            <p className="mt-2 text-slate-600">Divulgamos periodicamente relatórios de prestação de contas. Entre em contato para saber mais.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
