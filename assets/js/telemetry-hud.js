/**
 * MECADIAG AUTO - UI/UX HIGH-PERFORMANCE CAR TELEMETRY COCKPIT
 * Interactive Tachometer, Shifting Lights, Rev Throttle & X-Ray Chassis HUD
 */

class CarPerformanceCockpit {
  constructor() {
    this.rpm = 1200;
    this.targetRpm = 1200;
    this.maxRpm = 7500;
    this.speed = 0;
    this.boost = 0.3;
    this.gear = 'N';
    this.isRevving = false;
    this.mode = 'sport'; // 'sport', 'race', 'eco'

    this.tachNeedle = document.getElementById('tach-needle');
    this.rpmDisplay = document.getElementById('hud-rpm-counter');
    this.speedDisplay = document.getElementById('hud-speed-counter');
    this.gearDisplay = document.getElementById('hud-gear-indicator');
    this.boostBar = document.getElementById('hud-boost-fill');
    this.boostVal = document.getElementById('hud-boost-value');
    this.shiftLeds = document.querySelectorAll('.shift-led');
    this.revBtn = document.getElementById('btn-cockpit-rev');

    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;

    this.init();
  }

  init() {
    this.setupControls();
    this.startLoop();
  }

  setupControls() {
    if (this.revBtn) {
      // Mouse & Touch events for Revving
      const startRev = (e) => {
        e.preventDefault();
        this.isRevving = true;
        this.gear = '3';
        this.targetRpm = 6800;
        this.startEngineSound();
      };

      const stopRev = (e) => {
        e.preventDefault();
        this.isRevving = false;
        this.targetRpm = 1200;
        this.stopEngineSound();
      };

      this.revBtn.addEventListener('mousedown', startRev);
      this.revBtn.addEventListener('mouseup', stopRev);
      this.revBtn.addEventListener('mouseleave', stopRev);
      this.revBtn.addEventListener('touchstart', startRev, { passive: false });
      this.revBtn.addEventListener('touchend', stopRev, { passive: false });
    }

    // Mode Selector buttons
    const modeBtns = document.querySelectorAll('.cockpit-mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setMode(btn.dataset.mode);
      });
    });

    // Interactive Chassis Hotspots
    const hotspots = document.querySelectorAll('.chassis-hotspot');
    const infoTitle = document.getElementById('hotspot-title');
    const infoDesc = document.getElementById('hotspot-desc');

    const hotspotData = {
      turbo: {
        title: "TURBOCOMPRESSEUR SURALIMENTÉ",
        desc: "Optimisation de la pression de consigne (jusqu'à +0.5 bar) et calibrage de la wastegate pour un temps de réponse (spool) réduit à néant."
      },
      ecu: {
        title: "CALCULATEUR MOTEUR (ECU)",
        desc: "Cœur électronique : reprogrammation sur mesure des tables d'injection, de richesse Lambda et de timing d'allumage avec sauvegarde complète d'origine."
      },
      e85: {
        title: "SYSTÈME D'INJECTION & FLEXFUEL",
        desc: "Cartographie bi-carburant automatique : adaptation du débit injecteurs pour rouler au Superéthanol E85 tout en préservant le moteur."
      },
      exhaust: {
        title: "LIGNE D'ÉCHAPPEMENT & DÉPOLLUTION",
        desc: "Gestion FAP (Filtre à Particules), catalyseur sport et solutions AdBlue / SCR pour véhicules légers et professionnels."
      }
    };

    hotspots.forEach(spot => {
      spot.addEventListener('mouseenter', () => {
        const id = spot.dataset.part;
        if (hotspotData[id] && infoTitle && infoDesc) {
          infoTitle.textContent = hotspotData[id].title;
          infoDesc.textContent = hotspotData[id].desc;
          hotspots.forEach(s => s.classList.remove('active-spot'));
          spot.classList.add('active-spot');
        }
      });
    });
  }

  setMode(mode) {
    this.mode = mode;
    const cluster = document.querySelector('.cockpit-cluster');
    if (!cluster) return;

    cluster.classList.remove('mode-sport', 'mode-race', 'mode-eco');
    cluster.classList.add(`mode-${mode}`);

    if (mode === 'eco') {
      this.maxRpm = 6000;
    } else if (mode === 'race') {
      this.maxRpm = 8200;
    } else {
      this.maxRpm = 7500;
    }
  }

  startEngineSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      if (!this.oscillator) {
        this.oscillator = this.audioCtx.createOscillator();
        this.gainNode = this.audioCtx.createGain();

        this.oscillator.type = 'sawtooth';
        this.oscillator.frequency.setValueAtTime(65, this.audioCtx.currentTime);

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 450;

        this.gainNode.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(0.08, this.audioCtx.currentTime + 0.1);

        this.oscillator.connect(filter);
        filter.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);

        this.oscillator.start();
      }
    } catch (e) {
      // Audio fallback
    }
  }

  stopEngineSound() {
    if (this.gainNode && this.audioCtx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.3);
        setTimeout(() => {
          if (this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
          }
        }, 320);
      } catch (e) {}
    }
  }

  startLoop() {
    const loop = () => {
      // Smooth RPM movement
      const delta = (this.targetRpm - this.rpm) * 0.12;
      this.rpm += delta;

      // Update sound pitch
      if (this.oscillator && this.audioCtx) {
        const pitch = 50 + (this.rpm / this.maxRpm) * 220;
        this.oscillator.frequency.setTargetAtTime(pitch, this.audioCtx.currentTime, 0.05);
      }

      // Needle angle (-135deg to +135deg)
      const ratio = Math.min(1, Math.max(0, this.rpm / this.maxRpm));
      const angle = -135 + ratio * 270;
      if (this.tachNeedle) {
        this.tachNeedle.style.transform = `rotate(${angle}deg)`;
      }

      // Speed & Boost calculation
      if (this.isRevving) {
        this.speed = Math.min(188, this.speed + 1.8);
        this.boost = 0.5 + ratio * 1.5;
      } else {
        this.speed = Math.max(0, this.speed - 2.5);
        this.boost = Math.max(0.2, this.boost - 0.05);
      }

      // Display values
      if (this.rpmDisplay) this.rpmDisplay.textContent = Math.round(this.rpm);
      if (this.speedDisplay) this.speedDisplay.textContent = Math.round(this.speed);
      if (this.gearDisplay) this.gearDisplay.textContent = this.speed > 5 ? (this.speed > 80 ? '4' : '3') : 'N';
      if (this.boostVal) this.boostVal.textContent = this.boost.toFixed(2) + ' BAR';
      if (this.boostBar) this.boostBar.style.width = Math.min(100, (this.boost / 2.2) * 100) + '%';

      // Shift LEDs lighting
      const ledCount = this.shiftLeds.length;
      const litCount = Math.floor(ratio * (ledCount + 1));
      this.shiftLeds.forEach((led, i) => {
        if (i < litCount) {
          led.classList.add('lit');
        } else {
          led.classList.remove('lit');
        }
      });

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CarPerformanceCockpit();
});

