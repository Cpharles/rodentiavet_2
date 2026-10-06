interface ProblemSolutionProps {
  whatsappUrl: string
}

const problems = [
  {
    icon: '⏰',
    problem: 'Falta de tempo para ir à clínica',
    solution: 'O veterinário vai até você, no horário que funciona para a sua rotina.',
  },
  {
    icon: '🚗',
    problem: 'Dificuldade de deslocamento com o pet',
    solution: 'Sem carregar caixinhas, sem trânsito, sem estacionar. O atendimento chega em casa.',
  },
  {
    icon: '😰',
    problem: 'Pet estressado na clínica',
    solution: 'No ambiente familiar, seu pet fica muito mais calmo e confortável durante o atendimento.',
  },
  {
    icon: '🔄',
    problem: 'Troca constante de veterinário',
    solution: 'Construímos um vínculo real com seu pet. O mesmo profissional em cada consulta.',
  },
]

export default function ProblemSolution({ whatsappUrl }: ProblemSolutionProps) {
  return (
    <section className="py-20 lg:py-28 bg-offwhite" aria-label="Problemas e soluções">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative reveal order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-terracota/10 rounded-full blob-shape" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-dourado/20 rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img
                src="/images/cat1.webp"
                alt="Gato tranquilo em casa"
                className="rounded-3xl object-cover w-full h-52 shadow-card"
              />
              <img
                src="/images/vet-dog (2).jpg"
                alt="Veterinário atendendo cão"
                className="rounded-3xl object-cover w-full h-52 shadow-card mt-8"
              />
              <img
                src="/images/pet-check-up-health-care.webp"
                alt="Check-up veterinário"
                className="rounded-3xl object-cover w-full h-52 shadow-card -mt-8"
              />
              <img
                src="/images/rabbet2.webp"
                alt="Coelho exótico"
                className="rounded-3xl object-cover w-full h-52 shadow-card"
              />
            </div>
          </div>

          {/* Right: Problems + Solutions */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-block bg-terracota/10 text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Entendemos os seus desafios
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight mb-3">
                Sabemos o quanto é{' '}
                <span className="text-terracota italic">difícil</span> levar
                o pet ao veterinário
              </h2>
              <p className="text-marrom-mid mb-8">
                Por isso criamos um serviço que resolve cada um desses obstáculos — para que você nunca precise abrir mão da saúde do seu pet.
              </p>
            </div>

            <div className="space-y-5">
              {problems.map((item, i) => (
                <div
                  key={item.problem}
                  className={`bg-white rounded-2xl p-5 shadow-card card-hover reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-creme flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-marrom-mid text-sm line-through mb-1 opacity-60">
                        ✕ {item.problem}
                      </p>
                      <p className="text-marrom font-medium text-sm">
                        ✓ {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 reveal reveal-delay-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="problem-cta-btn"
              >
                Quero resolver isso agora →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
