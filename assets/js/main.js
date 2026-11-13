/**
 * MECADIAG AUTO - SHIFTECH EXPERIENCE & CORE INTERACTIONS
 * Calculateur E85, Radar 100km Miramas, Barre de recherche rapide & Devis WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initDynamicCarBackground();
  initQuickSearchBar();
  initE85Calculator();
  initRadarPins();
  initQuoteForm();
  initSmoothScroll();
});

/* Mobile Menu Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#000000';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.15)';
      }
    });
  }
}

/* Shiftech Quick Search Bar Sync with Configurator */
function initQuickSearchBar() {
  const brandSelect = document.getElementById('quick-brand-select');
  if (!brandSelect) return;

  brandSelect.addEventListener('change', (e) => {
    const selectedBrand = e.target.value;
    const targetBrandBtn = document.querySelector(`.shiftech-brand-btn[data-brand="${selectedBrand}"]`);
    if (targetBrandBtn) {
      targetBrandBtn.click();
    }
  });
}

/* E85 Bio-ethanol Savings Calculator (Shiftech Style) */
function initE85Calculator() {
  const kmSlider = document.getElementById('e85-km-slider');
  const kmValDisplay = document.getElementById('e85-km-display');
  const savingsDisplay = document.getElementById('e85-savings-display');
  const paybackDisplay = document.getElementById('e85-payback-display');

  if (!kmSlider) return;

  function updateSavings() {
    const km = parseInt(kmSlider.value, 10);
    if (kmValDisplay) kmValDisplay.textContent = km.toLocaleString('fr-FR') + ' km / an';

    const avgLitersPer100 = 8.5;
    const priceSP95 = 1.94;
    const priceE85 = 0.84;
    const e85Overconsumption = 1.20;

    const costSP95 = (km / 100) * avgLitersPer100 * priceSP95;
    const costE85 = (km / 100) * (avgLitersPer100 * e85Overconsumption) * priceE85;

    const yearlySavings = Math.round(costSP95 - costE85);
    const monthsToPayback = Math.max(1, Math.round((400 / yearlySavings) * 12));

    if (savingsDisplay) {
      savingsDisplay.textContent = yearlySavings.toLocaleString('fr-FR') + ' € / an';
    }
    if (paybackDisplay) {
      paybackDisplay.textContent = `Amorti en seulement ${monthsToPayback} mois ! (Base conversion 400€)`;
    }
  }

  kmSlider.addEventListener('input', updateSavings);
  updateSavings();
}

/* Radar 100km Interactive Pins */
function initRadarPins() {
  const pins = document.querySelectorAll('.radar-city-pin');
  const cityInfoBox = document.getElementById('radar-city-info');

  const cityDistances = {
    'Salon-de-Provence': { km: '14 km', time: '15 min' },
    'Istres': { km: '12 km', time: '14 min' },
    'Aix-en-Provence': { km: '45 km', time: '35 min' },
    'Marseille': { km: '58 km', time: '45 min' },
    'Arles': { km: '38 km', time: '35 min' },
    'Avignon': { km: '55 km', time: '45 min' },
    'Martigues': { km: '32 km', time: '28 min' },
    'Nîmes': { km: '78 km', time: '55 min' }
  };

  pins.forEach(pin => {
    pin.addEventListener('mouseenter', () => {
      const cityName = pin.textContent.trim();
      const info = cityDistances[cityName];
      if (info && cityInfoBox) {
        cityInfoBox.innerHTML = `<strong>${cityName} :</strong> à seulement <strong>${info.km}</strong> (${info.time}) de notre atelier à Miramas !`;
      }
    });
  });
}

/* WhatsApp & Quick Quote */
function initQuoteForm() {
  const form = document.getElementById('quick-quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const brand = document.getElementById('quote-brand')?.value || '';
    const model = document.getElementById('quote-model')?.value || '';
    const service = document.getElementById('quote-service')?.value || 'Reprogrammation Stage 1';
    const phone = document.getElementById('quote-phone')?.value || '';
    const message = document.getElementById('quote-notes')?.value || '';

    const text = encodeURIComponent(
      `Bonjour MECADIAG AUTO, je souhaite un devis / rendez-vous :\n` +
      `• Véhicule : ${brand} ${model}\n` +
      `• Prestation : ${service}\n` +
      `• Téléphone : ${phone}\n` +
      (message ? `• Précisions : ${message}\n` : '') +
      `Merci !`
    );

    const whatsappUrl = `https://wa.me/33650624972?text=${text}`;
    window.open(whatsappUrl, '_blank');
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Dynamic Scroll-Linked Car Background (Mercedes-AMG, BMW M, Porsche, Mustang) */
function initDynamicCarBackground() {
  const slides = {
    mercedes: document.getElementById('slide-mercedes'),
    bmw: document.getElementById('slide-bmw'),
    porsche: document.getElementById('slide-porsche'),
    mustang: document.getElementById('slide-mustang')
  };

  const nameEl = document.getElementById('car-scene-name');
  if (!slides.mercedes || !nameEl) return;

  const carData = {
    mercedes: { label: 'MERCEDES CLASSE AMG', el: slides.mercedes },
    bmw: { label: 'BMW PACK M COMPETITION', el: slides.bmw },
    porsche: { label: 'PORSCHE 911 GT3', el: slides.porsche },
    mustang: { label: 'FORD MUSTANG GT 5.0 V8', el: slides.mustang }
  };

  let currentCar = 'mercedes';

  function switchCar(key) {
    if (key === currentCar || !carData[key]) return;
    currentCar = key;

    Object.keys(carData).forEach(k => {
      if (k === key) {
        carData[k].el.classList.add('active');
      } else {
        carData[k].el.classList.remove('active');
      }
    });

    if (nameEl) {
      nameEl.style.opacity = '0';
      setTimeout(() => {
        nameEl.textContent = carData[key].label;
        nameEl.style.opacity = '1';
      }, 200);
    }
  }

  // Scroll listener to smoothly change car as user progresses down the page
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollY / (docHeight || 1)));

    if (progress < 0.22) {
      switchCar('mercedes');
    } else if (progress < 0.50) {
      switchCar('bmw');
    } else if (progress < 0.76) {
      switchCar('porsche');
    } else {
      switchCar('mustang');
    }
  }, { passive: true });

  // Subtle Mouse Parallax Depth
  const stage = document.getElementById('dynamic-bg-stage');
  if (stage) {
    window.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 16;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 12;
      stage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }, { passive: true });
  }
}

