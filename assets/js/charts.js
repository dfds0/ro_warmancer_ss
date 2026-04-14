const powerDataPoints = [
  { level: 10, power: 50 },
  { level: 30, power: 100 },
  { level: 40, power: 100 },
  { level: 50, power: 180 },
  { level: 70, power: 250 },
  { level: 100, power: 350 },
  { level: 110, power: 530, highlight: true },
  { level: 115, power: 535 },
  { level: 125, power: 585, highlight: true },
  { level: 140, power: 810, highlight: true },
  { level: 145, power: 815 },
  { level: 150, power: 900, highlight: true },
  { level: 160, power: 910 }
];

const weaponDataItems = [
  { name: 'Pistola', ranges: [{ from: 10, to: 110 }], color: '#fb7185' },
  { name: 'Metralhadora', ranges: [{ from: 110, to: 200 }], color: '#8b5cf6' },
  { name: 'Rifle', ranges: [{ from: 150, to: 200 }], color: '#38bdf8' },
  { name: 'Escopeta', ranges: [{ from: 130, to: 200 }], color: '#22c55e' },
  { name: 'L. Granada', ranges: [{ from: 150, to: 200 }], color: '#e879f9' }
];

const TEXT = {
  levelPointTitle: 'Nível {level}'
};

const width = 760;
const height = 320;
const powerPadding = { top: 18, right: 18, bottom: 32, left: 34 };
const weaponPadding = { top: 18, right: 18, bottom: 32, left: 100 };
const xRange = [0, 200];
const yRange = [0, 1000];

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

const chartInsertionPoints = [
  {
    levelId: 'level-10',
    cardId: 'powerChartCard0to100',
    svgId: 'powerChartLow',
    title: 'Curva de poder por nível de 0 a 100',
    note: 'Eixo X: nível 0 a 100',
    ariaLabel: 'Gráfico de poder por nível de 0 a 100'
  },
  {
    levelId: 'level-100',
    cardId: 'powerChartCard100to200',
    svgId: 'powerChartHigh',
    title: 'Curva de poder por nível de 100 a 200',
    note: 'Eixo X: nível 100 a 200',
    ariaLabel: 'Gráfico de poder por nível de 100 a 200'
  }
];

const insertChartCards = () => {
  const detailsContainer = document.getElementById('levelDetailsContainer');
  if (!detailsContainer) return;

  chartInsertionPoints.forEach(config => {
    const existingCard = document.getElementById(config.cardId);
    if (existingCard) {
      existingCard.remove();
    }

    const card = createPowerChartCard(
      config.cardId,
      config.svgId,
      config.title,
      config.note,
      config.ariaLabel
    );

    const referenceNode = document.getElementById(config.levelId);
    if (referenceNode && referenceNode.parentElement === detailsContainer) {
      detailsContainer.insertBefore(card, referenceNode);
    } else {
      detailsContainer.appendChild(card);
    }
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

insertChartCards();
renderPowerCurveChart();
renderWeaponAvailabilityChart();
//renderFooterVersion();
