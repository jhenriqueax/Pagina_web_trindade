import { parish } from '../data/config'

export default function Footer(){
  return (
    <footer className="bg-[var(--blue-deep)] text-white">
      <div className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-4">
              <img src={parish.crest} alt="Brasão da Paróquia Santíssima Trindade" className="h-14 w-12 object-contain rounded bg-white p-1" />
              <div>
                <div className="text-xl font-semibold">Paróquia Santíssima Trindade</div>
                <div className="text-sm text-white/65">{parish.address} · {parish.addressLine2}</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-white/60 md:text-right">© <span>{new Date().getFullYear()}</span> Santíssima Trindade. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
