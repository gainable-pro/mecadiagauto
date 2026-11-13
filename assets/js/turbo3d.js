/**
 * MECADIAG AUTO - 3D TURBOCHARGER & BOOST SOUND SIMULATOR
 * Powered by Three.js & Web Audio API
 */

class Turbo3DVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.compressorWheel = null;
    this.turboGroup = null;
    this.particles = null;
    this.speed = 0.03;
    this.targetSpeed = 0.03;
    this.boostLevel = 0.4;
    this.audioContext = null;
    this.soundEnabled = false;

    this.mouseX = 0;
    this.mouseY = 0;

    this.init();
    this.setupEvents();
    this.animate();
  }

  init() {
    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight || 500;

    // Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 2, 8);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 3, 20);
    cyanLight.position.set(-5, 4, 5);
    this.scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(0xff4d00, 3.5, 20);
    orangeLight.position.set(5, -2, 4);
    this.scene.add(orangeLight);

    // Turbo Root Group
    this.turboGroup = new THREE.Group();
    this.buildTurboModel();
    this.scene.add(this.turboGroup);

    // Particles Vortex
    this.buildAirflowParticles();
  }

  buildTurboModel() {
    // 1. Turbine Volute Outer Housing (Snail shape)
    const torusGeo = new THREE.TorusGeometry(1.8, 0.65, 30, 80, Math.PI * 1.85);
    const housingMat = new THREE.MeshStandardMaterial({
      color: 0x1f2735,
      metalness: 0.88,
      roughness: 0.25,
      wireframe: false
    });
    const volute = new THREE.Mesh(torusGeo, housingMat);
    volute.rotation.z = 0.3;
    this.turboGroup.add(volute);

    // 2. Air Intake Snout (Cylinder front)
    const snoutGeo = new THREE.CylinderGeometry(1.1, 1.25, 1.6, 36, 1, true);
    const snoutMat = new THREE.MeshStandardMaterial({
      color: 0x151b26,
      metalness: 0.9,
      roughness: 0.2
    });
    const snout = new THREE.Mesh(snoutGeo, snoutMat);
    snout.rotation.x = Math.PI / 2;
    snout.position.z = 0.5;
    this.turboGroup.add(snout);

    // Intake Glow Ring
    const ringGeo = new THREE.TorusGeometry(1.26, 0.05, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const intakeRing = new THREE.Mesh(ringGeo, ringMat);
    intakeRing.position.z = 1.3;
    this.turboGroup.add(intakeRing);

    // 3. Compressor Wheel (Rotating rotor inside)
    this.compressorWheel = new THREE.Group();

    // Central Bullet Cone
    const coneGeo = new THREE.ConeGeometry(0.42, 1.3, 32);
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.1
    });
    const cone = new THREE.Mesh(coneGeo, chromeMat);
    cone.rotation.x = Math.PI / 2;
    cone.position.z = 0.45;
    this.compressorWheel.add(cone);

    // Compressor Blades (10 sculpted blades)
    const bladeCount = 10;
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.92,
      roughness: 0.18,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < bladeCount; i++) {
      const angle = (i / bladeCount) * Math.PI * 2;
      const bladeGeo = new THREE.PlaneGeometry(0.45, 0.95, 4, 4);
      
      // Curve blade vertices for aero tilt
      const pos = bladeGeo.attributes.position;
      for (let j = 0; j < pos.count; j++) {
        const y = pos.getY(j);
        pos.setZ(j, Math.sin(y * 2) * 0.18);
      }
      bladeGeo.computeVertexNormals();

      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(Math.cos(angle) * 0.6, Math.sin(angle) * 0.6, 0.4);
      blade.rotation.z = angle + 0.4;
      blade.rotation.y = 0.35;
      this.compressorWheel.add(blade);
    }

    this.turboGroup.add(this.compressorWheel);

    // 4. Wastegate Actuator Cylinder (On the side)
    const actuatorGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 24);
    const actuatorMat = new THREE.MeshStandardMaterial({
      color: 0xff4d00,
      metalness: 0.7,
      roughness: 0.3
    });
    const actuator = new THREE.Mesh(actuatorGeo, actuatorMat);
    actuator.position.set(2.4, 1.3, -0.4);
    actuator.rotation.z = -0.5;
    this.turboGroup.add(actuator);

    // Rod
    const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 16);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9 });
    const rod = new THREE.Mesh(rodGeo, rodMat);
    rod.position.set(1.9, 0.7, -0.4);
    rod.rotation.z = -0.5;
    this.turboGroup.add(rod);

    // Initial tilt
    this.turboGroup.rotation.y = -0.35;
    this.turboGroup.rotation.x = 0.15;
  }

  buildAirflowParticles() {
    const particleCount = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 2.2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = Math.sin(theta) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

      // Cyan to orange particle hues
      const isOrange = Math.random() > 0.6;
      colors[i * 3] = isOrange ? 1.0 : 0.0;
      colors[i * 3 + 1] = isOrange ? 0.3 : 0.94;
      colors[i * 3 + 2] = isOrange ? 0.0 : 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.turboGroup.add(this.particles);
  }

  setupEvents() {
    // Mouse hover tracking for 3D tilt
    const container = this.canvas.parentElement;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      this.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    });

    container.addEventListener('mouseleave', () => {
      this.mouseX = 0;
      this.mouseY = 0;
      this.targetSpeed = 0.03;
      this.updateHud(0.4, 18500);
    });

    // Boost acceleration on hover / click
    container.addEventListener('mouseenter', () => {
      this.triggerBoost();
    });

    // Resize handler
    window.addEventListener('resize', () => {
      if (!this.canvas.parentElement) return;
      const w = this.canvas.parentElement.clientWidth;
      const h = this.canvas.parentElement.clientHeight || 500;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Sound toggle button
    const soundBtn = document.getElementById('btn-turbo-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        soundBtn.innerHTML = this.soundEnabled ? '🔊 Son : Actif' : '🔇 Son Turbo';
        if (this.soundEnabled) {
          this.playTurboSound();
        }
      });
    }
  }

  triggerBoost() {
    this.targetSpeed = 0.22;
    this.boostLevel = 1.85;
    this.updateHud(1.9, 185000);
    if (this.soundEnabled) {
      this.playTurboSound();
    }
  }

  updateHud(bar, rpm) {
    const barEl = document.getElementById('hud-boost-bar');
    const rpmEl = document.getElementById('hud-turbo-rpm');
    if (barEl) barEl.textContent = bar.toFixed(1) + ' BAR';
    if (rpmEl) rpmEl.textContent = rpm.toLocaleString('fr-FR') + ' RPM';
  }

  playTurboSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const now = this.audioContext.currentTime;

      // 1. Spool Whistle (Sine oscillator swept up)
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(3200, now + 0.8);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);
      osc.start(now);
      osc.stop(now + 1.3);

      // 2. Dump Valve PSSHH / Stututu (Noise burst)
      setTimeout(() => {
        if (!this.audioContext) return;
        const bufferSize = this.audioContext.sampleRate * 0.5;
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioContext.createBufferSource();
        noise.buffer = buffer;

        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800;
        filter.Q.value = 3.0;

        const noiseGain = this.audioContext.createGain();
        const t = this.audioContext.currentTime;
        noiseGain.gain.setValueAtTime(0.2, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.audioContext.destination);

        noise.start(t);
        noise.stop(t + 0.5);
      }, 700);
    } catch (e) {
      console.log('Audio disabled or blocked', e);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Smooth speed interpolation
    this.speed += (this.targetSpeed - this.speed) * 0.05;

    // Spin compressor wheel
    if (this.compressorWheel) {
      this.compressorWheel.rotation.z += this.speed;
    }

    // 3D Tilt following mouse
    if (this.turboGroup) {
      this.turboGroup.rotation.y += (this.mouseX * 0.6 - 0.35 - this.turboGroup.rotation.y) * 0.05;
      this.turboGroup.rotation.x += (-this.mouseY * 0.4 + 0.15 - this.turboGroup.rotation.x) * 0.05;
    }

    // Swirling airflow particles
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += this.speed * 1.5;
        if (positions[i + 2] > 2.5) {
          positions[i + 2] = -2.5;
        }
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.rotation.z += this.speed * 0.4;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('canvas-turbo3d')) {
    new Turbo3DVisualizer('canvas-turbo3d');
  }
});

