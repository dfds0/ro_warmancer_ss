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
  { name: 'Pistola', ranges: [{ from: 10, to: 110 }], color: '#fb7185' },
  { name: 'Metralhadora', ranges: [{ from: 110, to: 200 }], color: '#8b5cf6' },
  { name: 'Rifle', ranges: [{ from: 150, to: 200 }], color: '#38bdf8' },
  { name: 'Escopeta', ranges: [{ from: 130, to: 200 }], color: '#22c55e' },
  { name: 'L. Granada', ranges: [{ from: 150, to: 200 }], color: '#e879f9' }
];

const TEXT = {
  levelPointTitle: 'Nível {level}',
  objectiveLabel: 'Objetivo',
  actionsLabel: 'Ações',
  noteLabel: 'Nota',
  resultLabel: 'Resultado'
};

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

const xScaleForRange = (value, range, padding) =>
  padding.left + ((value - range[0]) / (range[1] - range[0])) * (width - padding.left - padding.right);

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

const renderPowerCurveSegment = (svgId, range) => {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  clearSvg(svg);

  renderAxis(svg, range, powerPadding);

  const filteredPoints = powerDataPoints.filter(point => point.level >= range[0] && point.level <= range[1]);
  if (filteredPoints.length === 0) return;

  const path = createElement('path', {
    d: filteredPoints
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${xScaleForRange(point.level, range, powerPadding)} ${yScale(point.power)}`)
      .join(' '),
    fill: 'none',
    stroke: '#fbbf24',
    'stroke-width': 3,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  });
  svg.appendChild(path);

  filteredPoints.forEach(point => {
    const x = xScaleForRange(point.level, range, powerPadding);
    const y = yScale(point.power);
    const hasHighlight = !!point.highlight;
    const isHighlight = hasHighlight && svgId !== 'powerChartHigh';

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
    title.textContent = TEXT.levelPointTitle.replace('{level}', point.level);
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
    label.textContent = item.name;
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
      title.textContent = `${item.name}: ${range.from} - ${range.to}`;
      rect.appendChild(title);
      svg.appendChild(rect);
    });
  });
};

const levelGuideItems = [
  {
    level: 10,
    title: 'Nível 10 — Justiceiro',
    objective: 'Desbloquear a classe principal e acessar bônus iniciais de progressão.',
    actions: [
      { html: 'Completar a quest de mudança de classe para <a href="https://browiki.org/wiki/Mudan%C3%A7a_de_Classe:_Justiceiros" target="_blank" rel="noreferrer noopener">Justiceiro</a>' },
      { html: 'Entrar no clã Balestra Esmeralda através dos <a href="https://browiki.org/wiki/Cl%C3%A3s_Reais" target="_blank" rel="noreferrer noopener">Clãs Reais</a>' }
    ],
    result: ['Acesso completo às habilidades de Justiceiro', 'Bônus passivos do clã para auxiliar no leveling inicial']
  },
  {
    level: 30,
    title: 'Nível 30 — Equipamento Éden I',
    objective: 'Obter o primeiro conjunto de equipamentos focado em leveling.',
    actions: [
      { html: 'Completar a quest de <a href="https://browiki.org/wiki/Equipamentos_do_%C3%89den" target="_blank" rel="noreferrer noopener">Equipamentos do Éden I</a> no Grupo Éden<br><small class="action-subnote">Nota: Realizar as missões em Payon Cave</small>' },
      { html: 'Você deve receber o <a href="https://www.divine-pride.net/database/item/13112/" target="_blank" rel="noreferrer noopener">Revólver do Éden I</a>' }
    ],
    result: ['Primeiro aumento consistente de dano e sobrevivência']
  },
  {
    level: 40,
    title: 'Nível 40 — Encantamento Inicial',
    objective: 'Melhorar o equipamento recebido anteriormente.',
    actions: [{ html: 'Encantar o Chapéu do Éden I com o Administrador Mihael' }],
    result: ['Pequeno aumento de atributos que melhora eficiência no leveling']
  },
  {
    level: 50,
    title: 'Nível 50 — Equipamento Éden II',
    objective: 'Atualizar o equipamento principal.',
    actions: [
      { html: 'Completar a quest de Equipamentos do Éden II<br><small class="action-subnote">Nota: Realizar as missões em Orc Dungeon</small>' },
      { html: 'Você deve receber o <a href="https://www.divine-pride.net/database/item/13113/" target="_blank" rel="noreferrer noopener">Revólver do Éden II</a>' }
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
      { html: 'Você deve receber o <a href="https://www.divine-pride.net/database/item/13114/" target="_blank" rel="noreferrer noopener">Revólver do Éden III</a>' },
      { html: 'Encantar a Arma do Éden com o Especialista BK' }
    ],
    note: 'A missão de nível 90 do NPC Ur geralmente não compensa o esforço para esta build.',
    result: ['Novo pico de dano para leveling intermediário']
  },
  {
    level: 100,
    title: 'Nível 100 — Insurgente',
    objective: 'Desbloquear a classe avançada e iniciar progressão de equipamentos mais fortes.',
    actions: [
      { html: 'Completar a quest de mudança de classe para <a href="https://browiki.org/wiki/Mudan%C3%A7a_de_Classe:_Insurgentes" target="_blank" rel="noreferrer noopener">Insurgente</a>' },
      { html: 'Farmar Moedas do Éden no Grupo Éden' },
      { html: 'Obter <a href="https://browiki.org/wiki/Equipamento_Inicial" target="_blank" rel="noreferrer noopener">Equipamentos Iniciais</a>' },
      { html: 'Entrar no clã Cajado Celeste através dos <a href="https://browiki.org/wiki/Cl%C3%A3s_Reais" target="_blank" rel="noreferrer noopener">Clãs Reais</a>' }
    ],
    result: ['Acesso às habilidades de Insurgente', 'Novo ciclo de progressão de equipamentos']
  },
  {
    level: 110,
    title: 'Nível 110 — Acessórios e Banquete Real',
    objective: 'Obter novos acessórios e desbloquear conteúdo importante.',
    actions: [
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/28463/" target="_blank" rel="noreferrer noopener">Anel Ágil do Éden I</a> ou <a href="https://www.divine-pride.net/database/item/28464/" target="_blank" rel="noreferrer noopener">Colar Ágil do Éden I</a>' },
      { html: 'Encantar os Acessórios do Éden com a Joalheira' },
      { html: 'Quest: <a href="https://browiki.org/wiki/Banquete_Real" target="_blank" rel="noreferrer noopener">Banquete Real</a>' },
      { html: 'Comprar: <a href="https://browiki.org/wiki/Equipamentos_de_Honra" target="_blank" rel="noreferrer noopener">Equipamentos de Honra</a>' },
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/13197/minimetralhadora-2" target="_blank" rel="noreferrer noopener">Minimetralhadora [2]</a> (No NPC que vende munição)' }
    ],
    note: 'A quest pode começar no nível 100, mas é recomendado iniciar após obter a habilidade Expurgar.',
    result: ['Grande aumento de dano graças à nova arma']
  },
  {
    level: 115,
    title: 'Nível 115 — Sustentação de SP',
    objective: 'Melhorar recuperação de recursos.',
    actions: [
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/22123/" target="_blank" rel="noreferrer noopener">Coturnos do Éden II</a>' }
    ],
    result: ['Recuperação de SP que permite usar habilidades continuamente']
  },
  {
    level: 125,
    title: 'Nível 125 — Equipamentos Ilustres',
    objective: 'Avançar na progressão de equipamentos.',
    actions: [
      { html: 'Quest: <a href="https://browiki.org/wiki/Terra_Gloria" target="_blank" rel="noreferrer noopener">Terra Gloria</a>' },
      { html: 'Comprar: <a href="https://browiki.org/wiki/Equipamentos_de_Honra" target="_blank" rel="noreferrer noopener">Equipamentos Ilustres</a>' }
    ],
    note: 'Apesar da quest iniciar no nível 100, aguardar até 125 facilita o uso imediato dos equipamentos.'
  },
  {
    level: 140,
    title: 'Nível 140 — Nova Arma',
    objective: 'Atualizar o armamento principal.',
    actions: [
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/13198/metralhadora-da-tempestade" target="_blank" rel="noreferrer noopener">Metralhadora da Tempestade</a> (No NPC que vende munição)' }
    ],
    result: ['Novo pico de dano para o final do mid-game']
  },
  {
    level: 145,
    title: 'Nível 145 — Sustentação Avançada',
    objective: 'Melhorar ainda mais a recuperação de SP.',
    actions: [
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/22125/" target="_blank" rel="noreferrer noopener">Coturnos do Éden IV</a>' }
    ]
  },
  {
    level: 150,
    title: 'Nível 150 — Equipamentos Grácil',
    objective: 'Avançar para equipamentos mais fortes.',
    actions: [
      { html: 'Quest: <a href="https://browiki.org/wiki/Ilusi%C3%B3n" target="_blank" rel="noreferrer noopener">Ilusión</a>' },
      { html: 'Comprar: <a href="https://www.divine-pride.net/wiki/Equipamentos_de_Honra" target="_blank" rel="noreferrer noopener">Equipamentos Grácil</a>' }
    ]
  },
  {
    level: 160,
    title: 'Nível 160 — Utilidade e Mobilidade',
    objective: 'Desbloquear habilidades utilitárias através de acessórios.',
    actions: [
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/28471/" target="_blank" rel="noreferrer noopener">Colar Ágil do Éden V</a> (Habilidade: Teleporte)' },
      { html: 'Comprar: <a href="https://www.divine-pride.net/database/item/28472/" target="_blank" rel="noreferrer noopener">Anel Ágil do Éden V</a> (Habilidade: Curar)' }
    ],
    result: ['Maior mobilidade', 'Autossustentação durante o leveling']
  }
];

const renderLevelDetails = () => {
  const detailsContainer = document.getElementById('levelDetailsContainer');
  if (!detailsContainer) return;

  detailsContainer.innerHTML = '';
  levelGuideItems.forEach(item => {
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
      <p><strong>${TEXT.objectiveLabel}:</strong></p>
      <ul class="level-bullets"><li>${item.objective}</li></ul>
      <p><strong>${TEXT.actionsLabel}:</strong></p>
      <ul class="level-bullets">
        ${item.actions
          .map(action =>
            action.html
              ? `<li>${action.html}</li>`
              : action.url
                ? `<li>${action.text}<br><a href="${action.url}" target="_blank" rel="noreferrer noopener">${action.url}</a></li>`
                : `<li>${action.text}</li>`
          )
          .join('')}
      </ul>
      ${item.note ? `<p><strong>${TEXT.noteLabel}:</strong></p><ul class="level-bullets"><li>${item.note}</li></ul>` : ''}
      ${item.result ? `<p><strong>${TEXT.resultLabel}:</strong></p><ul class="level-bullets">${item.result.map(result => `<li>${result}</li>`).join('')}</ul>` : ''}
    `;
    detailsContainer.appendChild(card);
  });
};

const renderFooterVersion = () => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const now = new Date();
  const version = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0')
  ].join('');

  const versionText = document.createElement('p');
  versionText.id = 'pageVersion';
  versionText.textContent = `Versão ${version}`;
  versionText.style.marginTop = '0.5rem';
  versionText.style.fontSize = '0.85rem';
  versionText.style.color = '#9ca3af';

  const existing = document.getElementById('pageVersion');
  if (existing) {
    existing.textContent = versionText.textContent;
  } else {
    footer.appendChild(versionText);
  }
};

renderLevelDetails();
renderPowerCurveChart();
renderWeaponAvailabilityChart();
renderFooterVersion();
