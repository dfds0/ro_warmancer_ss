const translations = {
  "pt-BR": {
    pageTitle: "Warmancer RO - Tutorial",
    heroHeading: "Warmancer RO",
    heroSubtext: "Guia prático para montar sua build de Warmancer em Ragnarok Online.",
    navSobre: "Sobre",
    navTutorial: "Tutorial",
    navGaleria: "Galeria",
    navContato: "Contato",
    languageLabel: "Idioma",
    languagePt: "Português",
    languageEn: "English",
    languageEs: "Español",
    objectiveTitle: "Objetivo do projeto",
    objectiveText: "Este repositório é uma página de tutorial para a classe/build de Warmancer no Ragnarok Online. Aqui você encontrará informações sobre atributos, equipamentos, cartas e táticas de combate.",
    premisesTitle: "Premissas",
    premisesText: "A página deve ser focada em conteúdo claro, responsivo e acessível, com navegação simples e tradução para português, inglês e espanhol.",
    conceptTitle: "Conceito",
    conceptText: "Mostramos aqui o conceito de Warmancer como build de dano e sobrevivência, unindo gráficos, explicações e exemplos práticos.",
    chartCardTitle: "Curva de poder por nível",
    chartNote: "Eixo X: nível do personagem de 0 a 200 em intervalos de 5. Eixo Y: picos de poder a cada nível específico.",
    weaponChartTitle: "Disponibilidade de armas por nível",
    weaponChartNote: "Cada arma é exibida em uma faixa colorida para o intervalo de nível correspondente.",
    weaponItemFaca: "Faca",
    weaponItemRifle: "Rifle",
    weaponItemPistola: "Pistola",
    weaponItemGatling: "Gatling",
    weaponItemEscopeta: "Escopeta",
    weaponItemGranada: "Lança Granada",
    tutorialTitle: "Tutorial inicial",
    armasTitle: "TODO",
    armasIntro: "Nesta sessão serão apresentados detalhes sobre armas e habilidades, com recomendações e análises para builds Warmancer.",
    attrHeading: "1. Distribuição de atributos",
    attrText: "Comece priorizando Força e Vitalidade para maximizar dano e sobrevivência. Inteligência pode ser útil para reduzir consumo de SP em algumas habilidades.",
    gearHeading: "2. Equipamentos recomendados",
    gearText: "Procure por armas com alto ataque e bônus de dano físico. Escudos e armaduras com resistência a dano são muito importantes para conteúdo solo e PvM.",
    skillsHeading: "3. Habilidades",
    skillsText: "Foque em skills de burst e de redução de dano. Warmancer se beneficia de builds com controle de grupo e alto dano em área.",
    powerPeakTitle: "Pico de poder",
    powerPeakIntro: "Toque em um ponto do gráfico para navegar diretamente ao nível correspondente. Cada bloco abaixo pode conter texto, links externos, imagens e anotações.",
    galleryTitle: "Imagens e recursos",
    galleryText: "Adicione imagens em <strong>/images</strong> e use-as para ilustrar equipamentos, rotações ou telas do jogo.",
    galleryExampleStrong: "Exemplo:",
    galleryExampleText1: "Coloque suas imagens em",
    galleryExampleText2: "e atualize este HTML conforme necessário.",
    nextStepsTitle: "Próximos passos",
    nextStepsText: "Comece adicionando suas notas no arquivo <code>README.md</code>, seus tutoriais como novas páginas HTML, e imagens em <code>/images</code>.",
    copyTitle: "Como copiar esta página",
    copyIntro: "Para criar um site semelhante, use estes passos compactos:",
    copyStep1: "<strong>1.</strong> Crie um repositório no GitHub e abra-o no VS Code com GitHub Copilot.",
    copyStep2: "<strong>2.</strong> Prompt: <code>Configura um repositório GitHub Pages com HTML/CSS para um tutorial de classe em Ragnarok Online.</code>",
    copyStep3: "<strong>3.</strong> Prompt: <code>Cria estrutura de site com index.html, assets/css/style.css e pasta images.</code>",
    copyStep4: "<strong>4.</strong> Prompt: <code>Adiciona um gráfico SVG de nível x poder com pontos clicáveis que navegam para seções específicas.</code>",
    copyStep5: "<strong>5.</strong> Prompt: <code>Cria seções empilhadas para cada nível de pico com títulos âncora, texto descritivo, imagens e links.</code>",
    footerText: "Warmancer RO • Página de tutorial criada para GitHub Pages.",
    levelCardHeading: "Nível {level}",
    levelPeakLabel: "Pico de poder",
    levelDetailsText: "Detalhes do nível {level} para a build de Warmancer.",
    levelPointTitle: "Nível {level}",
    levelGuideObjectiveLabel: "Objetivo",
    levelGuideActionsLabel: "Ações",
    levelGuideNoteLabel: "Nota",
    levelGuideResultLabel: "Resultado",
    levelGuideItems: [
      {
        level: 10,
        title: "Nível 10 — Início da Build",
        objective: "Desbloquear a classe principal e acessar bônus iniciais de progressão.",
        actions: [
          { text: "Completar a quest de mudança de classe para Justiceiro", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros" },
          { text: "Realizar o Treinamento de Justiceiro", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros#Treinamento" },
          { text: "Entrar no clã Balestra Esmeralda através dos Clãs Reais", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Acesso completo às habilidades de Justiceiro", "Bônus passivos do clã para auxiliar no leveling inicial"]
      },
      {
        level: 30,
        title: "Nível 30 — Equipamento Éden I",
        objective: "Obter o primeiro conjunto de equipamentos focado em leveling.",
        actions: [
          { text: "Completar a quest de Equipamentos do Éden I no Grupo Éden", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Realizar as missões em Payon Cave" },
          { text: "Obter a arma do Éden correspondente", url: "https://www.divine-pride.net/database/item/13112/" }
        ],
        result: ["Primeiro aumento consistente de dano e sobrevivência"]
      },
      {
        level: 40,
        title: "Nível 40 — Encantamento Inicial",
        objective: "Melhorar o equipamento recebido anteriormente.",
        actions: [
          { text: "Encantar o Chapéu do Éden I com o Administrador Mihael", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        result: ["Pequeno aumento de atributos que melhora eficiência no leveling"]
      },
      {
        level: 50,
        title: "Nível 50 — Equipamento Éden II",
        objective: "Atualizar o equipamento principal.",
        actions: [
          { text: "Completar a quest de Equipamentos do Éden II" },
          { text: "Realizar as missões em Orc Dungeon" },
          { text: "Obter a nova arma do Éden", url: "https://www.divine-pride.net/database/item/13113/" }
        ],
        result: ["Aumento significativo de ataque"]
      },
      {
        level: 70,
        title: "Nível 70 — Equipamento Éden III",
        objective: "Preparar a build para a transição de classes futuras.",
        actions: [
          { text: "Completar a quest de Equipamentos do Éden III" },
          { text: "Realizar as missões em Abadia de Glast Heim" },
          { text: "Obter a nova arma do Éden", url: "https://www.divine-pride.net/database/item/13114/" },
          { text: "Encantar a Arma do Éden com o Especialista BK", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        note: "A missão de nível 90 do NPC Ur geralmente não compensa o esforço para esta build.",
        result: ["Novo pico de dano para leveling intermediário"]
      },
      {
        level: 100,
        title: "Nível 100 — Transição para Insurgente",
        objective: "Desbloquear a classe avançada e iniciar progressão de equipamentos mais fortes.",
        actions: [
          { text: "Completar a quest de mudança de classe para Insurgente", url: "https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes" },
          { text: "Farmar Moedas do Éden no Grupo Éden", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Obter Equipamentos Iniciais", url: "https://browiki.org/wiki/Equipamento_Inicial" },
          { text: "Entrar no clã Cajado Celeste", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Acesso às habilidades de Insurgente", "Novo ciclo de progressão de equipamentos"]
      },
      {
        level: 110,
        title: "Nível 110 — Acessórios e Banquete Real",
        objective: "Obter novos acessórios e desbloquear conteúdo importante.",
        actions: [
          { text: "Comprar Anel Ágil do Éden I ou Colar Ágil do Éden I", url: "https://www.divine-pride.net/database/item/28463/" },
          { text: "Comprar Anel Ágil do Éden I ou Colar Ágil do Éden I", url: "https://www.divine-pride.net/database/item/28464/" },
          { text: "Encantar os Acessórios do Éden com a Joalheira", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Iniciar a quest Banquete Real", url: "https://browiki.org/wiki/Banquete_Real" },
          { text: "Comprar Equipamentos de Honra", url: "https://browiki.org/wiki/Equipamentos_de_Honra" },
          { text: "Comprar Minimetralhadora [2]", url: "https://www.divine-pride.net/database/item/13197/minimetralhadora-2" }
        ],
        note: "A quest pode começar no nível 100, mas é recomendado iniciar após obter a habilidade Expurgar.",
        result: ["Grande aumento de dano graças à nova arma"]
      },
      {
        level: 115,
        title: "Nível 115 — Sustentação de SP",
        objective: "Melhorar recuperação de recursos.",
        actions: [
          { text: "Comprar Coturnos do Éden II", url: "https://www.divine-pride.net/database/item/22123/" }
        ],
        result: ["Recuperação de SP que permite usar habilidades continuamente"]
      },
      {
        level: 125,
        title: "Nível 125 — Equipamentos Ilustres",
        objective: "Avançar na progressão de equipamentos.",
        actions: [
          { text: "Completar a quest Terra Gloria", url: "https://browiki.org/wiki/Terra_Gloria" },
          { text: "Comprar Equipamentos Ilustres", url: "https://browiki.org/wiki/Equipamentos_de_Honra" }
        ],
        note: "Apesar da quest iniciar no nível 100, aguardar até 125 facilita o uso imediato dos equipamentos."
      },
      {
        level: 140,
        title: "Nível 140 — Nova Arma",
        objective: "Atualizar o armamento principal.",
        actions: [
          { text: "Comprar Metralhadora da Tempestade [1]", url: "https://www.divine-pride.net/database/item/13199/metralhadora-da-tempestade-1" }
        ],
        note: "A arma é vendida por NPCs de munição.",
        result: ["Novo pico de dano para o final do mid-game"]
      },
      {
        level: 145,
        title: "Nível 145 — Sustentação Avançada",
        objective: "Melhorar ainda mais a recuperação de SP.",
        actions: [
          { text: "Comprar Coturnos do Éden IV", url: "https://www.divine-pride.net/database/item/22125/" }
        ]
      },
      {
        level: 150,
        title: "Nível 150 — Equipamentos Grácil",
        objective: "Avançar para equipamentos mais fortes.",
        actions: [
          { text: "Completar a quest Ilusión", url: "https://browiki.org/wiki/Ilusión" },
          { text: "Comprar Equipamentos Grácil", url: "https://www.divine-pride.net/wiki/Equipamentos_de_Honra" }
        ]
      },
      {
        level: 160,
        title: "Nível 160 — Utilidade e Mobilidade",
        objective: "Desbloquear habilidades utilitárias através de acessórios.",
        actions: [
          { text: "Comprar Colar do Éden V (habilidade Teleporte)", url: "https://www.divine-pride.net/database/item/28471/" },
          { text: "Comprar Anel do Éden V (habilidade Curar)", url: "https://www.divine-pride.net/database/item/28472/" }
        ],
        result: ["Maior mobilidade", "Autossustentação durante o leveling"]
      }
    ]
  },
  en: {
    pageTitle: "Warmancer RO - Tutorial",
    heroHeading: "Warmancer RO",
    heroSubtext: "A practical guide to building your Warmancer in Ragnarok Online.",
    navSobre: "About",
    navTutorial: "Tutorial",
    navGaleria: "Gallery",
    navContato: "Contact",
    languageLabel: "Language",
    languagePt: "Português",
    languageEn: "English",
    languageEs: "Español",
    objectiveTitle: "Project goal",
    objectiveText: "This repository is a tutorial page for the Warmancer class/build in Ragnarok Online. Here you will find information about stats, gear, cards and combat tactics.",
    premisesTitle: "Premises",
    premisesText: "The page should focus on clear, responsive, and accessible content, with simple navigation and translation support for Portuguese, English, and Spanish.",
    conceptTitle: "Concept",
    conceptText: "This presents the Warmancer concept as a damage and survivability build, combining charts, explanations, and practical examples.",
    chartCardTitle: "Power curve by level",
    chartNote: "X axis: character level from 0 to 200 in intervals of 5. Y axis: power peaks at specific levels.",
    weaponChartTitle: "Weapon availability by level",
    weaponChartNote: "Each weapon is shown as a colored band for the corresponding level range.",
    weaponItemFaca: "Knife",
    weaponItemRifle: "Rifle",
    weaponItemPistola: "Pistol",
    weaponItemGatling: "Gatling",
    weaponItemEscopeta: "Shotgun",
    weaponItemGranada: "Grenade launcher",
    tutorialTitle: "Starter tutorial",
    armasTitle: "TODO",
    armasIntro: "This section will present weapon and skill details, with recommendations and analysis for Warmancer builds.",
    attrHeading: "1. Attribute distribution",
    attrText: "Start by prioritizing Strength and Vitality to maximize damage and survivability. Intelligence can help reduce SP consumption for some skills.",
    gearHeading: "2. Recommended gear",
    gearText: "Look for weapons with high attack and physical damage bonuses. Shields and armor with damage resistance are very important for solo and PvM content.",
    skillsHeading: "3. Skills",
    skillsText: "Focus on burst and damage reduction skills. Warmancer benefits from builds with crowd control and high area damage.",
    powerPeakTitle: "Power peak",
    powerPeakIntro: "Tap a point on the chart to jump directly to the corresponding level. Each block below can contain text, external links, images and notes.",
    galleryTitle: "Images and resources",
    galleryText: "Add images in <strong>/images</strong> and use them to illustrate gear, rotations or game screenshots.",
    galleryExampleStrong: "Example:",
    galleryExampleText1: "Put your images in",
    galleryExampleText2: "and update this HTML as needed.",
    nextStepsTitle: "Next steps",
    nextStepsText: "Start by adding your notes in the <code>README.md</code> file, your tutorials as new HTML pages, and images in <code>/images</code>.",
    copyTitle: "How to copy this page",
    copyIntro: "To create a similar site, use these compact steps:",
    copyStep1: "<strong>1.</strong> Create a GitHub repository and open it in VS Code with GitHub Copilot.",
    copyStep2: "<strong>2.</strong> Prompt: <code>Set up a GitHub Pages repository with HTML/CSS for a Ragnarok Online class tutorial.</code>",
    copyStep3: "<strong>3.</strong> Prompt: <code>Create site structure with index.html, assets/css/style.css and an images folder.</code>",
    copyStep4: "<strong>4.</strong> Prompt: <code>Add an SVG level vs power chart with clickable points that jump to sections.</code>",
    copyStep5: "<strong>5.</strong> Prompt: <code>Create stacked sections for each power peak with anchor titles, description text, images and links.</code>",
    footerText: "Warmancer RO • Tutorial page created for GitHub Pages.",
    levelCardHeading: "Level {level}",
    levelPeakLabel: "Power peak",
    levelDetailsText: "Details for level {level} in the Warmancer build.",
    levelPointTitle: "Level {level}",
    levelGuideObjectiveLabel: "Objective",
    levelGuideActionsLabel: "Actions",
    levelGuideNoteLabel: "Note",
    levelGuideResultLabel: "Result",
    levelGuideItems: [
      {
        level: 10,
        title: "Level 10 — Build Start",
        objective: "Unlock the main class and access early progression bonuses.",
        actions: [
          { text: "Complete the class change quest to Justiceiro", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros" },
          { text: "Complete the Justiceiro Training", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros#Treinamento" },
          { text: "Join the Balestra Esmeralda clan through the Royal Clans", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Full access to Justiceiro skills", "Passive clan bonuses to help early leveling"]
      },
      {
        level: 30,
        title: "Level 30 — Eden Gear I",
        objective: "Obtain the first leveling-focused gear set.",
        actions: [
          { text: "Complete the Eden Gear I quest in the Eden Group", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Complete missions in Payon Cave" },
          { text: "Obtain the corresponding Eden weapon", url: "https://www.divine-pride.net/database/item/13112/" }
        ],
        result: ["First consistent increase in damage and survivability"]
      },
      {
        level: 40,
        title: "Level 40 — Initial Enchantment",
        objective: "Improve the previously received gear.",
        actions: [
          { text: "Enchant Eden I Hat with Administrator Mihael", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        result: ["Small attribute boost that improves leveling efficiency"]
      },
      {
        level: 50,
        title: "Level 50 — Eden Gear II",
        objective: "Upgrade the main gear.",
        actions: [
          { text: "Complete the Eden Gear II quest" },
          { text: "Complete missions in Orc Dungeon" },
          { text: "Obtain the new Eden weapon", url: "https://www.divine-pride.net/database/item/13113/" }
        ],
        result: ["Significant attack increase"]
      },
      {
        level: 70,
        title: "Level 70 — Eden Gear III",
        objective: "Prepare the build for future class transitions.",
        actions: [
          { text: "Complete the Eden Gear III quest" },
          { text: "Complete missions in Glast Heim Abbey" },
          { text: "Obtain the new Eden weapon", url: "https://www.divine-pride.net/database/item/13114/" },
          { text: "Enchant the Eden weapon with BK Specialist", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        note: "The NPC Ur level 90 mission usually does not pay off for this build.",
        result: ["New damage peak for mid-leveling"]
      },
      {
        level: 100,
        title: "Level 100 — Insurgente Transition",
        objective: "Unlock the advanced class and start stronger gear progression.",
        actions: [
          { text: "Complete the class change quest to Insurgente", url: "https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes" },
          { text: "Farm Eden Coins in the Eden Group", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Obtain Starter Gear", url: "https://browiki.org/wiki/Equipamento_Inicial" },
          { text: "Join the Cajado Celeste clan", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Access to Insurgente skills", "New gear progression cycle"]
      },
      {
        level: 110,
        title: "Level 110 — Accessories and Royal Banquet",
        objective: "Obtain new accessories and unlock important content.",
        actions: [
          { text: "Buy Eden I Agile Ring or Eden I Agile Necklace", url: "https://www.divine-pride.net/database/item/28463/" },
          { text: "Buy Eden I Agile Ring or Eden I Agile Necklace", url: "https://www.divine-pride.net/database/item/28464/" },
          { text: "Enchant Eden Accessories with the Jeweler", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Start the Royal Banquet quest", url: "https://browiki.org/wiki/Banquete_Real" },
          { text: "Buy Honor Equipment", url: "https://browiki.org/wiki/Equipamentos_de_Honra" },
          { text: "Buy Minigun [2]", url: "https://www.divine-pride.net/database/item/13197/minimetralhadora-2" }
        ],
        note: "The quest can start at level 100, but it is recommended to begin after obtaining Expurgar.",
        result: ["Large damage increase thanks to the new weapon"]
      },
      {
        level: 115,
        title: "Level 115 — SP Sustain",
        objective: "Improve resource recovery.",
        actions: [
          { text: "Buy Eden II Boots", url: "https://www.divine-pride.net/database/item/22123/" }
        ],
        result: ["SP recovery that allows continuous skill use"]
      },
      {
        level: 125,
        title: "Level 125 — Illustrious Gear",
        objective: "Advance gear progression.",
        actions: [
          { text: "Complete the Terra Gloria quest", url: "https://browiki.org/wiki/Terra_Gloria" },
          { text: "Buy Illustrious Gear", url: "https://browiki.org/wiki/Equipamentos_de_Honra" }
        ],
        note: "Although the quest starts at level 100, waiting until 125 makes immediate gear use easier."
      },
      {
        level: 140,
        title: "Level 140 — New Weapon",
        objective: "Upgrade the main armament.",
        actions: [
          { text: "Buy Storm Gatling [1]", url: "https://www.divine-pride.net/database/item/13199/metralhadora-da-tempestade-1" }
        ],
        note: "The weapon is sold by ammunition NPCs.",
        result: ["New damage peak for late mid-game"]
      },
      {
        level: 145,
        title: "Level 145 — Advanced Sustain",
        objective: "Further improve SP recovery.",
        actions: [
          { text: "Buy Eden IV Boots", url: "https://www.divine-pride.net/database/item/22125/" }
        ]
      },
      {
        level: 150,
        title: "Level 150 — Graceful Gear",
        objective: "Advance to stronger gear.",
        actions: [
          { text: "Complete the Ilusión quest", url: "https://browiki.org/wiki/Ilusión" },
          { text: "Buy Graceful Gear", url: "https://browiki.org/wiki/Equipamentos_de_Honra" }
        ]
      },
      {
        level: 160,
        title: "Level 160 — Utility and Mobility",
        objective: "Unlock utility skills through accessories.",
        actions: [
          { text: "Buy Eden V Necklace (Teleport skill)", url: "https://www.divine-pride.net/database/item/28471/" },
          { text: "Buy Eden V Ring (Heal skill)", url: "https://www.divine-pride.net/database/item/28472/" }
        ],
        result: ["Higher mobility", "Self-sustain during leveling"]
      }
    ]
  },
  es: {
    pageTitle: "Warmancer RO - Tutorial",
    heroHeading: "Warmancer RO",
    heroSubtext: "Guía práctica para montar tu build de Warmancer en Ragnarok Online.",
    navSobre: "Sobre",
    navTutorial: "Tutorial",
    navGaleria: "Galería",
    navContato: "Contacto",
    languageLabel: "Idioma",
    languagePt: "Português",
    languageEn: "English",
    languageEs: "Español",
    objectiveTitle: "Objetivo del proyecto",
    objectiveText: "Este repositorio es una página tutorial para la clase/build Warmancer en Ragnarok Online. Aquí encontrarás información sobre atributos, equipo, cartas y tácticas de combate.",
    premisesTitle: "Premisas",
    premisesText: "La página debe centrarse en contenido claro, responsivo y accesible, con navegación simple y soporte de traducción para portugués, inglés y español.",
    conceptTitle: "Concepto",
    conceptText: "Aquí presentamos el concepto de Warmancer como un build de daño y supervivencia, combinando gráficos, explicaciones y ejemplos prácticos.",
    chartCardTitle: "Curva de poder por nivel",
    chartNote: "Eje X: nivel del personaje de 0 a 200 en intervalos de 5. Eje Y: picos de poder en niveles específicos.",
    weaponChartTitle: "Disponibilidad de armas por nivel",
    weaponChartNote: "Cada arma se muestra en una banda de color para el intervalo de nivel correspondiente.",
    weaponItemFaca: "Faca",
    weaponItemRifle: "Rifle",
    weaponItemPistola: "Pistola",
    weaponItemGatling: "Gatling",
    weaponItemEscopeta: "Escopeta",
    weaponItemGranada: "Lanza Granada",
    tutorialTitle: "Tutorial inicial",
    armasTitle: "TODO",
    armasIntro: "En esta sección se presentarán detalles sobre armas y habilidades, con recomendaciones y análisis para builds Warmancer.",
    attrHeading: "1. Distribución de atributos",
    attrText: "Comienza priorizando Fuerza y Vitalidad para maximizar daño y supervivencia. Inteligencia puede ayudar a reducir el consumo de SP en algunas habilidades.",
    gearHeading: "2. Equipo recomendado",
    gearText: "Busca armas con alto ataque y bonificaciones de daño físico. Escudos y armaduras con resistencia al daño son muy importantes para contenido en solitario y PvM.",
    skillsHeading: "3. Habilidades",
    skillsText: "Enfócate en habilidades de burst y reducción de daño. Warmancer se beneficia de builds con control de multitudes y alto daño en área.",
    powerPeakTitle: "Pico de poder",
    powerPeakIntro: "Toca un punto en el gráfico para saltar directamente al nivel correspondiente. Cada bloque abajo puede contener texto, enlaces externos, imágenes y notas.",
    galleryTitle: "Imágenes y recursos",
    galleryText: "Agrega imágenes en <strong>/images</strong> y úsalas para ilustrar equipo, rotaciones o capturas de pantalla del juego.",
    galleryExampleStrong: "Ejemplo:",
    galleryExampleText1: "Coloca tus imágenes en",
    galleryExampleText2: "y actualiza este HTML según sea necesario.",
    nextStepsTitle: "Próximos pasos",
    nextStepsText: "Comienza agregando tus notas en el archivo <code>README.md</code>, tus tutoriales como nuevas páginas HTML y las imágenes en <code>/images</code>.",
    copyTitle: "Cómo copiar esta página",
    copyIntro: "Para crear un sitio similar, usa estos pasos compactos:",
    copyStep1: "<strong>1.</strong> Crea un repositorio en GitHub y ábrelo en VS Code con GitHub Copilot.",
    copyStep2: "<strong>2.</strong> Prompt: <code>Configura un repositorio GitHub Pages con HTML/CSS para un tutorial de clase en Ragnarok Online.</code>",
    copyStep3: "<strong>3.</strong> Prompt: <code>Crea la estructura del sitio con index.html, assets/css/style.css y la carpeta images.</code>",
    copyStep4: "<strong>4.</strong> Prompt: <code>Agrega un gráfico SVG nivel vs poder con puntos clicables que naveguen a secciones.</code>",
    copyStep5: "<strong>5.</strong> Prompt: <code>Crea secciones apiladas para cada pico de poder con títulos ancla, texto descriptivo, imágenes y enlaces.</code>",
    footerText: "Warmancer RO • Página de tutorial creada para GitHub Pages.",
    levelCardHeading: "Nivel {level}",
    levelPeakLabel: "Pico de poder",
    levelDetailsText: "Detalles del nivel {level} para la build Warmancer.",
    levelPointTitle: "Nivel {level}",
    levelGuideObjectiveLabel: "Objetivo",
    levelGuideActionsLabel: "Acciones",
    levelGuideNoteLabel: "Nota",
    levelGuideResultLabel: "Resultado",
    levelGuideItems: [
      {
        level: 10,
        title: "Nivel 10 — Inicio de la Build",
        objective: "Desbloquear la clase principal y acceder a bonos iniciales de progresión.",
        actions: [
          { text: "Completar la quest de cambio de clase a Justiceiro", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros" },
          { text: "Realizar el Entrenamiento de Justiceiro", url: "https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros#Treinamento" },
          { text: "Entrar en el clan Balestra Esmeralda a través de los Clãs Reais", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Acceso completo a las habilidades de Justiceiro", "Bonos pasivos del clan para ayudar en el leveling inicial"]
      },
      {
        level: 30,
        title: "Nivel 30 — Equipo Éden I",
        objective: "Obtener el primer conjunto de equipo enfocado en leveling.",
        actions: [
          { text: "Completar la quest de Equipamentos do Éden I en el Grupo Éden", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Realizar las misiones en Payon Cave" },
          { text: "Obtener el arma del Éden correspondiente", url: "https://www.divine-pride.net/database/item/13112/" }
        ],
        result: ["Primer aumento consistente de daño y supervivencia"]
      },
      {
        level: 40,
        title: "Nivel 40 — Encantamiento Inicial",
        objective: "Mejorar el equipo recibido anteriormente.",
        actions: [
          { text: "Encantar el Sombrero del Éden I con el Administrador Mihael", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        result: ["Pequeño aumento de atributos que mejora la eficiencia en el leveling"]
      },
      {
        level: 50,
        title: "Nivel 50 — Equipo Éden II",
        objective: "Actualizar el equipo principal.",
        actions: [
          { text: "Completar la quest de Equipamentos do Éden II" },
          { text: "Realizar las misiones en Orc Dungeon" },
          { text: "Obtener la nueva arma del Éden", url: "https://www.divine-pride.net/database/item/13113/" }
        ],
        result: ["Aumento significativo de ataque"]
      },
      {
        level: 70,
        title: "Nivel 70 — Equipo Éden III",
        objective: "Preparar la build para la transición de clases futuras.",
        actions: [
          { text: "Completar la quest de Equipamentos do Éden III" },
          { text: "Realizar las misiones en Abadia de Glast Heim" },
          { text: "Obtener la nueva arma del Éden", url: "https://www.divine-pride.net/database/item/13114/" },
          { text: "Encantar el Arma del Éden con el Especialista BK", url: "https://browiki.org/wiki/Equipamentos_do_Éden" }
        ],
        note: "La misión de nivel 90 del NPC Ur generalmente no compensa el esfuerzo para esta build.",
        result: ["Nuevo pico de daño para leveling intermedio"]
      },
      {
        level: 100,
        title: "Nivel 100 — Transición a Insurgente",
        objective: "Desbloquear la clase avanzada e iniciar progresión de equipo más fuerte.",
        actions: [
          { text: "Completar la quest de cambio de clase a Insurgente", url: "https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes" },
          { text: "Farmear Monedas del Éden en el Grupo Éden", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Obtener Equipamiento Inicial", url: "https://browiki.org/wiki/Equipamento_Inicial" },
          { text: "Entrar en el clan Cajado Celeste", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Acceso a las habilidades de Insurgente", "Nuevo ciclo de progresión de equipo"]
      },
      {
        level: 110,
        title: "Nivel 110 — Accesorios y Banquete Real",
        objective: "Obtener nuevos accesorios y desbloquear contenido importante.",
        actions: [
          { text: "Comprar Anillo Ágil del Éden I o Collar Ágil del Éden I", url: "https://www.divine-pride.net/database/item/28463/" },
          { text: "Comprar Anillo Ágil del Éden I o Collar Ágil del Éden I", url: "https://www.divine-pride.net/database/item/28464/" },
          { text: "Encantar los Accesorios del Éden con la Joyera", url: "https://browiki.org/wiki/Equipamentos_do_Éden" },
          { text: "Iniciar la quest Banquete Real", url: "https://browiki.org/wiki/Banquete_Real" },
          { text: "Comprar Equipamentos de Honra", url: "https://browiki.org/wiki/Equipamentos_de_Honra" },
          { text: "Comprar Minimetralhadora [2]", url: "https://www.divine-pride.net/database/item/13197/minimetralhadora-2" }
        ],
        note: "La quest puede comenzar en nivel 100, pero se recomienda iniciar después de obtener la habilidad Expurgar.",
        result: ["Gran aumento de daño gracias a la nueva arma"]
      },
      {
        level: 115,
        title: "Nivel 115 — Sustentación de SP",
        objective: "Mejorar la recuperación de recursos.",
        actions: [
          { text: "Comprar Coturnos del Éden II", url: "https://www.divine-pride.net/database/item/22123/" }
        ],
        result: ["Recuperación de SP que permite usar habilidades continuamente"]
      },
      {
        level: 125,
        title: "Nivel 125 — Equipamientos Ilustres",
        objective: "Avanzar en la progresión de equipo.",
        actions: [
          { text: "Completar la quest Terra Gloria", url: "https://browiki.org/wiki/Terra_Gloria" },
          { text: "Comprar Equipamientos Ilustres", url: "https://browiki.org/wiki/Equipamentos_de_Honra" }
        ],
        note: "Aunque la quest comienza en nivel 100, esperar hasta 125 facilita el uso inmediato del equipo."
      },
      {
        level: 140,
        title: "Nivel 140 — Nueva Arma",
        objective: "Actualizar el armamento principal.",
        actions: [
          { text: "Comprar Metralhadora da Tempestade [1]", url: "https://www.divine-pride.net/database/item/13199/metralhadora-da-tempestade-1" }
        ],
        note: "El arma se vende por NPCs de munición.",
        result: ["Nuevo pico de daño para el final del mid-game"]
      },
      {
        level: 145,
        title: "Nivel 145 — Sustentación Avanzada",
        objective: "Mejorar aún más la recuperación de SP.",
        actions: [
          { text: "Comprar Coturnos del Éden IV", url: "https://www.divine-pride.net/database/item/22125/" }
        ]
      },
      {
        level: 150,
        title: "Nivel 150 — Equipamientos Grácil",
        objective: "Avanzar a equipos más fuertes.",
        actions: [
          { text: "Completar la quest Ilusión", url: "https://browiki.org/wiki/Ilusión" },
          { text: "Comprar Equipamientos Grácil", url: "https://www.divine-pride.net/database/item/Equipamentos_de_Honra" }
        ]
      },
      {
        level: 160,
        title: "Nivel 160 — Utilidad y Movilidad",
        objective: "Desbloquear habilidades utilitarias a través de accesorios.",
        actions: [
          { text: "Comprar Collar del Éden V (habilidad Teletransporte)", url: "https://www.divine-pride.net/database/item/28471/" },
          { text: "Comprar Anillo del Éden V (habilidad Curar)", url: "https://www.divine-pride.net/database/item/28472/" }
        ],
        result: ["Mayor movilidad", "Autosustento durante el leveling"]
      }
    ]
  }
};

const normalizeLanguage = code => {
  const value = String(code || "").toLowerCase();
  if (value.startsWith("es")) return "es";
  if (value.startsWith("en")) return "en";
  return "pt-BR";
};

const getPreferredLanguage = () => {
  const stored = localStorage.getItem("siteLanguage");
  if (stored && translations[stored]) return stored;
  return normalizeLanguage(navigator.language || navigator.userLanguage || "pt-BR");
};

const t = (lang, key) => {
  const value = translations[lang] && translations[lang][key];
  return value != null ? value : translations["pt-BR"][key] || "";
};

const translatePage = lang => {
  document.documentElement.lang = lang;
  document.title = t(lang, "pageTitle");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = t(lang, key);
    if (value !== "") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    const value = t(lang, key);
    if (value !== "") el.innerHTML = value;
  });

  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;
};
