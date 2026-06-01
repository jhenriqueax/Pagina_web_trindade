import { parish } from '../data/config'

export default function Donations(){
  return (
    <section id="doacoes" className="py-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">Página de doações</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Doações</h2>
            <p className="mt-4 text-white/75">Contribua com as ações evangelizadoras, sociais e pastorais da Paróquia Santíssima Trindade.</p>
            <ul className="mt-6 space-y-2 text-white/85">
              <li><strong>PIX (Chave):</strong> <span className="font-mono">{parish.pixKey}</span></li>
              <li><strong>Banco/Agência/Conta:</strong> [Dados bancários, se houver]</li>
              <li><strong>Atendimento presencial:</strong> Secretaria paroquial, em horário de expediente.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-sm backdrop-blur">
            <h3 className="font-bold">Recebimento de doações</h3>
            <p className="mt-2 text-white/75">Este espaço pode receber o QR Code do PIX, dados bancários oficiais e orientações para contribuições específicas.</p>
            <div className="mt-4 flex h-48 items-center justify-center rounded-2xl bg-white p-4 text-center text-sm font-semibold text-slate-600">QR Code do PIX</div>
          </div>
        </div>
      </div>
    </section>
  )
}
