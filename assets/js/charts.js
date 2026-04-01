const powerDataPoints = [
  { level: 10, power: 100 },
  { level: 30, power: 110 },
  { level: 40, power: 113.3 },
  { level: 50, power: 124.63 },
  { level: 70, power: 137.09 },
  { level: 100, power: 164.51 },
  { level: 110, power: 238.44, highlight: true },
  { level: 115, power: 238.44 },
  { level: 125, power: 250.37, highlight: true },
  { level: 140, power: 270.37, highlight: true },
  { level: 145, power: 270.37 },
  { level: 150, power: 300.11, highlight: true },
  { level: 160, power: 320 }
];

const weaponDataItems = [
  { nameKey: 'weaponItemPistola', ranges: [{ from: 10, to: 110 }, { from: 150, to: 200 }], color: '#fb7185' },
  { nameKey: 'weaponItemGatling', ranges: [{ from: 110, to: 200 }], color: '#8b5cf6' },
  { nameKey: 'weaponItemRifle', ranges: [{ from: 10, to: 30 }, { from: 150, to: 200 }], color: '#38bdf8' },
  { nameKey: 'weaponItemEscopeta', ranges: [{ from: 150, to: 200 }], color: '#22c55e' },
  { nameKey: 'weaponItemGranada', ranges: [{ from: 150, to: 200 }], color: '#e879f9' }
];

const width = 760;
const height = 320;
const powerPadding = { top: 18, right: 18, bottom: 32, left: 34 };
const weaponPadding = { top: 18, right: 18, bottom: 32, left: 100 };
const xRange = [0, 200];
const yRange = [0, 320];

const createElement = (tag, attrs) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
};

const clearSvg = svg => {
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
};

const createPowerChartCard = (cardId, svgId, title, note, ariaLabel) => {
  const card = document.createElement('div');
  card.className = 'chart-card';
  card.id = cardId;
  card.innerHTML = `
    <h3>${title}</h3>
    <div class="chart-wrapper">
      <svg id="${svgId}" viewBox="0 0 760 320" aria-label="${ariaLabel}"></svg>
    </div>
    <p class="chart-note">${note}</p>
  `;
  return card;
};

const xScaleForRange = (value, xRange, padding) =>
  padding.left + ((value - xRange[0]) / (xRange[1] - xRange[0])) * (width - padding.left - padding.right);

const yScale = value =>
  height - powerPadding.bottom - ((value - yRange[0]) / (yRange[1] - yRange[0])) * (height - powerPadding.top - powerPadding.bottom);

const xScaleWeapon = value =>
  weaponPadding.left + ((value - xRange[0]) / (xRange[1] - xRange[0])) * (width - weaponPadding.left - weaponPadding.right);

const renderAxis = (svg, range, padding, step = 20) => {
  const axis = createElement('line', {
    x1: padding.left,
    y1: height - padding.bottom,
    x2: width - padding.right,
    y2: height - padding.bottom,
    stroke: '#64748b',
    'stroke-width': 1.5
  });
  svg.appendChild(axis);

  for (let i = range[0]; i <= range[1]; i += step) {
    const x = xScaleForRange(i, range, padding);
    const tick = createElement('line', {
      x1: x,
      y1: height - padding.bottom,
      x2: x,
      y2: height - padding.bottom + (i % step === 0 ? 10 : 6),
      stroke: '#475569',
      'stroke-width': 1
    });
    svg.appendChild(tick);

    const label = createElement('text', {
      x: x,
      y: height - padding.bottom + 24,
      fill: '#cbd5e1',
      'font-size': '12',
      'text-anchor': 'middle'
    });
    label.textContent = i;
    svg.appendChild(label);
  }
};

const renderPowerCurveSegment = (svgId, xRangeSegment) => {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  clearSvg(svg);

  renderAxis(svg, xRangeSegment, powerPadding);

  const filteredPoints = powerDataPoints.filter(
    point => point.level >= xRangeSegment[0] && point.level <= xRangeSegment[1]
  );

  if (filteredPoints.length === 0) return;

  const path = createElement('path', {
    d: filteredPoints
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${xScaleForRange(point.level, xRangeSegment, powerPadding)} ${yScale(point.power)}`)
      .join(' '),
    fill: 'none',
    stroke: '#fbbf24',
    'stroke-width': 3,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  });
  svg.appendChild(path);

  filteredPoints.forEach(point => {
    const x = xScaleForRange(point.level, xRangeSegment, powerPadding);
    const y = yScale(point.power);
    const isHighlight = !!point.highlight;

    if (isHighlight) {
      const highlightRing = createElement('circle', {
        cx: x,
        cy: y,
        r: 10,
        fill: 'none',
        stroke: '#fbbf24',
        'stroke-width': 2,
        'stroke-opacity': 0.45
      });
      svg.appendChild(highlightRing);
    }

    const circle = createElement('circle', {
      cx: x,
      cy: y,
      r: isHighlight ? 7 : 5,
      fill: isHighlight ? '#f87171' : '#fbbf24',
      stroke: isHighlight ? '#ffffff' : '#111827',
      'stroke-width': isHighlight ? 3 : 2,
      style: 'cursor: pointer;'
    });
    circle.setAttribute('data-level', point.level);

    const title = createElement('title', {});
    title.textContent = t(currentLang, 'levelPointTitle').replace('{level}', point.level);
    circle.appendChild(title);

    circle.addEventListener('click', () => {
      const target = document.getElementById(`level-${point.level}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    svg.appendChild(circle);
  });
};

const renderPowerCurveChart = () => {
  renderPowerCurveSegment('powerChartLow', [0, 100]);
  renderPowerCurveSegment('powerChartHigh', [100, 200]);
};

const renderWeaponAvailabilityChart = () => {
  const svg = document.getElementById('weaponChart');
  if (!svg) return;
  clearSvg(svg);

  const chartHeight = height - weaponPadding.top - weaponPadding.bottom;
  const rowHeight = chartHeight / weaponDataItems.length;
  const barHeight = Math.max(18, rowHeight * 0.5);

  const axis = createElement('line', {
    x1: weaponPadding.left,
    y1: height - weaponPadding.bottom,
    x2: width - weaponPadding.right,
    y2: height - weaponPadding.bottom,
    stroke: '#64748b',
    'stroke-width': 1.5
  });
  svg.appendChild(axis);

  for (let i = xRange[0]; i <= xRange[1]; i += 20) {
    const x = xScaleWeapon(i);
    const tick = createElement('line', {
      x1: x,
      y1: height - weaponPadding.bottom,
      x2: x,
      y2: height - weaponPadding.bottom + 10,
      stroke: '#475569',
      'stroke-width': 1
    });
    svg.appendChild(tick);

    const label = createElement('text', {
      x: x,
      y: height - weaponPadding.bottom + 24,
      fill: '#cbd5e1',
      'font-size': '12',
      'text-anchor': 'middle'
    });
    label.textContent = i;
    svg.appendChild(label);
  }

  const separatorY = weaponPadding.top + rowHeight * 2;
  const separator = createElement('line', {
    x1: weaponPadding.left,
    y1: separatorY,
    x2: width - weaponPadding.right,
    y2: separatorY,
    stroke: '#94a3b8',
    'stroke-width': 1,
    'stroke-dasharray': '6 4'
  });
  svg.appendChild(separator);

  weaponDataItems.forEach((item, index) => {
    const centerY = weaponPadding.top + rowHeight * index + rowHeight / 2;
    const label = createElement('text', {
      x: weaponPadding.left - 12,
      y: centerY + 4,
      fill: '#e2e8f0',
      'font-size': '12',
      'text-anchor': 'end'
    });
    label.textContent = t(currentLang, item.nameKey);
    svg.appendChild(label);

    item.ranges.forEach(range => {
      const x1 = xScaleWeapon(range.from);
      const x2 = xScaleWeapon(range.to);
      const rect = createElement('rect', {
        x: x1,
        y: centerY - barHeight / 2,
        width: Math.max(2, x2 - x1),
        height: barHeight,
        fill: item.color,
        rx: 4,
        ry: 4,
        opacity: 0.9
      });
      const title = createElement('title', {});
      title.textContent = `${t(currentLang, item.nameKey)}: ${range.from} - ${range.to}`;
      rect.appendChild(title);
      svg.appendChild(rect);
    });
  });
};

const levelGuideItems = [
  {
    level: 10,
    title: 'Nível 10 — Justiceiro (Modo: Run-\'n\'-gun)',
    objective: 'Desbloquear a classe principal e acessar bônus iniciais de progressão.',
    actions: [
      { text: 'Completar a quest de mudança de classe para Justiceiro', url: 'https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros' },
      { text: 'Realizar o Treinamento de Justiceiro', url: 'https://browiki.org/wiki/Mudança_de_Classe:_Justiceiros#Treinamento' },
      { text: 'Entrar no clã Balestra Esmeralda através dos Clãs Reais', url: 'https://browiki.org/wiki/Clãs_Reais' }
    ],
    result: ['Acesso completo às habilidades de Justiceiro', 'Bônus passivos do clã para auxiliar no leveling inicial']
  },
  {
    level: 30,
    title: 'Nível 30 — Equipamento Éden I',
    objective: 'Obter o primeiro conjunto de equipamentos focado em leveling.',
    actions: [
      { text: 'Completar a quest de Equipamentos do Éden I no Grupo Éden', url: 'https://browiki.org/wiki/Equipamentos_do_Éden' },
      { text: 'Realizar as missões em Payon Cave' },
      { text: 'Obter a arma do Éden correspondente', url: 'https://www.divine-pride.net/database/item/13112/' }
    ],
    result: ['Primeiro aumento consistente de dano e sobrevivência']
  },
  {
    level: 40,
    title: 'Nível 40 — Encantamento Inicial',
    objective: 'Melhorar o equipamento recebido anteriormente.',
    actions: [
      { text: 'Encantar o Chapéu do Éden I com o Administrador Mihael', url: 'https://browiki.org/wiki/Equipamentos_do_Éden' }
    ],
    result: ['Pequeno aumento de atributos que melhora eficiência no leveling']
  },
  {
    level: 50,
    title: 'Nível 50 — Equipamento Éden II',
    objective: 'Atualizar o equipamento principal.',
    actions: [
      { text: 'Completar a quest de Equipamentos do Éden II' },
      { text: 'Realizar as missões em Orc Dungeon' },
      { text: 'Obter a nova arma do Éden', url: 'https://www.divine-pride.net/database/item/13113/' }
    ],
    result: ['Aumento significativo de ataque']
  },
  {
    level: 70,
    title: 'Nível 70 — Equipamento Éden III',
    objective: 'Preparar a build para a transição de classes futuras.',
    actions: [
      { text: 'Completar a quest de Equipamentos do Éden III' },
      { text: 'Realizar as missões em Abadia de Glast Heim' },
      { text: 'Obter a nova arma do Éden', url: 'https://browiki.org/wiki/Equipamentos_do_Éden#Equipamentos_do_Éden_III' },
      { text: 'Encantar a Arma do Éden com o Especialista BK', url: 'https://browiki.org/wiki/Equipamentos_do_Éden' }
    ],
    note: 'A missão de nível 90 do NPC Ur geralmente não compensa o esforço para esta build.',
    result: ['Novo pico de dano para leveling intermediário']
  },
  {
    level: 100,
    title: 'Nível 100 — Insurgente (Modo: Blitzkrieg)',
    objective: 'Desbloquear a classe avançada e iniciar progressão de equipamentos mais fortes.',
    actions: [
      { text: 'Completar a quest de mudança de classe para Insurgente', url: 'https://browiki.org/wiki/Mudança_de_Classe:_Insurgentes' },
      { text: 'Farmar Moedas do Éden no Grupo Éden', url: 'https://browiki.org/wiki/Equipamentos_do_Éden' },
      { text: 'Obter Equipamentos Iniciais', url: 'https://browiki.org/wiki/Equipamento_Inicial' },
      { text: 'Entrar no clã Cajado Celeste', url: 'https://browiki.org/wiki/Clãs_Reais' }
    ],
    result: ['Acesso às habilidades de Insurgente', 'Novo ciclo de progressão de equipamentos']
  },
  {
    level: 110,
    title: 'Nível 110 — Acessórios e Banquete Real',
    objective: 'Obter novos acessórios e desbloquear conteúdo importante.',
    actions: [
      { text: 'Comprar Anel Ágil do Éden I ou Colar Ágil do Éden I', url: 'https://www.divine-pride.net/database/item/28463/' },
      { text: 'Comprar Anel Ágil do Éden I ou Colar Ágil do Éden I', url: 'https://www.divine-pride.net/database/item/28464/' },
      { text: 'Encantar os Acessórios do Éden com a Joalheira', url: 'https://browiki.org/wiki/Equipamentos_do_Éden' },
      { text: 'Iniciar a quest Banquete Real', url: 'https://browiki.org/wiki/Banquete_Real' },
      { text: 'Comprar Equipamentos de Honra', url: 'https://browiki.org/wiki/Equipamentos_de_Honra' },
      { text: 'Comprar Minimetralhadora [2]', url: 'https://www.divine-pride.net/database/item/13197/minimetralhadora-2' }
    ],
    note: 'A quest pode começar no nível 100, mas é recomendado iniciar após obter a habilidade Expurgar.',
    result: ['Grande aumento de dano graças à nova arma']
  },
  {
    level: 115,
    title: 'Nível 115 — Sustentação de SP',
    objective: 'Melhorar recuperação de recursos.',
    actions: [
      { text: 'Comprar Coturnos do Éden II', url: 'https://www.divine-pride.net/database/item/22123/' }
    ],
    result: ['Recuperação de SP que permite usar habilidades continuamente']
  },
  {
    level: 125,
    title: 'Nível 125 — Equipamentos Ilustres',
    objective: 'Avançar na progressão de equipamentos.',
    actions: [
      { text: 'Completar a quest Terra Gloria', url: 'https://browiki.org/wiki/Terra_Gloria' },
      { text: 'Comprar Equipamentos Ilustres', url: 'https://browiki.org/wiki/Equipamentos_de_Honra' }
    ],
    note: 'Apesar da quest iniciar no nível 100, aguardar até 125 facilita o uso imediato dos equipamentos.'
  },
  {
    level: 140,
    title: 'Nível 140 — Nova Arma',
    objective: 'Atualizar o armamento principal.',
    actions: [
      { text: 'Comprar Metralhadora da Tempestade [1]', url: 'https://www.divine-pride.net/database/item/13199/metralhadora-da-tempestade-1' }
    ],
    note: 'A arma é vendida por NPCs de munição.',
    result: ['Novo pico de dano para o final do mid-game']
  },
  {
    level: 145,
    title: 'Nível 145 — Sustentação Avançada',
    objective: 'Melhorar ainda mais a recuperação de SP.',
    actions: [
      { text: 'Comprar Coturnos do Éden IV', url: 'https://www.divine-pride.net/database/item/22125/' }
    ]
  },
  {
    level: 150,
    title: 'Nível 150 — Equipamentos Grácil',
    objective: 'Avançar para equipamentos mais fortes.',
    actions: [
      { text: 'Completar a quest Ilusión', url: 'https://browiki.org/wiki/Ilusión' },
      { text: 'Comprar Equipamentos Grácil', url: 'https://browiki.org/wiki/Equipamentos_de_Honra' }
    ]
  },
  {
    level: 160,
    title: 'Nível 160 — Utilidade e Mobilidade',
    objective: 'Desbloquear habilidades utilitárias através de acessórios.',
    actions: [
      { text: 'Comprar Colar do Éden V (habilidade Teleporte)', url: 'https://www.divine-pride.net/database/item/28471/' },
      { text: 'Comprar Anel do Éden V (habilidade Curar)', url: 'https://www.divine-pride.net/database/item/28472/' }
    ],
    result: ['Maior mobilidade', 'Autossustentação durante o leveling']
  }
];

const renderLevelDetails = lang => {
  const detailsContainer = document.getElementById('levelDetailsContainer');
  if (!detailsContainer) return;

  const guideItems = translations[lang]?.levelGuideItems || levelGuideItems;
  const objectiveLabel = t(lang, 'levelGuideObjectiveLabel');
  const actionsLabel = t(lang, 'levelGuideActionsLabel');
  const noteLabel = t(lang, 'levelGuideNoteLabel');
  const resultLabel = t(lang, 'levelGuideResultLabel');

  detailsContainer.innerHTML = '';
  guideItems.forEach(item => {
    if (item.level === 10) {
      detailsContainer.appendChild(
        createPowerChartCard(
          'powerChartCard0to100',
          'powerChartLow',
          'Curva de poder por nível de 0 a 100',
          'Eixo X: nível 0 a 100',
          'Gráfico de poder por nível de 0 a 100'
        )
      );
    }

    if (item.level === 100) {
      detailsContainer.appendChild(
        createPowerChartCard(
          'powerChartCard100to200',
          'powerChartHigh',
          'Curva de poder por nível de 100 a 200',
          'Eixo X: nível 100 a 200',
          'Gráfico de poder por nível de 100 a 200'
        )
      );
    }

    const card = document.createElement('section');
    card.className = 'level-card';
    card.id = `level-${item.level}`;
    card.innerHTML = `
      <h3><a href="#level-${item.level}">${item.title}</a></h3>
      <p><strong>${objectiveLabel}:</strong></p>
      <ul class="level-bullets"><li>${item.objective}</li></ul>
      <p><strong>${actionsLabel}:</strong></p>
      <ul class="level-bullets">
        ${item.actions
          .map(action =>
            action.url
              ? `<li>${action.text}<br><a href="${action.url}" target="_blank" rel="noreferrer noopener">${action.url}</a></li>`
              : `<li>${action.text}</li>`
          )
          .join('')}
      </ul>
      ${item.note ? `<p><strong>${noteLabel}:</strong></p><ul class="level-bullets"><li>${item.note}</li></ul>` : ''}
      ${item.result ? `<p><strong>${resultLabel}:</strong></p><ul class="level-bullets">${item.result.map(result => `<li>${result}</li>`).join('')}</ul>` : ''}
    `;
    detailsContainer.appendChild(card);
  });
};

const updateChartTitles = lang => {
  document.querySelectorAll('#powerChartLow circle[data-level], #powerChartHigh circle[data-level]').forEach(circle => {
    const titleEl = circle.querySelector('title');
    if (!titleEl) return;
    const level = circle.getAttribute('data-level');
    titleEl.textContent = t(lang, 'levelPointTitle').replace('{level}', level);
  });
};

let currentLang = getPreferredLanguage();

renderLevelDetails(currentLang);
renderPowerCurveChart();
renderWeaponAvailabilityChart();
translatePage(currentLang);
updateChartTitles(currentLang);

const setActiveLanguageButton = lang => {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
};

const languageButtons = document.querySelectorAll('.lang-btn');
if (languageButtons.length) {
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.lang;
      if (translations[value]) {
        currentLang = value;
        localStorage.setItem('siteLanguage', value);
        translatePage(value);
        renderLevelDetails(value);
        renderPowerCurveChart();
        renderWeaponAvailabilityChart();
        updateChartTitles(value);
        setActiveLanguageButton(value);
      }
    });
  });
}

setActiveLanguageButton(currentLang);
