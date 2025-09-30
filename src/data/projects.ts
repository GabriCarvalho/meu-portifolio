import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.",
    longDescription:
      "Uma aplicação completa de e-commerce desenvolvida com Next.js, incluindo autenticação, carrinho de compras, integração com gateway de pagamento, dashboard administrativo e muito mais.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/usuario/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados com gráficos em tempo real.",
    longDescription:
      "Dashboard completo para análise de dados com gráficos interativos, filtros avançados e atualizações em tempo real usando WebSockets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/usuario/dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "App Mobile de Tarefas",
    description:
      "Aplicativo de gerenciamento de tarefas com sincronização em tempo real.",
    longDescription:
      "Aplicativo de produtividade para gerenciamento de tarefas com recursos como drag-and-drop, categorias e sincronização entre dispositivos.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    githubUrl: "https://github.com/usuario/todo-app",
    featured: false,
    category: "mobile",
  },
  {
    id: "4",
    title: "API RESTful",
    description: "API robusta para gerenciamento de usuários e autenticação.",
    longDescription:
      "API completa com autenticação JWT, validação de dados, documentação Swagger e testes automatizados.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    githubUrl: "https://github.com/usuario/api-rest",
    featured: true,
    category: "api",
  },
  {
    id: "5",
    title: "Sistema de Blog",
    description: "CMS completo para criação e gerenciamento de conteúdo.",
    longDescription:
      "Sistema de gerenciamento de conteúdo com editor WYSIWYG, sistema de comentários e SEO otimizado.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/usuario/blog-cms",
    liveUrl: "https://blog-demo.vercel.app",
    featured: false,
    category: "web",
  },
  {
    id: "6",
    title: "Plataforma de Cursos",
    description: "LMS completo para criação e venda de cursos online.",
    longDescription:
      "Learning Management System com player de vídeo, sistema de progresso, certificados e pagamentos integrados.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "Stripe", "AWS S3", "TypeScript"],
    githubUrl: "https://github.com/usuario/lms-platform",
    liveUrl: "https://lms-demo.vercel.app",
    featured: true,
    category: "fullstack",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
