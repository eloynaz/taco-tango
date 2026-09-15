(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(function (el) { el.classList.add('pre'); });
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pre');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
  /* if IntersectionObserver is unsupported, elements simply stay visible (CSS default) */

  /* Hero video sound toggle — browsers block autoplay-with-sound, so the
     video starts muted and this button lets a visitor turn the sound on
     with a click (a real user gesture, which browsers allow). */
  const heroVideo = document.getElementById('heroVideo');
  const soundToggle = document.getElementById('soundToggle');
  if (heroVideo && soundToggle) {
    soundToggle.addEventListener('click', function () {
      heroVideo.muted = !heroVideo.muted;
      if (!heroVideo.muted) { heroVideo.play(); }
      soundToggle.textContent = heroVideo.muted ? '🔈' : '🔊';
      soundToggle.setAttribute('aria-pressed', heroVideo.muted ? 'false' : 'true');
      soundToggle.setAttribute('aria-label', heroVideo.muted ? 'Turn hero video sound on' : 'Turn hero video sound off');
    });
  }
})();
