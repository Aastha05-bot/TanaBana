/* All site content lives here. Edit this file; no other file needs to change. */
window.TANABANA = {
  name: "TanaBana",
  /* Cover slides, in order. { art: true } = the TanaBana artwork on plain purple; others get a blurred photo backdrop. */
  hero: [
    { art: true, src: "assets/hero.jpg", alt: "TanaBana: Weaving through Technology, Power and Justice. Pink and orange embroidered letters on a woven purple background." },
    { src: "assets/slide-1.jpg", alt: "A visitor reads printed cards hanging from strings among lines of red thread at the exhibition." },
    { src: "assets/slide-2.jpg", alt: "A woman holds and reads a red card hanging from a string, in front of a wall of surveillance camera pictures." }
  ],
  about: [
    "TanaBana is an interactive exhibition organized by Body & Data. The exhibition explores how technology is woven into our lives, rights and society, bringing together the digital rights community and beyond to create a space for imagining the just and inclusive digital futures we want."
  ],
  facts: [],


  /* Exhibition map. Put the floor-plan picture in the image folder and set image: "assets/map.jpg".
     While image is empty the page shows "Coming soon". */
  map: { image: "", alt: "Floor plan of the exhibition" },

  /* Each exhibition appears in the exhibitions grid.
     Optional per item: image: "assets/x.jpg", links: [{ href: "…", label: "…" }, …] */
  exhibitions: [
    { title: "Digital Harms at the Margins", tint: "peach",
      text: "How digital technology can deepen harm for people who are already pushed to the margins of society." },
    { title: "Smile for the Camera", tint: "butter",
      text: "A look at cameras, faces and being watched." },
    { title: "AI: Unweaving the Machine", tint: "lavender",
      text: "Pulling apart the threads of artificial intelligence: what it is, where it came from and who it serves. Explore it through interactive tools: a timeline, a map of AI, a look at social media algorithms and an AI cost calculator.",
      links: [
        { href: "https://interactive-ai-timeline.bodyanddata.org/", label: "History of AI" },
        { href: "https://interactive-mindmap.bodyanddata.org/", label: "TanaBana · An Interactive Map of AI" },
        { href: "https://interactives.bodyanddata.org/algorithm-feed-simulator", label: "Social media algorithms · Body & Data" },
        { href: "https://cost-calculator.bodyanddata.org/", label: "AI Cost Calculator" }
      ] },
    { title: "Nepal’s Digital Landscape", tint: "sky",
      text: "A picture of how digital technology is used, built and governed in Nepal." },
    { title: "Spin your Way to Digital Safety", tint: "sage",
      text: "A hands-on space for learning practical ways to stay safe online." },
    { title: "Nepal’s Biometric Present", tint: "sand",
      text: "How fingerprints, faces and other biometric data are collected and used in Nepal today. Read the interactive report on governance, accessibility and accountability.",
      links: [
        { href: "https://interactive-report.bodyanddata.org/", label: "Nepal’s Biometric Present: Governance, Accessibility and Accountability | Interactive Report" }
      ] }
  ],

  /* Programs. Sessions can be a picture { image, alt } or poster { image, label, title, subtitle } or text { time, title, place }. */
  days: [
    { label: "Day 1", tint: "lavender", date: "", sessions: [
      { image: "assets/day1-1.jpg", label: "TanaBana conversation #1", title: "Is Good Tech Possible?", subtitle: "Experiences and Learnings from Myanmar" },
      { image: "assets/day1-2.jpg", label: "TanaBana conversation #2", title: "Online Surveillance and Harms", subtitle: "Experiences and Learnings from Myanmar" }
    ] },
    { label: "Day 2", tint: "butter",   date: "", sessions: [
      { image: "assets/day3-1.jpg", alt: "Three women stand together in a bright room, reading colourful paper cards that hang from strings." },
      { image: "assets/day3-2.jpg", alt: "Three women make paper crafts around a table covered in coloured paper, scissors and glue, in front of a wall of colourful printed posters." }
    ] },
    { label: "Day 3", tint: "sky",      date: "", sessions: [
      { image: "assets/day2-1.jpg", alt: "Two performers sit on a stone ledge in front of a brick wall. One plays an acoustic guitar and sings into a microphone while the other watches." },
      { image: "assets/day2-2.jpg", alt: "Two speakers sit on a stone ledge in front of a brick wall hung with purple and cream banners. One holds a microphone and speaks; a small woven TanaBana sign stands between them." }
    ] }
  ],

  organizer: { name: "Body & Data", site: "https://bodyanddata.org/", instagram: "https://www.instagram.com/bodyanddata" },
  collaborators: [
    { name: "Purple Foundation",    logo: "assets/purple.png" },
    { name: "Digital Rights Nepal", logo: "assets/drn.png" },
    { name: "Martin Chautari",      logo: "assets/martin.png" }
  ],
  venuePartner: { name: "Yala Maya Kendra", logo: "assets/yalamaya.png" }
};

(() => {
  const D = window.TANABANA;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const arrow = '<svg class="bd-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const TINTS = ["lavender", "butter", "peach", "sky", "sage", "sand"];

  /* ---------- hero slider ---------- */
  const SL = D.hero, track = $("heroTrack"), dotsEl = $("heroDots");
  track.innerHTML = SL.map((m, i) => `<div class="hs${m.art ? " art" : ""}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${SL.length}">
    ${m.art ? "" : `<img class="hs-bg" src="${esc(m.src)}" alt="">`}<img class="hs-fg" src="${esc(m.src)}" alt="${esc(m.alt)}" ${i ? 'loading="lazy"' : ""}></div>`).join("");
  dotsEl.innerHTML = SL.map((_, i) => `<button class="dot" aria-label="Go to slide ${i + 1}"></button>`).join("");
  const slideEls = [...track.children], dotEls = [...dotsEl.children];
  let cur = 0;
  function showSlide(i) {
    cur = (i + SL.length) % SL.length;
    track.style.transform = `translateX(${-100 * cur}%)`;
    slideEls.forEach((el, j) => { el.inert = j !== cur; el.setAttribute("aria-hidden", j !== cur); });
    dotEls.forEach((el, j) => { el.classList.toggle("on", j === cur); j === cur ? el.setAttribute("aria-current", "true") : el.removeAttribute("aria-current"); });
  }
  $("slPrev").addEventListener("click", () => showSlide(cur - 1));
  $("slNext").addEventListener("click", () => showSlide(cur + 1));
  dotsEl.addEventListener("click", e => { const b = e.target.closest(".dot"); if (b) showSlide(dotEls.indexOf(b)); });
  let sx = null; const sl = $("slider");
  sl.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") sx = e.clientX; });
  sl.addEventListener("pointerup", e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) showSlide(cur + (dx < 0 ? 1 : -1)); });
  window.addEventListener("keydown", e => {
    if ($("dlg").open || window.scrollY > sl.offsetHeight / 2 || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight") showSlide(cur + 1); else if (e.key === "ArrowLeft") showSlide(cur - 1);
  });
  showSlide(0);

  /* ---------- hero: keep the artwork exactly one screen tall under the header ---------- */
  const setHeaderH = () => document.documentElement.style.setProperty("--hh", $("top").offsetHeight + "px");
  setHeaderH(); window.addEventListener("resize", setHeaderH);
  if (document.fonts) document.fonts.ready.then(setHeaderH);

  /* ---------- about ---------- */
  $("aboutText").innerHTML = D.about.map(p => `<p>${esc(p)}</p>`).join("");
  if (D.facts.length) $("facts").innerHTML = D.facts.map(f => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join(""); else $("facts").remove();

  /* ---------- exhibition map: an image, or "Coming soon" until one is added ---------- */
  const mp = D.map || {};
  $("plan").innerHTML = mp.image
    ? `<a class="map-link" href="${esc(mp.image)}" target="_blank" rel="noopener" aria-label="Open the exhibition map full size"><img class="map-img" src="${esc(mp.image)}" alt="${esc(mp.alt || "Exhibition map")}"></a>
       <p class="note">Tap the map to view it full size.</p>`
    : `<div class="map-soon" role="img" aria-label="Exhibition map coming soon"><span>Coming soon</span></div>`;

  /* ---------- programs: day tabs, pictures shown on the page ---------- */
  const tabsEl = $("dayTabs"), panel = $("dayPanel");
  tabsEl.innerHTML = D.days.map((d, i) =>
    `<button class="tab" role="tab" id="tab-${i}" aria-controls="dayPanel" data-tab="${i}" style="--t:var(--bd-tint-${d.tint})">${esc(d.label)}${d.date ? ` <small>${esc(d.date)}</small>` : ""}</button>`).join("");
  function showDay(i) {
    const d = D.days[i];
    [...tabsEl.children].forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
    panel.setAttribute("aria-labelledby", "tab-" + i);
    panel.innerHTML = d.sessions.length
      ? `<div class="gal">${d.sessions.map((s, j) => s.image
          ? `<button class="g-item" data-pic="${i}:${j}" aria-label="View larger"><img src="${esc(s.image)}" alt="${esc(s.alt || ["Poster", s.label, s.title, s.subtitle].filter(Boolean).join(". "))}"></button>`
          : `<div class="g-text"><span class="time">${esc(s.time || "")}</span><span><strong>${esc(s.title)}</strong>${s.place ? `<br><span class="muted">${esc(s.place)}</span>` : ""}</span></div>`).join("")}</div>`
      : `<p class="soon">Program details for ${esc(d.label)} will be added here. Follow <a href="${esc(D.organizer.instagram)}" target="_blank" rel="noopener">@bodyanddata</a> for updates.</p>`;
  }
  tabsEl.addEventListener("keydown", e => {
    const n = D.days.length, cur = [...tabsEl.children].findIndex(t => t.getAttribute("aria-selected") === "true");
    const to = e.key === "ArrowRight" ? (cur + 1) % n : e.key === "ArrowLeft" ? (cur + n - 1) % n : -1;
    if (to >= 0) { e.preventDefault(); showDay(to); tabsEl.children[to].focus(); }
  });
  showDay(0);

  /* ---------- exhibitions grid ---------- */
  $("exGrid").innerHTML = D.exhibitions.map((e, i) =>
    `<button class="ex" data-ex="${i}" style="--t:var(--bd-tint-${e.tint});--o:var(--bd-on-tint-${e.tint})">
       <span class="et">${esc(e.title)}</span></button>`).join("");

  /* ---------- footer ---------- */
  const o = D.organizer;
  const chip = c => {
    const inner = c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)}">` : esc(c.name);
    return c.href ? `<a class="chip" href="${esc(c.href)}" target="_blank" rel="noopener">${inner}</a>` : `<span class="chip">${inner}</span>`;
  };
  $("footInner").innerHTML = `
    <div class="foot-col">
      <h2 class="label inv">Organizer</h2>
      <a class="bd-logo" href="${esc(o.site)}" target="_blank" rel="noopener"><img src="assets/logo.png" alt="${esc(o.name)}"></a>
      <p class="links"><a href="${esc(o.site)}" target="_blank" rel="noopener">bodyanddata.org</a>
        <a href="${esc(o.instagram)}" target="_blank" rel="noopener">Instagram @bodyanddata</a></p>
    </div>
    ${D.collaborators.length ? `<div class="foot-col wide"><h2 class="label inv">Our collaborators</h2><div class="chips">${D.collaborators.map(chip).join("")}</div></div>` : ""}
    ${D.venuePartner ? `<div class="foot-col"><h2 class="label inv">Venue partner</h2><div class="chips">${chip(D.venuePartner)}</div></div>` : ""}`;

  /* ---------- dialog ---------- */
  const dlg = $("dlg"), body = $("dlgBody"), tag = $("dlgTag");
  let opener = null;
  function openExhibition(i) {
    const e = D.exhibitions[i];
    const links = e.links || (e.link ? [e.link] : []);
    tag.textContent = "Exhibition";
    body.innerHTML = `<h2 id="dlgTitle" class="bd-h3">${esc(e.title)}</h2>
      ${e.image ? `<img class="dlg-img" src="${esc(e.image)}" alt="">` : ""}
      <p>${esc(e.text)}</p>
      ${links.length ? `<div class="dlg-links">${links.map(l => `<a class="bd-btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ${arrow}</a>`).join("")}</div>` : ""}`;
    dlg.className = ""; dlg.showModal();
  }
  function openPic(key) {
    const [i, j] = key.split(":").map(Number), p = D.days[i].sessions[j];
    tag.textContent = D.days[i].label;
    body.innerHTML = `<h2 id="dlgTitle" class="sr">${esc(D.days[i].label)}</h2><img class="lb" src="${esc(p.image)}" alt="${esc(p.alt || ["Poster", p.label, p.title, p.subtitle].filter(Boolean).join(". "))}">`;
    dlg.className = "lightbox"; dlg.showModal();
  }
  document.addEventListener("click", ev => {
    const ex = ev.target.closest("[data-ex]"), pic = ev.target.closest("[data-pic]"), tab = ev.target.closest("[data-tab]");
    if (ex) { opener = ex; openExhibition(+ex.dataset.ex); }
    else if (pic) { opener = pic; openPic(pic.dataset.pic); }
    else if (tab) showDay(+tab.dataset.tab);
    else if (ev.target === dlg || ev.target.closest("#dlgClose")) dlg.close();
  });
  dlg.addEventListener("close", () => { if (dlg.open) return; body.innerHTML = ""; if (opener) opener.focus(); });

  /* ---------- menu ---------- */
  const btn = $("menuBtn"), menu = $("menu");
  const setMenu = open => { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
})();
