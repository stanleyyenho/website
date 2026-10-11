// stanleyho.me: theme toggle, design reel, viewer, copy email.
(function () {
  var root = document.documentElement;
  var media = matchMedia('(prefers-color-scheme: dark)');

  // Theme toggle (system default; an explicit choice is remembered)
  function isDark() {
    var t = root.dataset.theme;
    return t ? t === 'dark' : media.matches;
  }
  function syncThemeUi() {
    var dark = isDark();
    document.querySelectorAll('.theme').forEach(function (b) {
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute('content', dark ? '#0c131c' : '#e6edf4');
    });
  }
  document.querySelectorAll('.theme').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.classList.add('no-transition');
      root.dataset.theme = next;
      requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove('no-transition'); }); });
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeUi();
    });
  });
  function quiet() {
    root.classList.add('no-transition');
    requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.remove('no-transition'); }); });
  }
  media.addEventListener('change', function () { quiet(); syncThemeUi(); });
  syncThemeUi();

  // Design reel
  var track = document.querySelector('.reel .track');
  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.card'));
    var countEl = document.querySelector('.reel-bar .count b');
    var bar = document.querySelector('.reel-bar .progress');
    var prev = document.querySelector('[data-reel="prev"]');
    var next = document.querySelector('[data-reel="next"]');
    var pad = function () { return parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0; };

    function current() {
      var x = track.scrollLeft + pad() + 4;
      var i = 0;
      cards.forEach(function (c, k) { if (c.offsetLeft - track.offsetLeft <= x) i = k; });
      return i;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var atEnd = track.scrollLeft >= max - 2;
      var i = atEnd ? cards.length - 1 : current();
      if (countEl) countEl.textContent = String(i + 1).padStart(2, '0');
      if (bar) bar.style.setProperty('--p', ((i + 1) / cards.length * 100) + '%');
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = atEnd;
    }
    function go(i) {
      i = Math.max(0, Math.min(cards.length - 1, i));
      track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft - pad(), behavior: 'smooth' });
    }
    prev.addEventListener('click', function () { go(current() - 1); });
    next.addEventListener('click', function () { go(current() + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(current() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(current() - 1); }
    });
    track.addEventListener('scroll', function () { requestAnimationFrame(update); }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  // Viewer
  var viewer = document.getElementById('viewer');
  if (viewer && track) {
    var img = document.createElement('img');
    viewer.querySelector('figure').append(img);
    var title = viewer.querySelector('.t b');
    var role = viewer.querySelector('.t span');
    var count = viewer.querySelector('.count');
    var list = Array.prototype.slice.call(track.querySelectorAll('button.art'));
    var idx = 0;
    var opener = null;

    function show(i) {
      idx = (i + list.length) % list.length;
      var t = list[idx];
      img.classList.remove('swap');
      void img.offsetWidth;
      img.src = t.dataset.full;
      img.alt = t.querySelector('img').alt;
      img.classList.add('swap');
      title.textContent = t.dataset.title;
      role.textContent = ' · ' + t.dataset.role;
      count.textContent = (idx + 1) + ' / ' + list.length;
    }

    track.addEventListener('click', function (e) {
      var t = e.target.closest('button.art');
      if (!t) return;
      opener = t;
      show(list.indexOf(t));
      viewer.showModal();
    });
    viewer.querySelector('[data-prev]').addEventListener('click', function () { show(idx - 1); });
    viewer.querySelector('[data-next]').addEventListener('click', function () { show(idx + 1); });
    viewer.querySelector('[data-close]').addEventListener('click', function () { viewer.close(); });
    document.addEventListener('keydown', function (e) {
      if (!viewer.open) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
    });
    viewer.addEventListener('click', function (e) {
      if (e.target === viewer || e.target.tagName === 'FIGURE') viewer.close();
    });
    viewer.addEventListener('close', function () { if (opener) opener.focus(); });
  }

  // Copy email
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var done = function () {
        btn.dataset.state = 'done';
        btn.setAttribute('aria-label', 'email address copied');
        setTimeout(function () { btn.dataset.state = ''; btn.setAttribute('aria-label', 'copy email address'); }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done, function () {});
    });
  });
})();
