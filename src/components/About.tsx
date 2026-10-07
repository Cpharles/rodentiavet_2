export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Sobre a Rodentia Vet"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-creme rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracota/8 rounded-full blob-shape" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Images */}
          <div className="relative reveal">
            {/* Main circle image */}
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-8 border-creme shadow-2xl">
                <img
                  src="/images/vet-dog (7).webp"
                  alt="cuidado"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Logo overlay */}
              <div className="absolute -bottom-3 -right-3 lg:-right-10 w-40 h-40 rounded-full border-4 border-creme shadow-lg overflow-hidden bg-white">
                <img src="/logo_vet.png" alt="Logo Rodentia Vet" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Small accent images */}
            <div className="hidden lg:block">
              <div className="absolute top-4 -left-10 w-32 h-32 rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <img src="/images/vet-dog (4).webp" alt="cão e gato" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 -left-10 w-32 h-32 rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <img src="/images/squirrels.webp" alt="Esquilo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 -right-10 w-32 h-32 rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <img src="/images/farm-animal1.webp" alt="cabra" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal reveal-delay-2">
            <span className="inline-block bg-creme text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Sobre nós
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight mb-4">
              Por trás de cada consulta há um{' '}
              <span className="text-terracota italic">cuidado genuíno</span>
            </h2>

            {/* About brand */}
            <div className="mb-6">
              <h3 className="font-semibold text-marrom text-lg mb-2">🐭 O nome Rodentia Vet</h3>
              <p className="text-marrom-mid leading-relaxed text-sm">
                <em>Rodentia</em> é a ordem taxonômica que engloba todos os roedores. O nome nasceu de anos de convivência e amor a esses animais — trabalhando com eles em pesquisas, clínicas e atendimentos. Mais do que um nome, é uma declaração de identidade.
              </p>
            </div>

            {/* About vet */}
            <div className="bg-offwhite rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-creme flex items-center justify-center text-2xl flex-shrink-0">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-bold text-marrom text-lg">M.V. Nícolas Braga Pellagio</h3>
                  <p className="text-terracota text-sm font-medium mb-2">CRMV — M.V. Pets Não-Convencionais, Cão e Gato</p>
                  <p className="text-marrom-mid text-sm leading-relaxed">
                    Formado em Medicina Veterinária pela <strong>FMVZ-USP</strong>, com mais de 5 anos de experiência em pesquisa no departamento de patologia veterinária. Pós-graduado em Pets Não-Convencionais pelo <strong>CETAC VET</strong> e atualmente doutorando na FMVZ-USP.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                '🎓 FMVZ-USP',
                '📚 CETAC VET',
                '🔬 Doutorando USP',
                '🦎 Exóticos',
                '🐾 Cão & Gato',
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-terracota/10 text-terracota text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Mission */}
            <blockquote className="border-l-4 border-dourado pl-5 py-1">
              <p className="text-marrom font-medium italic text-base leading-relaxed">
                "Meu objetivo é oferecer o mesmo nível de cuidado especializado que qualquer membro da família merece — com a conveniência de ir até você."
              </p>
              <footer className="mt-2 text-marrom-mid text-sm">— M.V. Nícolas Braga, Rodentia Vet</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
