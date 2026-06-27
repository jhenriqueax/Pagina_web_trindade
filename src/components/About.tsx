import { parish } from '../data/config'
import SectionHeader from './SectionHeader'

export default function About(){
  return (
    <section id="sobre" className="section-pad">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <SectionHeader
              eyebrow="Sobre a Paróquia"
              title="Uma comunidade reunida em torno da Santíssima Trindade"
              text="Somos uma comunidade viva e atuante, com diversos ministérios e pastorais a serviço do Evangelho. Celebramos a Eucaristia, promovemos a formação cristã e realizamos ações de caridade, buscando acolher a todos com alegria."
            />
            <ul className="mt-8 grid gap-3 text-slate-700 sm:grid-cols-2">
              {['Missas dominicais e semanais', 'Confissões, adoração e momentos de oração', 'Catequese para crianças, jovens e adultos', 'Ações sociais e pastorais de serviço'].map((item)=> (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)]"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-sm">
            <img src={parish.aboutImage} alt="Imagem da vida paroquial da Santíssima Trindade" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
