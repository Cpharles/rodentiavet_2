interface HeroProps {
  whatsappUrl: string
}

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-terracota paw-bg overflow-hidden pt-24 pb-0 lg:pt-32"
      aria-label="Seção principal"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-8 w-16 h-16 rounded-full bg-dourado/20 blur-xl" />
      <div className="absolute top-32 right-12 w-24 h-24 rounded-full bg-marrom/20 blur-2xl" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-dourado/15 blur-lg" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Left: Text content */}
          <div className="text-white pb-12 lg:pb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 reveal">
              <span className="w-2 h-2 rounded-full bg-dourado animate-pulse-slow" />
              <span className="text-sm font-medium text-white">🐾 Atendimento Domiciliar em SP-Capital e Alto do Tietê</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 reveal reveal-delay-1">
              Seu pet merece
              <br />
              cuidado{' '}
              <em className="not-italic text-dourado">
                de qualidade
              </em>
              <br />
              em casa
            </h1>

            <p className="text-lg sm:text-xl text-white/85 font-light max-w-md leading-relaxed mb-8 reveal reveal-delay-2">
              Consultas veterinárias a domicílio para cães, gatos e pets exóticos.
              Atendimento profissional, com conforto e segurança para seu animal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base justify-center sm:justify-start"
                id="hero-cta-whatsapp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a href="#como-funciona" className="btn-outline text-base justify-center sm:justify-start" id="hero-cta-howit">
                Como funciona →
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6 mt-10 reveal reveal-delay-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-dourado">Experiência</div>
                <div className="text-xs text-white/75 font-medium mt-0.5">comprovada</div>
              </div>
              <div className="w-px bg-white/20 self-stretch hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-dourado">Formação</div>
                <div className="text-xs text-white/75 font-medium mt-0.5">FMVZ-USP</div>
              </div>
              <div className="w-px bg-white/20 self-stretch hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-dourado">100%</div>
                <div className="text-xs text-white/75 font-medium mt-0.5">domiciliar ou clínica</div>
              </div>
            </div>
          </div>

          {/* Right: Image composition */}
          <div className="relative flex justify-center lg:justify-end reveal reveal-delay-2">
            {/* Decorative golden blob behind image */}
            <div className="absolute -top-8 -right-4 lg:-right-8 w-72 h-72 lg:w-96 lg:h-96 bg-dourado/25 blob-shape" />

            {/* Main hero image */}
            <div className="relative z-10">
              {/* Brand Logo Overlay */}
              <div className="absolute -top-6 -left-6 md:-top-20 md:-left-10 w-20 h-20 md:w-40 md:h-40 rounded-full shadow-xl z-20 overflow-hidden reveal">
                <img
                  src="/logo_vet.png"
                  alt="Rodentia Vet Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <img
                src="/images/vet-dog (1).jpg"
                alt="Veterinário Nícolas atendendo pet com carinho"
                className="w-72 sm:w-80 lg:w-96 rounded-3xl shadow-2xl object-cover object-center"
                style={{ height: '420px' }}
              />
              {/* Floating badge */}
              <div className="absolute -left-6 bottom-1/4 bg-white rounded-2xl shadow-card p-3 flex items-center gap-2 reveal">
                <div className="w-10 h-10 rounded-full bg-creme flex items-center justify-center text-xl">🐾</div>
                <div>
                  <div className="font-semibold text-marrom text-xs">Atendimento</div>
                  <div className="text-terracota font-bold text-xs">Domiciliar</div>
                </div>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-card p-3 flex items-center gap-2 reveal reveal-delay-2">
                <div className="w-10 h-10 rounded-full bg-dourado/20 flex items-center justify-center text-xl">⭐</div>
                <div>
                  <div className="font-bold text-marrom text-xs">Exóticos</div>
                  <div className="text-marrom-mid text-xs">Cães & Gatos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-divider mt-8 lg:mt-12">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
