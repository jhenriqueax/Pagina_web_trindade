import { parish } from '../data/config'
import { Phone } from 'lucide-react'

export default function FloatingWhats(){
  return (
    <a href={`tel:+${parish.phone}`} className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--blue)] px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:-translate-y-0.5">
      <Phone size={17}/>
      <span>Ligar</span>
    </a>
  )
}
