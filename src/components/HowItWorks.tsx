interface HowItWorksProps {
  whatsappUrl: string
}

const steps = [
  {
    number: '01',
    icon: '📱',
    title: 'Agende pelo WhatsApp',
    description:
      'Entre em contato pelo WhatsApp, informe o tipo de animal e os sintomas. Em instantes, confirmamos o horário que melhor se encaixa na sua agenda.',
  },
  {
    number: '02',
    icon: '🏠',
    title: 'Atendimento em Casa',
    description:
      'O Médico Veterinário vai até você. A consulta acontece no conforto do lar, com todo o equipamento necessário para um atendimento completo.',
  },
  {
    number: '03',
    icon: '🩺',
    title: 'Diagnóstico e Tratamento',
    description:
      'Avaliação clínica detalhada, prescrição de medicamentos, solicitação de exames e orientações personalizadas para a saúde do seu pet.',
  },
  {
    number: '04',
    icon: '🔄',
    title: 'Acompanhamento',
    description:
      'Um retorno incluso por teleatendimento em até 30 dias. Suporte por WhatsApp no horário comercial para dúvidas e orientações entre as consultas.',
  },
]

export default function HowItWorks({ whatsappUrl }: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 bg-terracota paw-bg overflow-hidden relative"
      aria-label="Como funciona"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dourado/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-marrom/20 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Simples e sem complicações
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Como funciona o{' '}
            <span className="text-dourado italic">atendimento?</span>
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Em 4 passos simples, seu pet recebe cuidado veterinário de qualidade.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center card-hover reveal reveal-delay-${i + 1}`}
            >
              <div className="step-number mx-auto mb-4">{step.number}</div>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-white text-base mb-3">{step.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal reveal-delay-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
            id="howit-cta-btn"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Começar agora — Agendar consulta
          </a>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-divider mt-12 lg:mt-16">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 20L60 25C120 30 240 40 360 45C480 50 600 50 720 45C840 40 960 30 1080 35C1200 40 1320 60 1380 70L1440 80V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F4F6F8" />
        </svg>
      </div>
    </section>
  )
}
