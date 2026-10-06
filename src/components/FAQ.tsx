import { useState } from 'react'

const faqs = [
  {
    id: 'faq-1',
    question: 'Quais animais você atende?',
    answer:
      <em>
        Atendo todas as espécies de pets silvestres e exóticos como:
        - roedores;<br />
        - coelhos;<br />
        - aves;<br />
        - répteis, entre outros;<br />
        - além de cães e gatos.<br />
        Tenho especialização específica em animais não-convencionais, o que garante um atendimento técnico e seguro para essas espécies.
      </em>,
  },
  {
    id: 'faq-2',
    question: 'O que preciso levar para o atendimento?',
    answer:
      <em>
        Sempre que possível, tenha em mãos:<br />
        - documentações anteriores do paciente (como o prontuário);<br />
        - histórico de doenças e tratamentos;<br />
        - exames realizados com resultados;<br />
        - anote há quanto tempo observa os sintomas do seu pet;<br />
        - anote quais foram as últimas alimentações do pet (marca, frequência e quantidade);<br />
        - coloração e odor das fezes e urinas do pet;
      </em>,
  },
  {
    id: 'faq-3',
    question: 'Como funciona o atendimento?',
    answer:
      <em>
        1. O atendimento pode ser a domicílio — eu vou até você — ou em uma das clínicas parceiras. <br />
        2. No prazo de 30 dias, o paciente tem direito a 1 retorno gratuito por teleatendimento (sem custo de consulta).<br />
        3. O retorno é válido apenas para o mesmo quadro clínico que motivou o primeiro atendimento.<br />
        4. Se for necessário o deslocamento do médico veterinário para o retorno, será cobrada apenas a taxa de deslocamento, não sendo cobrada nova consulta.<br />
        5. Caso seja necessário administrar medicações ou realizar coletas durante o retorno, serão cobrados apenas os insumos utilizados e os respectivos exames.
      </em>,
  },
  {
    id: 'faq-4',
    question: 'Existe consulta online?',
    answer:
      <em>
        Sim!<br />
        Realizamos consultas online, mas apenas para orientações específicas e retornos onde não haja necessidade de examinar ou manipular o animal — como devolutiva de exames ou renovação de receita para medicação de uso contínuo.
      </em>,
  },
  {
    id: 'faq-5',
    question: 'Qual a área de atendimento domiciliar?',
    answer:
      <em>
        Realizamos atendimentos domiciliares somente na cidade de São Paulo (capital) e região do Alto Tietê (Mogi das Cruzes, Suzano, Poá, Itaquaquecetuba e municípios próximos).<br />
        Para locais fora da área padrão, entre em contato para verificarmos a disponibilidade.
      </em>,
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-offwhite"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-terracota/10 text-terracota text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-marrom leading-tight">
            Perguntas{' '}
            <span className="text-terracota italic">frequentes</span>
          </h2>
          <p className="mt-4 text-marrom-mid text-lg">
            Não encontrou sua resposta? Fale diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl shadow-card overflow-hidden reveal reveal-delay-${i + 1}`}
            >
              <button
                id={faq.id}
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                aria-expanded={openId === faq.id}
                aria-controls={`${faq.id}-answer`}
              >
                <span className="font-semibold text-marrom text-base group-hover:text-terracota transition-colors pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${openId === faq.id
                    ? 'bg-terracota border-terracota text-white rotate-45'
                    : 'border-marrom/20 text-marrom'
                    }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-current" strokeWidth={2.5}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                id={`${faq.id}-answer`}
                className={`faq-answer ${openId === faq.id ? 'open' : ''}`}
                aria-hidden={openId !== faq.id}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="w-full h-px bg-offwhite mb-4" />
                  <p className="text-marrom-mid text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to WhatsApp */}
        <div className="mt-10 text-center reveal">
          <p className="text-marrom-mid mb-4">Tem mais alguma dúvida?</p>
          <a
            href="https://wa.me/5511992769210?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            id="faq-whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Perguntar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
