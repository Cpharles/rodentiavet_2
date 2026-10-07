interface OfferProps {
  whatsappUrl: string
}

const services = [
  {
    icon: '🩺',
    title: 'Consulta de Rotina & Check-up',
    description: 'Avaliação clínica completa, vacinação e orientações preventivas para manter seu pet saudável.',
    image: '/images/pet-check-up-health-care.webp',
  },
  {
    icon: '🦜',
    title: 'Pets Não-Convencionais',
    description: 'Especialidade: roedores, coelhos, aves, répteis e animais silvestres. Atendimento com conhecimento técnico específico.',
    image: '/images/wild-health1.webp',
  },
  {
    icon: '🥗',
    title: 'Orientação Nutricional',
    description: 'Dietas personalizadas para cada espécie e fase de vida. Saúde começa na alimentação certa.',
    image: '/images/service4.webp',
  },
  {
    icon: '✈️',
    title: 'Atestados para Viagens',
    description: 'Documentação veterinária para viagens nacionais e internacionais, com toda a burocracia resolvida.',
    image: '/images/service3.webp',
  },
]

const paymentMethods = [
  { icon: '📱', method: 'PIX', detail: 'Pagamento imediato' },
  { icon: '💳', method: 'Cartão de Crédito', detail: 'Parcelamento disponível' },
  { icon: '💰', method: 'Dinheiro', detail: 'Na hora do atendimento' },
]

export default function Offer({ whatsappUrl }: OfferProps) {
  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 bg-white"
      aria-label="Serviços e oferta"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-creme text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight">
            Serviços completos para{' '}
            <span className="text-terracota italic">toda a família</span>
          </h2>
          <p className="mt-4 text-marrom-mid text-lg max-w-2xl mx-auto">
            Do check-up de rotina ao atendimento especializado em exóticos — tudo no conforto da sua casa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white rounded-3xl shadow-card overflow-hidden card-hover reveal reveal-delay-${i + 1}`}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-marrom text-base mb-2">{service.title}</h3>
                <p className="text-marrom-mid text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Offer highlight block */}
        <div className="bg-creme rounded-3xl p-8 lg:p-10 reveal">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-dourado text-marrom text-xs font-bold px-3 py-1 rounded-full mb-4">
                🎁 BÔNUS INCLUSO
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-marrom mb-4">
                1 Retorno Gratuito <br />
                <span className="text-terracota">em até 30 dias</span>
              </h3>
              <p className="text-marrom-mid leading-relaxed mb-2">
                Todo paciente atendido tem direito a <strong>1 consulta de retorno por teleatendimento sem custo adicional</strong> dentro de 30 dias após o primeiro atendimento.
              </p>
              <p className="text-pearl/60 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                <em>➤ O retorno é válido apenas para o mesmo quadro clínico que motivou o primeiro atendimento.</em>
                <br />
                <em>➤ Se for necessário o deslocamento do médico veterinário para o retorno, será cobrada apenas a taxa de deslocamento, não sendo cobrada nova consulta.</em>
                <br />
                <em>➤ Caso seja necessário administrar medicações ou realizar coletas durante o retorno, serão cobrados apenas os insumos utilizados e os respectivos exames.</em>
              </p>

              {/* Payment methods */}
              <div>
                <p className="font-semibold text-marrom mb-3">Formas de pagamento:</p>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((p) => (
                    <div
                      key={p.method}
                      className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm"
                    >
                      <span className="text-xl">{p.icon}</span>
                      <div>
                        <div className="font-semibold text-marrom text-sm">{p.method}</div>
                        <div className="text-marrom-mid text-xs">{p.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-3xl p-8 shadow-card text-center">
                <div className="text-4xl mb-3">🐾</div>
                <p className="text-marrom-mid text-sm mb-4">
                  Pronto para cuidar do seu pet?
                </p>
                <p className="font-bold text-marrom text-lg mb-6">
                  Agende agora pelo WhatsApp e receba um atendimento personalizado
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-base"
                  id="offer-cta-btn"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar pelo WhatsApp
                </a>
                <p className="text-marrom-mid text-xs mt-3">
                  📍 São Paulo Capital e Alto Tietê
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
