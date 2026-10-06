const testimonials = [
  {
    name: 'Mariana Souza',
    pet: 'Tutora da Luna (Gata, 3 anos)',
    avatar: '🐱',
    rating: 5,
    text: 'O M.V. Nícolas foi incrível! Minha gata é muito nervosa e jamais ficaria tranquila em uma clínica. Em casa, ela ficou relaxada e o atendimento foi super completo. Recomendo demais!',
    date: 'Julho 2026',
  },
  {
    name: 'Carlos Ferreira',
    pet: 'Tutor do Thor (Golden Retriever, 5 anos)',
    avatar: '🐶',
    rating: 5,
    text: 'Atendimento domiciliar de altíssima qualidade. O M.V. Nícolas é muito atencioso, explicou tudo com detalhes e ainda me deu orientações sobre alimentação. Só tem elogio!',
    date: 'Junho 2026',
  },
  {
    name: 'Roberta Lima',
    pet: 'Tutora do Pipoca (Chinchila)',
    avatar: '🐭',
    rating: 5,
    text: 'Finalmente encontrei um veterinário especializado em pequenos animais que vai até minha casa! O M.V. Nícolas tem um conhecimento impressionante sobre chinchilas. Serviço impecável.',
    date: 'Agosto 2026',
  },
]

export default function Testimonials() {
  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'star-filled' : 'text-white/20'}>
        ★
      </span>
    ))

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-marrom relative overflow-hidden"
      aria-label="Depoimentos"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-dourado/10 text-9xl font-bold select-none" aria-hidden="true">
        ❝
      </div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-terracota/20 rounded-full blob-shape" />
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-dourado/10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-white/10 text-dourado text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/10">
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Pets felizes,{' '}
            <span className="text-dourado italic">tutores satisfeitos</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            A confiança dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 reveal">
          <div className="text-center">
            <div className="text-5xl font-bold text-dourado">4.9</div>
            <div className="flex justify-center gap-0.5 mt-1 text-xl">{renderStars(5)}</div>
            <div className="text-white/60 text-sm mt-1">Média geral</div>
          </div>
          <div className="w-px bg-white/10 self-stretch hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-dourado">100%</div>
            <div className="text-white/60 text-sm mt-2">Recomendariam<br/>para amigos</div>
          </div>
          <div className="w-px bg-white/10 self-stretch hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-dourado">+50</div>
            <div className="text-white/60 text-sm mt-2">Pacientes<br/>atendidos</div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 card-hover reveal reveal-delay-${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-lg mb-3">
                {renderStars(t.rating)}
              </div>

              {/* Quote */}
              <p className="text-white/85 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-terracota/40 flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.pet}</div>
                  <div className="text-dourado/70 text-xs mt-0.5">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pet images row */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mt-12 reveal">
          {[
            '/images/cat2.webp',
            '/images/vet-dog (3).webp',
            '/images/rabbet3.webp',
            '/images/cat4.webp',
            '/images/vet-dog (5).webp',
            '/images/wild-health3.webp',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-square">
              <img
                src={src}
                alt={`Pet feliz ${i + 1}`}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
