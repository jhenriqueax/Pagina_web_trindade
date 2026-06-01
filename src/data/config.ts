export const parish = {
  name: 'Paróquia Santíssima Trindade',
  city: 'Campina Grande — PB',
  address: 'Rua [ENDEREÇO OFICIAL], Campina Grande — PB',
  officeHours: 'Seg–Sex, 14h–18h',
  crest: '/brasao-paroquia.svg',
  whatsapp: '5583999999999', // troque aqui
  email: 'santissimatrindade.cg@example.com', // troque aqui
  socials: {
    instagram: '#',
    youtube: '#',
    facebook: '#'
  },
  pixKey: '[INSIRA A CHAVE PIX]',
  mapQuery: 'Paróquia Santíssima Trindade Campina Grande',
}

export const pastor = {
  name: 'Pe. José Jorge Rodrigues',
  role: 'Pároco',
  since: 'Pároco desde 2020',
  bio: 'Breve resumo biográfico será inserido posteriormente.',
}

export const masses = [
  { day: 'Segunda a sexta-feira', times: ['12h00'] },
  { day: 'Quinta-feira', times: ['19h30'] },
  { day: 'Sábado', times: ['17h00'] },
  { day: 'Domingo', times: ['09h00', '11h00', '16h30', '19h30'] },
]

export const activities = [
  { day: 'Segunda-feira', items: ['19h30 – Terço dos Homens'] },
  { day: 'Quarta-feira', items: ['15h00 – Atendimento de Confissões (mediante agendamento)'] },
  {
    day: 'Quinta-feira Eucarística',
    items: [
      '15h00 – Atendimento de Confissões (mediante agendamento) e Exposição do Santíssimo Sacramento',
      '19h00 – Santo Terço',
      '19h30 – Santa Missa, seguida de Adoração e Bênção do Santíssimo Sacramento',
    ],
  },
  { day: 'Sábado', items: ['09h00 – Ofício da Imaculada Conceição', '10h30 – Batizados'] },
]

export type Ministry = {
  title: string
  coordinator: string
  desc?: string
}

export const ministries: Ministry[] = []

export type Community = {
  name: string
  address: string
  mapQuery: string
  responsible: string
  massTimes: string[]
}

export const communities: Community[] = []

export const news = [
  {
    date: 'Em breve',
    category: 'Avisos paroquiais',
    title: 'Espaço de atualidades',
    text: 'Área preparada para notícias, avisos e comunicados oficiais da Paróquia Santíssima Trindade.',
  },
]

export const agenda = [
  {
    date: 'Em breve',
    title: 'Calendário paroquial',
    time: 'A definir',
    location: 'Paróquia Santíssima Trindade',
    text: 'Espaço preparado para divulgar eventos, celebrações especiais e atividades da paróquia.',
  },
]
