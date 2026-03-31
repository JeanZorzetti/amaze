/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Megaphone, 
  Tent, 
  Theater, 
  FlaskConical, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Using custom icons mapping for Material Symbols mentioned in spec if needed, 
// but sticking to Lucide as per guidelines.
const Icons = {
  Design3D: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Textile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="m3 16 5-5 5 5 5-5 5 5"/><path d="M3 8v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"/></svg>
  ),
  Delivery: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
  )
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['Todos', 'Tendas & Estruturas', 'Mascotes & Réplicas', 'Cenografia Épica'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Arena Global 2024',
      category: 'Tendas',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDge6hmz7xOdGNSxv4OadRVftL9hfMDaHT0UKNKRlOlm-OixaHNWgHYIwyjT4tBX05apXLdSM9G9fqMRfj3jKLAAnwSxMKw_XppzbTp2N863TApCwHz5YSppy2fKNK3dIEIbV86G7lMjOhQvBSqdzoIp2XsRGnRM4iFyHssQgTPP4MeMyVwtGA5FYIFJw2MtfrKWVe-Mvz8g0_0uDNlNe07Kf6zDPEEvkYB_WLUKEnPD0BTqlGlUWF9nJzH1XFMeATgb17XI7Rkzk',
      className: 'masonry-item-wide'
    },
    {
      id: 2,
      title: 'The Giant Guardian',
      category: 'Mascotes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTYQ3JV1oGqWwR2JOvbnYMmzzQpxc_Eu2xnuC63vE-k19hlt72HDPcYLIiMEjGz3sKClWHxriBQCs2JBC-MHJBm_A386r2wh_aGI43M_XrHyokf5vurbjy25_-A_pgGV-kl3dsPXcZNG140DTwcw8APdUwLAA-g-rluOFBYtk7mYFqTqpHb4WC6kgIkKxPM37cBnQx6vYdvGQ0iMjr5U7FSacT2ynGerqjezXZsnXPBi8pt51wTw9W2guP1LSGJPjZmiWc_6uXlUs',
      className: 'masonry-item-tall'
    },
    {
      id: 3,
      title: 'Stage Bloom',
      category: 'Cenografia',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5TMWCF3g6lVhHa7D8s4n3pMqlWzUlHCwGrS7cY3ov8xGnqcSbdhX21enGF-fl4NloCjG6UrcQ1iEmF85kVsvkalxK3bI_q7xUGKJdAPBkArgGKAIQVFHr9ff-A_Am52l8DH29W5LdbCSAk3RU_LtdcZZWHoAuf4ZrYzgG9qeZfpfpLdhDq20OucitU9DIQ4mAzVRCkym5XunMxPvuofW99Se0_YCYluq6FjEecoM50FP0FCYHqOvhCeYdhPewH02XX57w4eUatBk',
      className: ''
    },
    {
      id: 4,
      title: 'Neon Pulse',
      category: 'Eventos',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Cnk4nc7bNriIZ1yLvFeeiXMhM6Qz7kdUc08C0RCOYTIj_tN3krg2nu2omTTLgwhaQCuQ-11o6FOIy8RdY2KdL4HE76irLkRfbWPCsuSm5YU65kHbMfcPt59rVhmC3flklGOdLHziCDo1wVYAQ88eMsjWBj6urdUj-E6zboyPz0n3Xb2HHdUGuCn7xIOmxW1IadszSDJkG5y951UCeBp864LJzt1VBYodsa6-hbMT3I6YeqJ3zVnsGOC0nhPHJm9fL6sxhPNi5gA',
      className: ''
    }
  ];

  const logos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBBeB-Y8zvJ550Als6vM7q0TrI0iNyc-4smWiOf0sjbqUmFFPDFSChiFovzLzamM7N97tMmQ6nql3UAJ4vtNQY0aB03wjjWeqw5FV_cXYJiwi-7VxHgtWw2ypdcAmhNXa6bZDxdTLD4fHv4P-_x7-cBTxxpUC27KMNqsZjFdk6bxFnoUz4ZTWEnwkZV9fQwh9tL1m30LCmFsh1sjktHLnpCp-VjT_D3ajf5VmwkP2e06ZXmmv4up1I29G7_xPx_SXNluww2iddPRGw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDB-TRT_D0TdxTcig33Qml95kSzOhCikCvXcssWSd66hnlK-dMCN1VL_fqJvpcRnxqDIaMipE_I6AlGeULEfKdpRKErJPJSbrlmMmEo_YoaiqvkmUKpFkT8Sp9xwaY9-xFH8ocs0qxM_6aVQAiwb55nbCXqPms4CVD60ffKN0KC-FwzhAzUjb4pRL0NJqwAoIK_2zlEBzFyJNdO0FVjpihuBbTUK3WGZrze1hmiF5daLwy4fxfg56nw6HISKmCxsZDhSzWsK1Xub0E',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAlD-77R6Wp2A9f1sZ1eQel4ZP2vkxmwiZNfQxkgCtYVT35ixGA0j7noMyiQyzoBfe7tXkzGaa4bgLkLZYDutTvpX8PmfhpXqfiKNh10ZCVZC2wJPghh2LCJQwCbESg-de3kmtgf0OMKU8ifIBEK7NLcCDxyTSXqRSlk5EzAldG4PfHLcgUY7jd39_cV8ms1yXmD6ALkHbceiEo-K8LOe6FxjD-1c7-wS2L56mq0HHSC9AxcHvQ1GZTCmIkUCRh1jlzkfRc3ndGGH0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBWqKG5wPfLkyUBHjscMMlviu3KuIYokdeVZmvnpDeNIRkJrmF5BWhiKm9MBx0HtpEddloOMVDS8au8eAiMhbgaFDQHrthztKq9mlaDA8pLkcpjmgCfnBFiS931ShTlDXLD1qO7bOp-UF_sy4cPjT7U6nuGfHwwIWoDszLZh1GcHcPbWa5Yw-A0J1lckuUXrLhxBZUOn7YbR_8hIFW9dqfNkDUkmq9060EcRWmB5eUlaVTChCyUDDmv4ThUg1eBiJruUPIrFLfMWx8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD1vWnzRTndq83YbC0lB-zVzGJCfzWBjWbqD5Mh9SryoFzR7kxzxhlGp0iYFi75LglC_28F4tMXKT-o6v3u7Pj4pieMJGBbPZ7fGDVgLm6xlV2ANWeUiw6NgOjRvy_2uKgHq2Kzlp6j-wzmfTJw7mHzoa6gg45noShI0KDHk9TnPpvhekkKMWFpRAjywL7_1Di0myvxokH7bJ-WUky0740XajsxwY2a9UfsCKtH2_rBbv037r9WxwZMxgC37LqEhOaT7_pSLxPpl_4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD6t4U3z5yw_4AcOK7FOrMQrWVxVCpIzYba0TIn7bbyqL9uuW7Mt0gmHiALr_awyx9fBLo3iaJHewLf3xk8t7Bl0_VIAhvstvwQKAYZfIho68KI366VyLLSClW3gxCdWx2WyGIF_bsAFV4KmExic9qcV2-iWTTTpnaviHWvHmJWjpvkLJjiqtU8C84dV5yi4VrP4BlStw0H2CMXXTkFBwmvuPJtxOY_-s5vtWYLqK_CzBBS1oNsLSOSXKeVQCnIbjGIDdTMAg0Xol4'
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto">
          <div className="text-2xl font-headline font-bold bg-gradient-to-r from-sky-700 to-purple-600 bg-clip-text text-transparent">
            Amaze Balloons
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Portfolio', 'Process', 'Engineering', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-headline font-bold tracking-tight transition-colors ${
                  item === 'Portfolio' 
                    ? 'text-sky-700 border-b-2 border-sky-600 pb-1' 
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="signature-gradient text-white font-headline font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200">
            Get Quote
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YTs96DR6YNcwVuTP3pzBcXPlHNCgjG3ZBB7URDFrCn-HlwPcTKAleb4gOeTKKO-G7VcQlIlMKSSxtiRgpSASH9Qqj_FQlZJYFUAqNNe5QR3BxDmWbcTxAM7gMdnWc_khFm-1l-zvTIYP06SRIOm2wJsLcoB81fLce-3YLRx72uzxhtJtpCSTd6JwebFv74h-XevHDk4SxYP1U3HoGylQNGAh032pt7M7w5xwGmgugCExsl5tLF3uuDIDdJpO3gomzmHQ6k3rdV0" 
              alt="Giant inflatable installation"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center px-6 max-w-5xl"
          >
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Dando vida às suas maiores ideias em dimensões épicas.
            </h1>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="signature-gradient text-white font-headline font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl">
                Comece seu Projeto
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-headline font-bold text-lg px-10 py-4 rounded-full hover:bg-white/20 transition-all">
                Ver Portfólio
              </button>
            </div>
          </motion.div>
        </section>

        {/* Trust Bar */}
        <section className="bg-surface-container-low py-12">
          <div className="max-w-7xl mx-auto marquee-mask overflow-hidden whitespace-nowrap">
            <div className="flex justify-around items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              {logos.map((logo, i) => (
                <img key={i} className="h-12 w-auto mx-8" src={logo} alt="Partner Logo" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">Nosso Ecossistema de Ideias</h2>
                <div className="w-24 h-1 signature-gradient rounded-full"></div>
              </div>
              <div className="flex flex-wrap gap-4 font-label font-medium text-sm">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                      activeCategory === cat 
                        ? 'signature-gradient text-white' 
                        : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="masonry-grid">
              {portfolioItems.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  className={`${item.className} relative group overflow-hidden rounded-xl bg-surface-container`}
                >
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-container font-bold text-xs tracking-widest uppercase mb-2">{item.category}</span>
                    <h3 className="text-white font-headline text-xl font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Section */}
        <section id="engineering" className="py-24 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Engenharia de Precisão</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">
                De simulações aerodinâmicas a tecidos de alta tecnologia, cada centímetro é planejado para performance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="w-16 h-16 rounded-full signature-gradient flex items-center justify-center mb-8">
                  <Icons.Design3D />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Design 3D</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Modelagem volumétrica avançada para garantir que cada ângulo e proporção traduzam fielmente a visão da sua marca no espaço físico.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="w-16 h-16 rounded-full signature-gradient flex items-center justify-center mb-8">
                  <Icons.Textile />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Engenharia Têxtil</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Seleção de polímeros e tecidos rip-stop de alta resistência com tratamentos UV e anti-chamas para durabilidade extrema.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="w-16 h-16 rounded-full signature-gradient flex items-center justify-center mb-8">
                  <Icons.Delivery />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Entrega & Ativação</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Logística global e equipe técnica especializada para montagens complexas, garantindo que o impacto seja imediato e seguro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Wizard Section */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="h-1 w-full bg-surface-container-high relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 signature-gradient"></div>
            </div>
            <div className="p-12 md:p-20">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold mb-4">O que vamos criar hoje?</h2>
                <p className="text-on-surface-variant">Selecione o tipo de projeto para começarmos a engenharia.</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'marketing', label: 'Marketing & Promoção', sub: 'Réplicas e infláveis gigantes', icon: <Megaphone size={24} /> },
                    { id: 'events', label: 'Eventos & Tendas', sub: 'Estruturas pneumáticas', icon: <Tent size={24} /> },
                    { id: 'scenography', label: 'Cenografia', sub: 'Palcos e instalações artísticas', icon: <Theater size={24} /> },
                    { id: 'special', label: 'Projeto Especial', sub: 'Desenvolvimento sob medida', icon: <FlaskConical size={24} /> }
                  ].map((option) => (
                    <label 
                      key={option.id}
                      className="relative flex items-center p-6 rounded-xl border-2 border-surface-container-high cursor-pointer hover:border-primary-container transition-all group"
                    >
                      <input className="hidden peer" name="project_type" type="radio" value={option.id} />
                      <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-container/20 transition-colors text-primary">
                        {option.icon}
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">{option.label}</p>
                        <p className="text-xs text-on-surface-variant">{option.sub}</p>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 peer-checked:opacity-100 transition-opacity text-primary">
                        <CheckCircle size={20} />
                      </div>
                    </label>
                  ))}
                </div>
                <div className="pt-8 flex justify-end">
                  <button className="signature-gradient text-white font-headline font-bold px-12 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform" type="button">
                    Próximo Passo
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100 font-headline">Amaze Balloons</div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Engineering Specs', 'Global Logistics'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="font-body text-sm tracking-wide text-slate-500 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-4 transition-all"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-slate-500 text-sm font-body">
            © 2024 Amaze Balloons. Precision Engineered Inflatables.
          </div>
        </div>
      </footer>
    </div>
  );
}
