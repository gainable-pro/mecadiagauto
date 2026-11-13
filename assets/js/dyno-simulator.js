/**
 * MECADIAG AUTO - CONFIGURATEUR PERFORMANCE HAUTE PRÉCISION (STYLE SHIFTECH / OG PERFORMANCE)
 * Base de données véhicules réaliste, courbes dyno précises et comparatifs Stage 1/2/E85
 */

const PERFORMANCE_DATABASE = {
  audi: {
    brand: "Audi",
    badge: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    models: {
      "rs3_8v": {
        name: "RS3 2.5 TFSI (8V / 8Y)",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
        engine: "5-Cylindres 2.5L Turbo",
        origHp: 400,
        origNm: 480,
        orig0100: "3.8s",
        st1Hp: 470,
        st1Nm: 600,
        st1_0100: "3.3s",
        st1Price: "690 €",
        st2Hp: 520,
        st2Nm: 660,
        st2_0100: "3.0s",
        st2Price: "Sur devis",
        e85Hp: 495,
        e85Nm: 630,
        e85_0100: "3.2s",
        e85Price: "890 €",
        vmaxOrig: "250 km/h (bridée)",
        vmaxReprog: "305 km/h (débridée)"
      },
      "s3_8v": {
        name: "S3 2.0 TFSI 310ch",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 2.0L Turbo EA888",
        origHp: 310,
        origNm: 400,
        orig0100: "4.8s",
        st1Hp: 375,
        st1Nm: 500,
        st1_0100: "4.1s",
        st1Price: "590 €",
        st2Hp: 410,
        st2Nm: 540,
        st2_0100: "3.8s",
        st2Price: "Sur devis",
        e85Hp: 395,
        e85Nm: 520,
        e85_0100: "4.0s",
        e85Price: "790 €",
        vmaxOrig: "250 km/h",
        vmaxReprog: "285 km/h"
      },
      "a3_20tdi": {
        name: "A3 2.0 TDI 150ch",
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 2.0L Turbo Diesel",
        origHp: 150,
        origNm: 340,
        orig0100: "8.6s",
        st1Hp: 195,
        st1Nm: 430,
        st1_0100: "7.4s",
        st1Price: "490 €",
        st2Hp: 215,
        st2Nm: 460,
        st2_0100: "7.0s",
        st2Price: "Sur devis",
        e85Hp: 150,
        e85Nm: 340,
        e85_0100: "8.6s",
        e85Price: "N/A (Diesel)",
        vmaxOrig: "218 km/h",
        vmaxReprog: "235 km/h"
      }
    }
  },
  bmw: {
    brand: "BMW",
    badge: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    models: {
      "m3_g80": {
        name: "M3 / M4 Competition (G80 / G82)",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
        engine: "6-Cylindres 3.0L Bi-Turbo S58",
        origHp: 510,
        origNm: 650,
        orig0100: "3.9s",
        st1Hp: 630,
        st1Nm: 780,
        st1_0100: "3.3s",
        st1Price: "890 €",
        st2Hp: 710,
        st2Nm: 860,
        st2_0100: "3.0s",
        st2Price: "Sur devis",
        e85Hp: 670,
        e85Nm: 820,
        e85_0100: "3.1s",
        e85Price: "1 090 €",
        vmaxOrig: "250 km/h (bridée)",
        vmaxReprog: "320 km/h"
      },
      "m140i": {
        name: "M140i / M240i 3.0T (B58)",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
        engine: "6-Cylindres 3.0L Single Turbo B58",
        origHp: 340,
        origNm: 500,
        orig0100: "4.6s",
        st1Hp: 420,
        st1Nm: 620,
        st1_0100: "3.9s",
        st1Price: "650 €",
        st2Hp: 470,
        st2Nm: 680,
        st2_0100: "3.6s",
        st2Price: "Sur devis",
        e85Hp: 460,
        e85Nm: 660,
        e85_0100: "3.7s",
        e85Price: "850 €",
        vmaxOrig: "250 km/h",
        vmaxReprog: "295 km/h"
      },
      "bmw_330d": {
        name: "Série 3 330d (F30 / G20)",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        engine: "6-Cylindres 3.0L Turbo Diesel N57 / B57",
        origHp: 258,
        origNm: 560,
        orig0100: "5.6s",
        st1Hp: 315,
        st1Nm: 670,
        st1_0100: "4.9s",
        st1Price: "550 €",
        st2Hp: 345,
        st2Nm: 710,
        st2_0100: "4.6s",
        st2Price: "Sur devis",
        e85Hp: 258,
        e85Nm: 560,
        e85_0100: "5.6s",
        e85Price: "N/A (Diesel)",
        vmaxOrig: "250 km/h",
        vmaxReprog: "275 km/h"
      }
    }
  },
  mercedes: {
    brand: "Mercedes-AMG",
    badge: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    models: {
      "a45_amg": {
        name: "A45 S AMG 4Matic+ (W177)",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 2.0L Turbo M139",
        origHp: 421,
        origNm: 500,
        orig0100: "3.9s",
        st1Hp: 480,
        st1Nm: 600,
        st1_0100: "3.4s",
        st1Price: "790 €",
        st2Hp: 520,
        st2Nm: 650,
        st2_0100: "3.1s",
        st2Price: "Sur devis",
        e85Hp: 500,
        e85Nm: 620,
        e85_0100: "3.3s",
        e85Price: "990 €",
        vmaxOrig: "270 km/h",
        vmaxReprog: "310 km/h"
      },
      "c63_amg": {
        name: "C63 S AMG 4.0 V8 Bi-Turbo (W205)",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
        engine: "V8 4.0L Bi-Turbo M177",
        origHp: 510,
        origNm: 700,
        orig0100: "4.0s",
        st1Hp: 600,
        st1Nm: 850,
        st1_0100: "3.4s",
        st1Price: "890 €",
        st2Hp: 670,
        st2Nm: 920,
        st2_0100: "3.1s",
        st2Price: "Sur devis",
        e85Hp: 640,
        e85Nm: 890,
        e85_0100: "3.2s",
        e85Price: "1 150 €",
        vmaxOrig: "290 km/h",
        vmaxReprog: "325 km/h"
      }
    }
  },
  volkswagen: {
    brand: "Volkswagen",
    badge: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    models: {
      "golf8_r": {
        name: "Golf 8 R 2.0 TSI 320ch",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 2.0L Turbo EA888 Gen4",
        origHp: 320,
        origNm: 420,
        orig0100: "4.7s",
        st1Hp: 400,
        st1Nm: 530,
        st1_0100: "4.0s",
        st1Price: "650 €",
        st2Hp: 435,
        st2Nm: 570,
        st2_0100: "3.7s",
        st2Price: "Sur devis",
        e85Hp: 415,
        e85Nm: 550,
        e85_0100: "3.9s",
        e85Price: "850 €",
        vmaxOrig: "250 km/h",
        vmaxReprog: "290 km/h"
      },
      "golf7_gti": {
        name: "Golf 7 GTI Performance 245ch",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 2.0L Turbo EA888 Gen3",
        origHp: 245,
        origNm: 370,
        orig0100: "6.2s",
        st1Hp: 310,
        st1Nm: 460,
        st1_0100: "5.3s",
        st1Price: "550 €",
        st2Hp: 340,
        st2Nm: 490,
        st2_0100: "5.0s",
        st2Price: "Sur devis",
        e85Hp: 325,
        e85Nm: 480,
        e85_0100: "5.1s",
        e85Price: "750 €",
        vmaxOrig: "250 km/h",
        vmaxReprog: "275 km/h"
      }
    }
  },
  porsche: {
    brand: "Porsche",
    badge: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    models: {
      "911_carrera": {
        name: "911 Carrera (992) 3.0 Bi-Turbo",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        engine: "Flat-6 3.0L Bi-Turbo",
        origHp: 385,
        origNm: 450,
        orig0100: "4.2s",
        st1Hp: 480,
        st1Nm: 600,
        st1_0100: "3.5s",
        st1Price: "990 €",
        st2Hp: 530,
        st2Nm: 670,
        st2_0100: "3.2s",
        st2Price: "Sur devis",
        e85Hp: 510,
        e85Nm: 640,
        e85_0100: "3.3s",
        e85Price: "1 250 €",
        vmaxOrig: "293 km/h",
        vmaxReprog: "320 km/h"
      }
    }
  },
  renault: {
    brand: "Renault Sport",
    badge: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    models: {
      "megane4_rs": {
        name: "Mégane 4 R.S. 1.8 TCe 280ch / 300ch Trophy",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
        engine: "4-Cylindres 1.8L Turbo M5Pt",
        origHp: 300,
        origNm: 400,
        orig0100: "5.7s",
        st1Hp: 345,
        st1Nm: 480,
        st1_0100: "5.1s",
        st1Price: "590 €",
        st2Hp: 375,
        st2Nm: 520,
        st2_0100: "4.8s",
        st2Price: "Sur devis",
        e85Hp: 360,
        e85Nm: 500,
        e85_0100: "4.9s",
        e85Price: "790 €",
        vmaxOrig: "260 km/h",
        vmaxReprog: "280 km/h"
      }
    }
  }
};

class ShiftechDynoConfigurator {
  constructor() {
    this.currentBrand = 'audi';
    this.currentModelKey = 'rs3_8v';
    this.currentStage = 'stage1';

    this.brandButtons = document.querySelectorAll('.shiftech-brand-btn');
    this.modelSelect = document.getElementById('cfg-model-select');
    this.stageTabs = document.querySelectorAll('.cfg-stage-tab');
    this.canvas = document.getElementById('dyno-chart-pro');

    this.init();
  }

  init() {
    this.setupBrandButtons();
    this.populateModels(this.currentBrand);
    this.setupStageTabs();
    this.updateVehicleCard();
    this.drawRealisticDynoCurve();

    window.addEventListener('resize', () => {
      this.drawRealisticDynoCurve();
    });
  }

  setupBrandButtons() {
    this.brandButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.brandButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentBrand = btn.dataset.brand;
        this.populateModels(this.currentBrand);
        this.updateVehicleCard();
        this.drawRealisticDynoCurve();
      });
    });

    if (this.modelSelect) {
      this.modelSelect.addEventListener('change', (e) => {
        this.currentModelKey = e.target.value;
        this.updateVehicleCard();
        this.drawRealisticDynoCurve();
      });
    }
  }

  populateModels(brandKey) {
    if (!this.modelSelect) return;
    this.modelSelect.innerHTML = '';
    const brandData = PERFORMANCE_DATABASE[brandKey];
    if (!brandData) return;

    const models = brandData.models;
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

  setupStageTabs() {
    this.stageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.stageTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentStage = tab.dataset.stage;
        this.updateVehicleCard();
        this.drawRealisticDynoCurve();
      });
    });
  }

  getCurrentModel() {
    const brand = PERFORMANCE_DATABASE[this.currentBrand];
    if (!brand) return null;
    return brand.models[this.currentModelKey] || Object.values(brand.models)[0];
  }

  updateVehicleCard() {
    const data = this.getCurrentModel();
    if (!data) return;

    let targetHp = data.st1Hp;
    let targetNm = data.st1Nm;
    let target0100 = data.st1_0100;
    let targetPrice = data.st1Price;
    let stageBadge = "STAGE 1 ÉLECTRONIQUE";

    if (this.currentStage === 'stage2') {
      targetHp = data.st2Hp;
      targetNm = data.st2Nm;
      target0100 = data.st2_0100;
      targetPrice = data.st2Price;
      stageBadge = "STAGE 2 + PIÈCES MOTEUR";
    } else if (this.currentStage === 'flexfuel') {
      targetHp = data.e85Hp;
      targetNm = data.e85Nm;
      target0100 = data.e85_0100;
      targetPrice = data.e85Price;
      stageBadge = "CONVERSION E85 FLEXFUEL";
    }

    const hpDiff = targetHp - data.origHp;
    const nmDiff = targetNm - data.origNm;

    const imgEl = document.getElementById('cfg-car-image');
    const titleEl = document.getElementById('cfg-car-title');
    const engineEl = document.getElementById('cfg-car-engine');
    const stageBadgeEl = document.getElementById('cfg-stage-badge');

    if (imgEl) imgEl.src = data.image;
    if (titleEl) titleEl.textContent = data.name;
    if (engineEl) engineEl.textContent = data.engine;
    if (stageBadgeEl) stageBadgeEl.textContent = stageBadge;

    const origHpEl = document.getElementById('table-orig-hp');
    const reprogHpEl = document.getElementById('table-reprog-hp');
    const diffHpEl = document.getElementById('table-diff-hp');

    const origNmEl = document.getElementById('table-orig-nm');
    const reprogNmEl = document.getElementById('table-reprog-nm');
    const diffNmEl = document.getElementById('table-diff-nm');

    const orig0100El = document.getElementById('table-orig-0100');
    const reprog0100El = document.getElementById('table-reprog-0100');

    const vmaxEl = document.getElementById('table-vmax-reprog');
    const priceEl = document.getElementById('cfg-price-display');

    if (origHpEl) origHpEl.textContent = `${data.origHp} Ch`;
    if (reprogHpEl) reprogHpEl.textContent = `${targetHp} Ch`;
    if (diffHpEl) diffHpEl.textContent = `+${hpDiff} Ch`;

    if (origNmEl) origNmEl.textContent = `${data.origNm} Nm`;
    if (reprogNmEl) reprogNmEl.textContent = `${targetNm} Nm`;
    if (diffNmEl) diffNmEl.textContent = `+${nmDiff} Nm`;

    if (orig0100El) orig0100El.textContent = data.orig0100;
    if (reprog0100El) reprog0100El.textContent = target0100;

    if (vmaxEl) vmaxEl.textContent = data.vmaxReprog;
    if (priceEl) priceEl.textContent = targetPrice;

    const bookBtn = document.getElementById('btn-cfg-book');
    if (bookBtn) {
      const msg = encodeURIComponent(
        `Bonjour MECADIAG AUTO, je souhaite réserver pour mon véhicule :\n` +
        `• Véhicule : ${PERFORMANCE_DATABASE[this.currentBrand].brand} ${data.name}\n` +
        `• Motorisation : ${data.engine}\n` +
        `• Configuration choisie : ${stageBadge} (${targetHp} Ch / ${targetNm} Nm)\n` +
        `• Tarif indicatif : ${targetPrice}\n` +
        `Merci de me contacter pour convenir d'un rendez-vous à l'atelier de Miramas.`
      );
      bookBtn.href = `https://wa.me/33650624972?text=${msg}`;
    }
  }

  drawRealisticDynoCurve() {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const data = this.getCurrentModel();
    if (!data) return;

    let targetHp = data.st1Hp;
    let targetNm = data.st1Nm;
    if (this.currentStage === 'stage2') {
      targetHp = data.st2Hp;
      targetNm = data.st2Nm;
    } else if (this.currentStage === 'flexfuel') {
      targetHp = data.e85Hp;
      targetNm = data.e85Nm;
    }

    const width = this.canvas.parentElement.clientWidth;
    const height = 280;
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, width, height);

    const padL = 50;
    const padR = 20;
    const padT = 30;
    const padB = 30;
    const graphW = width - padL - padR;
    const graphH = height - padT - padB;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;

    const ySteps = 5;
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Rajdhani';
    ctx.textAlign = 'right';

    const maxScale = Math.max(targetHp, targetNm) * 1.15;

    for (let i = 0; i <= ySteps; i++) {
      const y = padT + (graphH / ySteps) * i;
      const val = Math.round(maxScale - (maxScale / ySteps) * i);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + graphW, y);
      ctx.stroke();
      ctx.fillText(val + ' ', padL - 8, y + 4);
    }

    const rpmLabels = ['1500', '2500', '3500', '4500', '5500', '6500', '7200'];
    ctx.textAlign = 'center';

    for (let j = 0; j < rpmLabels.length; j++) {
      const x = padL + (graphW / (rpmLabels.length - 1)) * j;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + graphH);
      ctx.stroke();
      ctx.fillText(rpmLabels[j] + ' tr/min', x, height - 10);
    }

    const getY = (val) => padT + graphH - (val / maxScale) * graphH;
    const getX = (idx, total) => padL + (graphW / (total - 1)) * idx;

    const origHpPoints = [0.30, 0.52, 0.73, 0.88, 0.98, 0.88, 0.70].map(p => p * data.origHp);
    this.plotCurve(ctx, origHpPoints, getX, getY, '#64748b', true, 2);

    const reprogHpPoints = [0.38, 0.65, 0.88, 1.0, 0.99, 0.93, 0.80].map(p => p * targetHp);
    this.plotCurve(ctx, reprogHpPoints, getX, getY, '#ff3b00', false, 3.5, true);

    const reprogNmPoints = [0.60, 0.95, 1.0, 0.90, 0.78, 0.62, 0.48].map(p => p * targetNm);
    this.plotCurve(ctx, reprogNmPoints, getX, getY, '#00f0ff', false, 3.0);
  }

  plotCurve(ctx, points, getX, getY, color, isDashed = false, lineWidth = 3, fill = false) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    if (isDashed) {
      ctx.setLineDash([4, 4]);
    } else {
      ctx.setLineDash([]);
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
    }

    ctx.beginPath();
    const len = points.length;

    for (let i = 0; i < len; i++) {
      const x = getX(i, len);
      const y = getY(points[i]);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = getX(i - 1, len);
        const prevY = getY(points[i - 1]);
        const cpX1 = prevX + (x - prevX) / 2;
        const cpX2 = prevX + (x - prevX) / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    }
    ctx.stroke();

    if (fill) {
      ctx.lineTo(getX(len - 1, len), getY(0));
      ctx.lineTo(getX(0, len), getY(0));
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, 0, 280);
      grad.addColorStop(0, 'rgba(255, 59, 0, 0.3)');
      grad.addColorStop(1, 'rgba(255, 59, 0, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.restore();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ShiftechDynoConfigurator();
});
