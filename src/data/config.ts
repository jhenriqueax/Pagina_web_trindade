export const parish = {
  name: 'Paróquia Santíssima Trindade',
  city: 'Campina Grande — PB',
  neighborhood: 'Catolé',
  address: 'R. Raimundo Nonato de Araújo, 1100',
  addressLine2: 'Catolé, Campina Grande — PB',
  zipCode: '58410-205',
  officeHours: 'Segunda a sexta, 15h00 às 21h00',
  crest: '/assets/brasao-paroquia.png',
  heroImage: '/assets/hero-church.jpg',
  aboutImage: '/assets/about-parish.jpg',
  ctaImage: '/assets/cta-light.jpg',
  phone: '558333377473',
  phoneLabel: '(83) 3337-7473',
  whatsapp: '5583999999999', // confirmar número oficial de WhatsApp
  email: 'santissimatrindade.cg@example.com', // confirmar e-mail oficial
  socials: {
    instagram: '#',
    youtube: '#',
    facebook: '#'
  },
  pixKey: '[INSIRA A CHAVE PIX]',
  bankDetails: '[INSIRA OS DADOS BANCÁRIOS]',
  mapQuery: 'R. Raimundo Nonato de Araújo, 1100 - Catolé, Campina Grande - PB, 58410-205',
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

export const officeHours = [
  { day: 'Segunda a sexta-feira', times: ['15h00 às 21h00'] },
  { day: 'Sábado', times: ['08h00 às 12h00', '14h00 às 18h00'] },
  { day: 'Domingo', times: ['08h00 às 12h00', '18h00 às 21h00'] },
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
  coordinators: string[]
  desc?: string
}

export const ministries: Ministry[] = [
  {
    title: 'Pastoral da Comunicação - PASCOM',
    coordinators: ['Hilma Paula de Araújo Ribeiro'],
    desc: 'Comunicação paroquial, registros e divulgação das ações da comunidade.',
  },
  {
    title: 'Ministério dos Coroinhas',
    coordinators: ['Cláudia Virgínia Diniz Lima', 'Alessandro de Lima', 'Mharya Clara Lucena'],
  },
  {
    title: 'Pastoral Litúrgica',
    coordinators: ['Janaina Oliveira Cavalcanti', 'Maria Clara Jucá'],
  },
  {
    title: 'Paraliturgia',
    coordinators: ['Wener Glauco', 'Ana Carolina', 'Larissa Furtado Campos', 'Thales Pereira de Lacerda'],
  },
  {
    title: 'Apostolado da Oração',
    coordinators: ['Hannah Leite Sagrado', 'Marizete Hilário'],
  },
  {
    title: 'Núcleo do EJC',
    coordinators: [
      'Ana Beatriz Gomes',
      'Felipe Abrantes',
      'Hugo Augusto',
      'Mariana Maciel',
      'Maria Luísa Freitas',
      'Andrezza e João Paulo',
      'Dayane e Thiago',
      'Isanna e Igor',
    ],
  },
  {
    title: 'Pastoral do Batismo',
    coordinators: [
      'Ana Paula Duarte Cavalcanti',
      'Leonardo Lívio Rodrigues e Silva',
      'Amanda Carolina Freitas de Lira',
      'Yunes Yuri Lemos Nunes',
      'Laís Mayanny Costa de Souza',
    ],
  },
  {
    title: 'Pastoral do Dízimo',
    coordinators: ['Ana Fábia Almeida Lago', 'André Luís Barbosa Lago'],
  },
  {
    title: 'Pastoral Familiar',
    coordinators: ['Diácono Manassés', 'Dona Paula', 'Karol', 'William', 'Juliana', 'Eduardo', 'Arabela', 'Eduardo'],
  },
  {
    title: 'Canto',
    coordinators: ['Guilherme Andrade', 'Felipe', 'Glaucia'],
  },
  {
    title: 'Acolhida',
    coordinators: ['Tayse Sousa', 'Aelson Junior', 'Paulo Roberto', 'Rachel Ramalho', 'Lígia Danusia', 'Igor Albuquerque'],
  },
  {
    title: 'ECC',
    coordinators: [
      'Carlos Apolinário',
      'Jéssika Mendonça',
      'Germano Medeiros',
      'Gyselly Farias Costa',
      'Millena Cavalcanti',
      'Guilherme Ramalho',
      'Hermana Caroline',
      'Daniel Oliveira',
      'Charles Barbosa',
      'Raphaella Ricarte',
    ],
  },
  {
    title: 'Catequese',
    coordinators: [
      'Amanda Kelly de Sousa Costa',
      'Sara Maria Cruz da Costa',
      'Rafaele Sarmento Carvalho Fernandes',
      'Daniel Maia Oliveira Fernandes',
    ],
  },
  {
    title: 'Terço dos Homens',
    coordinators: ['Severino do Ramo Ventura', 'Éder José Guedes Abreu', 'Mário Sérgio Lima de Oliveira'],
  },
  {
    title: 'MESCE',
    coordinators: ['Lígia Almeida', 'Marcos'],
  },
  {
    title: 'OVS',
    coordinators: ['Arthur', 'Lígia Almeida', 'Roncaly'],
  },
]

export const ministriesPendingInfo = [
  'IVC - Eucaristia',
  'IVC - Crisma',
  'Pastoral da Alimentação',
  'PPI',
  'Legião de Maria',
  'Sopão',
  'Oficina de Oração',
  'EAC',
]

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
    category: 'Comunicados',
    title: 'Avisos paroquiais',
    text: 'Área preparada para notícias, comunicados e orientações oficiais da Paróquia Santíssima Trindade.',
  },
  {
    date: 'Em breve',
    category: 'Formação',
    title: 'Encontros e formações',
    text: 'Espaço para divulgar catequeses, encontros pastorais, retiros e momentos de espiritualidade.',
  },
  {
    date: 'Em breve',
    category: 'Celebrações',
    title: 'Celebrações especiais',
    text: 'Área para solenidades, festas, novenas e programações extraordinárias da comunidade.',
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
