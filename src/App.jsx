import FiapLogo from './assets/svg/logo.svg'
import ScrollDown from './assets/svg/scroll-down-arrow.svg'
import NextLogo from './assets/imgs/fiap-next.jpg'
import BreakImage from './assets/imgs/break-image.jpg'
import CursorOpen from './assets/svg/cursor-open.svg'
import CursorClose from './assets/svg/cursor-close.svg'
import PlusCircle from './assets/svg/plus-circle.svg'
import MinusCircle from './assets/svg/minus-circle.svg'
import { useState, useEffect } from 'react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const accordionData = [
    {
      title: "Conexão o Mercado de Trabalho",
      content: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais."
    },
    {
      title: "Aprendizado Imersivo",
      content: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira."
    },
    {
      title: "Ensino Personalizado",
      content: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.",
    },
    {
      title: "Inovação e Transformação",
      content: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia.",
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Atualiza a barra de progresso
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / windowHeight) * 100;
      document.documentElement.style.setProperty('--scroll-width', `${progress}%`);

      // Verifica se deve mostrar o botão de voltar ao topo
      setShowScrollTop(scrolled > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEducation = () => {
    const educationSection = document.getElementById('education');
    educationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay') ||
      e.target.classList.contains('modal-content') ||
      e.target.tagName === 'IMG') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div>
        <nav>
          <img src={FiapLogo} alt="Logo da FIAP" />
        </nav>
        <header>
          <div className="header">
            <h1>
              <div><span>A maior faculdade</span></div>
              <div>de tecnologia</div>
            </h1>
            <p>Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.</p>
          </div>
          <button className="scroll-down" onClick={scrollToEducation}>
            <p>scroll down</p>
            <img src={ScrollDown} alt="Rolar para baixo" />
          </button>
        </header>
        <section id='education'>
          <h2>Educação e tech</h2>
          <div className='content'>
            <div className='left-content'>
              <p>A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.</p>
              <img
                src={NextLogo}
                alt="Logotipo da FIAP NEXT"
                className="modal-trigger"
                onClick={() => setIsModalOpen(true)}
              />
              <p>Figura 1 – Logotipo da FIAP NEXT</p>
            </div>
            <div className='right-content'>
              <p>Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo: </p>
              <p className="category"><span>/</span> Tecnologia e Desenvolvimento</p>
              <ul>
                <li>- Desenvolvimento de Software</li>
                <li>- Inteligência Artificial</li>
                <li>- Data Science</li>
                <li>- Cibersegurança</li>
              </ul>
              <p className="category"><span>/</span> Tecnologia e Desenvolvimento</p>
              <p className="category"><span>/</span> Tecnologia e Desenvolvimento</p>
              <p>Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas. </p>
            </div>
          </div>
        </section>
        <section className="break-section">
          <div className="break-overlay"></div>
        </section>
        <section className="structure">
          <h2>Nossa estrutura</h2>
          <div className="accordion-container">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
              >
                <button
                  className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <img
                    src={activeAccordion === index ? MinusCircle : PlusCircle}
                    alt={activeAccordion === index ? 'Fechar' : 'Abrir'}
                    className="accordion-icon"
                  />
                </button>
                <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="contact">
          <div className="contact-content">
            <h2>QUER SABER MAIS?</h2>
            <button className="contact-btn">ENTRE EM CONTATO</button>
          </div>
        </section>
      </div>
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <img src={ScrollDown} alt="Voltar ao topo" />
      </button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <img src={NextLogo} alt="Logotipo da FIAP NEXT" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;