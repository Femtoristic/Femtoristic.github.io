document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.floating-particles');
  const numParticles = 18;

  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement('div');
    p.className = 'floating-particle';
    // Randomize horizontal position, delay, size, and color
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDelay = (Math.random() * 12) + 's';
    p.style.width = p.style.height = (10 + Math.random() * 18) + 'px';
    // Optional: color variation
    const hue = 210 + Math.floor(Math.random() * 60);
    p.style.background = `radial-gradient(circle, hsla(${hue},70%,70%,0.5) 0%, hsla(${hue},70%,70%,0.1) 80%, transparent 100%)`;
    container.appendChild(p);
  }
}); 