(function () {
  const track = document.getElementById('ticker-track');
  if (!track || typeof REVIEWS === 'undefined') return;

  function itemHTML(r) {
    return '<span class="ticker-item"><span class="stars">\u2605\u2605\u2605\u2605\u2605</span> "' +
      r.text + '" <span class="who">' + r.name + '</span></span>';
  }

  const html = REVIEWS.map(itemHTML).join('');
  // duplicate once so the marquee loop is seamless
  track.innerHTML = html + html;
})();
