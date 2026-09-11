/* UNFINISHED V5.2.1 — release-blocking QA fix.
   Purpose: remove source-priming race and make matched-link operation explicit. */
(() => {
  const originalBadge = badge;
  badge = function neutralBadge(text) {
    const t = String(text || '');
    if (t === 'WORLD STATE' || / LEFT THIS$/i.test(t)) return originalBadge('STARTING CONDITION');
    return originalBadge(text);
  };

  function ensureOperatorControls() {
    const out = $('handoffOut');
    if (!out || $('copyHuman')) return;
    const human = $('humanLink');
    const world = $('worldLink');
    if (!human || !world) return;

    human.insertAdjacentHTML('afterend', '<div class="actions v521-operator-actions"><button class="secondary" id="copyHuman">COPY HUMAN LINK</button><button class="primary" id="openHuman">OPEN HUMAN TEST</button></div>');
    world.insertAdjacentHTML('afterend', '<div class="actions v521-operator-actions"><button class="secondary" id="copyWorld">COPY WORLD LINK</button><button class="primary" id="openWorld">OPEN WORLD TEST</button></div>');

    const copy = (id, label) => {
      const value = $(id)?.textContent?.trim();
      if (!value) return;
      const fallback = () => prompt('Copy this link', value);
      try {
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(value).then(() => originalBadge(label + ' COPIED')).catch(fallback);
        else fallback();
      } catch { fallback(); }
    };
    const open = id => {
      const value = $(id)?.textContent?.trim();
      if (!value) return;
      const w = window.open(value, '_blank', 'noopener,noreferrer');
      if (!w) location.href = value;
    };

    $('copyHuman').onclick = () => copy('humanLink', 'HUMAN LINK');
    $('openHuman').onclick = () => open('humanLink');
    $('copyWorld').onclick = () => copy('worldLink', 'WORLD LINK');
    $('openWorld').onclick = () => open('worldLink');
  }

  ensureOperatorControls();
  const makeHandoffV52 = makeHandoff;
  makeHandoff = function () {
    const result = makeHandoffV52.apply(this, arguments);
    ensureOperatorControls();
    return result;
  };
  if ($('makeHandoff')) $('makeHandoff').onclick = makeHandoff;

  if ($('debug')) $('debug').textContent = 'v5.2.1';
  document.title = 'UNFINISHED — Intelligent Causal Loop V5.2.1';
  document.documentElement.classList.add('v521ready');
})();
