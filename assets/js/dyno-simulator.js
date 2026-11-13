/**
 * MECADIAG AUTO - VIRTUAL DYNO & HORSEPOWER SIMULATOR
 * Real-time Power & Torque Curves with Canvas
 */

const VEHICLE_DATABASE = {
  audi: {
    name: 'Audi',
    models: {
      'a3_20tdi': { name: 'A3 2.0 TDI 150ch', origHp: 150, origNm: 340, st1Hp: 195, st1Nm: 430, st2Hp: 215, st2Nm: 470, e85Hp: 165, e85Nm: 360, fuel: 'Diesel / Flex' },
      's3_20tfsi': { name: 'S3 2.0 TFSI 310ch', origHp: 310, origNm: 400, st1Hp: 375, st1Nm: 500, st2Hp: 410, st2Nm: 540, e85Hp: 395, e85Nm: 520, fuel: 'Essence / E85' },
      'rs3_25tfsi': { name: 'RS3 2.5 TFSI 400ch', origHp: 400, origNm: 480, st1Hp: 470, st1Nm: 600, st2Hp: 520, st2Nm: 660, e85Hp: 500, e85Nm: 640, fuel: 'Essence / E85' },
      'a6_30tdi': { name: 'A6 3.0 V6 TDI 245ch', origHp: 245, origNm: 500, st1Hp: 300, st1Nm: 600, st2Hp: 330, st2Nm: 650, e85Hp: 260, e85Nm: 520, fuel: 'Diesel' }
    }
  },
  bmw: {
    name: 'BMW',
    models: {
      'bmw_118d': { name: 'Série 1 118d 143ch / 150ch', origHp: 143, origNm: 320, st1Hp: 190, st1Nm: 410, st2Hp: 210, st2Nm: 440, e85Hp: 155, e85Nm: 340, fuel: 'Diesel' },
      'bmw_320d': { name: 'Série 3 320d 190ch', origHp: 190, origNm: 400, st1Hp: 230, st1Nm: 480, st2Hp: 250, st2Nm: 510, e85Hp: 200, e85Nm: 420, fuel: 'Diesel' },
      'bmw_330d': { name: 'Série 3 330d 258ch', origHp: 258, origNm: 560, st1Hp: 315, st1Nm: 670, st2Hp: 345, st2Nm: 710, e85Hp: 275, e85Nm: 580, fuel: 'Diesel' },
      'bmw_140i': { name: 'M140i 3.0T 340ch', origHp: 340, origNm: 500, st1Hp: 420, st1Nm: 620, st2Hp: 460, st2Nm: 670, e85Hp: 450, e85Nm: 650, fuel: 'Essence / E85' },
      'bmw_m4': { name: 'M4 F82 / G82 431ch / 510ch', origHp: 431, origNm: 550, st1Hp: 520, st1Nm: 700, st2Hp: 570, st2Nm: 770, e85Hp: 550, e85Nm: 740, fuel: 'Essence / E85' }
    }
  },
  mercedes: {
    name: 'Mercedes-Benz',
    models: {
      'merc_a200d': { name: 'Classe A 200d 150ch', origHp: 150, origNm: 320, st1Hp: 190, st1Nm: 400, st2Hp: 205, st2Nm: 430, e85Hp: 160, e85Nm: 340, fuel: 'Diesel' },
      'merc_a250': { name: 'Classe A 250 224ch', origHp: 224, origNm: 350, st1Hp: 260, st1Nm: 440, st2Hp: 285, st2Nm: 480, e85Hp: 270, e85Nm: 450, fuel: 'Essence / E85' },
      'merc_a45': { name: 'A45 AMG 381ch / 421ch', origHp: 381, origNm: 475, st1Hp: 430, st1Nm: 560, st2Hp: 460, st2Nm: 610, e85Hp: 445, e85Nm: 580, fuel: 'Essence / E85' },
      'merc_c220d': { name: 'Classe C 220d 170ch / 194ch', origHp: 170, origNm: 400, st1Hp: 215, st1Nm: 480, st2Hp: 235, st2Nm: 510, e85Hp: 180, e85Nm: 420, fuel: 'Diesel' }
    }
  },
  volkswagen: {
    name: 'Volkswagen',
    models: {
      'vw_golf7_gti': { name: 'Golf 7 GTI 2.0 TSI 220ch / 245ch', origHp: 230, origNm: 350, st1Hp: 300, st1Nm: 450, st2Hp: 330, st2Nm: 490, e85Hp: 315, e85Nm: 470, fuel: 'Essence / E85' },
      'vw_golf7_r': { name: 'Golf 7 R / 8 R 300ch / 320ch', origHp: 300, origNm: 380, st1Hp: 365, st1Nm: 490, st2Hp: 400, st2Nm: 530, e85Hp: 385, e85Nm: 510, fuel: 'Essence / E85' },
      'vw_golf_gtd': { name: 'Golf GTD 2.0 TDI 184ch / 200ch', origHp: 184, origNm: 380, st1Hp: 225, st1Nm: 460, st2Hp: 240, st2Nm: 490, e85Hp: 195, e85Nm: 400, fuel: 'Diesel' },
      'vw_polo_gti': { name: 'Polo GTI 2.0 TSI 200ch', origHp: 200, origNm: 320, st1Hp: 250, st1Nm: 410, st2Hp: 275, st2Nm: 440, e85Hp: 260, e85Nm: 420, fuel: 'Essence / E85' }
    }
  },
  renault: {
    name: 'Renault',
    models: {
      'ren_megane_rs': { name: 'Mégane 4 RS 1.8 TCe 280ch / 300ch', origHp: 280, origNm: 390, st1Hp: 330, st1Nm: 460, st2Hp: 360, st2Nm: 500, e85Hp: 345, e85Nm: 480, fuel: 'Essence / E85' },
      'ren_clio4_rs': { name: 'Clio 4 RS 1.6 TCe 200ch', origHp: 200, origNm: 240, st1Hp: 230, st1Nm: 300, st2Hp: 250, st2Nm: 330, e85Hp: 235, e85Nm: 310, fuel: 'Essence / E85' },
      'ren_15dci': { name: '1.5 dCi (Clio / Mégane / Captur) 90/110ch', origHp: 110, origNm: 260, st1Hp: 135, st1Nm: 320, st2Hp: 145, st2Nm: 340, e85Hp: 115, e85Nm: 270, fuel: 'Diesel' },
      'ren_13tce': { name: '1.3 TCe (Clio / Arkana / Megane) 140ch', origHp: 140, origNm: 240, st1Hp: 175, st1Nm: 300, st2Hp: 190, st2Nm: 320, e85Hp: 180, e85Nm: 310, fuel: 'Essence / E85' }
    }
  },
  peugeot: {
    name: 'Peugeot',
    models: {
      'psa_308_gti': { name: '308 GTi 1.6 THP 270ch', origHp: 270, origNm: 330, st1Hp: 300, st1Nm: 400, st2Hp: 320, st2Nm: 430, e85Hp: 310, e85Nm: 410, fuel: 'Essence / E85' },
      'psa_208_gti': { name: '208 GTi 1.6 THP 200ch / 208ch', origHp: 208, origNm: 300, st1Hp: 235, st1Nm: 360, st2Hp: 250, st2Nm: 390, e85Hp: 240, e85Nm: 370, fuel: 'Essence / E85' },
      'psa_20bluehdi': { name: '3008 / 508 2.0 BlueHDi 180ch', origHp: 180, origNm: 400, st1Hp: 215, st1Nm: 470, st2Hp: 230, st2Nm: 490, e85Hp: 190, e85Nm: 420, fuel: 'Diesel' },
      'psa_12puretech': { name: '208 / 2008 1.2 PureTech 130ch', origHp: 130, origNm: 230, st1Hp: 155, st1Nm: 270, st2Hp: 165, st2Nm: 290, e85Hp: 160, e85Nm: 280, fuel: 'Essence / E85' }
    }
  },
  ford: {
    name: 'Ford',
    models: {
      'ford_focus_rs': { name: 'Focus 3 RS 2.3 EcoBoost 350ch', origHp: 350, origNm: 440, st1Hp: 390, st1Nm: 540, st2Hp: 420, st2Nm: 590, e85Hp: 410, e85Nm: 570, fuel: 'Essence / E85' },
      'ford_focus_st': { name: 'Focus ST 2.0 / 2.3 EcoBoost 250/280ch', origHp: 280, origNm: 420, st1Hp: 325, st1Nm: 500, st2Hp: 350, st2Nm: 540, e85Hp: 335, e85Nm: 510, fuel: 'Essence / E85' },
      'ford_fiesta_st': { name: 'Fiesta ST 1.5 EcoBoost 200ch', origHp: 200, origNm: 290, st1Hp: 240, st1Nm: 360, st2Hp: 260, st2Nm: 390, e85Hp: 245, e85Nm: 370, fuel: 'Essence / E85' },
      'ford_20tdci': { name: 'Transit / Kuga 2.0 TDCi 150ch', origHp: 150, origNm: 370, st1Hp: 190, st1Nm: 440, st2Hp: 205, st2Nm: 470, e85Hp: 160, e85Nm: 390, fuel: 'Diesel' }
    }
  }
};

class DynoSimulator {
  constructor() {
    this.canvas = document.getElementById('dyno-chart-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.brandSelect = document.getElementById('dyno-brand-select');
    this.modelSelect = document.getElementById('dyno-model-select');
    this.stageButtons = document.querySelectorAll('.stage-btn');

    this.currentBrand = 'volkswagen';
    this.currentModelKey = 'vw_golf7_gti';
    this.currentStage = 'stage1'; // 'stage1', 'stage2', 'flexfuel'

    this.init();
  }

  init() {
    this.populateBrands();
    this.populateModels(this.currentBrand);
    this.setupListeners();
    this.updateDisplay();
  }

  populateBrands() {
    if (!this.brandSelect) return;
    this.brandSelect.innerHTML = '';
    Object.keys(VEHICLE_DATABASE).forEach(brandKey => {
      const opt = document.createElement('option');
      opt.value = brandKey;
      opt.textContent = VEHICLE_DATABASE[brandKey].name;
      if (brandKey === this.currentBrand) opt.selected = true;
      this.brandSelect.appendChild(opt);
    });
  }

  populateModels(brandKey) {
    if (!this.modelSelect) return;
    this.modelSelect.innerHTML = '';
    const models = VEHICLE_DATABASE[brandKey].models;
    let first = true;
    Object.keys(models).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = models[key].name;
      if (first) {
        opt.selected = true;
        this.currentModelKey = key;
        first = false;
      }
      this.modelSelect.appendChild(opt);
    });
  }

  setupListeners() {
    if (this.brandSelect) {
      this.brandSelect.addEventListener('change', (e) => {
        this.currentBrand = e.target.value;
        this.populateModels(this.currentBrand);
        this.updateDisplay();
      });
    }

    if (this.modelSelect) {
      this.modelSelect.addEventListener('change', (e) => {
        this.currentModelKey = e.target.value;
        this.updateDisplay();
      });
    }

    this.stageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.stageButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentStage = btn.dataset.stage;
        this.updateDisplay();
      });
    });

    window.addEventListener('resize', () => {
      this.drawChart();
    });
  }

  getCurrentVehicleData() {
    const brand = VEHICLE_DATABASE[this.currentBrand];
    if (!brand) return null;
    return brand.models[this.currentModelKey] || Object.values(brand.models)[0];
  }

  updateDisplay() {
    const data = this.getCurrentVehicleData();
    if (!data) return;

    let targetHp = data.st1Hp;
    let targetNm = data.st1Nm;
    let stageTitle = 'STAGE 1';

    if (this.currentStage === 'stage2') {
      targetHp = data.st2Hp;
      targetNm = data.st2Nm;
      stageTitle = 'STAGE 2 SUR MESURE';
    } else if (this.currentStage === 'flexfuel') {
      targetHp = data.e85Hp;
      targetNm = data.e85Nm;
      stageTitle = 'CONVERSION E85 FLEXFUEL';
    }

    const hpGain = targetHp - data.origHp;
    const nmGain = targetNm - data.origNm;

    // Update text elements
    const origHpEl = document.getElementById('stat-orig-hp');
    const reprogHpEl = document.getElementById('stat-reprog-hp');
    const gainHpEl = document.getElementById('stat-gain-hp');
    const origNmEl = document.getElementById('stat-orig-nm');
    const reprogNmEl = document.getElementById('stat-reprog-nm');
    const gainNmEl = document.getElementById('stat-gain-nm');
    const ecoGainEl = document.getElementById('stat-gain-eco');

    if (origHpEl) origHpEl.textContent = `${data.origHp} CH`;
    if (reprogHpEl) reprogHpEl.textContent = `${targetHp} CH`;
    if (gainHpEl) gainHpEl.textContent = `+${hpGain} CH`;

    if (origNmEl) origNmEl.textContent = `${data.origNm} Nm`;
    if (reprogNmEl) reprogNmEl.textContent = `${targetNm} Nm`;
    if (gainNmEl) gainNmEl.textContent = `+${nmGain} Nm`;

    if (ecoGainEl) {
      if (this.currentStage === 'flexfuel') {
        ecoGainEl.textContent = '-55% Coût Plein';
      } else {
        ecoGainEl.textContent = '-15% à -20% Conso';
      }
    }

    this.drawChart(data.origHp, targetHp, data.origNm, targetNm);
  }

  drawChart(origHp = 230, reprogHp = 300, origNm = 350, reprogNm = 450) {
    if (!this.canvas || !this.ctx) return;

    const width = this.canvas.parentElement.clientWidth;
    const height = 240;
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';

    const ctx = this.ctx;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    ctx.clearRect(0, 0, width, height);

    // Grid background
    const padX = 40;
    const padY = 25;
    const chartW = width - padX - 20;
    const chartH = height - padY * 2;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    // RPM horizontal lines & labels
    const rpmPoints = ['1500', '2500', '3500', '4500', '5500', '6500'];
    ctx.font = '10px Rajdhani';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';

    for (let i = 0; i < rpmPoints.length; i++) {
      const x = padX + (chartW / (rpmPoints.length - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(x, padY);
      ctx.lineTo(x, padY + chartH);
      ctx.stroke();
      ctx.fillText(rpmPoints[i] + ' RPM', x, height - 8);
    }

    // Y-Axis power / torque lines
    for (let j = 0; j <= 4; j++) {
      const y = padY + (chartH / 4) * j;
      ctx.beginPath();
      ctx.moveTo(padX, y);
      ctx.lineTo(padX + chartW, y);
      ctx.stroke();
    }

    // Function to calculate curve points
    const maxVal = Math.max(reprogHp, reprogNm) * 1.15;

    const getHpY = (ratio) => (padY + chartH) - (ratio * chartH);
    const getX = (idx, total) => padX + (chartW / (total - 1)) * idx;

    // Curve 1: Original Power (Grey dashed)
    this.renderCurve(ctx, [0.35, 0.55, 0.72, 0.88, 0.95, 0.85].map(v => (v * origHp) / maxVal), getX, getHpY, '#64748b', true, 2);

    // Curve 2: Reprogrammed Power (Bright Neon Orange)
    this.renderCurve(ctx, [0.45, 0.72, 0.92, 1.0, 0.98, 0.90].map(v => (v * reprogHp) / maxVal), getX, getHpY, '#ff4d00', false, 3.5, true);

    // Curve 3: Reprogrammed Torque (Bright Electric Cyan)
    this.renderCurve(ctx, [0.65, 0.98, 1.0, 0.88, 0.75, 0.58].map(v => (v * reprogNm) / maxVal), getX, getHpY, '#00f0ff', false, 3.0);
  }

  renderCurve(ctx, normalizedValues, getX, getY, color, isDashed = false, lineWidth = 3, fillGlow = false) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (isDashed) {
      ctx.setLineDash([5, 5]);
    } else {
      ctx.setLineDash([]);
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
    }

    ctx.beginPath();
    const len = normalizedValues.length;

    for (let i = 0; i < len; i++) {
      const x = getX(i, len);
      const y = getY(normalizedValues[i]);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = getX(i - 1, len);
        const prevY = getY(normalizedValues[i - 1]);
        const cpX1 = prevX + (x - prevX) / 2;
        const cpX2 = prevX + (x - prevX) / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    }
    ctx.stroke();

    // Optional gradient fill under curve
    if (fillGlow) {
      ctx.lineTo(getX(len - 1, len), getY(0));
      ctx.lineTo(getX(0, len), getY(0));
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, 240);
      grad.addColorStop(0, 'rgba(255, 77, 0, 0.25)');
      grad.addColorStop(1, 'rgba(255, 77, 0, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.restore();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DynoSimulator();
});
