// Vértice OS — tema claro/escuro (lê vx-prefs.tema: Sistema | Escuro | Claro)
(function () {
  if (window.vxSetTheme) return;
  var KEY = 'vx-prefs';
  var CSS = "[style*=\"background: rgb(10, 15, 28)\"]:not([data-vx-keep], [data-vx-keep] *){background: #f3f5f9 !important}\n[style*=\"background: rgb(13, 20, 38)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"background: rgb(15, 23, 41)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"background: linear-gradient(160deg, rgb(19, 32, 60)\"]:not([data-vx-keep], [data-vx-keep] *){background: #ffffff !important}\n[style*=\"background: rgb(10, 17, 34)\"]:not([data-vx-keep], [data-vx-keep] *){background: #f6f8fb !important}\n[style*=\"background: rgb(19, 32, 60)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"background: rgb(17, 26, 46)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"background: rgb(13, 21, 40)\"]:not([data-vx-keep], [data-vx-keep] *){background: #e9eef7 !important}\n[style*=\"background: rgb(30, 41, 59)\"]:not([data-vx-keep], [data-vx-keep] *){background: #dbe3ef !important}\n[style*=\"background: rgba(255, 255, 255\"]:not([data-vx-keep], [data-vx-keep] *){background: rgba(15, 23, 42, 0.06) !important}\n[style*=\"background: rgba(3, 6, 14\"]:not([data-vx-keep], [data-vx-keep] *){background: rgba(15, 23, 42, 0.35) !important}\n[style*=\"solid rgba(255, 255, 255\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"dashed rgba(255, 255, 255\"]:not([data-vx-keep], [data-vx-keep] *){border-color: rgba(15, 23, 42, 0.12) !important}\n[style*=\"color: rgb(203, 213, 225)\"]:not([data-vx-keep], [data-vx-keep] *){color: #475569 !important}\n[style*=\"color: rgb(226, 232, 240)\"]:not([data-vx-keep], [data-vx-keep] *){color: #334155 !important}\n[style*=\"color: rgb(148, 163, 184)\"]:not([data-vx-keep], [data-vx-keep] *){color: #64748b !important}\n[style*=\"color: rgb(56, 189, 248)\"]:not([data-vx-keep], [data-vx-keep] *){color: #0284c7 !important}\n[style*=\"color: rgb(96, 165, 250)\"]:not([data-vx-keep], [data-vx-keep] *){color: #2563eb !important}\n[style*=\"color: rgb(125, 211, 252)\"]:not([data-vx-keep], [data-vx-keep] *){color: #0369a1 !important}\n[style*=\"color: rgb(191, 219, 254)\"]:not([data-vx-keep], [data-vx-keep] *){color: #1d4ed8 !important}\n[style*=\"color: rgb(251, 191, 36)\"]:not([data-vx-keep], [data-vx-keep] *){color: #b45309 !important}\n[style*=\"color: rgb(52, 211, 153)\"]:not([data-vx-keep], [data-vx-keep] *){color: #047857 !important}\n[style*=\"color: rgb(252, 165, 165)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"color: rgb(248, 113, 113)\"]:not([data-vx-keep], [data-vx-keep] *){color: #dc2626 !important}\n[style*=\"color: rgb(129, 140, 248)\"]:not([data-vx-keep], [data-vx-keep] *){color: #4f46e5 !important}\n[style*=\"color: rgb(255, 255, 255)\"]:not([data-vx-keep], [data-vx-keep] *):not([style*=\"background: rgb(37, 99, 235)\"]):not([style*=\"background: rgb(30, 58, 95)\"]):not([style*=\"border-radius: 50%\"]):not([style*=\"background: rgb(29, 58, 120)\"]){color: #0f172a !important}\n[style*=\"background: rgb(30, 58, 95)\"],[style*=\"border-radius: 50%\"][style*=\"background: rgb(\"]{color: #ffffff !important}\n[style*=\"background: rgb(255, 255, 255)\"][style*=\"border-radius: 10px\"]:not([data-vx-keep], [data-vx-keep] *){box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.14)}\nbody{background: #f3f5f9 !important}\na:not([data-vx-keep], [data-vx-keep] *){color: #0284c7}\nselect option{background: #ffffff !important; color: #0f172a !important}\n[fill=\"#13203c\"],[fill=\"#131d33\"],[fill=\"#0d1426\"]{fill: #e6ecf5}\n[fill=\"#0a0f1c\"]{fill: #ffffff}\n[stroke=\"rgba(255,255,255,0.07)\"],[stroke=\"rgba(255,255,255,0.12)\"]{stroke: rgba(15,23,42,0.12)}\n[style*=\"linear-gradient(160deg, rgb(17, 28, 53)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"linear-gradient(160deg, rgb(19, 34, 63)\"]:not([data-vx-keep], [data-vx-keep] *),[style*=\"linear-gradient(rgb(17, 27, 51)\"]:not([data-vx-keep], [data-vx-keep] *){background: #ffffff !important}\n[style*=\"repeating-linear-gradient(135deg, rgb(17, 28, 53)\"]:not([data-vx-keep], [data-vx-keep] *){background: repeating-linear-gradient(135deg, #eef2f8 0 10px, #e6ebf3 10px 20px) !important}\n[style*=\"solid rgb(13, 21, 40)\"]:not([data-vx-keep], [data-vx-keep] *){border-color: #ffffff !important}\n[style*=\"background: rgb(13, 21, 40)\"]:not([data-vx-keep], [data-vx-keep] *){background: #f6f8fb !important}\nsvg [fill=\"#ffffff\"]:not([data-vx-keep], [data-vx-keep] *){fill: #0f172a}\nsvg [fill=\"#cbd5e1\"]:not([data-vx-keep], [data-vx-keep] *){fill: #475569}\nsvg [fill=\"#94a3b8\"]:not([data-vx-keep], [data-vx-keep] *){fill: #64748b}\nsvg [fill=\"#0a0f1c\"]:not([data-vx-keep], [data-vx-keep] *),svg [fill=\"#0d1426\"]:not([data-vx-keep], [data-vx-keep] *){fill: #ffffff}\nsvg [fill=\"#131d33\"]:not([data-vx-keep], [data-vx-keep] *),svg [fill=\"#13203c\"]:not([data-vx-keep], [data-vx-keep] *){fill: #e6ecf5}\nsvg [stroke=\"rgba(255,255,255,0.07)\"]:not([data-vx-keep], [data-vx-keep] *),svg [stroke=\"rgba(255,255,255,0.12)\"]:not([data-vx-keep], [data-vx-keep] *){stroke: rgba(15,23,42,0.12)}";
  var mq = window.matchMedia('(prefers-color-scheme: light)');
  var st = document.createElement('style'); st.id = 'vx-theme';
  function pref() { try { return (JSON.parse(localStorage.getItem(KEY) || '{}').tema) || 'Escuro'; } catch (e) { return 'Escuro'; } }
  function mode(t) { return t === 'Claro' ? 'light' : t === 'Escuro' ? 'dark' : (mq.matches ? 'light' : 'dark'); }
  var HOVER = { 'rgb(255, 255, 255)': '#0f172a', 'rgb(125, 211, 252)': '#0369a1', 'rgb(254, 202, 202)': '#b91c1c' };
  var orig = new WeakMap();
  function fixSheets() {
    var light = document.documentElement.dataset.theme === 'light';
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sh = document.styleSheets[i], rs;
      if (sh.ownerNode === st) continue;
      try { rs = sh.cssRules; } catch (e) { continue; }
      for (var j = 0; j < rs.length; j++) {
        var r = rs[j];
        if (!r.selectorText || !/:(hover|active|focus)/.test(r.selectorText)) continue;
        if (!orig.has(r)) orig.set(r, { c: r.style.getPropertyValue('color'), b: r.style.getPropertyValue('background') || r.style.getPropertyValue('background-color') });
        var o = orig.get(r);
        if (HOVER[o.c]) r.style.setProperty('color', light ? HOVER[o.c] : o.c, 'important');
        if (o.b && o.b.indexOf('rgba(255, 255, 255') === 0) r.style.setProperty('background', light ? 'rgba(15, 23, 42, 0.06)' : o.b, 'important');
      }
    }
  }
  function syncProfile() {
    var p; try { p = JSON.parse(localStorage.getItem('vx-profile') || 'null'); } catch (e) {}
    if (!p) return;
    var ini = (p.nome || '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase() || '?';
    var setText = function (el, t) { var n = el.firstChild; if (n && n.nodeType === 3) { if (n.nodeValue !== t) n.nodeValue = t; } };
    document.querySelectorAll('[data-vx-avatar]').forEach(function (el) {
      setText(el, ini);
      if (p.foto) {
        var bg = 'center / cover no-repeat url("' + p.foto + '")';
        if (el.dataset.vxBg !== p.foto.slice(-40)) { el.style.setProperty('background', bg, 'important'); el.dataset.vxBg = p.foto.slice(-40); }
        el.style.setProperty('color', 'transparent', 'important');
      } else {
        el.style.setProperty('background', p.cor || '#1e3a5f', 'important'); el.dataset.vxBg = '';
        el.style.setProperty('color', '#ffffff', 'important');
      }
    });
    document.querySelectorAll('[data-vx-name]').forEach(function (el) { setText(el, p.nome || ''); });
    document.querySelectorAll('[data-vx-email]').forEach(function (el) { setText(el, p.email || ''); });
  }
  window.vxSyncProfile = syncProfile;
  window.addEventListener('vx-profile', syncProfile);
  window.addEventListener('storage', function (e) { if (e.key === 'vx-profile') syncProfile(); });
  var raf = 0;
  function schedule() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; fixSheets(); syncProfile(); }); }
  function apply(t) {
    var m = mode(t == null ? pref() : t);
    document.documentElement.dataset.theme = m;
    document.documentElement.style.colorScheme = m;
    st.textContent = m === 'light' ? CSS : '';
    if (!st.isConnected) document.head.appendChild(st);
    fixSheets();
  }
  window.vxSetTheme = apply;
  var base = document.createElement('style'); base.id = 'vx-theme-base';
  base.textContent = 'html[data-theme="light"] [data-vx-icon="moon"],html[data-theme="dark"] [data-vx-icon="sun"],html[data-vx-read] [data-vx-unread]{display:none !important}';
  document.head.appendChild(base);
  try { if (localStorage.getItem('vx-notif-allread') === '1') document.documentElement.setAttribute('data-vx-read', ''); } catch (e) {}
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-vx-theme-toggle]');
    if (!b) return;
    var next = document.documentElement.dataset.theme === 'light' ? 'Escuro' : 'Claro';
    try { var p = JSON.parse(localStorage.getItem(KEY) || '{}'); p.tema = next; localStorage.setItem(KEY, JSON.stringify(p)); } catch (x) {}
    apply(next);
    window.dispatchEvent(new CustomEvent('vx-theme', { detail: next }));
  });
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(); });
  mq.addEventListener && mq.addEventListener('change', function () { apply(); });
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  apply();
})();
