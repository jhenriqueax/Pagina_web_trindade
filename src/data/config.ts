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
  coordinators: Array<{
    name: string
    phone: string
  }>
  desc?: string
}

export const ministries: Ministry[] = [
  {
    title: 'Pastoral da Comunicação - PASCOM',
    coordinators: [{ name: 'Hilma Paula de Araújo Ribeiro', phone: '(83) 99859-4337' }],
    desc: 'Comunicação paroquial, registros e divulgação das ações da comunidade.',
  },
  {
    title: 'Ministério dos Coroinhas',
    coordinators: [
      { name: 'Cláudia Virgínia Diniz Lima', phone: '(83) 99997-0541' },
      { name: 'Alessandro de Lima', phone: '(83) 98619-7304' },
      { name: 'Mharya Clara Lucena', phone: '(83) 99879-9724' },
    ],
  },
  {
    title: 'Pastoral Litúrgica',
    coordinators: [
      { name: 'Janaina Oliveira Cavalcanti', phone: '(83) 99605-9207' },
      { name: 'Maria Clara Jucá', phone: '(83) 98724-0203' },
    ],
  },
  {
    title: 'Paraliturgia',
    coordinators: [
      { name: 'Wener Glauco', phone: '(83) 99824-5824' },
      { name: 'Ana Carolina', phone: '(83) 98840-8412' },
      { name: 'Larissa Furtado Campos', phone: '(83) 98807-1780' },
      { name: 'Thales Pereira de Lacerda', phone: '(83) 98680-5468' },
    ],
  },
  {
    title: 'Apostolado da Oração',
    coordinators: [
      { name: 'Hannah Leite Sagrado', phone: '(83) 99123-1575' },
      { name: 'Marizete Hilário', phone: '(83) 99819-7344' },
    ],
  },
  {
    title: 'Núcleo do EJC',
    coordinators: [
      { name: 'Ana Beatriz Gomes', phone: '(83) 98609-6799' },
      { name: 'Felipe Abrantes', phone: '(83) 98674-1547' },
      { name: 'Hugo Augusto', phone: '(83) 99310-1280' },
      { name: 'Mariana Maciel', phone: '(83) 98831-3690' },
      { name: 'Maria Luísa Freitas', phone: '(83) 99919-1590' },
      { name: 'Andrezza e João Paulo', phone: '(83) 98736-2909 / (83) 98736-9626' },
      { name: 'Dayane e Thiago', phone: '(83) 98819-4336 / (83) 98871-5912' },
      { name: 'Isanna e Igor', phone: '(83) 99993-5025 / (83) 98886-8038' },
    ],
  },
  {
    title: 'Pastoral do Batismo',
    coordinators: [
      { name: 'Ana Paula Duarte Cavalcanti', phone: '(83) 99634-9909' },
      { name: 'Leonardo Lívio Rodrigues e Silva', phone: '(83) 98768-7213' },
      { name: 'Amanda Carolina Freitas de Lira', phone: '(83) 99936-1611' },
      { name: 'Yunes Yuri Lemos Nunes', phone: '(83) 98864-3559' },
      { name: 'Laís Mayanny Costa de Souza', phone: '(83) 98782-3635' },
    ],
  },
  {
    title: 'Pastoral do Dízimo',
    coordinators: [
      { name: 'Ana Fábia Almeida Lago', phone: '(83) 99951-0645' },
      { name: 'André Luís Barbosa Lago', phone: '(83) 99986-2600' },
    ],
  },
  {
    title: 'Pastoral Familiar',
    coordinators: [
      { name: 'Diácono Manassés', phone: '(83) 9971-2877' },
      { name: 'Dona Paula', phone: '(83) 8730-9904' },
      { name: 'Karol', phone: '(83) 99679-2479' },
      { name: 'William', phone: '(83) 99639-7609' },
      { name: 'Juliana', phone: '(83) 8851-9414' },
      { name: 'Eduardo', phone: '(83) 9657-4339' },
      { name: 'Arabela', phone: '(83) 9806-4444' },
      { name: 'Eduardo', phone: '(83) 8800-3037' },
    ],
  },
  {
    title: 'Canto',
    coordinators: [
      { name: 'Guilherme Andrade', phone: '(83) 99192-8949' },
      { name: 'Felipe', phone: '(83) 9982-4196' },
      { name: 'Glaucia', phone: '(83) 98888-5335' },
    ],
  },
  {
    title: 'Acolhida',
    coordinators: [
      { name: 'Tayse Sousa', phone: '(83) 99860-4143' },
      { name: 'Aelson Junior', phone: '(83) 99137-2504' },
      { name: 'Paulo Roberto', phone: '(83) 99961-05810' },
      { name: 'Rachel Ramalho', phone: '(83) 98151-0046' },
      { name: 'Lígia Danusia', phone: '(83) 99910-2242' },
      { name: 'Igor Albuquerque', phone: '(83) 99639-7045' },
    ],
  },
  {
    title: 'ECC',
    coordinators: [
      { name: 'Carlos Apolinário', phone: '(83) 99409-4133' },
      { name: 'Jéssika Mendonça', phone: '(83) 99365-2914' },
      { name: 'Germano Medeiros', phone: '(83) 98852-8752' },
      { name: 'Gyselly Farias Costa', phone: '(83) 99913-1133' },
      { name: 'Millena Cavalcanti', phone: '(83) 99983-7306' },
      { name: 'Guilherme Ramalho', phone: '(83) 99922-0030' },
      { name: 'Hermana Caroline', phone: '(83) 99628-9000' },
      { name: 'Daniel Oliveira', phone: '(84) 99831-3333' },
      { name: 'Charles Barbosa', phone: '(83) 99636-7705' },
      { name: 'Raphaella Ricarte', phone: '(83) 98818-5426' },
    ],
  },
  {
    title: 'Catequese',
    coordinators: [
      { name: 'Amanda Kelly de Sousa Costa', phone: '(83) 99903-7980' },
      { name: 'Sara Maria Cruz da Costa', phone: '(83) 99628-6368' },
      { name: 'Rafaele Sarmento Carvalho Fernandes', phone: '(83) 98808-7409' },
      { name: 'Daniel Maia Oliveira Fernandes', phone: '(83) 98802-0500' },
    ],
  },
  {
    title: 'Terço dos Homens',
    coordinators: [
      { name: 'Severino do Ramo Ventura', phone: '(83) 98608-8068' },
      { name: 'Éder José Guedes Abreu', phone: '(83) 99865-2966' },
      { name: 'Mário Sérgio Lima de Oliveira', phone: '(83) 98786-1314' },
    ],
  },
  {
    title: 'MESCE',
    coordinators: [
      { name: 'Lígia Almeida', phone: '(83) 99352-3254' },
      { name: 'Marcos', phone: '(83) 98841-9912' },
    ],
  },
  {
    title: 'OVS',
    coordinators: [
      { name: 'Arthur', phone: '(83) 99664-8477' },
      { name: 'Lígia Almeida', phone: '(83) 99352-3254' },
      { name: 'Roncaly', phone: '(83) 98816-7070' },
    ],
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
