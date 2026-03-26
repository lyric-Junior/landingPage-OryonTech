import { 
  Monitor, 
  Cpu, 
  Printer, 
  Wrench, 
  Layers, 
  Smartphone, 
  Globe, 
  Code2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export const CONTACT_INFO = {
  whatsapp: "(93) 98417-0876",
  whatsappUrl: "https://wa.me/5593984170876",
  email: "oryontech.brasil@gmail.com",
  name: "Mauro Maleski",
  nickname: "Tucano TI",
  linkedin: "https://www.linkedin.com/in/mauro-maleski-urias-maleski-05312539b/",
  instagram: "https://www.instagram.com/oryon_tech_assistencia/",
  location: "Novo Progresso - PA"
};

import IERsite from './midia/ier-jovem.png';
import agronorte from './midia/agronorte.png';

export const SERVICES = [
  {
    title: "Otimização de Sistemas",
    description: "Deixe seu computador rápido como novo com limpeza de software e ajustes de performance.",
    icon: Layers,
  },
  {
    title: "Formatação Completa",
    description: "Instalação de Windows/Linux com backup seguro e todos os drivers atualizados.",
    icon: Monitor,
  },
  {
    title: "Manutenção de Impressoras",
    description: "Reparo e configuração de impressoras jato de tinta e laser.",
    icon: Printer,
  },
  {
    title: "Computadores de Mesa",
    description: "Diagnóstico e reparo de hardware para desktops de todos os modelos.",
    icon: Cpu,
  },
  {
    title: "Limpeza Preventiva",
    description: "Limpeza interna profunda e troca de pasta térmica para notebooks e desktops.",
    icon: Wrench,
  },
  {
    title: "Montagem de PCs",
    description: "Montagem personalizada de PCs Gamer e Workstations com gestão de cabos.",
    icon: Cpu,
  },
  {
    title: "Landing Pages",
    description: "Criação de sites institucionais e páginas de vendas de alta conversão.",
    icon: Globe,
  },
  {
    title: "Desenvolvimento Full Stack",
    description: "Soluções web completas e personalizadas para o seu negócio.",
    icon: Code2,
  }
];

export const PORTFOLIO = [
  {
    title: "Instituto Edson Royer",
    description: "Desenvolvimento de site institucional completo, focado em acessibilidade e apresentação de projetos sociais.",
    image: {IERsite},
    link: "https://institutoedsonroyer.org",
  },
  {
    title: "Agronorte Fazendas",
    description: "Landing page de alta conversão para o setor do agronegócio em Novo Progresso.",
    image: {agronorte},
    link: "https://agronortefazendasnp.com.br",
  }
];
