/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO, SERVICES, PORTFOLIO } from "./constants";
import logotipoSemFundo from "./midia/oryon-logotipo-sem-fundo.png";
import mascote from "./midia/mascote.png";
import fotoDePerfil from "./midia/Maurin.jpeg";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img
                src={logotipoSemFundo}
                alt="OryonTech Logo"
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tighter hidden sm:block">
                ORYON<span className="text-brand-pink">TECH</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a
                href="#servicos"
                className="hover:text-brand-pink transition-colors"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="hover:text-brand-pink transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#sobre"
                className="hover:text-brand-pink transition-colors"
              >
                Sobre
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-purple to-brand-pink px-5 py-2 rounded-full text-white hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-5 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center text-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-pink text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Disponível em Novo Progresso & Remoto
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
                Tecnologia que <span className="gradient-text">Impulsiona</span>{" "}
                seu Negócio.
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Assistência técnica especializada e desenvolvimento web de alta
                performance. Deixe seu hardware e sua presença digital nas mãos
                de quem entende.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  className="flex items-center justify-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#servicos"
                  className="flex items-center justify-center gap-2 glass-card px-8 py-4 font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Ver Serviços
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 p-20 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={mascote}
                  alt="OryonTech Mascot"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/30 blur-3xl rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/30 blur-3xl rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4">
              O que fazemos
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Serviços Especializados
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                Trabalhos Realizados
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Projetos em Destaque
              </h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Confira alguns dos sites e landing pages desenvolvidos para
              empresas de Novo Progresso e região.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl glass-card block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={
                      typeof item.image === "string"
                        ? item.image
                        : item.image.IERsite || item.image.agronorte
                    }
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="flex items-center text-brand-pink font-bold gap-2 group-hover:gap-4 transition-all">
                    Ver projeto <ChevronRight size={20} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About / Developer Section */}
      <section id="sobre" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-white/10 ">
                <img
                  src={fotoDePerfil}
                  alt="Mauro Maleski - Tucano TI"
                  className="w-full h-full object-cover transition-all duration-500 "
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-20 right-0 glass-card p-6 max-w-[240px]">
                <p className="text-[25px] font-bold mb-1">Mauro Maleski</p>
                <p className="text-center text-[#9400D3] font-mono uppercase tracking-tighter">
                  Full Stack Developer & TI Expert
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">
                Quem sou eu
              </h2>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                Prazer, sou o{" "}
                <br /><span className="text-brand-accent">Tucano TI</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Sou Mauro Maleski, desenvolvedor Full Stack apaixonado por criar
                soluções digitais. Embora eu domine todo o ciclo de
                desenvolvimento, foco em entregar Landing Pages e sites
                institucionais de alta qualidade, unindo minha expertise técnica
                com um front-end moderno e funcional. Atuo em Novo Progresso -
                PA, cuidando desde o seu hardware até a sua presença online.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Atendimento Local em Novo Progresso",
                  "Desenvolvimento Web Remoto para todo Brasil",
                  "Foco em Performance e Experiência do Usuário",
                  "Suporte Técnico Especializado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-accent" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-brand-blue/20 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-brand-pink/20 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-brand-purple/20 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-blue p-1">
            <div className="bg-brand-dark rounded-[2.9rem] p-12 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple/10 to-transparent -z-10" />

              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
                Pronto para elevar o nível da sua{" "}
                <span className="gradient-text">Tecnologia?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Seja para consertar seu computador ou criar o site dos seus
                sonhos, a OryonTech está pronta para te atender.
              </p>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-pink/20"
              >
                <FaWhatsapp size={24} />
                Falar com Tucano TI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={logotipoSemFundo}
                alt="OryonTech Logo"
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold tracking-tighter">
                ORYON<span className="text-brand-pink">TECH</span>
              </span>
            </div>

            <div className="text-gray-500 text-sm flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <p>© 2026 OryonTech. Todos os direitos reservados.</p>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Novo Progresso - Pará</span>
              </div>
              <p className="text-xs opacity-50">
                Desenvolvido por Mauro Maleski (Tucano TI)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
