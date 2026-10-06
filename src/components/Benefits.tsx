const benefits = [
  {
    icon: '🏠',
    title: 'Consultas a Domicílio',
    description:
      'O veterinário vai até você. Atendimento no conforto da sua casa, sem estresse de deslocamento para o seu pet.',
  },
  {
    icon: '🛡️',
    title: 'Praticidade e Segurança',
    description:
      'Elimine filas e salas de espera cheias de outros animais. Seu pet fica mais tranquilo em ambiente familiar.',
  },
  {
    icon: '🩺',
    title: 'Orientação Profissional Completa',
    description:
      'Alimentação, vacinação, cuidados preventivos, emergências e bem-estar — tudo em uma consulta personalizada.',
  },
  {
    icon: '🦜',
    title: 'Cuidado Especializado',
    description:
      'Atendimento especializado para pets não-convencionais: roedores, aves, répteis, coelhos e animais silvestres.',
  },
  {
    icon: '🔄',
    title: '1 Retorno Gratuito em 30 dias',
    description:
      'Dentro de 30 dias, o paciente tem direito a 1 retorno por teleatendimento sem custo adicional de consulta. Seu pet acompanhado de perto.',
  },
  {
    icon: '📋',
    title: 'Atestados e Documentos',
    description:
      'Emissão de atestados para viagens nacionais e internacionais, encaminhamentos para especialistas e muito mais.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white" aria-label="Benefícios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-creme text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Por que escolher a Rodentia Vet?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight">
            Cuidado profissional, onde{' '}
            <span className="text-terracota italic">você estiver</span>
          </h2>
          <p className="mt-4 text-marrom-mid text-lg max-w-2xl mx-auto">
            Oferecemos tudo que seu pet precisa, com a comodidade que você merece.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`bg-white border border-offwhite rounded-3xl p-7 card-hover shadow-card reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <div className="w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-2xl mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg text-marrom mb-2">{benefit.title}</h3>
              <p className="text-marrom-mid text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
