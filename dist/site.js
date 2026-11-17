// The blue line: a git history drawn as the reader scrolls, plus a few hand-drawn margin notes.
(() => {
  const main = document.getElementById('main'), svg = document.getElementById('line');
  const stroke = document.getElementById('stroke'), pen = document.getElementById('pen');
  const strands = document.getElementById('strands'), revr = document.getElementById('revr');
  const nm = document.getElementById('nm');
  const anchors = [...document.querySelectorAll('[data-a]')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const STEP = 6, NS = 'http://www.w3.org/2000/svg';
  const notesG = document.getElementById('notes'); let noteEls = [];
  let total = 0, ys = [], marks = [], heroLen = 0, drawn = 0, ready = false, opening = true, H = 0;

  function build() {
    const mb = main.getBoundingClientRect(), W = main.clientWidth, mobile = W < 720;
    H = main.scrollHeight;
    const rel = el => { const r = el.getBoundingClientRect(); return { l: r.left - mb.left, r: r.right - mb.left, t: r.top - mb.top, b: r.bottom - mb.top, w: r.width, h: r.height }; };
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.style.height = H + 'px'; revr.setAttribute('width', W);
    const f = n => n.toFixed(1);
    const gx = rel(document.querySelector('.rx')).l; // the road

    // 1. One stroke under the hook, then down into the road.
    const rects = [...nm.getClientRects()], last = rects[rects.length - 1];
    const n = { l: last.left - mb.left, r: last.right - mb.left, b: last.bottom - mb.top, w: last.width, h: last.height };
    const hl = rel(nm.parentElement).l, uy = n.b - n.h * 0.06, t2 = Math.min(60, (hl - gx) * 0.6);
    let d = `M ${f(n.r + 6)} ${f(uy)} C ${f(hl + (n.r - hl) * 0.7)} ${f(uy + 10)}, ${f(hl + (n.r - hl) * 0.3)} ${f(uy - 4)}, ${f(hl - 6)} ${f(uy + 6)}`;
    d += ` C ${f(hl - t2)} ${f(uy + 9)}, ${f(gx)} ${f(uy + 10)}, ${f(gx)} ${f(uy + 100)}`;
    const probe = document.createElementNS(NS, 'path'); probe.setAttribute('d', d); heroLen = probe.getTotalLength();
    let px = gx, py = uy + 100, splitY = null;

    // 2. The road is a git history. Main runs down the page; practice is a side branch that merges at the first job.
    const pos = a => { const p = rel(a); return [p.l + p.w / 2, p.t + p.h / 2]; };
    const commits = anchors.filter(a => a.classList.contains('stop')).map(pos), lastC = commits[commits.length - 1];
    const merge = pos(document.querySelector('#real .rx')), split = pos(document.querySelector('#giving .rx'));
    const bx = commits[0][0], forkY = commits[0][1] - (mobile ? 70 : 96);
    d += ` L ${f(gx)} ${f(forkY)} C ${f(gx)} ${f(forkY + 40)}, ${f(bx)} ${f(forkY + 30)}, ${f(bx)} ${f(commits[0][1])}`;
    d += ` L ${f(bx)} ${f(lastC[1])} C ${f(bx)} ${f(lastC[1] + 50)}, ${f(gx)} ${f(merge[1] - 50)}, ${f(gx)} ${f(merge[1])}`;
    d += ` L ${f(gx)} ${f(H + 8)}`; // no arrow, no full stop: main runs off the bottom of the page
    stroke.setAttribute('d', d);
    total = stroke.getTotalLength();
    stroke.style.strokeDasharray = total;
    ys = []; for (let l = 0; l <= total; l += STEP) ys.push(stroke.getPointAtLength(l).y);
    marks = anchors.map(a => { const y = pos(a)[1], i = ys.findIndex(v => v >= y); return i < 0 ? total : i * STEP; });

    // 3. What the pen does not draw itself: main beside the practice branch, the merge, and the branches
    //    that fork off once giving back starts. They share the road to the end.
    strands.replaceChildren();
    const mk = (tag, attrs, style, parent = strands) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (style) e.setAttribute('style', style); parent.append(e); return e; };
    const dot = 'fill:var(--accent);stroke:none', ring = 'fill:#F3F5F8;stroke:var(--accent);stroke-width:3px';
    mk('path', { d: `M ${f(gx)} ${f(forkY)} V ${f(merge[1])}` });
    mk('circle', { cx: f(gx), cy: f(forkY), r: 4.5 }, dot);
    mk('circle', { cx: f(gx), cy: f(merge[1]), r: mobile ? 6 : 8 }, dot);
    const endY = rel(document.getElementById('next')).t - 60;
    const t = 'font:500 14px var(--f-mono);letter-spacing:0.02em;fill:var(--accent);stroke:none';
    const label = (x, y, txt, rot) => { if (W < 1080) return; const a = { x: f(x), y: f(y) }; if (rot) { a.transform = `rotate(-90 ${f(x)} ${f(y)})`; a['text-anchor'] = 'middle'; } mk('text', a, t).textContent = txt; };
    // Giving back: one branch each for leading, mentoring and writing, forking where that part starts.
    const offs = mobile ? [-18, -12, -6] : [62, 42, 22];
    [...document.querySelectorAll('#giving .bridge')].slice(0, 3).forEach((el, i) => {
      const o = offs[i], y0 = rel(el).t - 24;
      mk('path', { d: `M ${f(gx)} ${f(y0)} C ${f(gx)} ${f(y0 + 36)}, ${f(gx + o)} ${f(y0 + 14)}, ${f(gx + o)} ${f(y0 + 54)} V ${f(H + 8)}` });
      mk('circle', { cx: f(gx), cy: f(y0), r: 4.5 }, dot);
      for (let y = y0 + 170; y < endY; y += 430 + i * 70) mk('circle', { cx: f(gx + o), cy: f(y), r: mobile ? 4 : 5.5 }, ring);
      label(gx + o - 7, y0 + 108, ['lead', 'mentor', 'write'][i], true);
    });
    // Labels: branch names, tags on the wins, and a commit for each thing that landed on main.
    label(gx + 14, uy + 150, 'main');
    const py2 = (commits[0][1] + commits[1][1]) / 2; label(bx - 14, py2, 'practice', true);
    label(gx + 18, merge[1] + 5, 'merge: first job');
    document.querySelectorAll('.st.win .stop').forEach(el => { const [, y] = pos(el); label(gx + 14, y + 5, 'tag: 1st'); });
    document.querySelectorAll('[data-commit]').forEach(el => { const y = rel(el).t + 14; mk('circle', { cx: f(gx), cy: f(y), r: 5 }, dot); label(gx + (y > split[1] ? 76 : 16), y + 5, el.dataset.commit); });

    // 4. Margin notes: a few hand-drawn marks, drawn when the reader reaches them.
    notesG.replaceChildren();
    noteEls = [...document.querySelectorAll('[data-note]')].map(el => {
      const r = rel(el); let dd = '';
      if (el.dataset.note === 'star') {
        // A hand-drawn star beside the numeral, slightly tilted, in one stroke.
        const R = mobile ? 13 : 22, cx = r.r + R + (mobile ? 8 : 14), cy = r.t + r.h * 0.42;
        for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 - 0.22 + i * Math.PI / 5, rr = (i % 2 ? 0.45 : 1) * R * (i === 10 ? 1.08 : 1); dd += (i ? ' L ' : 'M ') + f(cx + Math.cos(a) * rr) + ' ' + f(cy + Math.sin(a) * rr); }
      } else if (el.dataset.note === 'circle') {
        const small = !!el.closest('.place'), pad = mobile ? 6 : small ? 10 : 16, rx = r.w / 2 + pad, ry = r.h / 2 + (small ? -4 : mobile ? 2 : 4), cy = r.t + r.h / 2 - (small ? 3 : 0);
        dd = `M ${f(r.l - pad)} ${f(cy)} a ${f(rx)} ${f(ry)} 0 1 0 ${f(2 * rx)} 0 a ${f(rx)} ${f(ry * 1.08)} 0 1 0 ${f(-2 * rx)} 0`;
      } else {
        [...el.getClientRects()].forEach(c => { const l = c.left - mb.left, w = c.width, y = c.bottom - mb.top - 1; dd += `M ${f(l - 3)} ${f(y + 3)} C ${f(l + w * 0.3)} ${f(y - 4)}, ${f(l + w * 0.7)} ${f(y + 7)}, ${f(l + w + 5)} ${f(y)} `; });
      }
      return { el, y: r.t, path: mk('path', { d: dd, pathLength: 1 }, '', notesG) };
    });
    ready = true;
  }

  // The pen runs just ahead of the reader.
  function target() {
    const y = -main.getBoundingClientRect().top + innerHeight * 0.8;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) return total;
    const i = ys.findIndex((v, k) => v > y && k * STEP > heroLen);
    return i < 0 ? total : Math.max(heroLen, i * STEP);
  }

  function frame() {
    if (ready) {
      const t = target();
      drawn = reduce ? t : drawn + Math.min((t - drawn) * 0.12, opening ? 26 : 1e9);
      if (opening && t - drawn < 1) opening = false;
      if (Math.abs(t - drawn) < 0.5) drawn = t;
      stroke.style.strokeDashoffset = total - drawn;
      anchors.forEach((a, i) => a.classList.toggle('on', drawn >= marks[i] - 2));
      const at = stroke.getPointAtLength(drawn), done = drawn >= total - 2;
      pen.setAttribute('cx', at.x); pen.setAttribute('cy', at.y); pen.style.opacity = done ? 0 : 1;
      revr.setAttribute('height', done ? H + 20 : at.y);
      noteEls.forEach(n => { const on = done || at.y >= n.y + 30; n.path.classList.toggle('on', on); n.el.classList.toggle('on', on); });
    }
    requestAnimationFrame(frame);
  }

  // Tabs: click, or arrow keys.
  document.getElementById('more')?.addEventListener('click', () => document.querySelector('.certs').classList.add('open'));
  const tabs = [...document.querySelectorAll('.tab[role=tab]')];
  const pick = t => tabs.forEach(o => { const on = o === t; o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1; document.getElementById(o.getAttribute('aria-controls')).hidden = !on; });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(t));
    t.addEventListener('keydown', e => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
      const next = tabs[(i + k + tabs.length) % tabs.length]; pick(next); next.focus(); e.preventDefault();
    });
  });
  // Nav shows which chapter you are in.
  const links = [...document.querySelectorAll('#chapters a')];
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => { const on = l.getAttribute('href') === '#' + e.target.id; l.classList.toggle('cur', on); if (on && innerWidth < 720) l.scrollIntoView({ inline: 'center', block: 'nearest' }); }); }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('[data-ch]').forEach(c => spy.observe(c));
  // The line is redrawn whenever the page changes height (tabs, images, resize).
  let t0; new ResizeObserver(() => { clearTimeout(t0); t0 = setTimeout(build, 60); }).observe(main);
  document.fonts.ready.then(() => { build(); stroke.style.strokeDashoffset = total; requestAnimationFrame(frame); });
})();
