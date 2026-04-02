const translations = {
  "pt-BR": {
    pageTitle: "Warmancer RO - Tutorial",
    heroHeading: "Warmancer RO",
    heroSubtext: "Guia prático para montar sua build de Warmancer em Ragnarok Online.",
    navSobre: "Sobre",
    navTutorial: "Tutorial",
    navPico1: "Pico de Poder 1",
    navPico2: "Pico de Poder 2",
    navEstrategia: "Estratégia",
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
    chartNote: "Eixo X: Nível do personagem",
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
    estrategiaTitle: "Estratégia",
    estrategiaIntro: "Nesta sessão serão apresentados detalhes sobre armas e habilidades, com recomendações e análises para builds Warmancer.",
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
        title: "Nível 10 — Justiceiro",
        objective: "Desbloquear a classe principal e acessar bônus iniciais de progressão.",
        actions: [
          { html: "Completar a quest de mudança de classe para <a href=\"https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros\" target=\"_blank\" rel=\"noreferrer noopener\">Justiceiro</a>" },
          { html: "Entrar no clã Balestra Esmeralda através dos <a href=\"https://browiki.org/wiki/Clãs_Reais\" target=\"_blank\" rel=\"noreferrer noopener\">Clãs Reais</a>" }
        ],
        result: ["Acesso completo às habilidades de Justiceiro", "Bônus passivos do clã para auxiliar no leveling inicial"]
      },
      {
        level: 30,
        title: "Nível 30 — Equipamento Éden I",
        objective: "Obter o primeiro conjunto de equipamentos focado em leveling.",
        actions: [
          { html: "Completar a quest de <a href=\"https://browiki.org/wiki/Equipamentos_do_Éden\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos do Éden I</a> no Grupo Éden<br><small class=\"action-subnote\">Nota: Realizar as missões em Payon Cave</small>" },
          { html: "Você deve receber o <a href=\"https://www.divine-pride.net/database/item/13112/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver do Éden I</a>" }
        ],
        result: ["Primeiro aumento consistente de dano e sobrevivência"]
      },
      {
        level: 40,
        title: "Nível 40 — Encantamento Inicial",
        objective: "Melhorar o equipamento recebido anteriormente.",
        actions: [
          { html: "Encantar o Chapéu do Éden I com o Administrador Mihael" }
        ],
        result: ["Pequeno aumento de atributos que melhora eficiência no leveling"]
      },
      {
        level: 50,
        title: "Nível 50 — Equipamento Éden II",
        objective: "Atualizar o equipamento principal.",
        actions: [
          { html: "Completar a quest de Equipamentos do Éden II<br><small class=\"action-subnote\">Nota: Realizar as missões em Orc Dungeon</small>" },
          { html: "Você deve receber o <a href=\"https://www.divine-pride.net/database/item/13113/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver do Éden II</a>" }
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
          { html: "Você deve receber o <a href=\"https://www.divine-pride.net/database/item/13114/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver do Éden III</a>" },
          { html: "Encantar a Arma do Éden com o Especialista BK" }
        ],
        note: "A missão de nível 90 do NPC Ur geralmente não compensa o esforço para esta build.",
        result: ["Novo pico de dano para leveling intermediário"]
      },
      {
        level: 100,
        title: "Nível 100 — Insurgente",
        objective: "Desbloquear a classe avançada e iniciar progressão de equipamentos mais fortes.",
        actions: [
          { html: "Completar a quest de mudança de classe para <a href=\"https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes\" target=\"_blank\" rel=\"noreferrer noopener\">Insurgente</a>" },
          { html: "Farmar Moedas do Éden no Grupo Éden" },
          { html: "Obter <a href=\"https://browiki.org/wiki/Equipamento_Inicial\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos Iniciais</a>" },
          { html: "Entrar no clã Cajado Celeste através dos <a href=\"https://browiki.org/wiki/Cl%C3%A3s_Reais\" target=\"_blank\" rel=\"noreferrer noopener\">Clãs Reais</a>" }
        ],
        result: ["Acesso às habilidades de Insurgente", "Novo ciclo de progressão de equipamentos"]
      },
      {
        level: 110,
        title: "Nível 110 — Acessórios e Banquete Real",
        objective: "Obter novos acessórios e desbloquear conteúdo importante.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28463/\" target=\"_blank\" rel=\"noreferrer noopener\">Anel Ágil do Éden I</a> ou <a href=\"https://www.divine-pride.net/database/item/28464/\" target=\"_blank\" rel=\"noreferrer noopener\">Colar Ágil do Éden I</a>" },
          { html: "Encantar os Acessórios do Éden com a Joalheira" },
          { html: "Quest: <a href=\"https://browiki.org/wiki/Banquete_Real\" target=\"_blank\" rel=\"noreferrer noopener\">Banquete Real</a>" },
          { html: "Comprar: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos de Honra</a>" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/13197/minimetralhadora-2\" target=\"_blank\" rel=\"noreferrer noopener\">Minimetralhadora [2]</a> (No NPC que vende munição)" }
        ],
        note: "A quest pode começar no nível 100, mas é recomendado iniciar após obter a habilidade Expurgar.",
        result: ["Grande aumento de dano graças à nova arma"]
      },
      {
        level: 115,
        title: "Nível 115 — Sustentação de SP",
        objective: "Melhorar recuperação de recursos.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/22123/\" target=\"_blank\" rel=\"noreferrer noopener\">Coturnos do Éden II</a>" }
        ],
        result: ["Recuperação de SP que permite usar habilidades continuamente"]
      },
      {
        level: 125,
        title: "Nível 125 — Equipamentos Ilustres",
        objective: "Avançar na progressão de equipamentos.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Terra_Gloria\" target=\"_blank\" rel=\"noreferrer noopener\">Terra Gloria</a>" },
          { html: "Comprar: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos Ilustres</a>" }
        ],
        note: "Apesar da quest iniciar no nível 100, aguardar até 125 facilita o uso imediato dos equipamentos."
      },
      {
        level: 140,
        title: "Nível 140 — Nova Arma",
        objective: "Atualizar o armamento principal.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/13198/metralhadora-da-tempestade\" target=\"_blank\" rel=\"noreferrer noopener\">Metralhadora da Tempestade</a> (No NPC que vende munição)" }
        ],
        result: ["Novo pico de dano para o final do mid-game"]
      },
      {
        level: 145,
        title: "Nível 145 — Sustentação Avançada",
        objective: "Melhorar ainda mais a recuperação de SP.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/22125/\" target=\"_blank\" rel=\"noreferrer noopener\">Coturnos do Éden IV</a>" }
        ]
      },
      {
        level: 150,
        title: "Nível 150 — Equipamentos Grácil",
        objective: "Avançar para equipamentos mais fortes.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Ilusión\" target=\"_blank\" rel=\"noreferrer noopener\">Ilusión</a>" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos Grácil</a>" }
        ]
      },
      {
        level: 160,
        title: "Nível 160 — Utilidade e Mobilidade",
        objective: "Desbloquear habilidades utilitárias através de acessórios.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28471/\" target=\"_blank\" rel=\"noreferrer noopener\">Colar Ágil do Éden V</a> (Habilidade: Teleporte)" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28472/\" target=\"_blank\" rel=\"noreferrer noopener\">Anel Ágil do Éden V</a> (Habilidade: Curar)" }
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
    navPico1: "Power Peak 1",
    navPico2: "Power Peak 2",
    navEstrategia: "Strategy",
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
    estrategiaTitle: "Strategy",
    estrategiaIntro: "This section will present weapon and skill details, with recommendations and analysis for Warmancer builds.",
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
          { text: "Join the Balestra Esmeralda clan through the Royal Clans", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Full access to Justiceiro skills", "Passive clan bonuses to help early leveling"]
      },
      {
        level: 30,
        title: "Level 30 — Eden Gear I",
        objective: "Obtain the first leveling-focused gear set.",
        actions: [
          { html: "Complete the <a href=\"https://browiki.org/wiki/Equipamentos_do_Éden\" target=\"_blank\" rel=\"noreferrer noopener\">Eden Gear I</a> quest in the Eden Group<br><small class=\"action-subnote\">Note: Complete missions in Payon Cave</small>" },
          { html: "You should receive the <a href=\"https://www.divine-pride.net/database/item/13112/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden Revolver I</a>" }
        ],
        result: ["First consistent increase in damage and survivability"]
      },
      {
        level: 40,
        title: "Level 40 — Initial Enchantment",
        objective: "Improve the previously received gear.",
        actions: [
          { html: "Enchant Eden I Hat with Administrator Mihael" }
        ],
        result: ["Small attribute boost that improves leveling efficiency"]
      },
      {
        level: 50,
        title: "Level 50 — Eden Gear II",
        objective: "Upgrade the main gear.",
        actions: [
          { html: "Complete the Eden Gear II quest<br><small class=\"action-subnote\">Note: Complete missions in Orc Dungeon</small>" },
          { html: "You should receive the <a href=\"https://www.divine-pride.net/database/item/13113/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden Revolver II</a>" }
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
          { html: "You should receive the <a href=\"https://www.divine-pride.net/database/item/13114/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden Revolver III</a>" },
          { html: "Enchant the Eden weapon with BK Specialist" }
        ],
        note: "The NPC Ur level 90 mission usually does not pay off for this build.",
        result: ["New damage peak for mid-leveling"]
      },
      {
        level: 100,
        title: "Level 100 — Insurgente",
        objective: "Unlock the advanced class and start stronger gear progression.",
        actions: [
          { html: "Complete the class change quest to <a href=\"https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes\" target=\"_blank\" rel=\"noreferrer noopener\">Insurgente</a>" },
          { html: "Farm Eden Coins in the Eden Group" },
          { html: "Obtain <a href=\"https://browiki.org/wiki/Equipamento_Inicial\" target=\"_blank\" rel=\"noreferrer noopener\">Starter Gear</a>" },
          { html: "Join the Cajado Celeste clan through the <a href=\"https://browiki.org/wiki/Cl%C3%A3s_Reais\" target=\"_blank\" rel=\"noreferrer noopener\">Royal Clans</a>" }
        ],
        result: ["Access to Insurgente skills", "New gear progression cycle"]
      },
      {
        level: 110,
        title: "Level 110 — Accessories and Royal Banquet",
        objective: "Obtain new accessories and unlock important content.",
        actions: [
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/28463/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden I Agile Ring</a> or <a href=\"https://www.divine-pride.net/database/item/28464/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden I Agile Necklace</a>" },
          { html: "Enchant Eden Accessories with the Jeweler" },
          { html: "Quest: <a href=\"https://browiki.org/wiki/Banquete_Real\" target=\"_blank\" rel=\"noreferrer noopener\">Royal Banquet</a>" },
          { html: "Buy: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Honor Equipment</a>" },
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/13197/minimetralhadora-2\" target=\"_blank\" rel=\"noreferrer noopener\">Minigun [2]</a> - from the ammunition vendor NPC." }
        ],
        note: "The quest can start at level 100, but it is recommended to begin after obtaining Expurgar.",
        result: ["Large damage increase thanks to the new weapon"]
      },
      {
        level: 115,
        title: "Level 115 — SP Sustain",
        objective: "Improve resource recovery.",
        actions: [
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/22123/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden II Boots</a>" }
        ],
        result: ["SP recovery that allows continuous skill use"]
      },
      {
        level: 125,
        title: "Level 125 — Illustrious Gear",
        objective: "Advance gear progression.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Terra_Gloria\" target=\"_blank\" rel=\"noreferrer noopener\">Terra Gloria</a>" },
          { html: "Buy: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Illustrious Gear</a>" }
        ],
        note: "Although the quest starts at level 100, waiting until 125 makes immediate gear use easier."
      },
      {
        level: 140,
        title: "Level 140 — New Weapon",
        objective: "Upgrade the main armament.",
        actions: [
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/13198/metralhadora-da-tempestade\" target=\"_blank\" rel=\"noreferrer noopener\">Tempest</a> - from the ammunition vendor NPC." }
        ],
        result: ["New damage peak for late mid-game"]
      },
      {
        level: 145,
        title: "Level 145 — Advanced Sustain",
        objective: "Further improve SP recovery.",
        actions: [
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/22125/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden IV Boots</a>" }
        ]
      },
      {
        level: 150,
        title: "Level 150 — Graceful Gear",
        objective: "Advance to stronger gear.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Ilusión\" target=\"_blank\" rel=\"noreferrer noopener\">Ilusión</a>" },
          { html: "Buy: <a href=\"https://www.divine-pride.net/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Graceful Gear</a>" }
        ]
      },
      {
        level: 160,
        title: "Level 160 — Utility and Mobility",
        objective: "Unlock utility skills through accessories.",
        actions: [
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/28471/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden V Agile Necklace</a> (Teleport skill)" },
          { html: "Buy: <a href=\"https://www.divine-pride.net/database/item/28472/\" target=\"_blank\" rel=\"noreferrer noopener\">Eden V Agile Ring</a> (Heal skill)" }
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
    navPico1: "Pico de Poder 1",
    navPico2: "Pico de Poder 2",
    navEstrategia: "Estrategia",
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
    estrategiaTitle: "Estrategia",
    estrategiaIntro: "En esta sección se presentarán detalles sobre armas y habilidades, con recomendaciones y análisis para builds Warmancer.",
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
          { text: "Entrar en el clan Balestra Esmeralda a través de los Clãs Reais", url: "https://browiki.org/wiki/Clãs_Reais" }
        ],
        result: ["Acceso completo a las habilidades de Justiceiro", "Bonos pasivos del clan para ayudar en el leveling inicial"]
      },
      {
        level: 30,
        title: "Nivel 30 — Equipo Éden I",
        objective: "Obtener el primer conjunto de equipo enfocado en leveling.",
        actions: [
          { html: "Completar la quest de <a href=\"https://browiki.org/wiki/Equipamentos_do_Éden\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos do Éden I</a> en el Grupo Éden<br><small class=\"action-subnote\">Nota: Realizar las misiones en Payon Cave</small>" },
          { html: "Debes recibir el <a href=\"https://www.divine-pride.net/database/item/13112/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver del Éden I</a>" }
        ],
        result: ["Primer aumento consistente de daño y supervivencia"]
      },
      {
        level: 40,
        title: "Nivel 40 — Encantamiento Inicial",
        objective: "Mejorar el equipo recibido anteriormente.",
        actions: [
          { html: "Encantar el Sombrero del Éden I con el Administrador Mihael" }
        ],
        result: ["Pequeño aumento de atributos que mejora la eficiencia en el leveling"]
      },
      {
        level: 50,
        title: "Nivel 50 — Equipo Éden II",
        objective: "Actualizar el equipo principal.",
        actions: [
          { html: "Completar la quest de Equipamentos do Éden II<br><small class=\"action-subnote\">Nota: Realizar las misiones en Orc Dungeon</small>" },
          { html: "Debes recibir el <a href=\"https://www.divine-pride.net/database/item/13113/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver del Éden II</a>" }
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
          { html: "Debes recibir el <a href=\"https://www.divine-pride.net/database/item/13114/\" target=\"_blank\" rel=\"noreferrer noopener\">Revólver del Éden III</a>" },
          { html: "Encantar el Arma del Éden con el Especialista BK" }
        ],
        note: "La misión de nivel 90 del NPC Ur generalmente no compensa el esfuerzo para esta build.",
        result: ["Nuevo pico de daño para leveling intermedio"]
      },
      {
        level: 100,
        title: "Nivel 100 — Insurgente",
        objective: "Desbloquear la clase avanzada e iniciar progresión de equipo más fuerte.",
        actions: [
          { html: "Completar la quest de cambio de clase a <a href=\"https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes\" target=\"_blank\" rel=\"noreferrer noopener\">Insurgente</a>" },
          { html: "Farmear Monedas del Éden en el Grupo Éden" },
          { html: "Obtener <a href=\"https://browiki.org/wiki/Equipamento_Inicial\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamiento Inicial</a>" },
          { html: "Entrar en el clan Cajado Celeste a través de los <a href=\"https://browiki.org/wiki/Cl%C3%A3s_Reais\" target=\"_blank\" rel=\"noreferrer noopener\">Clãs Reais</a>" }
        ],
        result: ["Acceso a las habilidades de Insurgente", "Nuevo ciclo de progresión de equipo"]
      },
      {
        level: 110,
        title: "Nivel 110 — Accesorios y Banquete Real",
        objective: "Obtener nuevos accesorios y desbloquear contenido importante.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28463/\" target=\"_blank\" rel=\"noreferrer noopener\">Anillo Ágil del Éden I</a> o <a href=\"https://www.divine-pride.net/database/item/28464/\" target=\"_blank\" rel=\"noreferrer noopener\">Collar Ágil del Éden I</a>" },
          { html: "Encantar los Accesorios del Éden con la Joyera" },
          { html: "Quest: <a href=\"https://browiki.org/wiki/Banquete_Real\" target=\"_blank\" rel=\"noreferrer noopener\">Banquete Real</a>" },
          { html: "Comprar: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamentos de Honra</a>" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/13197/minimetralhadora-2\" target=\"_blank\" rel=\"noreferrer noopener\">Minimetralhadora [2]</a> - en el NPC que vende munición." }
        ],
        note: "La quest puede comenzar en nivel 100, pero se recomienda iniciar después de obtener la habilidad Expurgar.",
        result: ["Gran aumento de daño gracias a la nueva arma"]
      },
      {
        level: 115,
        title: "Nivel 115 — Sustentación de SP",
        objective: "Mejorar la recuperación de recursos.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/22123/\" target=\"_blank\" rel=\"noreferrer noopener\">Coturnos del Éden II</a>" }
        ],
        result: ["Recuperación de SP que permite usar habilidades continuamente"]
      },
      {
        level: 125,
        title: "Nivel 125 — Equipamientos Ilustres",
        objective: "Avanzar en la progresión de equipo.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Terra_Gloria\" target=\"_blank\" rel=\"noreferrer noopener\">Terra Gloria</a>" },
          { html: "Comprar: <a href=\"https://browiki.org/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamientos Ilustres</a>" }
        ],
        note: "Aunque la quest comienza en nivel 100, esperar hasta 125 facilita el uso inmediato del equipo."
      },
      {
        level: 140,
        title: "Nivel 140 — Nueva Arma",
        objective: "Actualizar el armamento principal.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/13198/metralhadora-da-tempestade\" target=\"_blank\" rel=\"noreferrer noopener\">Metralhadora da Tempestade</a> - en el NPC que vende munición." }
        ],
        result: ["Nuevo pico de daño para el final del mid-game"]
      },
      {
        level: 145,
        title: "Nivel 145 — Sustentación Avanzada",
        objective: "Mejorar aún más la recuperación de SP.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/22125/\" target=\"_blank\" rel=\"noreferrer noopener\">Coturnos del Éden IV</a>" }
        ]
      },
      {
        level: 150,
        title: "Nivel 150 — Equipamientos Grácil",
        objective: "Avanzar a equipos más fuertes.",
        actions: [
          { html: "Quest: <a href=\"https://browiki.org/wiki/Ilusión\" target=\"_blank\" rel=\"noreferrer noopener\">Ilusión</a>" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/wiki/Equipamentos_de_Honra\" target=\"_blank\" rel=\"noreferrer noopener\">Equipamientos Grácil</a>" }
        ]
      },
      {
        level: 160,
        title: "Nivel 160 — Utilidad y Movilidad",
        objective: "Desbloquear habilidades utilitarias a través de accesorios.",
        actions: [
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28471/\" target=\"_blank\" rel=\"noreferrer noopener\">Collar Ágil del Éden V</a> (habilidad Teletransporte)" },
          { html: "Comprar: <a href=\"https://www.divine-pride.net/database/item/28472/\" target=\"_blank\" rel=\"noreferrer noopener\">Anillo Ágil del Éden V</a> (habilidad Curar)" }
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
