/* Мудря йога — веб-версия. Данные поз и сетов: data.json (из AtlasCatalog приложения), фигура: emulator/ (суставный движок: позы с анатомическими пределами, переходы с опорами). */
(function () {
  'use strict';
  const CFG = window.MUDRYA_CFG || {};
  const BASE = CFG.base || '';
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- каталог программ (сеты приложения) ---------- */
  const SETS = [
    { id: 'at_sn', name: 'Сурья Намаскар', kind: 'sun', tag: 'Утро', desc: 'Классическое приветствие солнцу: бодрость, разогрев всего тела, ясная голова.', lvl: 'для всех' },
    { id: 'at_cn', name: 'Чандра Намаскар', kind: 'moon', tag: 'Вечер', desc: 'Лунная последовательность: мягко, с опорой на колено, снимает напряжение дня.', lvl: 'для всех' },
    { id: 'at_ns', name: 'Мягкий вход', kind: 'calm', tag: 'Разминка', desc: 'Короткая подготовка: расслабление на пятках, упоры, лёгкие прогибы.', lvl: 'новичкам' },
    { id: 'at_zs', name: 'Заминка', kind: 'calm', tag: 'Вечер', desc: 'Спокойное завершение: сидячие позы и отдых лёжа.', lvl: 'для всех' },
    { id: 'at_ss2', name: 'Разминка: ноги и пресс', kind: 'warm', tag: 'Сила', desc: 'Махи и подъёмы ног лёжа — сильный центр и лёгкие ноги.', lvl: 'средний' },
    { id: 'at_ss6', name: 'Разминка: спина и бёдра', kind: 'warm', tag: 'Гибкость', desc: 'Скручивания и раскрытие таза — для спины и тазобедренных.', lvl: 'средний' },
    { id: 'at_ss7', name: 'Разминка: баланс', kind: 'warm', tag: 'Баланс', desc: 'Позы равновесия и концентрации внимания.', lvl: 'средний' },
    { id: 'at_ss1', name: 'Разминка: прогибы', kind: 'warm', tag: 'Спина', desc: 'Кобра, лук, верблюд — раскрытие груди и подвижность позвоночника.', lvl: 'средний' },
    { id: 'at_ss4', name: 'Разминка: живот и таз', kind: 'warm', tag: 'Сила', desc: 'Работа животом, обратные позы и «ножницы».', lvl: 'средний' },
    { id: 'at_ss5', name: 'Разминка: «ножницы»', kind: 'warm', tag: 'Сила', desc: 'Короткий плотный блок на пресс и ноги.', lvl: 'средний' },
    { id: 'surya', name: 'Солнечное кольцо', kind: 'sun', tag: 'Утро', desc: 'Полный солнечный круг по книге: 77 позиций, выпады и связки на обе стороны.', lvl: 'с опытом' },
    { id: 'chandra', name: 'Лунное кольцо', kind: 'moon', tag: 'Вечер', desc: 'Полный лунный круг: 99 позиций, глубокие растяжения и связки.', lvl: 'с опытом' },
    { id: 'at_ss3', name: 'Перевёрнутые позы', kind: 'warm', tag: 'Опыт', desc: 'Стойки на голове и лопатках, плуг. Только если вы уже делали их с инструктором.', lvl: 'опытным' },
    { id: 'at_st', name: 'Для продвинутых', kind: 'warm', tag: 'Опыт', desc: 'Стойка всадника, балансы на руках и сложные связки.', lvl: 'опытным' },
    { id: 'full_sun', name: 'Полный цикл: Солнце и Луна', kind: 'sun', tag: 'Большая практика', desc: 'Вся система подряд: солнечный и лунный круги, разминки и заминка. Около двух часов.', lvl: 'опытным' },
    { id: 'full_moon', name: 'Полный цикл: Луна', kind: 'moon', tag: 'Большая практика', desc: 'Лунная система целиком: лунный круг, разминки и заминка.', lvl: 'опытным' },
    { id: 'at_ds', name: 'Переход к заминке', kind: 'calm', tag: 'Вечер', desc: 'Плавный спуск после активной части: от упоров к сидячим позам.', lvl: 'для всех' },
    { id: 'at_skd', name: 'Солнце: доп. элементы', kind: 'sun', tag: 'Утро', desc: 'Дополнительные связки к солнечному кругу.', lvl: 'с опытом' },
    { id: 'at_lkd', name: 'Луна: доп. элементы', kind: 'moon', tag: 'Вечер', desc: 'Короткое дополнение к лунному кругу.', lvl: 'с опытом' },
    { id: 'at_ssd', name: 'Разминка: доп. элементы', kind: 'warm', tag: 'Разминка', desc: 'Расширенный набор упражнений разминки.', lvl: 'средний' },
    { id: 'at_zsd', name: 'Заминка: доп. элементы', kind: 'calm', tag: 'Вечер', desc: 'Расширенный набор сидячих и лёжа поз для заминки.', lvl: 'для всех' },
  ];
  const BREATHS = [
    { id: 'sos', name: 'SOS: 2 минуты', desc: 'Когда накрывает тревога: вдох 4, выдох 6. Выдох длиннее — нервная система успокаивается.', ph: [['Вдох', 4], ['Выдох', 6]], min: 2 },
    { id: 'square', name: 'Квадрат 4-4-4-4', desc: 'Собраться перед важным делом: вдох, пауза, выдох, пауза — по 4 счёта.', ph: [['Вдох', 4], ['Пауза', 4], ['Выдох', 4], ['Пауза', 4]], min: 3 },
    { id: '478', name: '4-7-8 перед сном', desc: 'Вдох 4, задержка 7, медленный выдох 8. 4–6 кругов перед сном.', ph: [['Вдох', 4], ['Задержка', 7], ['Выдох', 8]], min: 2 },
    { id: 'calm', name: 'Спокойное дыхание', desc: 'Без задержек: вдох 5, выдох 5. Подходит всем, в том числе при давлении и беременности.', ph: [['Вдох', 5], ['Выдох', 5]], min: 5 },
  ];

  let DATA = null;
  const store = {
    k: 'mudrya_web_v1',
    get() { try { return JSON.parse(localStorage.getItem(this.k)) || {}; } catch (e) { return {}; } },
    set(v) { try { localStorage.setItem(this.k, JSON.stringify(v)); } catch (e) {} },
  };
  let PROG = { sessions: [] };

  async function api(path, body) {
    if (!CFG.rest) return null;
    const r = await fetch(CFG.rest + path, { method: body ? 'POST' : 'GET', credentials: 'same-origin', headers: Object.assign({ 'X-WP-Nonce': CFG.nonce || '' }, body ? { 'Content-Type': 'application/json' } : {}), body: body ? JSON.stringify(body) : undefined });
    if (!r.ok) throw new Error('api ' + r.status);
    return r.json();
  }
  async function loadProgress() {
    const local = store.get();
    PROG = { sessions: local.sessions || [], settings: local.settings || {} };
    try { const r = await api('progress'); if (r && r.sessions) PROG = r; } catch (e) {}
    PROG.settings = Object.assign({ breath: 4, voice: true }, PROG.settings || {});
  }
  async function saveProgress() {
    store.set(PROG);
    try { await api('progress', PROG); } catch (e) {}
  }

  /* ---------- сборка сессии ---------- */
  let PROGS = { levels: [] };
  const progById = id => { for (const l of PROGS.levels) for (const p of l.programs) if (p.id === id && !p.ref) return p; return null; };
  /* шаг программы → шаг плеера: b вдохов в позе или n повторов «вдох — в позу alt, выдох — обратно» */
  const progSteps = p => p.steps.map(s => s.alt ? { p: s.p, m: s.m, alt: s.alt, t: s.t, c: s.c, e: [].concat(...Array(s.n || 4).fill([1, 0])), h: [] }
    : { p: s.p, m: s.m, t: s.t, c: s.c, e: [1, 0], h: [].concat(...Array(Math.max(0, (s.b || 3) - 1)).fill([1, 0])) });
  function stepsOf(setId) {
    const pr = progById(setId); if (pr) return progSteps(pr);
    const S = DATA.S.find(s => s.id === setId); if (!S) return [];
    const out = [];
    S.b.forEach(bid => { const B = DATA.B[bid]; if (B) B.s.forEach(st => out.push(Object.assign({ block: B.t }, st))); });
    return out;
  }
  const breaths = st => st.e.length + st.h.length;
  function minutesOf(setId, sec) {
    const n = stepsOf(setId).reduce((a, s) => a + breaths(s), 0);
    return Math.max(1, Math.round(n * (sec || 4) / 60));
  }

  /* ---------- экраны ---------- */
  const root = $('#mudrya-app');
  const TABS = [['home', 'Сегодня'], ['levels', 'Уровни'], ['sets', 'Практики'], ['cat', 'Каталог поз'], ['pick', 'Подбор'], ['breath', 'Дыхание'], ['progress', 'Прогресс']];
  let tab = 'home';
  function shell() {
    root.innerHTML = '';
    const top = el('div', 'my-top');
    top.appendChild(el('a', 'my-logo', 'Мудря <b>йога</b>')).href = CFG.home || '#';
    const tabs = el('div', 'my-tabs');
    TABS.forEach(([id, n]) => { const b = el('button', id === tab ? 'on' : '', n); b.onclick = () => { stopAll(); tab = id; render(); }; tabs.appendChild(b); });
    top.appendChild(tabs);
    if (CFG.user) top.appendChild(el('span', 'my-user', esc(CFG.user) + (CFG.logout ? ' · <a href="' + CFG.logout + '">выйти</a>' : '')));
    root.appendChild(top);
    const w = el('div', 'my-wrap'); root.appendChild(w); return w;
  }
  function render() {
    const w = shell();
    ({ home, levels, sets, cat, pick, breath, progress })[tab](w);
    window.scrollTo(0, 0);
  }
  function setCard(s) {
    const c = el('div', 'card');
    const min = minutesOf(s.id, PROG.settings.breath);
    c.innerHTML = '<div><span class="chip ' + (s.kind === 'sun' ? 'sun' : s.kind === 'moon' ? 'moon' : '') + '">' + esc(s.tag) + '</span><span class="chip">' + esc(s.lvl) + '</span></div>' +
      '<h3>' + esc(s.name) + '</h3><p class="muted">' + esc(s.desc) + '</p><div class="row"><b>≈ ' + min + ' мин</b></div>';
    const b = el('button', 'btn sm ' + (s.kind === 'moon' ? 'moon' : 'sun'), 'Начать'); b.style.marginTop = '10px';
    b.onclick = () => player(s.id); c.appendChild(b); return c;
  }
  function home(w) {
    const h = new Date().getHours();
    const evening = h >= 17 || h < 4;
    const main = SETS.find(s => s.id === (evening ? 'at_cn' : 'at_sn'));
    w.appendChild(el('h1', '', evening ? 'Добрый вечер' : h < 12 ? 'Доброе утро' : 'Добрый день'));
    w.appendChild(el('p', 'muted', evening ? 'Вечером — Чандра Намаскар: мягко отпустить день и подготовить тело ко сну.' : 'Утром — Сурья Намаскар: разбудить тело, разогреть суставы и включить голову.'));
    const g = el('div', 'grid'); g.appendChild(setCard(main));
    g.appendChild(setCard(SETS.find(s => s.id === (evening ? 'at_zs' : 'at_ns'))));
    const sos = el('div', 'card', '<span class="chip free">Помощь</span><h3>Тревожно прямо сейчас?</h3><p class="muted">Две минуты дыхания с длинным выдохом. Просто следуйте за кругом.</p>');
    const sb = el('button', 'btn sm moon', 'Дышать'); sb.onclick = () => { tab = 'breath'; render(); setTimeout(() => runBreath(BREATHS[0]), 50); }; sos.appendChild(sb); g.appendChild(sos);
    const lv = el('div', 'card', '<span class="chip">Для всех</span><h3>Программы по уровням</h3><p class="muted">Малыши, дети, начинающие, опытные, 60+, на стуле, лёжа и самые маленькие движения.</p>');
    const lb = el('button', 'btn sm', 'Выбрать уровень'); lb.onclick = () => { tab = 'levels'; render(); }; lv.appendChild(lb); g.appendChild(lv);
    w.appendChild(g);
    const st = stats();
    w.appendChild(el('div', 'sec', '<h2>Ваш путь</h2><div class="grid"><div class="card"><div class="stat">' + st.count + '</div><div class="muted">практик всего</div></div><div class="card"><div class="stat">' + st.minutes + '</div><div class="muted">минут на коврике</div></div><div class="card"><div class="stat">' + st.streak + '</div><div class="muted">дней подряд</div></div></div>'));
  }
  function levels(w) {
    w.appendChild(el('h1', '', 'Программы по уровням'));
    w.appendChild(el('p', 'muted', 'От малышей и полностью здоровых до тех, кому трудно пошевелить пальцем. Выберите свой уровень: фигура показывает каждое движение, темп — по вашему дыханию.'));
    PROGS.levels.forEach(l => {
      const s = el('div', 'sec'); s.appendChild(el('h2', '', esc(l.name))); s.appendChild(el('p', 'muted', esc(l.who)));
      const g = el('div', 'grid');
      l.programs.forEach(p => { const meta = SETS.find(x => x.id === p.id); if (meta) g.appendChild(setCard(Object.assign({}, meta, { name: p.name, desc: p.desc }))); });
      s.appendChild(g); w.appendChild(s);
    });
    w.appendChild(el('p', 'note', 'Йога не заменяет лечение. При болезни, после травм и операций, при беременности, высоком давлении, а также для программ «Лёжа» и «Минимальная подвижность» согласуйте занятия с врачом или реабилитологом. Двигайтесь без боли.'));
  }
  /* каталог: все позы приложения (атлас и 2053 позы каталога) на объёмной фигуре */
  let CATD = null;
  async function cat(w) {
    w.appendChild(el('h1', '', 'Каталог поз'));
    w.appendChild(el('p', 'muted', 'Все позы приложения: 235 базовых асан и 1818 вариаций. Нажмите на название — фигура покажет позу. Позы с перекрещенными ногами и повороты в каталоге показаны упрощённо.'));
    const pl = el('div', 'pl'); w.appendChild(pl);
    const stage = el('div', 'stage', '<div class="loading">Загружаем фигуру…</div>'); const ifr = el('iframe'); ifr.title = 'Фигура'; ifr.src = BASE + 'emulator/index.html?v=' + encodeURIComponent(CFG.ver || '1'); stage.insertBefore(ifr, stage.firstChild); pl.appendChild(stage);
    const side = el('div', 'side'); pl.appendChild(side);
    const box = el('div', 'card', '<input type="search" placeholder="Поиск: собака, мост, лотос…" style="width:100%;padding:8px;border-radius:8px;border:1px solid #ccc"><select style="width:100%;margin-top:8px;padding:6px"><option value="">Все семейства</option></select><label class="lbl"><input type="checkbox"> только базовые</label><p class="muted cnt"></p>');
    side.appendChild(box); const list = el('div', 'card list'); side.appendChild(list);
    const ready = setInterval(() => { try { const M = ifr.contentWindow.Mudrya; if (M && M.loaded) { clearInterval(ready); const l = $('.loading', stage); if (l) l.remove(); M.setTheme('dark'); } } catch (e) {} }, 300);
    if (!CATD) CATD = await fetch(BASE + 'emulator/catalog.json?v=' + encodeURIComponent(CFG.ver || '1')).then(r => r.json());
    const dcard = el('div', 'card desc', '<p class="muted">Выберите позу в списке — здесь появится описание: польза, как выполнять, ошибки, облегчение, противопоказания и работающие мышцы.</p>'); w.appendChild(dcard);
    let DESC = null; const descP = fetch(BASE + 'emulator/desc.json?v=' + encodeURIComponent(CFG.ver || '1')).then(r => r.json()).then(j => DESC = j).catch(() => null);
    const LVN = { beginner: 'начальный', intermediate: 'средний', advanced: 'продвинутый' };
    const ul = a => a && a.length ? '<ul>' + a.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' : '';
    async function showDesc(id) { await descP; if (!DESC || !DESC[id]) { dcard.innerHTML = '<p class="muted">Описание не найдено.</p>'; return; }
      const v = DESC[id], c = CATD[id] || {}, b = v.base ? DESC[v.base] : v, bn = v.base ? (CATD[v.base] || {}).n : null; let h = '';
      h += '<h2>' + esc(c.n || v.nm.ru) + '</h2><p class="muted">' + esc([v.nm.sanskrit, v.nm.en].filter(Boolean).join(' · ')) + '</p>';
      h += '<p><span class="chip">' + esc(LVN[c.lvl] || '') + '</span>' + (FAM[c.fam] ? '<span class="chip">' + esc(FAM[c.fam]) + '</span>' : '') + (v.rl && v.base ? '<span class="chip">' + esc(v.rl) + '</span>' : '') + '</p>';
      if (v.base) { h += '<p>Вариация позы <b>' + esc(bn || '') + '</b>.' + (v.rp ? ' ' + esc(v.rp) : '') + '</p>'; if (v.ch && v.ch.length) h += '<h3>Чем отличается</h3>' + ul(v.ch); }
      if (b.b) h += '<h3>Польза</h3><p>' + esc(b.b) + '</p>';
      if (b.st && b.st.length) h += '<h3>' + (v.base ? 'Как выполнять (основа — базовая поза)' : 'Как выполнять') + '</h3><ol>' + b.st.map(x => '<li>' + esc(x) + '</li>').join('') + '</ol>';
      if (b.er) h += '<h3>Частая ошибка</h3><p>' + esc(b.er) + '</p>';
      if (b.ez) h += '<h3>Облегчение</h3><p>' + esc(b.ez) + '</p>';
      if (b.tp) h += '<h3>Совет</h3><p>' + esc(b.tp) + '</p>';
      if (v.gz || b.gz) h += '<p><b>Взгляд:</b> ' + esc(v.gz || b.gz) + '</p>';
      const mu = v.mu || b.mu; if (mu) h += '<h3>Мышцы</h3><p><b>Основные:</b> ' + esc((mu.p || []).join(', ')) + (mu.s && mu.s.length ? '<br><b>Помогают:</b> ' + esc(mu.s.join(', ')) : '') + '</p>';
      const ci = (b.ci || []).concat(v.xc || []); if (ci.length) h += '<h3>Противопоказания</h3>' + ul(ci);
      if (b.ca && b.ca.length) h += '<h3>Осторожно</h3>' + ul(b.ca);
      h += '<p class="note">Описание из каталога приложения (Айенгар, Маран, Лакерда — пересказ). Уровень и противопоказания предварительные; при сомнениях посоветуйтесь с врачом или опытным преподавателем.</p>';
      dcard.innerHTML = h; }
    const FAM = { standing: 'Стоячие', standing_balance: 'Балансы на ногах', forward_bend: 'Наклоны вперёд', backbend: 'Прогибы', twist: 'Скрутки', side_bend: 'Боковые наклоны', inversion: 'Перевёрнутые', arm_balance: 'Балансы на руках', seated_hip: 'Сидячие', supine: 'Лёжа на спине', prone: 'Лёжа на животе', kneeling: 'На коленях', restorative: 'Расслабляющие' };
    const sel = $('select', box); Object.keys(FAM).forEach(k => { const o = el('option', '', FAM[k]); o.value = k; sel.appendChild(o); });
    const LV = { beginner: 'начальный', intermediate: 'средний', advanced: 'продвинутый' };
    const draw = () => { const q = $('input[type=search]', box).value.trim().toLowerCase(), f = sel.value, base = $('input[type=checkbox]', box).checked;
      const ids = Object.keys(CATD).filter(id => (!f || CATD[id].fam === f) && (!base || !id.includes('-V')) && (!q || (CATD[id].n + ' ' + (CATD[id].s || '')).toLowerCase().includes(q)));
      $('.cnt', box).textContent = 'Найдено: ' + ids.length + (ids.length > 150 ? ' (показаны первые 150)' : ''); list.innerHTML = '';
      ids.slice(0, 150).forEach(id => { const c = CATD[id]; const d = el('div', '', esc(c.n) + ' <span class="muted">· ' + (LV[c.lvl] || '') + '</span>'); d.onclick = () => { [...list.children].forEach(x => x.classList.remove('on')); d.classList.add('on'); try { ifr.contentWindow.Mudrya.go(id, 0, 900); } catch (e) {} showDesc(id); }; list.appendChild(d); }); };
    $('input[type=search]', box).oninput = draw; sel.onchange = draw; $('input[type=checkbox]', box).onchange = draw; draw();
  }
  function sets(w) {
    w.appendChild(el('h1', '', 'Практики'));
    w.appendChild(el('p', 'muted', 'Все практики ведёт объёмная фигура: позы, переходы и дыхание по фазам. Длину вдоха и выдоха можно настроить в плеере.'));
    [['Утро и вечер', ['at_sn', 'at_cn', 'surya', 'chandra']], ['Мягко и коротко', ['at_ns', 'at_zs', 'at_ds']], ['Разминки по задачам', ['at_ss2', 'at_ss6', 'at_ss7', 'at_ss1', 'at_ss4', 'at_ss5']], ['Дополнительные элементы', ['at_skd', 'at_lkd', 'at_ssd', 'at_zsd']], ['С опытом', ['at_ss3', 'at_st', 'full_sun', 'full_moon']]].forEach(([t, ids]) => {
      const s = el('div', 'sec'); s.appendChild(el('h2', '', t)); const g = el('div', 'grid');
      ids.forEach(id => g.appendChild(setCard(SETS.find(x => x.id === id)))); s.appendChild(g); w.appendChild(s);
    });
    w.appendChild(el('p', 'note', 'Йога не заменяет лечение. При острой боли, после травм и операций, при беременности и высоком давлении сначала посоветуйтесь с врачом; перевёрнутые позы — только если вы уже делали их с инструктором.'));
  }
  function pick(w) {
    w.appendChild(el('h1', '', 'Подбор программы'));
    w.appendChild(el('p', 'muted', 'Четыре вопроса — и готовый план на сегодня.'));
    const Q = [
      ['goal', 'Что сейчас важнее всего?', [['energy', 'Бодрость'], ['calm', 'Спокойствие'], ['back', 'Спина'], ['flex', 'Гибкость'], ['strength', 'Сила и тонус'], ['sleep', 'Сон']]],
      ['time', 'Сколько у вас времени?', [['10', '10 минут'], ['20', '20 минут'], ['40', '40 минут и больше']]],
      ['lvl', 'Опыт в йоге', [['0', 'Начинаю'], ['1', 'Занимаюсь иногда'], ['2', 'Занимаюсь регулярно']]],
      ['limit', 'Есть ограничения?', [['none', 'Нет'], ['joints', 'Колени или запястья'], ['back', 'Боль в спине'], ['preg', 'Беременность'], ['pressure', 'Давление']]],
    ];
    const A = {};
    const box = el('div');
    Q.forEach(([k, q, opts]) => {
      const c = el('div', 'card', '<h3>' + q + '</h3>'); const o = el('div', 'q-opts');
      opts.forEach(([v, n]) => { const b = el('button', '', n); b.onclick = () => { A[k] = v; [...o.children].forEach(x => x.classList.remove('on')); b.classList.add('on'); }; o.appendChild(b); });
      c.appendChild(o); c.style.marginBottom = '12px'; box.appendChild(c);
    });
    w.appendChild(box);
    const res = el('div', 'sec');
    const go = el('button', 'btn sun', 'Подобрать'); go.onclick = () => {
      const ids = recommend(A); res.innerHTML = '<h2>Ваш план</h2>';
      if (A.limit === 'preg' || A.limit === 'pressure') res.appendChild(el('p', 'note', 'При беременности и повышенном давлении — без задержек дыхания, глубоких прогибов и перевёрнутых поз. Начните с дыхания и мягких практик; программу согласуйте с врачом.'));
      const g = el('div', 'grid'); ids.forEach(id => { const s = SETS.find(x => x.id === id); if (s) g.appendChild(setCard(s)); else if (id === 'breath') { const c = el('div', 'card', '<span class="chip free">Дыхание</span><h3>Спокойное дыхание</h3><p class="muted">5 минут без задержек: вдох 5, выдох 5.</p>'); const b = el('button', 'btn sm moon', 'Начать'); b.onclick = () => { tab = 'breath'; render(); setTimeout(() => runBreath(BREATHS[3]), 50); }; c.appendChild(b); g.appendChild(c); } });
      res.appendChild(g);
    };
    w.appendChild(go); w.appendChild(res);
  }
  function recommend(A) {
    if (A.limit === 'preg' || A.limit === 'pressure') return ['breath', 'at_zs'];
    const lvl = +(A.lvl || 0), t = +(A.time || 20);
    const out = [];
    const main = { energy: 'at_sn', calm: 'at_cn', back: 'at_ss1', flex: 'at_ss6', strength: 'at_ss2', sleep: 'at_cn' }[A.goal || 'energy'];
    if (lvl === 0) out.push('at_ns');
    out.push(A.limit === 'back' && main === 'at_ss1' ? 'at_ns' : main);
    if (t >= 20) out.push(A.goal === 'sleep' || A.goal === 'calm' ? 'at_zs' : (A.limit === 'joints' ? 'at_ss7' : 'at_ss7'));
    if (t >= 40 && lvl >= 1) out.push(A.goal === 'calm' || A.goal === 'sleep' ? 'chandra' : 'surya');
    return [...new Set(out)];
  }

  /* ---------- дыхание ---------- */
  let bwTimer = null;
  function breath(w) {
    w.appendChild(el('h1', '', 'Дыхание'));
    w.appendChild(el('p', 'muted', 'Короткие техники для тревоги, сна и концентрации. Если кружится голова — вернитесь к обычному дыханию.'));
    const st = el('div', 'card bw', '<div class="bw-orb" id="bwOrb">Начать</div><div id="bwTxt" class="muted">Выберите технику ниже</div>'); w.appendChild(st);
    const g = el('div', 'grid'); g.style.marginTop = '14px';
    BREATHS.forEach(b => { const c = el('div', 'card', '<h3>' + b.name + '</h3><p class="muted">' + b.desc + '</p>'); const x = el('button', 'btn sm moon', 'Начать'); x.onclick = () => runBreath(b); c.appendChild(x); g.appendChild(c); });
    w.appendChild(g);
  }
  function runBreath(b) {
    clearTimeout(bwTimer);
    const orb = $('#bwOrb'), txt = $('#bwTxt'); if (!orb) return;
    const end = Date.now() + b.min * 60000; let i = 0;
    txt.textContent = b.name + ' — ' + b.min + ' мин';
    const tick = () => {
      if (Date.now() > end) { orb.textContent = 'Готово'; orb.style.transform = 'scale(1)'; txt.textContent = 'Хорошо. Побудьте немного в тишине.'; logSession('breath:' + b.id, b.min); return; }
      const [name, s] = b.ph[i % b.ph.length]; i++;
      orb.textContent = name + ' · ' + s;
      orb.style.transitionDuration = s + 's';
      orb.style.transform = name === 'Вдох' ? 'scale(1.25)' : name === 'Выдох' ? 'scale(.75)' : orb.style.transform;
      bwTimer = setTimeout(tick, s * 1000);
    };
    tick();
  }

  /* ---------- прогресс ---------- */
  function stats() {
    const ss = PROG.sessions || [];
    const days = new Set(ss.map(s => s.d));
    let streak = 0; const d = new Date();
    for (;;) { const k = d.toISOString().slice(0, 10); if (days.has(k)) { streak++; d.setDate(d.getDate() - 1); } else if (streak === 0 && k === new Date().toISOString().slice(0, 10)) { d.setDate(d.getDate() - 1); } else break; }
    return { count: ss.length, minutes: ss.reduce((a, s) => a + (s.m || 0), 0), streak, days };
  }
  function progress(w) {
    const st = stats();
    w.appendChild(el('h1', '', 'Прогресс'));
    w.appendChild(el('div', 'grid', '<div class="card"><div class="stat">' + st.count + '</div><div class="muted">практик</div></div><div class="card"><div class="stat">' + st.minutes + '</div><div class="muted">минут</div></div><div class="card"><div class="stat">' + st.streak + '</div><div class="muted">дней подряд</div></div>'));
    const cal = el('div', 'card'); cal.style.marginTop = '14px'; cal.appendChild(el('h3', '', 'Последние 8 недель'));
    const days = el('div', 'days'); const d = new Date(); d.setDate(d.getDate() - 55);
    for (let i = 0; i < 56; i++) { const k = d.toISOString().slice(0, 10); const s = el('span', st.days.has(k) ? 'on' : ''); s.title = k; days.appendChild(s); d.setDate(d.getDate() + 1); }
    cal.appendChild(days); w.appendChild(cal);
    const last = el('div', 'card'); last.style.marginTop = '14px'; last.appendChild(el('h3', '', 'Недавние практики'));
    (PROG.sessions || []).slice(-12).reverse().forEach(s => { const n = s.id.startsWith('breath:') ? 'Дыхание: ' + (BREATHS.find(b => 'breath:' + b.id === s.id) || {}).name : (SETS.find(x => x.id === s.id) || {}).name || s.id; last.appendChild(el('div', 'muted', s.d + ' — ' + esc(n) + ', ' + s.m + ' мин')); });
    if (!(PROG.sessions || []).length) last.appendChild(el('p', 'muted', 'Пока пусто. Первая практика — на вкладке «Сегодня».'));
    w.appendChild(last);
    if (!CFG.rest) w.appendChild(el('p', 'note', 'Прогресс хранится в этом браузере. Войдите в аккаунт на сайте, чтобы он сохранялся между устройствами.'));
  }
  function logSession(id, m) { PROG.sessions = (PROG.sessions || []).concat([{ id, m, d: new Date().toISOString().slice(0, 10) }]).slice(-500); saveProgress(); }

  /* ---------- плеер ---------- */
  let P = null;
  function stopAll() { clearTimeout(bwTimer); if (P) { clearTimeout(P.t); P.stop = true; try { speechSynthesis.cancel(); } catch (e) {} } P = null; }
  function player(setId) {
    stopAll(); tab = 'sets';
    const w = shell(); const meta = SETS.find(s => s.id === setId) || { name: setId };
    const steps = stepsOf(setId);
    w.appendChild(el('h1', '', esc(meta.name)));
    const pl = el('div', 'pl'); w.appendChild(pl);
    const stage = el('div', 'stage', '<div class="loading">Загружаем фигуру…</div><div class="step-no"></div><div class="breath"><div class="orb"></div><span></span></div>');
    const ifr = el('iframe'); ifr.title = 'Фигура'; ifr.src = BASE + 'emulator/index.html?v=' + encodeURIComponent(CFG.ver || '1'); stage.insertBefore(ifr, stage.firstChild); pl.appendChild(stage);
    const side = el('div', 'side'); pl.appendChild(side);
    const now = el('div', 'card now', '<div class="muted blk"></div><h3 class="ttl">Приготовьтесь</h3><p class="cue muted">Встаньте на коврик. Начнём, когда будете готовы.</p><details class="howto" style="display:none"><summary>Как выполнять</summary><div></div></details><div class="bar"><i></i></div>');
    if (!window.__DESCP) window.__DESCP = fetch(BASE + 'emulator/desc.json?v=' + encodeURIComponent(CFG.ver || '1')).then(r => r.json()).catch(() => null);
    side.appendChild(now);
    const ctrl = el('div', 'ctrl', '<button data-a="prev">⟨ Назад</button><button data-a="play" style="background:var(--ink);color:#fff">▶ Старт</button><button data-a="next">Дальше ⟩</button><button data-a="stop">Завершить</button>');
    side.appendChild(ctrl);
    const opts = el('div', 'card', '<label class="lbl">Длина вдоха/выдоха <input type="range" min="2" max="8" step="1" value="' + PROG.settings.breath + '"> <b class="bv">' + PROG.settings.breath + ' с</b></label><label class="lbl"><input type="checkbox" ' + (PROG.settings.voice ? 'checked' : '') + '> Голосовые подсказки</label>');
    side.appendChild(opts);
    const list = el('div', 'card list'); steps.forEach((s, i) => { const d = el('div', '', (i + 1) + '. ' + esc(s.t)); d.onclick = () => { P.i = i; show(true); }; list.appendChild(d); }); side.appendChild(list);
    P = { i: 0, run: false, t: null, steps, setId, start: Date.now(), ready: false };
    const rng = $('input[type=range]', opts); rng.oninput = () => { PROG.settings.breath = +rng.value; $('.bv', opts).textContent = rng.value + ' с'; store.set(PROG); };
    $('input[type=checkbox]', opts).onchange = e => { PROG.settings.voice = e.target.checked; store.set(PROG); };
    const fig = () => { try { return ifr.contentWindow.Mudrya; } catch (e) { return null; } };
    const waitReady = setInterval(() => { const M = fig(); if (M && M.loaded) { clearInterval(waitReady); P && (P.ready = true); $('.loading', stage).remove(); try { M.setTheme('dark'); } catch (e) {} show(true); } }, 300);
    setTimeout(() => { if (P && !P.ready) { const l = $('.loading', stage); if (l) l.textContent = 'Фигура не загрузилась — следуйте подсказкам справа.'; } }, 20000);
    function pose(s, ms) {
      const M = fig(); if (!M || !M.go) return;
      if (s.p) { try { M.go(s.p, s.m ? 1 : 0, ms); } catch (e) {} return; }
      const a = DATA.A[s.a]; if (!a) return;
      try { M.go(a.f, a.m ? 1 : 0, ms, a.h || undefined); } catch (e) {}
    }
    function say(t) { if (!PROG.settings.voice || !window.speechSynthesis) return; try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'ru-RU'; u.rate = 0.95; speechSynthesis.speak(u); } catch (e) {} }
    function show(jump) {
      if (!P) return;
      const s = P.steps[P.i]; if (!s) return finish();
      $('.blk', now).textContent = s.block || ''; $('.ttl', now).textContent = s.t || ''; $('.cue', now).textContent = s.c || '';
      window.__DESCP.then(D => { const hw = $('.howto', now); if (!D) return; let id = s.p && /^A-/.test(s.p) ? s.p : null;
        if (!id) { const f = s.p && !/^mv:/.test(s.p) ? s.p : (DATA.A[s.a] || {}).f; id = f ? D._map[f] : null; }
        const v = id && D[id]; if (!v) { hw.style.display = 'none'; return; } const b = v.base ? D[v.base] : v;
        const li = a => (a || []).map(x => '<li>' + esc(x) + '</li>').join('');
        let h = (b.b ? '<p>' + esc(b.b) + '</p>' : '') + (v.ch && v.ch.length ? '<p><b>Отличие:</b> ' + esc(v.ch.join('; ')) + '</p>' : '') + (b.st && b.st.length ? '<ol>' + li(b.st) + '</ol>' : '') + (b.ez ? '<p><b>Облегчение:</b> ' + esc(b.ez) + '</p>' : '') + (b.er ? '<p><b>Ошибка:</b> ' + esc(b.er) + '</p>' : '');
        const ci = (b.ci || []).concat(v.xc || []); if (ci.length) h += '<p><b>Противопоказания:</b></p><ul>' + li(ci) + '</ul>';
        $('div', hw).innerHTML = h; hw.style.display = ''; });
      $('.bar i', now).style.width = (100 * P.i / P.steps.length) + '%';
      $('.step-no', stage).textContent = (P.i + 1) + ' / ' + P.steps.length;
      [...list.children].forEach((d, k) => d.classList.toggle('on', k === P.i));
      const cur = list.children[P.i]; if (cur) cur.scrollIntoView({ block: 'nearest' });
      const sec = PROG.settings.breath;
      pose(s, jump ? 0 : Math.max(600, s.e.length * sec * 1000 * 0.9));
      if (P.run) { say(s.t); breathe(s, 0); }
    }
    function breathe(s, k) {
      if (!P || !P.run) return;
      const seq = s.e.concat(s.h);
      if (k >= seq.length) { P.i++; return show(false); }
      const sec = PROG.settings.breath; const inh = seq[k] === 1;
      if (s.alt) { const M = fig(); try { M && M.go(inh ? s.alt : s.p, s.m ? 1 : 0, sec * 900); } catch (e) {} }
      const orb = $('.orb', stage); const lab = $('.breath span', stage);
      orb.className = 'orb' + (inh ? '' : ' ex'); orb.style.transitionDuration = sec + 's'; orb.style.transform = inh ? 'scale(1.1)' : 'scale(.6)';
      lab.textContent = (inh ? 'Вдох' : 'Выдох') + (k >= s.e.length ? ' · удержание' : '');
      P.t = setTimeout(() => breathe(s, k + 1), sec * 1000);
    }
    function finish() {
      if (!P) return;
      const m = Math.max(1, Math.round((Date.now() - P.start) / 60000));
      logSession(P.setId, m); P.run = false;
      $('.ttl', now).textContent = 'Практика завершена'; $('.cue', now).textContent = 'Отлично! ' + m + ' мин. Полежите минуту в тишине, прежде чем вставать.'; $('.bar i', now).style.width = '100%';
      say('Практика завершена. Отдохните.');
    }
    ctrl.onclick = e => {
      const a = e.target.dataset.a; if (!a || !P) return;
      clearTimeout(P.t);
      if (a === 'play') { P.run = !P.run; e.target.textContent = P.run ? '❚❚ Пауза' : '▶ Продолжить'; if (P.run) { if (!P.started) { P.started = true; P.start = Date.now(); } show(false); } }
      if (a === 'next') { P.i = Math.min(P.steps.length - 1, P.i + 1); show(false); }
      if (a === 'prev') { P.i = Math.max(0, P.i - 1); show(true); }
      if (a === 'stop') { if (P.started) finish(); else { stopAll(); tab = 'sets'; render(); } }
    };
  }

  /* ---------- старт ---------- */
  async function boot() {
    root.innerHTML = '<div class="my-wrap"><p class="muted">Загрузка…</p></div>';
    DATA = await fetch(BASE + 'data.json?v=' + encodeURIComponent(CFG.ver || '1')).then(r => r.json());
    try { PROGS = await fetch(BASE + 'programs.json?v=' + encodeURIComponent(CFG.ver || '1')).then(r => r.json()); } catch (e) { PROGS = { levels: [] }; }
    PROGS.levels.forEach(l => l.programs.forEach(p => { if (!p.ref && !SETS.find(x => x.id === p.id)) SETS.push({ id: p.id, name: p.name, kind: /kids|teen/.test(l.id) ? 'sun' : /bed|micro|chair|senior/.test(l.id) ? 'calm' : 'warm', tag: l.name, desc: p.desc, lvl: p.steps.length + ' шагов' }); }));
    await loadProgress();
    const q = new URLSearchParams(location.search);
    if (q.get('set') && SETS.find(s => s.id === q.get('set'))) return player(q.get('set'));
    if (q.get('tab') && TABS.find(t => t[0] === q.get('tab'))) tab = q.get('tab');
    render();
    if (q.get('breath')) { const b = BREATHS.find(x => x.id === q.get('breath')); if (b) { tab = 'breath'; render(); runBreath(b); } }
  }
  boot();
})();
