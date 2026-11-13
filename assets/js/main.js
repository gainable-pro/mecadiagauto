/**
 * MECADIAG AUTO - CORE INTERACTION SCRIPTS
 * E85 Calculator, Radar Interactivity, Mobile Nav, Quote & Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
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
        navLinks.style.background = 'rgba(7, 9, 14, 0.98)';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });
  }
}

/* E85 Bio-ethanol Savings Calculator */
function initE85Calculator() {
  const kmSlider = document.getElementById('e85-km-slider');
  const kmValDisplay = document.getElementById('e85-km-display');
  const savingsDisplay = document.getElementById('e85-savings-display');
  const paybackDisplay = document.getElementById('e85-payback-display');

  if (!kmSlider) return;

  function updateSavings() {
    const km = parseInt(kmSlider.value, 10);
    if (kmValDisplay) kmValDisplay.textContent = km.toLocaleString('fr-FR') + ' km / an';

    const avgLitersPer100 = 8.0;
    const priceSP95 = 1.92;
    const priceE85 = 0.84;
    const e85Overconsumption = 1.20; // +20% volume on E85

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
    const service = document.getElementById('quote-service')?.value || 'Reprogrammation';
    const phone = document.getElementById('quote-phone')?.value || '';
    const message = document.getElementById('quote-notes')?.value || '';

    const text = encodeURIComponent(
      `Bonjour MECA DIAG AUTO, je souhaite un devis :\n` +
      `- Véhicule : ${brand} ${model}\n` +
      `- Prestation souhaitée : ${service}\n` +
      `- Mon Téléphone : ${phone}\n` +
      (message ? `- Précisions : ${message}\n` : '') +
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
