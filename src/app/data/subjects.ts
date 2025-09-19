export interface SubjectTopic {
  title: string;
  description: string;
}

export interface SubjectActivity {
  title: string;
  description: string;
  link?: string;
  badge?: string;
}

export interface SubjectResource {
  label: string;
  url: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  teacher: string;
  shortDescription: string;
  about: string;
  topics: SubjectTopic[];
  activities: SubjectActivity[];
  curiosities: string[];
  resources: SubjectResource[];
  tags: string[];
  accentColor: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: 'projeto-integrador',
    code: '[ALU21]',
    name: 'Projeto Integrador',
    teacher: 'Jefferson Antonio Ribeiro Passerini',
    shortDescription: 'Integra conhecimentos em projetos reais, unindo back-end .NET, front-end e documenta\u00e7\u00e3o.',
    about:
      'A disciplina de Projeto Integrador promove a aplica\u00e7\u00e3o pr\u00e1tica dos conte\u00fados trabalhados ao longo do semestre. ' +
      'Por meio de projetos colaborativos, aprendemos a transformar requisitos em solu\u00e7\u00f5es completas, com foco em planejamento, execu\u00e7\u00e3o e entrega de valor.',
    topics: [
      {
        title: 'GitHub e colabora\u00e7\u00e3o',
        description:
          'Revis\u00e3o das funcionalidades essenciais do GitHub para trabalho em equipe: versionamento, pull requests, forks e organiza\u00e7\u00e3o de fluxos de entrega.'
      },
      {
        title: 'Projeto integrador da disciplina',
        description:
          'Constru\u00e7\u00e3o de uma solu\u00e7\u00e3o interdisciplinar, conectando front-end, back-end e documenta\u00e7\u00e3o para entregar um produto funcional alinhado aos requisitos do cliente.'
      },
      {
        title: 'Projeto interdisciplinar',
        description:
          'Experi\u00eancia que une diferentes disciplinas do curso para resolver um desafio \u00fanico, fortalecendo comunica\u00e7\u00e3o, planejamento e integra\u00e7\u00e3o de equipes multidisciplinares.'
      }
    ],
    activities: [
      {
        title: 'Desenvolvimento de Projeto WebAPI + React',
        description:
          'Planejamento e implementa\u00e7\u00e3o de uma API em .NET integrada a um front-end React, com defini\u00e7\u00e3o de endpoints, integra\u00e7\u00f5es e governan\u00e7a de versionamento.',
        link: 'https://github.com/felipebianchini2006/Projeto-Curso-WebAPI',
        badge: 'Reposit\u00f3rio'
      },
      {
        title: 'GranjaTech',
        description:
          'Sistema para gest\u00e3o de granjas de corte com integra\u00e7\u00e3o entre back-end .NET e front-end React, aplicando conceitos de produto digital completo.',
        link: 'https://github.com/felipebianchini2006/GranjaTech',
        badge: 'Projeto destaque'
      },
      {
        title: 'Atividade de Programa\u00e7\u00e3o',
        description:
          'Sprints com foco em requisitos t\u00e9cnicos, testes e refinamento de funcionalidades para consolidar integra\u00e7\u00e3o cont\u00ednua e boas pr\u00e1ticas de codifica\u00e7\u00e3o.'
      },
      {
        title: 'Projeto Integrador: Documenta\u00e7\u00e3o',
        description:
          'Entrega de documenta\u00e7\u00e3o completa do produto, incluindo vis\u00e3o de neg\u00f3cio, arquitetura, backlog priorizado e plano de evolu\u00e7\u00e3o.'
      },
      {
        title: 'Reposit\u00f3rio do Curso Git',
        description: 'Exerc\u00edcios guiados para dominar versionamento distribu\u00eddo, trabalho com branches e fluxo Git Flow.',
        link: 'https://github.com/felipebianchini2006/curso-git',
        badge: 'Reposit\u00f3rio'
      },
      {
        title: 'Exemplo de fork e contribui\u00e7\u00e3o',
        description: 'Simula\u00e7\u00e3o de contribui\u00e7\u00e3o em projetos p\u00fablicos com workflows de fork, pull request e code review.',
        link: 'https://github.com/felipebianchini2006/curso-git2',
        badge: 'Reposit\u00f3rio'
      }
    ],
    curiosities: [
      'O Projeto Integrador funciona como a espinha dorsal do semestre, permitindo visualizar a aplica\u00e7\u00e3o real de cada disciplina.',
      'Vivenciar ciclos completos de projeto potencializa habilidades como comunica\u00e7\u00e3o, lideran\u00e7a t\u00e9cnica e gest\u00e3o de riscos.',
      'Metodologias \u00e1geis e documenta\u00e7\u00e3o evolutiva foram essenciais para ajustar o produto a cada feedback recebido.'
    ],
    resources: [
      { label: 'Guia b\u00e1sico de GitHub para iniciantes', url: 'https://guides.github.com/activities/hello-world/' },
      { label: 'PMBOK Guide', url: 'https://pmbok.org/' },
      {
        label: 'Gest\u00e3o \u00e1gil com Atlassian',
        url: 'https://www.atlassian.com/agile/project-management'
      }
    ],
    tags: ['GitHub', '.NET', 'React', 'Documenta\u00e7\u00e3o'],
    accentColor: '#1565c0'
  },
  {
    id: 'engenharia-software',
    code: '[IES020]',
    name: 'Engenharia de Software',
    teacher: 'Jefferson Antonio Ribeiro Passerini',
    shortDescription: 'Metodologias, modelagem e documenta\u00e7\u00e3o para entregar software com qualidade.',
    about:
      'A disciplina apresenta uma vis\u00e3o completa do ciclo de desenvolvimento de software, desde a elicit\u00e7\u00e3o de requisitos at\u00e9 a constru\u00e7\u00e3o de modelos e documenta\u00e7\u00e3o. ' +
      'Estudamos processos tradicionais e \u00e1geis, entendendo como escolher o melhor caminho para cada contexto organizacional.',
    topics: [
      {
        title: 'Diagramas de classe',
        description:
          'Modelagem da estrutura est\u00e1tica do sistema em UML, definindo classes, atributos, m\u00e9todos e relacionamentos para orientar o design orientado a objetos.'
      },
      {
        title: 'Diagramas de caso de uso',
        description:
          'Representa\u00e7\u00e3o das intera\u00e7\u00f5es entre atores e funcionalidades, garantindo uma vis\u00e3o centrada no usu\u00e1rio das capacidades do sistema.'
      },
      {
        title: 'Processos de software',
        description:
          'Compara\u00e7\u00e3o de modelos como cascata, incremental, espiral e abordagens \u00e1geis para selecionar o processo mais adequado ao projeto.'
      },
      {
        title: 'Introdu\u00e7\u00e3o \u00e0 engenharia de software',
        description:
          'Fundamentos, desafios cl\u00e1ssicos e melhores pr\u00e1ticas para construir produtos confi\u00e1veis, escal\u00e1veis e sustent\u00e1veis.'
      },
      {
        title: 'Engenharia de requisitos',
        description:
          'Levantamento, an\u00e1lise, especifica\u00e7\u00e3o e valida\u00e7\u00e3o de requisitos funcionais e n\u00e3o funcionais com foco na experi\u00eancia do stakeholder.'
      },
      {
        title: 'UML aplicada',
        description:
          'Uso da linguagem UML para documentar e comunicar arquiteturas, cen\u00e1rios de uso, componentes e fluxos de dados.'
      },
      {
        title: 'Estudo de caso Boeing',
        description:
          'An\u00e1lise cr\u00edtica do caso de falhas em software na avia\u00e7\u00e3o para refor\u00e7ar a import\u00e2ncia de testes, auditoria e rastreabilidade.'
      },
      {
        title: 'Modelagem de sistemas',
        description:
          'Cria\u00e7\u00e3o de vis\u00f5es arquiteturais que sustentam a implementa\u00e7\u00e3o, conectando requisitos \u00e0s decis\u00f5es t\u00e9cnicas.'
      }
    ],
    activities: [
      {
        title: 'Oficina de requisitos com stakeholders',
        description:
          'Simula\u00e7\u00e3o de entrevistas e prioriza\u00e7\u00e3o de requisitos, transformando anota\u00e7\u00f5es em hist\u00f3rias de usu\u00e1rio e casos de uso detalhados.'
      },
      {
        title: 'Sprint de modelagem UML 2.5',
        description:
          'Cria\u00e7\u00e3o de um pacote completo de diagramas (casos de uso, classes, sequ\u00eancia) para compartilhar com a equipe de desenvolvimento.'
      },
      {
        title: 'Relat\u00f3rio cr\u00edtico: estudo Boeing',
        description:
          'Discuss\u00e3o guiada sobre falhas do 737 MAX, mapeando li\u00e7\u00f5es aprendidas para pr\u00e1ticas de engenharia e gest\u00e3o de riscos.'
      }
    ],
    curiosities: [
      'O termo Engenharia de Software surgiu em 1968 durante uma confer\u00eancia da OTAN como resposta \u00e0 crise do software.',
      'A UML n\u00e3o \u00e9 uma linguagem de programa\u00e7\u00e3o, e sim um alfabeto visual para comunicar decis\u00f5es de design.',
      'Frameworks \u00e1geis como Scrum e Kanban ganham espa\u00e7o por aproximar equipes e acelerar feedbacks.'
    ],
    resources: [
      { label: 'Site oficial da UML', url: 'https://www.uml.org/' },
      { label: 'Manifesto \u00c1gil', url: 'https://agilemanifesto.org/iso/ptbr/manifesto.html' },
      { label: 'Tutoriais de metodologias \u00e1geis', url: 'https://www.atlassian.com/br/agile/tutorials' }
    ],
    tags: ['UML', 'Requisitos', 'Processos'],
    accentColor: '#8e24aa'
  },
  {
    id: 'banco-de-dados',
    code: '[IDD034]',
    name: 'T\u00e9cnicas Avan\u00e7adas de Banco de Dados',
    teacher: 'Alexandre Aparecido Bernardes',
    shortDescription: 'Administra\u00e7\u00e3o de bancos relacionais, automa\u00e7\u00f5es com SQL e boas pr\u00e1ticas de seguran\u00e7a.',
    about:
      'A disciplina aprofunda o dom\u00ednio de SGBDs relacionais e introduz pr\u00e1ticas modernas de integra\u00e7\u00e3o com solu\u00e7\u00f5es NoSQL. ' +
      'Estudamos otimiza\u00e7\u00e3o de consultas, encapsulamento de l\u00f3gica e o papel da governan\u00e7a de dados na constru\u00e7\u00e3o de aplica\u00e7\u00f5es confi\u00e1veis.',
    topics: [
      {
        title: 'SQL Server Management Studio e comandos DDL',
        description:
          'Configura\u00e7\u00e3o do ambiente e revis\u00e3o de instru\u00e7\u00f5es de defini\u00e7\u00e3o de dados para criar, alterar e remover estruturas de banco.'
      },
      {
        title: 'JOINs e relacionamento entre tabelas',
        description:
          'Aplica\u00e7\u00e3o de joins internos, externos e auto-relacionados para combinar dados em cen\u00e1rios de relat\u00f3rios e integra\u00e7\u00f5es.'
      },
      {
        title: 'Subconsultas e views',
        description:
          'Uso de subconsultas correlacionadas e cria\u00e7\u00e3o de views para simplificar acessos e proteger a camada de dados.'
      },
      {
        title: 'Views avan\u00e7adas',
        description:
          'Explora\u00e7\u00e3o de views atualiz\u00e1veis, com schema binding e estrat\u00e9gias de particionamento para performance.'
      },
      {
        title: 'Stored procedures',
        description:
          'Encapsulamento de regras de neg\u00f3cio e rotinas cr\u00edticas em procedimentos armazenados reutiliz\u00e1veis.'
      },
      {
        title: 'Functions',
        description:
          'Cria\u00e7\u00e3o de fun\u00e7\u00f5es escalares e table-valued para enriquecer consultas e refor\u00e7ar consist\u00eancia.'
      },
      {
        title: 'Data Control Language (DCL)',
        description:
          'Gest\u00e3o de permiss\u00f5es com GRANT e REVOKE para garantir seguran\u00e7a e rastreabilidade de acessos.'
      }
    ],
    activities: [
      {
        title: 'Oficina de Curr\u00edculo',
        description:
          'Workshop mediado pela Prof.\u00aa Adriana de Souza Colombo com revis\u00e3o de curr\u00edculos, produ\u00e7\u00e3o colaborativa e confraterniza\u00e7\u00e3o de encerramento.'
      },
      {
        title: 'Introdu\u00e7\u00e3o a triggers',
        description:
          'Estudo de gatilhos em SQL Server, identificando cen\u00e1rios ideais para automatizar valida\u00e7\u00f5es e auditorias.'
      },
      {
        title: 'Trigger \u2013 conceitos e exerc\u00edcios',
        description:
          'Implementa\u00e7\u00e3o pr\u00e1tica de triggers para monitorar inser\u00e7\u00f5es, atualiza\u00e7\u00f5es e exclus\u00f5es, garantindo integridade de neg\u00f3cio.'
      }
    ],
    curiosities: [
      'Solu\u00e7\u00f5es NoSQL ganharam for\u00e7a com o crescimento de aplica\u00e7\u00f5es que lidam com dados sem estrutura r\u00edgida.',
      'Stored procedures reduzem tr\u00e1fego de rede porque o processamento ocorre diretamente no servidor.',
      'Governan\u00e7a de permiss\u00f5es via DCL \u00e9 fundamental para evitar vazamentos e atender requisitos de compliance.'
    ],
    resources: [
      {
        label: 'Download SQL Server Management Studio',
        url: 'https://docs.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16'
      },
      { label: 'Tutorial completo de SQL', url: 'https://www.w3schools.com/sql/' },
      { label: 'NoSQL explicado', url: 'https://www.mongodb.com/nosql-explained' }
    ],
    tags: ['SQL Server', 'Stored Procedures', 'Triggers'],
    accentColor: '#00695c'
  },
  {
    id: 'estruturas-de-dados',
    code: '[IES008]',
    name: 'Estruturas de Dados',
    teacher: 'Willian Guimar\u00e3es Borges',
    shortDescription: 'Constru\u00e7\u00e3o de estruturas eficientes em C, com foco em mem\u00f3ria, algoritmos e boas pr\u00e1ticas.',
    about:
      'A disciplina desenvolve o racioc\u00ednio algor\u00edtmico necess\u00e1rio para escolher a estrutura ideal em cada problema. ' +
      'A partir da linguagem C, exploramos desde fundamentos at\u00e9 cole\u00e7\u00f5es din\u00e2micas e estrat\u00e9gias de otimiza\u00e7\u00e3o.',
    topics: [
      { title: 'Revis\u00e3o de tipos de dados', description: 'Revis\u00e3o dos tipos primitivos e implica\u00e7\u00f5es na aloca\u00e7\u00e3o de mem\u00f3ria e performance.' },
      { title: 'Estruturas condicionais', description: 'Aplica\u00e7\u00e3o de controles de fluxo para tomar decis\u00f5es com base em express\u00f5es l\u00f3gicas.' },
      { title: 'La\u00e7os de repeti\u00e7\u00e3o', description: 'Uso de for, while e do-while para percorrer cole\u00e7\u00f5es e repetir rotinas.' },
      { title: 'Fun\u00e7\u00f5es', description: 'Modulariza\u00e7\u00e3o de c\u00f3digo para reutiliza\u00e7\u00e3o, legibilidade e manuten\u00e7\u00e3o.' },
      { title: 'Ponteiros', description: 'Trabalho direto com endere\u00e7os de mem\u00f3ria para construir estruturas din\u00e2micas.' },
      { title: 'Vetores', description: 'Manipula\u00e7\u00e3o de arrays unidimensionais para armazenar sequ\u00eancias cont\u00edguas de dados.' },
      { title: 'Matrizes', description: 'Representa\u00e7\u00e3o bidimensional de dados e opera\u00e7\u00f5es matriciais b\u00e1sicas.' },
      { title: 'Structs', description: 'Agrupamento de dados heterog\u00eaneos em uma mesma entidade.' },
      { title: 'Listas encadeadas', description: 'Implementa\u00e7\u00e3o de listas simplesmente encadeadas com inser\u00e7\u00e3o e remo\u00e7\u00e3o eficientes.' },
      { title: 'Pilhas e filas', description: 'Modelagem de cole\u00e7\u00f5es LIFO e FIFO aplicadas a algoritmos de controle.' },
      { title: 'Fila de prioridade', description: 'Ordena\u00e7\u00e3o por prioridades para processamento de eventos e tarefas cr\u00edticas.' },
      { title: 'Fila baseada em vetor', description: 'Estrat\u00e9gias para filas est\u00e1ticas e uso de fila circular para otimizar espa\u00e7o.' },
      { title: 'Listas duplamente encadeadas', description: 'Travessia bidirecional e simplifica\u00e7\u00e3o de remo\u00e7\u00f5es em listas din\u00e2micas.' },
      { title: 'Fila circular', description: 'Implementa\u00e7\u00e3o que conecta in\u00edcio e fim para reuso da estrutura.' },
      { title: 'Lista duplamente encadeada circular', description: 'Combina\u00e7\u00e3o de encadeamento duplo e circular para navega\u00e7\u00e3o flex\u00edvel.' }
    ],
    activities: [
      {
        title: 'Introdu\u00e7\u00e3o a \u00e1rvores',
        description:
          'Estudo das caracter\u00edsticas fundamentais de \u00e1rvores e sua aplica\u00e7\u00e3o em buscas hier\u00e1rquicas.'
      },
      {
        title: 'Introdu\u00e7\u00e3o \u00e0s \u00e1rvores AVL',
        description:
          'An\u00e1lise de \u00e1rvores auto-balanceadas e crit\u00e9rios de rota\u00e7\u00e3o para manter a efici\u00eancia das opera\u00e7\u00f5es.'
      },
      {
        title: 'Balanceamento de \u00e1rvore AVL',
        description:
          'Implementa\u00e7\u00e3o de rota\u00e7\u00f5es simples e duplas para garantir alturas equilibradas em inser\u00e7\u00f5es e remo\u00e7\u00f5es.'
      },
      {
        title: 'Panorama de \u00e1rvores bin\u00e1rias',
        description:
          'Apresenta\u00e7\u00e3o comparativa entre BST, heaps, tries e usos em algoritmos do mundo real.'
      },
      {
        title: 'Percursos pr\u00e9, in e p\u00f3s-ordem',
        description:
          'Explora\u00e7\u00e3o dos principais percursos em \u00e1rvores para resolver buscas, ordena\u00e7\u00f5es e serializa\u00e7\u00f5es.'
      },
      {
        title: 'Reposit\u00f3rio das atividades em C',
        description: 'Cole\u00e7\u00e3o de exerc\u00edcios resolvidos consolidando listas, filas e \u00e1rvores na pr\u00e1tica.',
        link: 'https://github.com/felipebianchini2006/atividades-c',
        badge: 'Reposit\u00f3rio'
      }
    ],
    curiosities: [
      'Escolher a estrutura correta impacta mais na performance do que apenas confiar em hardware poderoso.',
      'Pilhas sustentam o call stack das linguagens e mecanismos de desfazer a\u00e7\u00f5es.',
      'Filas modelam desde sistemas de impress\u00e3o at\u00e9 escalonadores de processos.'
    ],
    resources: [
      { label: 'GeeksforGeeks \u2013 Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/' },
      {
        label: 'Curso em V\u00eddeo \u2013 Estruturas de Dados em C',
        url: 'https://www.youtube.com/playlist?list=PLHz_eyp9xlQBOXJ9EaO7C12R_pT3eQz3g'
      },
      {
        label: 'Algoritmos interativos',
        url: 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html'
      }
    ],
    tags: ['C', 'Listas', '\u00c1rvores', 'Algoritmos'],
    accentColor: '#ef6c00'
  },
  {
    id: 'interacao-humano-computador',
    code: '[IHC008]',
    name: 'Intera\u00e7\u00e3o Humano Computador',
    teacher: 'L\u00edgia Rodrigues Prete',
    shortDescription: 'Design centrado no usu\u00e1rio com foco em acessibilidade, UX research e prototipagem no Figma.',
    about:
      'IHC aproxima tecnologia de pessoas. Trabalhamos princ\u00edpios de usabilidade, acessibilidade e storytelling visual para criar interfaces inclusivas. ' +
      'Do briefing ao prot\u00f3tipo naveg\u00e1vel, cada etapa considera necessidades reais de usu\u00e1rios.',
    topics: [
      { title: 'Experi\u00eancia do usu\u00e1rio', description: 'Fundamentos de UX, expectativas emocionais e crit\u00e9rios de satisfa\u00e7\u00e3o.' },
      { title: 'Primeiros passos no Figma', description: 'Cria\u00e7\u00e3o de projetos, frames e organiza\u00e7\u00e3o inicial do design system.' },
      { title: 'Formas e tipografias', description: 'Constru\u00e7\u00e3o de hierarquias visuais com grids, fontes e espa\u00e7amentos coerentes.' },
      { title: '\u00cdcones e cores', description: 'Sele\u00e7\u00e3o de paletas acess\u00edveis e \u00edcones que comunicam a\u00e7\u00f5es com clareza.' },
      { title: 'Imagens e assets', description: 'Importa\u00e7\u00e3o, recorte e otimiza\u00e7\u00e3o de imagens para diferentes dispositivos.' },
      { title: 'Prototipagem interativa', description: 'Defini\u00e7\u00e3o de fluxos, anima\u00e7\u00f5es e microintera\u00e7\u00f5es que simulam a experi\u00eancia real.' },
      { title: 'Plugins no Figma', description: 'Automa\u00e7\u00e3o de tarefas e integra\u00e7\u00e3o com bibliotecas para acelerar entregas.' },
      { title: 'Exporta\u00e7\u00e3o de prot\u00f3tipos', description: 'Gera\u00e7\u00e3o de assets e especifica\u00e7\u00f5es para handoff com desenvolvimento.' },
      { title: 'Integra\u00e7\u00e3o com desenvolvimento', description: 'Trilha de documenta\u00e7\u00e3o para transformar prot\u00f3tipos em componentes reutiliz\u00e1veis.' }
    ],
    activities: [
      {
        title: 'Figma \u2013 acessibilidade',
        description:
          'Aplica\u00e7\u00e3o de heur\u00edsticas e contrastes para garantir leitura confort\u00e1vel e navega\u00e7\u00e3o com tecnologia assistiva.'
      },
      {
        title: 'Acessibilidade e usabilidade em prot\u00f3tipos',
        description:
          'Avalia\u00e7\u00e3o guiada com checklist de Nielsen e testes r\u00e1pidos para validar fluxos cr\u00edticos com usu\u00e1rios.'
      },
      {
        title: 'Persona: p\u00fablico-alvo e storytelling',
        description:
          'Constru\u00e7\u00e3o de personas completas com perfil, objetivos, jornadas e exemplos que orientam decis\u00f5es de design.'
      },
      {
        title: 'Reposit\u00f3rio InfoCursos',
        description: 'Projeto pr\u00e1tico publicando telas responsivas e documenta\u00e7\u00e3o de componentes.',
        link: 'https://github.com/felipebianchini2006/infocursos',
        badge: 'Reposit\u00f3rio'
      }
    ],
    curiosities: [
      'Design Thinking mant\u00e9m o usu\u00e1rio no centro e inspira ciclos r\u00e1pidos de prototipagem.',
      'Acessibilidade digital alia responsabilidade \u00e9tica e conformidade legal.',
      'O trabalho colaborativo do Figma permite iterar com m\u00faltiplos stakeholders em tempo real.'
    ],
    resources: [
      { label: 'Figma Education', url: 'https://www.figma.com/education/' },
      { label: 'UX Design Brasil', url: 'https://brasil.uxdesign.cc/' },
      { label: 'Nielsen Norman Group', url: 'https://www.nngroup.com/' }
    ],
    tags: ['UX', 'Acessibilidade', 'Figma'],
    accentColor: '#7b1fa2'
  },
  {
    id: 'programacao-avancada',
    code: '[IDD063]',
    name: 'T\u00e9cnicas Avan\u00e7adas de Programa\u00e7\u00e3o',
    teacher: 'Wellington Luis Codinhoto Garcia',
    shortDescription: 'Aplica\u00e7\u00f5es .NET completas com foco em padr\u00f5es de c\u00f3digo, persist\u00eancia e boas pr\u00e1ticas.',
    about:
      'Exploramos o ecossistema .NET para criar aplica\u00e7\u00f5es robustas. A disciplina refor\u00e7a fundamentos da linguagem C# e evolui para integra\u00e7\u00e3o com bases de dados, interface rica e arquitetura organizada.',
    topics: [
      { title: 'Vis\u00e3o geral do .NET', description: 'Arquitetura da plataforma, CLR e diferenciais entre .NET Framework, Core e vers\u00f5es atuais.' },
      { title: 'Fundamentos de C#', description: 'Sintaxe, tipos, operadores e constru\u00e7\u00e3o de algoritmos leg\u00edveis.' },
      { title: 'Estruturas de repeti\u00e7\u00e3o', description: 'La\u00e7os for, while, do-while e foreach aplicados a cole\u00e7\u00f5es e processamento em lote.' },
      { title: 'Vetores e matrizes', description: 'Manipula\u00e7\u00e3o de arrays unidimensionais e bidimensionais em cen\u00e1rios reais.' },
      { title: 'Opera\u00e7\u00f5es CRUD', description: 'Persist\u00eancia de dados com Create, Read, Update e Delete em aplica\u00e7\u00f5es conectadas.' },
      { title: 'Bootstrap para UI', description: 'Uso do framework front-end para entregar interfaces responsivas em projetos .NET.' }
    ],
    activities: [
      {
        title: 'Conex\u00e3o com banco de dados .NET',
        description:
          'Configura\u00e7\u00e3o de contexto, strings de conex\u00e3o e entity models para persistir dados com seguran\u00e7a.'
      },
      {
        title: 'Formul\u00e1rio de cadastro',
        description:
          'Desenvolvimento de telas validando entradas, utilizando data annotations e feedback visual.'
      },
      {
        title: 'Modelo relacional 1:N e N:N',
        description:
          'Modelagem de relacionamentos complexos, mapeamento de entidades e cria\u00e7\u00e3o de migrations.'
      },
      {
        title: 'Heran\u00e7a e polimorfismo em .NET',
        description:
          'Implementa\u00e7\u00e3o de hierarquias de classes, interfaces e sobrecarga de m\u00e9todos para ampliar reutiliza\u00e7\u00e3o.'
      },
      {
        title: 'Projeto .NET 1:N',
        description:
          'Entrega incremental com foco em relacionamento mestre-detalhe e listas vinculadas.'
      },
      {
        title: 'Projeto .NET N:N',
        description:
          'Aplica\u00e7\u00e3o completa suportando associa\u00e7\u00f5es muitos-para-muitos com tabelas de jun\u00e7\u00e3o e views personalizadas.',
        link: 'https://github.com/felipebianchini2006/vendasmvc',
        badge: 'Reposit\u00f3rio'
      },
      {
        title: 'CRUD Estado',
        description: 'Reposit\u00f3rio com opera\u00e7\u00f5es completas e padr\u00e3o Repository aplicado.',
        link: 'https://github.com/felipebianchini2006/CRUDESTADO',
        badge: 'Reposit\u00f3rio'
      },
      {
        title: 'CRUD Produto & Fornecedor',
        description: 'Projeto de refer\u00eancia demonstrando camadas de servi\u00e7o, DTOs e valida\u00e7\u00f5es.',
        link: 'https://github.com/felipebianchini2006/crudprodutofornecedor',
        badge: 'Reposit\u00f3rio'
      }
    ],
    curiosities: [
      '.NET suporta m\u00faltiplas linguagens, com C# liderando pela versatilidade.',
      'CRUD \u00e9 base de sistemas de gest\u00e3o e aparece em praticamente todos os projetos corporativos.',
      'Bootstrap acelerou a ado\u00e7\u00e3o de design responsivo em aplica\u00e7\u00f5es web empresariais.'
    ],
    resources: [
      { label: 'Documenta\u00e7\u00e3o oficial .NET', url: 'https://docs.microsoft.com/pt-br/dotnet/' },
      { label: 'Guia da linguagem C#', url: 'https://docs.microsoft.com/pt-br/dotnet/csharp/' },
      { label: 'Bootstrap \u2013 Introdu\u00e7\u00e3o', url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/' }
    ],
    tags: ['.NET', 'C#', 'Entity Framework'],
    accentColor: '#3949ab'
  },
  {
    id: 'programacao-web-mobile',
    code: '[IND053]',
    name: 'T\u00e9cnicas Avan\u00e7adas de Programa\u00e7\u00e3o Web e Mobile',
    teacher: 'Marcelo Tadeu Boer',
    shortDescription: 'Arquiteturas modernas com React, Angular e integra\u00e7\u00f5es serverless para experi\u00eancias responsivas.',
    about:
      'A disciplina apresenta ferramentas e padr\u00f5es para criar interfaces din\u00e2micas que se adaptam a m\u00faltiplas plataformas. ' +
      'Exploramos componentiza\u00e7\u00e3o, gerenciamento de estado e integra\u00e7\u00f5es com backends como Firebase e Supabase.',
    topics: [
      { title: 'Fundamentos de React.js', description: 'Componentiza\u00e7\u00e3o, JSX e ciclo de vida para cria\u00e7\u00e3o de interfaces reativas.' },
      { title: 'Estiliza\u00e7\u00e3o escal\u00e1vel', description: 'Estrat\u00e9gias para organizar CSS, aplicar design system e garantir responsividade.' },
      { title: 'Integra\u00e7\u00e3o com Firebase', description: 'Autentica\u00e7\u00e3o, Firestore e storage em aplica\u00e7\u00f5es web serverless.' },
      { title: 'Tela de loja', description: 'Implementa\u00e7\u00e3o de cat\u00e1logo, carrinho e feedback visual em projetos pr\u00e1ticos.' }
    ],
    activities: [
      {
        title: 'Pesquisa sobre Angular',
        description:
          'Mapeamento de casos de uso do framework, recursos do Angular CLI e compara\u00e7\u00e3o com React e Vue.'
      },
      {
        title: 'Primeira aplica\u00e7\u00e3o Angular',
        description:
          'Cria\u00e7\u00e3o de componentes, binding de dados e roteamento para estruturar um projeto inicial.'
      },
      {
        title: 'CRUD Angular + Supabase',
        description:
          'Consumo de API REST do Supabase para cadastrar, listar e atualizar registros com autentica\u00e7\u00e3o b\u00e1sica.'
      },
      {
        title: 'Explora\u00e7\u00e3o do Supabase',
        description:
          'Estudo dos servi\u00e7os de banco, storage e auth, avaliando pr\u00f3s e contras para projetos h\u00edbridos.'
      },
      {
        title: 'Reposit\u00f3rio do site Boer',
        description: 'Projeto publicado com componentes reutiliz\u00e1veis e integra\u00e7\u00e3o com servi\u00e7os externos.',
        link: 'https://github.com/felipebianchini2006/boer',
        badge: 'Reposit\u00f3rio'
      }
    ],
    curiosities: [
      'React foi criado pelo Facebook e revolucionou o mercado com o conceito de componentes declarativos.',
      'Firebase e Supabase oferecem infraestrutura como servi\u00e7o, reduzindo tempo de configura\u00e7\u00e3o de backend.',
      'A componentiza\u00e7\u00e3o facilita testes, manuten\u00e7\u00e3o e compartilhamento de UI entre equipes.'
    ],
    resources: [
      { label: 'Documenta\u00e7\u00e3o React', url: 'https://react.dev/learn' },
      { label: 'Firebase Docs', url: 'https://firebase.google.com/docs' },
      { label: 'Roadmap front-end', url: 'https://roadmap.sh/frontend' }
    ],
    tags: ['Angular', 'React', 'Supabase'],
    accentColor: '#00838f'
  },
  {
    id: 'gestao-de-negocios',
    code: '[INE003]',
    name: 'Intelig\u00eancia Corporativa e Modelos de Neg\u00f3cios',
    teacher: 'Marinalva da Silva Talpo Boldrin',
    shortDescription: 'Transformar dados em estrat\u00e9gia e desenhar modelos de neg\u00f3cio sustent\u00e1veis na economia digital.',
    about:
      'Estudamos inova\u00e7\u00e3o, Business Intelligence e modelos de neg\u00f3cio para entender como a tecnologia sustenta decis\u00f5es competitivas. ' +
      'A disciplina equilibra fundamentos te\u00f3ricos com an\u00e1lise de casos pr\u00e1ticos do mercado brasileiro e global.',
    topics: [
      { title: 'Introdu\u00e7\u00e3o \u00e0 inova\u00e7\u00e3o', description: 'Conceitos, tipos e import\u00e2ncia da inova\u00e7\u00e3o para vantagem competitiva.' },
      { title: 'Etapas do processo inovador', description: 'Da idea\u00e7\u00e3o ao lan\u00e7amento, mapeando fases cr\u00edticas do ciclo de inova\u00e7\u00e3o.' },
      { title: 'Novos neg\u00f3cios apoiados por TI', description: 'Como tecnologia habilita modelos disruptivos e escal\u00e1veis.' },
      { title: 'Intelig\u00eancia corporativa', description: 'Fundamentos de BI e sua aplica\u00e7\u00e3o na an\u00e1lise de indicadores.' },
      { title: 'Benef\u00edcios do BI', description: 'Vis\u00e3o sobre ganho de efici\u00eancia, redu\u00e7\u00e3o de riscos e oportunidades.' },
      { title: 'Ciclo do BI', description: 'Coleta, tratamento, an\u00e1lise e dissemina\u00e7\u00e3o de insights estrat\u00e9gicos.' },
      { title: 'Casos de intelig\u00eancia corporativa', description: 'Estudo de empresas que usam dados para transformar opera\u00e7\u00f5es.' },
      { title: 'Aplica\u00e7\u00e3o pr\u00e1tica de BI', description: 'Planejamento de iniciativas de analytics alinhadas ao neg\u00f3cio.' },
      { title: 'Neg\u00f3cios escal\u00e1veis e sustent\u00e1veis', description: 'Equil\u00edbrio entre crescimento r\u00e1pido e responsabilidade socioambiental.' },
      { title: 'Modelos tradicionais versus digitais', description: 'Compara\u00e7\u00e3o cr\u00edtica entre abordagens cl\u00e1ssicas e plataformas digitais.' },
      { title: 'Modelagem de neg\u00f3cios competitivos', description: 'Constru\u00e7\u00e3o de propostas de valor e diferenciais com base em dados.' },
      { title: 'Alinhamento estrat\u00e9gico de TI', description: 'Como TI se torna parceira do neg\u00f3cio e n\u00e3o apenas suporte operacional.' },
      { title: 'Ativos intang\u00edveis', description: 'Valor do capital intelectual, patentes e reputa\u00e7\u00e3o organizacional.' },
      { title: 'Gest\u00e3o do conhecimento', description: 'Processos para captar e compartilhar saber interno em larga escala.' }
    ],
    activities: [
      {
        title: 'Defini\u00e7\u00e3o de fintech',
        description:
          'Mapeamento do ecossistema financeiro digital, identificando tend\u00eancias e solu\u00e7\u00f5es inovadoras.'
      },
      {
        title: 'Business cases aplicados',
        description:
          'An\u00e1lise de casos reais para propor solu\u00e7\u00f5es de TI que sustentem estrat\u00e9gias corporativas.'
      },
      {
        title: 'Projetos de TI orientados a valor',
        description:
          'Elabora\u00e7\u00e3o de planos para transformar oportunidades de neg\u00f3cio em produtos tecnol\u00f3gicos vi\u00e1veis.'
      }
    ],
    curiosities: [
      'O termo Business Intelligence foi popularizado por Howard Dresner em 1989.',
      'Modelos como Uber e Airbnb mostram o poder de ativos intang\u00edveis sobre patrim\u00f4nio f\u00edsico.',
      'Na economia do conhecimento, especialistas e dados s\u00e3o os principais ativos competitivos.'
    ],
    resources: [
      { label: 'Gartner \u2013 O que \u00e9 BI', url: 'https://www.gartner.com/en/articles/what-is-business-intelligence' },
      { label: 'Innovation Portal', url: 'https://www.innovation-portal.info/' },
      {
        label: 'Modelos de neg\u00f3cio Sebrae',
        url: 'https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/modelos-de-negocio,4569e38d77cfb610VgnVCM1000004c00210aRCRD'
      }
    ],
    tags: ['Inova\u00e7\u00e3o', 'Business Intelligence', 'Modelos de neg\u00f3cio'],
    accentColor: '#5d4037'
  },
  {
    id: 'gestao-agil',
    code: '[INE004]',
    name: 'Gest\u00e3o \u00c1gil de Projetos de Software',
    teacher: 'Andr\u00e9 Zagato Gomes',
    shortDescription: 'Scrum, XP e pr\u00e1ticas colaborativas para entregar software com ciclos curtos e feedback cont\u00ednuo.',
    about:
      'A disciplina conecta princ\u00edpios do Manifesto \u00c1gil a pr\u00e1ticas do dia a dia. Simulamos cerim\u00f4nias, trabalhamos com m\u00e9tricas e estudamos frameworks que equilibram planejamento e adapta\u00e7\u00e3o.',
    topics: [
      { title: 'Scrum na pr\u00e1tica', description: 'Pap\u00e9is, eventos e artefatos aplicados em sprints reais.' },
      { title: 'Din\u00e2mica com avi\u00f5es de massinha', description: 'Experimento para vivenciar inspe\u00e7\u00e3o e adapta\u00e7\u00e3o a cada itera\u00e7\u00e3o.' },
      { title: 'Tradicional x \u00c1gil', description: 'Comparativo entre modelos sequenciais e iterativos, destacando contextos ideais.' },
      { title: 'Revis\u00e3o de fundamentos', description: 'Relembrando escopo, tempo, custo e qualidade sob a \u00f3tica \u00e1gil.' },
      { title: 'Manifesto \u00c1gil', description: 'Origem, valores e princ\u00edpios que inspiram times de software.' },
      { title: 'Autores e artefatos', description: 'Panorama dos principais contribuidores e ferramentas 4.0.' },
      { title: 'Extreme Programming', description: 'Pr\u00e1ticas t\u00e9cnicas como TDD, pair programming e refatora\u00e7\u00e3o constante.' },
      { title: 'Kahoot \u00e1gil', description: 'Gamifica\u00e7\u00e3o para revisar conceitos de Scrum e XP.' }
    ],
    activities: [
      {
        title: 'Gerenciando a vis\u00e3o',
        description:
          'Constru\u00e7\u00e3o de vis\u00e3o de produto e alinhamento com expectativas de stakeholders em canvas visual.'
      },
      {
        title: 'Vis\u00e3o do Produto e Projeto',
        description:
          'Apresenta\u00e7\u00e3o com crit\u00e9rios de valida\u00e7\u00e3o, declara\u00e7\u00e3o de alto n\u00edvel, BOM e matriz item-entrega.'
      },
      {
        title: 'EAP e TAP',
        description:
          'Elabora\u00e7\u00e3o da Estrutura Anal\u00edtica do Projeto e do Termo de Abertura com stakeholders.'
      },
      {
        title: 'Azure Boards',
        description:
          'Configura\u00e7\u00e3o de quadros, PBIs e queries para acompanhar o fluxo de trabalho.'
      },
      {
        title: 'Feature e PBI',
        description:
          'Quebra de requisitos em features, \u00e9picos e itens do backlog priorizado.'
      },
      {
        title: 'Estimativa e effort',
        description:
          'Cria\u00e7\u00e3o de tasks, apontamento de esfor\u00e7o e c\u00e1lculo de capacidade do time.'
      },
      {
        title: 'Customiza\u00e7\u00e3o de cards e rollup',
        description:
          'Personaliza\u00e7\u00e3o de campos, uso de rollup e leitura de burndown para inspe\u00e7\u00e3o cont\u00ednua.'
      },
      {
        title: 'Wiki do time',
        description:
          'Documenta\u00e7\u00e3o viva de acordos, m\u00e9tricas e lessons learned para compartilhar conhecimento.'
      }
    ],
    curiosities: [
      'O Manifesto \u00c1gil nasceu em 2001 com 17 profissionais reunidos em Utah.',
      'Scrum \u00e9 o framework mais adotado no mercado, presente em empresas de todos os portes.',
      'Pair programming e TDD fortalecem qualidade t\u00e9cnica e dissemina\u00e7\u00e3o de conhecimento.'
    ],
    resources: [
      { label: 'Manifesto \u00c1gil', url: 'https://agilemanifesto.org/iso/ptbr/manifesto.html' },
      { label: 'What is Scrum?', url: 'https://www.scrum.org/resources/what-is-scrum' },
      { label: 'Extreme Programming', url: 'https://www.extremeprogramming.org/' }
    ],
    tags: ['Scrum', 'Kanban', 'Azure Boards'],
    accentColor: '#c62828'
  },
  {
    id: 'sistemas-operacionais',
    code: '[ISO116]',
    name: 'Organiza\u00e7\u00e3o de Computadores e Sistemas Operacionais',
    teacher: 'Wellington Luis Codinhoto Garcia',
    shortDescription: 'Arquitetura de hardware, hierarquia de mem\u00f3ria e fundamentos de sistemas operacionais.',
    about:
      'Compreender o hardware \u00e9 essencial para tirar o melhor proveito do software. A disciplina analisa componentes do computador, gerenciamento de recursos e arquiteturas de processadores.',
    topics: [
      { title: 'Divis\u00e3o de um computador', description: 'Particionamento em CPU, mem\u00f3ria, I/O e barramentos.' },
      { title: 'Hierarquia de mem\u00f3rias', description: 'Caracter\u00edsticas de registradores, cache, RAM e armazenamento secund\u00e1rio.' },
      { title: 'Mem\u00f3rias vol\u00e1teis e n\u00e3o vol\u00e1teis', description: 'Quando os dados permanecem ap\u00f3s o desligamento e implica\u00e7\u00f5es de uso.' },
      { title: 'Mem\u00f3ria ROM', description: 'Fun\u00e7\u00e3o do firmware e sequ\u00eancia de inicializa\u00e7\u00e3o do sistema.' },
      { title: 'Mem\u00f3ria RAM', description: 'Import\u00e2ncia da RAM para desempenho e multitarefa.' },
      { title: 'Cache e registradores', description: 'Camadas de cache e registradores otimizando ciclos de CPU.' },
      { title: 'Unidade aritm\u00e9tica e l\u00f3gica', description: 'C\u00e1lculos matem\u00e1ticos e opera\u00e7\u00f5es l\u00f3gicas conduzidos pela ULA.' },
      { title: 'Unidade de controle', description: 'Coordena\u00e7\u00e3o de instru\u00e7\u00f5es e orquestra\u00e7\u00e3o de componentes.' },
      { title: 'Funcionamento dos registradores', description: 'Armazenamento tempor\u00e1rio cr\u00edtico para processamentos de alta velocidade.' }
    ],
    activities: [
      {
        title: 'Comunica\u00e7\u00f5es em sistemas operacionais',
        description:
          'Estudo de chamadas de sistema, interrup\u00e7\u00f5es e sincroniza\u00e7\u00e3o entre processos.'
      },
      {
        title: 'Interfaces e perif\u00e9ricos',
        description:
          'Mapeamento de dispositivos de entrada/sa\u00edda, drivers e estrat\u00e9gias de gerenciamento.'
      },
      {
        title: 'Avalia\u00e7\u00e3o do conte\u00fado program\u00e1tico',
        description:
          'Prova pr\u00e1tica consolidando mem\u00f3ria, CPU e conceitos de SO.'
      },
      {
        title: 'Corre\u00e7\u00e3o colaborativa de avalia\u00e7\u00e3o',
        description:
          'Discuss\u00e3o de respostas, feedback e refor\u00e7o dos pontos-chave vistos em aula.'
      },
      {
        title: 'Arquitetura CISC',
        description:
          'An\u00e1lise de conjuntos complexos de instru\u00e7\u00f5es, hist\u00f3ricos e aplica\u00e7\u00f5es.'
      },
      {
        title: 'Arquitetura RISC',
        description:
          'Comparativo com CISC, filosofia de instru\u00e7\u00f5es reduzidas e exemplos de processadores.'
      }
    ],
    curiosities: [
      'A hierarquia de mem\u00f3ria busca equilibrar custo e velocidade para cada tipo de dado.',
      'O sistema operacional age como mediador entre hardware e software, escalonando recursos.',
      'Processadores modernos contam com bilh\u00f5es de transistores e m\u00faltiplos n\u00facleos.'
    ],
    resources: [
      { label: 'Curso de hardware', url: 'https://www.youtube.com/playlist?list=PLHz_eyp9xlQBP7-pQGg1_eWbT3w7X35qK' },
      { label: 'Operating Systems \u2013 GfG', url: 'https://www.geeksforgeeks.org/operating-systems/' },
      {
        label: 'Intel Processor Architecture',
        url: 'https://www.intel.com/content/www/us/en/developer/articles/technical/processor-architecture.html'
      }
    ],
    tags: ['Hardware', 'SO', 'Arquitetura'],
    accentColor: '#283593'
  },
  {
    id: 'matematica-discreta',
    code: '[MAT026]',
    name: 'Matem\u00e1tica Discreta',
    teacher: 'Evaniv\u00f4ldo Castro Suiva J\u00fanior',
    shortDescription: 'Fundamentos matem\u00e1ticos para algoritmos, l\u00f3gica e estruturas de dados.',
    about:
      'A disciplina apresenta as bases te\u00f3ricas que sustentam a computa\u00e7\u00e3o: l\u00f3gica booleana, teoria de conjuntos, combinat\u00f3ria e grafos. Esses conceitos formam o alicerce para an\u00e1lise de algoritmos e criptografia.',
    topics: [
      { title: 'L\u00f3gica booleana', description: 'Opera\u00e7\u00f5es AND, OR, NOT e suas representa\u00e7\u00f5es em circuitos e programas.' },
      { title: 'Equival\u00eancias l\u00f3gicas', description: 'Transforma\u00e7\u00e3o de express\u00f5es mantendo o mesmo valor de verdade.' },
      { title: 'Introdu\u00e7\u00e3o \u00e0 teoria de conjuntos', description: 'No\u00e7\u00f5es de conjuntos, subconjuntos e rela\u00e7\u00f5es b\u00e1sicas.' },
      { title: 'Opera\u00e7\u00f5es com conjuntos', description: 'Uni\u00e3o, interse\u00e7\u00e3o, diferen\u00e7a e complemento.' },
      { title: 'Intervalos num\u00e9ricos', description: 'Representa\u00e7\u00e3o de faixas de valores utilizando nota\u00e7\u00e3o de conjuntos.' },
      { title: 'An\u00e1lise combinat\u00f3ria', description: 'Princ\u00edpio multiplicativo, arranjos, permuta\u00e7\u00f5es e combina\u00e7\u00f5es.' },
      { title: 'Teoria dos grafos', description: 'V\u00e9rtices, arestas e aplica\u00e7\u00f5es em redes e problemas de caminhamento.' },
      { title: '\u00c1rvores', description: 'Estruturas ac\u00edclicas que suportam hierarquias e busca eficiente.' }
    ],
    activities: [
      {
        title: 'Rela\u00e7\u00f5es matem\u00e1ticas',
        description:
          'Estudo de propriedades como reflexividade, simetria e transitividade aplicadas a conjuntos.'
      },
      {
        title: 'Fun\u00e7\u00f5es matem\u00e1ticas',
        description:
          'Classifica\u00e7\u00e3o de fun\u00e7\u00f5es, dom\u00ednio, imagem e composi\u00e7\u00e3o no contexto de algoritmos.'
      },
      {
        title: 'Fun\u00e7\u00f5es relevantes',
        description:
          'An\u00e1lise de fun\u00e7\u00f5es logar\u00edtmicas, exponenciais e polinomiais usadas em complexidade.'
      },
      {
        title: 'Introdu\u00e7\u00e3o \u00e0 an\u00e1lise de algoritmos',
        description:
          'Estimativa de custo computacional utilizando nota\u00e7\u00e3o Big-O e casos cl\u00e1ssicos.'
      },
      {
        title: 'Recursividade',
        description:
          'Modelagem de solu\u00e7\u00f5es recursivas e visualiza\u00e7\u00e3o de \u00e1rvores de chamadas.'
      },
      {
        title: 'Rela\u00e7\u00f5es de recorr\u00eancia',
        description:
          'Resolu\u00e7\u00e3o de rela\u00e7\u00f5es que descrevem algoritmos recursivos e divide-and-conquer.'
      }
    ],
    curiosities: [
      'George Boole inaugurou a l\u00f3gica que hoje sustenta todo circuito digital.',
      'Grafos s\u00e3o usados para modelar redes sociais, rotas de GPS e fluxos log\u00edsticos.',
      'Criptografia moderna se apoia fortemente em matem\u00e1tica discreta e teoria dos n\u00fameros.'
    ],
    resources: [
      { label: 'Khan Academy \u2013 L\u00f3gica', url: 'https://www.khanacademy.org/computing/computer-science/logic' },
      {
        label: 'Playlist Matem\u00e1tica Discreta',
        url: 'https://www.youtube.com/playlist?list=PLBf0aamr_1bC_J1C3xT6iI3mS00d-3mXg'
      },
      {
        label: 'Grafos \u2013 GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/'
      }
    ],
    tags: ['L\u00f3gica', 'Combinat\u00f3ria', 'Grafos'],
    accentColor: '#6a1b9a'
  }
];
