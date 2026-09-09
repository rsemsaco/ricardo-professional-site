export const siteConfig = {
  brand: {
    name: 'Ricardo Maggessi',
    descriptor: 'Psicologia · Dados · Tecnologia',
    signature: 'Entre o humano e o tecnológico.',
  },
  psychology: {
    crp: null,
    bookingEnabled: false,
    bookingMessageKey: 'psychologyBooking',
    pendingNotice:
      'A área de atendimento profissional está em pré-lançamento e será ativada após atualização e validação das informações profissionais.',
  },
  contact: {
    whatsapp: '5511914067030',
    whatsappBaseUrl: 'https://wa.me/5511914067030',
    messages: {
      psychologyBooking:
        'Olá, Ricardo. Encontrei seu site e gostaria de conversar sobre a possibilidade de iniciar psicoterapia.',
      dataGeneral:
        'Olá, Ricardo. Encontrei seu site e gostaria de conversar sobre um projeto de dados e negócios.',
      consulting:
        'Olá, Ricardo. Vi sua área de Consultoria & Gestão e gostaria de conversar sobre um processo ou operação do meu negócio.',
      research:
        'Olá, Ricardo. Vi seu trabalho com análise de dados em pesquisa e gostaria de conversar sobre meu projeto.',
      automation:
        'Olá, Ricardo. Tenho um processo que gostaria de automatizar e encontrei seu trabalho pelo site.',
      speaking:
        'Olá, Ricardo. Gostaria de conversar sobre um convite para palestra, curso ou workshop.',
      course:
        'Olá, Ricardo. Gostaria de saber quando o curso PsIcologiA será lançado.',
    },
    social: {
      instagram: 'https://www.instagram.com/maggessiricardo/',
      linkedin:
        'https://www.linkedin.com/in/ricardo-maggessi-coelho-dos-santos-9196b9245',
      lattes: 'https://lattes.cnpq.br/6877318559561924',
    },
  },
  media: {
    psychologyProfile: 'ricardo-psychology.jpg',
    dataProfile: 'ricardo-data.jpg',
  },
  deployment: {
    githubRepository: 'rsemsaco/ricardo-professional-site',
    githubPagesBasePath: '/ricardo-professional-site/',
    githubPagesUrl: 'https://rsemsaco.github.io/ricardo-professional-site/',
  },
}

export function buildWhatsAppUrl(messageKey) {
  const message = siteConfig.contact.messages[messageKey] || ''
  return `${siteConfig.contact.whatsappBaseUrl}?text=${encodeURIComponent(message)}`
}
