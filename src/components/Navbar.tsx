import { useState } from 'react'
import { parish } from '../data/config'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'paroco', label: 'Pároco' },
  { id: 'horarios', label: 'Horários' },
  { id: 'ministerios', label: 'Serviços' },
  { id: 'comunidades', label: 'Comunidades' },
  { id: 'local', label: 'Localização' },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d2345]/95 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex items-center justify-between py-3">
          <a href="#inicio" className="flex items-center gap-3 group">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 p-1 shadow-sm">
              <img src={parish.crest} alt="Brasão da Paróquia Santíssima Trindade" className="h-full w-full object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight text-white">Santíssima Trindade</div>
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--gold-soft)]">{parish.city}</div>
            </div>
          </a>
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-white/80">
            {links.map((link)=> <a key={link.id} href={`#${link.id}`} className="transition hover:text-[var(--gold-soft)]">{link.label}</a>)}
            <a href="#doacoes" className="rounded-full bg-[var(--gold)] px-4 py-2 font-semibold text-[var(--blue-deep)] transition hover:bg-[var(--gold-soft)]">Doações</a>
          </nav>
          <button className="xl:hidden inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white hover:bg-white/10" aria-label="Abrir menu" onClick={()=>setOpen((o)=>!o)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-white/10 bg-[var(--blue-deep)]">
          <div className="section-shell">
            <div className="grid grid-cols-1 gap-3 py-5 text-sm font-medium text-white/85 sm:grid-cols-2">
              {links.map((link)=> <a key={link.id} href={`#${link.id}`} onClick={()=>setOpen(false)} className="hover:text-blue-700">{link.label}</a>)}
              <a href="#doacoes" onClick={()=>setOpen(false)} className="font-semibold text-[var(--gold-soft)]">Doações</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
