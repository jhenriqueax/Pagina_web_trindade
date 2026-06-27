type SectionHeaderProps = {
  eyebrow?: string
  title: string
  text?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({ eyebrow, title, text, align = 'left', light = false }: SectionHeaderProps){
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`section-title ${light ? '!text-white' : ''}`}>{title}</h2>
      <div className={`gold-line mt-5 ${centered ? 'mx-auto' : ''}`} />
      {text && <p className={`section-copy ${light ? '!text-white/75' : ''}`}>{text}</p>}
    </div>
  )
}
