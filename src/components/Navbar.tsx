import { useState } from 'react'
import { parish } from '../data/config'
import { Menu } from 'lucide-react'

const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'paroco', label: 'Pároco' },
  { id: 'horarios', label: 'Horários' },
  { id: 'ministerios', label: 'Pastorais' },
  { id: 'comunidades', label: 'Comunidades' },
  { id: 'atualidades', label: 'Atualidades' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'local', label: 'Localização' },
  { id: 'dizimo', label: 'Dízimo' },
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 mb-2 flex items-center justify-between rounded-2xl bg-white/85 backdrop-blur shadow-md px-4 py-3">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src={parish.crest} alt="Brasão da Paróquia Santíssima Trindade" className="h-11 w-11 object-contain" />
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">Santíssima Trindade</div>
              <div className="text-xs text-slate-500">{parish.city}</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium">
            {links.map((link)=> <a key={link.id} href={`#${link.id}`} className="hover:text-blue-700">{link.label}</a>)}
            <a href="#doacoes" className="inline-flex items-center rounded-xl bg-yellow-400/90 px-3 py-2 text-slate-900 hover:bg-yellow-400 shadow">Doações</a>
          </nav>
          <button className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 hover:bg-white" aria-label="Abrir menu" onClick={()=>setOpen((o)=>!o)}>
            <Menu size={22}/>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/85 backdrop-blur rounded-2xl shadow px-6 py-4 mb-2 text-sm font-medium grid grid-cols-1 gap-3">
              {links.map((link)=> <a key={link.id} href={`#${link.id}`} onClick={()=>setOpen(false)} className="hover:text-blue-700">{link.label}</a>)}
              <a href="#contato" onClick={()=>setOpen(false)} className="hover:text-blue-700">Contato</a>
              <a href="#doacoes" onClick={()=>setOpen(false)} className="hover:text-blue-700">Doações</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
