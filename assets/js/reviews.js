(function () {
  const grid = document.getElementById('reviews-grid');
  if (!grid || typeof REVIEWS === 'undefined' || !REVIEWS.length) return;

  /* How many cards show at once, by viewport width. Mirrors the
     grid-template-columns breakpoints in styles.css so the JS always
     grabs exactly as many reviews as are visually on screen. */
  const BREAKPOINTS = [
    { max: 480, cols: 1 },
    { max: 760, cols: 2 },
    { max: 1000, cols: 3 },
    { max: 1300, cols: 4 }
  ];
  function getColumns() {
    const w = window.innerWidth;
    for (let i = 0; i < BREAKPOINTS.length; i++) {
      if (w <= BREAKPOINTS[i].max) return BREAKPOINTS[i].cols;
    }
    return 5;
  }

  function cardHTML(r) {
    return '<div class="review-card">' +
      '<span class="stars">★★★★★</span>' +
      '<p>&ldquo;' + r.text + '&rdquo;</p>' +
      '<span class="who">' + r.name + '</span>' +
      '</div>';
  }

  let cols = getColumns();
  let index = 0;
  const ROTATE_MS = 20000;
  let timer = null;

  function paint() {
    grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    const batch = [];
    for (let i = 0; i < cols; i++) {
      batch.push(REVIEWS[(index + i) % REVIEWS.length]);
    }
    grid.innerHTML = batch.map(cardHTML).join('');
  }

  /* Cross-fades to a new batch (or a new column count) rather than
     swapping instantly, so the rotation reads as a deliberate change
     and not a flicker. */
  function transitionTo(mutate) {
    grid.classList.add('is-fading');
    window.setTimeout(function () {
      mutate();
      paint();
      grid.classList.remove('is-fading');
    }, 250);
  }

  function advance() {
    transitionTo(function () { index = (index + cols) % REVIEWS.length; });
  }

  function startTimer() {
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(advance, ROTATE_MS);
  }

  paint();
  startTimer();

  let resizeTimeout;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(function () {
      const newCols = getColumns();
      if (newCols !== cols) {
        transitionTo(function () { cols = newCols; });
        startTimer();
      }
    }, 200);
  });
})();

