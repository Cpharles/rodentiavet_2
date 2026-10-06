const differentials = [
  {
    icon: '🎓',
    title: 'Formação Profissional',
    description:
      'Médico Veterinário formado pela Faculdade de Medicina Veterinária e Zootecnia da USP — uma das mais renomadas do Brasil.',
  },
  {
    icon: '🦎',
    title: 'Atendimento Especializado',
    description:
      'Pós-graduação pelo CETAC VET em Animais Não-Convencionais. Atendimento especializado para roedores, aves, répteis e animais silvestres.',
  },
  {
    icon: '🔬',
    title: 'Experiência Profissional',
    description:
      'Ampla experiência com rotinas clínicas, patologia veterinária e pesquisa em comportamento e patologia animal.',
  },
  {
    icon: '🤝',
    title: 'Clínicas Parceiras',
    description:
      'Parceria com clínicas veterinárias para atendimento em consultório quando necessário, em toda São Paulo capital e região do Alto Tietê.',
  },
]

const partners = [
  { name: 'Dentes e Bicos', city: 'Mogi das Cruzes', phone: '(11) 93324-5008' },
  { name: 'Vets Domiciliar', city: 'Mogi das Cruzes', phone: '(11) 96413-0668' },
  { name: 'Clínica Veterinária Vida', city: 'Mogi das Cruzes', phone: '(11) 97708-3963' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-offwhite" aria-label="Diferenciais">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-terracota/10 text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Por que a Rodentia Vet?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight">
            Qualificação e{' '}
            <span className="text-terracota italic">excelência</span> que fazem a diferença
          </h2>
          <p className="mt-4 text-marrom-mid text-lg max-w-2xl mx-auto">
            Não somos apenas veterinários. Oferecemos atendimento especializado e comprometido com o bem-estar real do seu animal.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {differentials.map((diff, i) => (
            <div
              key={diff.title}
              className={`bg-white rounded-3xl p-7 shadow-card card-hover flex gap-5 items-start reveal reveal-delay-${i + 1}`}
            >
              <div className="w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                {diff.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-marrom mb-2">{diff.title}</h3>
                <p className="text-marrom-mid text-sm leading-relaxed">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 reveal">
          <div className="rounded-2xl overflow-hidden h-40 shadow-card">
            <img src="/images/silvestre-1.jpg" alt="Atendimento animal silvestre" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden h-40 shadow-card">
            <img src="/images/wild-health2.webp" alt="Saúde de animais exóticos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden h-40 shadow-card">
            <img src="/images/cat3.webp" alt="Atendimento domiciliar para gatos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden h-40 shadow-card">
            <img src="/images/vet-dog (4).webp" alt="Veterinário com cachorro" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        {/* Partner clinics */}
        <div className="reveal">
          <h3 className="text-xl font-bold text-marrom mb-6 text-center">
            🤝 Clínicas Parceiras — Atendimento em Consultório
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-5 shadow-card card-hover border-l-4 border-terracota"
              >
                <div className="font-semibold text-marrom mb-1">{partner.name}</div>
                <div className="text-marrom-mid text-sm mb-2">📍 {partner.city} — SP</div>
                <a
                  href={`tel:${partner.phone.replace(/\D/g, '')}`}
                  className="text-terracota font-medium text-sm hover:text-terracota-dark transition-colors"
                >
                  📞 {partner.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
