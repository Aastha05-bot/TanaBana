/* All site content lives here. Edit this file; no other file needs to change. */
window.TANABANA = {
  name: "TanaBana",
  /* Cover slides, in order. { art: true } = the TanaBana artwork on plain purple; others get a blurred photo backdrop. */
  hero: [
    { art: true, src: "assets/hero.jpg", alt: "TanaBana: Weaving through Technology, Power and Justice. Pink and orange embroidered letters on a woven purple background." },
    { src: "assets/slide-1.jpg", alt: "A visitor reads printed cards hanging from strings among lines of red thread at the exhibition." },
    { src: "assets/slide-2.jpg", alt: "A woman holds and reads a red card hanging from a string, in front of a wall of surveillance camera pictures." },
    { src: "assets/slide-3.jpg", alt: "A visitor reads printed cards hanging from strings among lines of red thread at the exhibition." },
    { src: "assets/slide-4.jpg", alt: "A visitor reads printed cards hanging from strings among lines of red thread at the exhibition." }


  ],
  about: [
    "The digital technologies we experience today, powerful and dazzling, are built upon contributions from many communities and many pasts. Amidst dominant, monolithic narratives and disorienting visions of post-human intelligence, we must remember that digital technology has a history deeply rooted in the human, the material, and the analogue. Weaving technologies are part of this history.TanaBana, meaning weaving, invites us to trace these threads- to look back at the histories, dissect the power structures that shape it, and unravel its multilayered impacts on our communities. By recognizing these interconnections, we open up space to imagine digital futures that are more diverse, just, inclusive, and full of possibility."
  ],
  facts: [],


  /* Exhibition map. Put the floor-plan picture in the image folder and set image: "assets/map.jpg".
     While image is empty the page shows "Coming soon". */
  map: { image: "assets/exhibition_map.png", alt: "Floor plan of the exhibition" },

  /* Each exhibition appears in the exhibitions grid.
     Optional per item: image: "assets/x.jpg", links: [{ href: "…", label: "…" }, …] */
  exhibitions: [
    { title: "Digital Harms at the Margins", tint: "peach",
      image: "assets/Purple foundation/_79A9190.jpg",
      text: "This exhibition by Purple Foundation at TanaBana invited audience to encounter lived experiences of digital violence and reflect on how these harms shape the everyday realities of marginalized communities. This exhibition created a space to pause, listen, and look beyond the posters and screens.",
      images: [
        "assets/Purple foundation/_79A9190.jpg",
        "assets/Purple foundation/_79A9129.jpg",
        "assets/Purple foundation/_79A8894.jpg",
        "assets/Purple foundation/_79A8888.jpg"
      ] },
    { title: "Smile for the Camera", tint: "butter",
      image: "assets/DS exhibition/_79A8892.jpg",
      images: [
        "assets/DS exhibition/_79A8892.jpg",
        "assets/DS exhibition/_79A9432.jpg",
        "assets/DS exhibition/_79A9427.jpg",
        "assets/DS exhibition/_79A9424.jpg",
        "assets/DS exhibition/_79A9409.jpg",
        "assets/DS exhibition/_79A9085.jpg"
      ],
      excerpt: "This immersive three-part installation explored the pervasive reach of surveillance, digital safety, and privacy. It highlighted the unequal ways surveillance impacts marginalized communities and activists. Through a mix of personal narrative and visual art,",
      remaining: " the exhibit highlights how surveillance operates in our daily routines and invites visitors to confront the weight of being watched. The exhibit challenged audiences to pause, question the systems of observation surrounding them, and reflect on how surveillance restricts privacy, safety, freedom, and the fundamental right to participate in public life." },
    { title: "AI: Unweaving the Machine", tint: "lavender",
      image: "assets/AI/_79A9435.jpg",
      images: [
        "assets/AI/_79A9435.jpg",
        "assets/AI/_79A9137.jpg",
        "assets/AI/_79A9098.jpg",
        "assets/AI/_79A9095.jpg",
        "assets/AI/IMG_7546.jpg",
        "assets/AI/IMG_7510.jpg"
      ],
      text: "From Understanding AI to introspecting the impacts of AI via critical lens and re-imagining the AI era, 'AI: Unweaving the machine' aimed to bring everyone together to understand AI and collectively re-imagine what the future of AI should look like for an actual symbiotic relationship.",
      linkHeading: "Find the interactive portals and links used in the exhibition below",
      links: [
        { href: "https://interactive-ai-timeline.bodyanddata.org/", label: "History of AI" },
        { href: "https://interactive-mindmap.bodyanddata.org/", label: "TanaBana · An Interactive Map of AI" },
        { href: "https://interactives.bodyanddata.org/algorithm-feed-simulator", label: "Social media algorithms · Body & Data" },
        { href: "https://cost-calculator.bodyanddata.org/", label: "AI Cost Calculator" }
      ] },
    { title: "Nepal’s Digital Landscape", tint: "sky",
      image: "assets/NDL/_79A9439.jpg",
      images: ["assets/NDL/_79A9439.jpg"] },
    { title: "Spin your Way to Digital Safety", tint: "sage",
      image: "assets/Spin/_79A9034.jpg",
      images: [
        "assets/Spin/_79A9034.jpg",
        "assets/Spin/_79A8921.jpg",
        "assets/Spin/_79A8901.jpg"
      ] },
    { title: "Nepal’s Biometric Present", tint: "sand",
      text: "The study evaluated the socio-political implications and ground-level realities of the National ID along three primary vectors: public understanding of biometric identity, the underlying political imperatives of the Nepali state digital transformation agenda, and the lived experiences of the citizens during enrollment.",
      image: "assets/NID/_79A9080.jpg",
      images: [
        "assets/NID/_79A9080.jpg",
        "assets/NID/_79A8927.jpg",
        "assets/NID/IMG_9914.JPG",
        "assets/NID/_79A8912.jpg",
      ],
      linkHeading: "Find the interactive portals and links used in the exhibition below",
      links: [
        { href: "https://interactive-report.bodyanddata.org/", label: "Nepal’s Biometric Present: Governance, Accessibility and Accountability | Interactive Report" },
        { href: "https://bodyanddata.org/nid/", label: "NID Report" }
      ] }
  ],

  /* Programs. Sessions can be a picture { image, alt } or poster { image, label, title, subtitle } or text { time, title, place }. */
  days: [
    { label: "Day 1", tint: "lavender", date: "", sessions: [
      { image: "assets/nid.png", label: "Research Dissemination", title: "Nepal’s Biometric Present", subtitle: "Body & Data",
        excerpt: "On October 8, we came together at YalaMaya Kendra for the dissemination of 'Nepal's Biometric Present: Governance, Accessibility and Accountability', a report based on the study conducted by Body & Data in the districts of Sarlahi, Khotang, and Kathmandu in Nepal about National Identity.",
        remaining: "\n\nThe study evaluated the socio-political implications and ground-level realities of the National ID along three primary vectors: public understanding of biometric identity, the underlying political imperatives of the Nepali state digital transformation agenda, and the lived experiences of the citizens during enrollment.",
        readMoreExact: true },
      { image: "assets/IsGoodTechPossible.png", label: "TanaBana conversation #1", title: "Is Good Tech Possible?", subtitle: "Body & Data (Nepal) with Software Freedom Law Center (India)",
        excerpt: "From questioning Big Tech's growing power and the inequalities embedded in its innovations to imagining alternatives, reclaiming control, and exploring the possibilities of regulation and resistance, the conversation opened",
        remaining: " up space to critically reflect on the kind of technology we want and deserve.\n\nJoined by Nilay from SFLC India and Dovan from Body & Data, we explored what it means to seek \"good\" in technology today, who gets to define it, and how we can collectively shape more just, accessible, and accountable digital futures." },
      { image: "assets/OnlineSurveillance.png", label: "TanaBana conversation #2", title: "Online Surveillance and Harms", subtitle: "Body & Data (Nepal) with Myanmar Internet Project (Myanmar)",
        excerpt: "Joined by Nway from Myanmar Internet Project and Nuva from Body & Data, we unpacked the realities of widespread and systematic surveillance in Myanmar, examining its patterns, the harms it inflicts on people, and the ways digital spaces",
        remaining: " become extensions of state power. We reflected on what it means to navigate digital spaces under constant scrutiny and how these systems impact people's freedom, safety, and ability to express themselves." }
    ] },
    { label: "Day 2", tint: "butter",   date: "", sessions: [
      { image: "assets/Panel_disscussion1.jpg", label: "Panel discussion #1", title: "The Digital Battlefield: Gendered Violence and Its Impact in Women’s Political Life", subtitle: "Purple Foundation",
        remaining: "" },
      { image: "assets/Panel_disscussion2.jpg", label: "Panel discussion #2", title: "Age Assurance in Digital Age: Children, Their Privacy and Protection of Digital Rights", subtitle: "Digital Rights Nepal",
        remaining: "" }
    ] },
    { label: "Day 3", tint: "sky",      date: "", sessions: [
      { image: "assets/WhereDoWeGo.png", label: "TanaBana conversation #3", title: "Where Do We Go From Here?", subtitle: "Interventions and Consequences of AI in Art",
        excerpt: "We concluded our three day exhibition \"TanaBana: weaving through technology, power and justice.\" with final tanabana conversation \"where do we go from here?: interventation and consequences of AI in art\" in conversation with Monisha and Rojan.",
        remaining: "\n\nIn the talk, we tried to untangle how we should grapple with the paradigm shift in art and creative expression due to the emergence of AI." }
    ] }
  ],

  organizer: { name: "Body & Data", site: "https://bodyanddata.org/" },
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
    ? `<div class="map-layout">
        <div class="map-link"><img class="map-img" src="${esc(mp.image)}" alt="${esc(mp.alt || "Exhibition map")}"></div>
        <div class="map-list" role="list" aria-label="Exhibition map key and venue list">
          <div class="map-list-column" role="list">
            <div class="map-list-key" role="listitem"><span class="map-badge pale-blue">E</span><span>Entry / exit</span></div>
            <div class="map-list-key" role="listitem"><span class="map-badge pale-pink">A</span><span>Registration desk</span></div>
            <div class="map-list-key" role="listitem"><span class="map-badge pale-pink">B</span><span>Resource booth</span></div>
            <div class="map-list-key" role="listitem"><span class="map-badge pale-pink">C</span><span>Surveys</span></div>
            <div class="map-list-key" role="listitem"><span class="map-badge pale-pink">D</span><span>Courtyard lounge</span></div>
          </div>
          <div class="map-list-column" role="list">
            <div class="map-list-item" role="listitem"><span class="map-badge number">1</span><div><strong>Digital Harms at the Margins</strong><small>Gaushala · Purple Foundation</small></div></div>
            <div class="map-list-item" role="listitem"><span class="map-badge number">2</span><div><strong>“Smile for the Camera”</strong><small>Gaushala · Body&amp;Data</small></div></div>
            <div class="map-list-item" role="listitem"><span class="map-badge number">3</span><div><strong>AI: Unweaving the Machine</strong><small>BaggiKhana · Body&amp;Data</small></div></div>
          </div>
          <div class="map-list-column" role="list">
            <div class="map-list-item" role="listitem"><span class="map-badge number">4</span><div><strong>Nepal’s Digital Landscape</strong><small>Majlis · Martin Chautari</small></div></div>
            <div class="map-list-item" role="listitem"><span class="map-badge number">5</span><div><strong>Spin Your Way to Digital Safety</strong><small>Majlis · Digital Rights Nepal</small></div></div>
            <div class="map-list-item" role="listitem"><span class="map-badge number">6</span><div><strong>Nepal’s Biometric Present</strong><small>Majlis · Body &amp; Data</small></div></div>
          </div>
        </div>
      </div>`
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
      ? (i === 0 || i === 1 || i === 2
        ? `<div class="conversation-scroll" tabindex="0" aria-label="Scrollable TanaBana conversations">${d.sessions.map((s, j) => `<article class="conversation-row">
            <div class="conversation-copy">
              <span class="conversation-label">${esc(s.label)}</span>
              <h3>${esc(s.title)}</h3>
              ${s.subtitle ? `<p class="conversation-subtitle">${esc(s.subtitle)}</p>` : ""}
              ${s.description
                ? s.description.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("")
                : s.excerpt
                  ? `<p class="conversation-excerpt">${esc(s.excerpt)}${s.remaining ? `${s.readMoreExact ? "" : `<span class="read-more-ellipsis">...</span>`}<span class="conversation-more" hidden>${esc(s.remaining)}</span> <button class="read-more" type="button" aria-expanded="false">${s.readMoreExact ? "read more" : "read more.."}</button>` : ""}</p>`
                  : ""}
            </div>
            <button class="conversation-image" data-pic="${i}:${j}" aria-label="View ${esc(s.title)} image larger">
              <img src="${esc(s.image)}" alt="${esc(s.alt || [s.label, s.title, s.subtitle].filter(Boolean).join(". "))}">
            </button>
          </article>`).join("")}</div>`
        : `<div class="gal">${d.sessions.map((s, j) => s.image
          ? `<button class="g-item" data-pic="${i}:${j}" aria-label="View larger"><img src="${esc(s.image)}" alt="${esc(s.alt || ["Poster", s.label, s.title, s.subtitle].filter(Boolean).join(". "))}"></button>`
          : `<div class="g-text"><span class="time">${esc(s.time || "")}</span><span><strong>${esc(s.title)}</strong>${s.place ? `<br><span class="muted">${esc(s.place)}</span>` : ""}</span></div>`).join("")}</div>`)
      : `<p class="soon">Program details for ${esc(d.label)} will be added here. Follow for updates.</p>`;
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
    </div>
    ${D.collaborators.length ? `<div class="foot-col wide"><h2 class="label inv">Our collaborators</h2><div class="chips">${D.collaborators.map(chip).join("")}</div></div>` : ""}
    ${D.venuePartner ? `<div class="foot-col"><h2 class="label inv">Venue partner</h2><div class="chips">${chip(D.venuePartner)}</div></div>` : ""}`;

  /* ---------- dialog ---------- */
  const dlg = $("dlg"), body = $("dlgBody"), tag = $("dlgTag");
  let opener = null;
  function openExhibition(i) {
    const e = D.exhibitions[i];
    const links = e.links || (e.link ? [e.link] : []);
    const images = e.images || (e.image ? [e.image] : []);
    tag.textContent = "Exhibition";
    body.innerHTML = `<h2 id="dlgTitle" class="bd-h3">${esc(e.title)}</h2>
      ${e.text ? `<p>${esc(e.text)}</p>` : ""}
      ${e.excerpt ? `<p class="exhibition-excerpt">${esc(e.excerpt)} <span class="exhibition-more" hidden>${esc(e.remaining)}</span><button class="read-more" type="button" aria-expanded="false">read more</button></p>` : ""}
      ${images.length ? `<div class="exhibition-gallery">${images.map((src, index) => `<img class="dlg-img" src="${esc(src)}" alt="${esc(e.title + " photo " + (index + 1))}">`).join("")}</div>` : ""}
      ${links.length && e.linkHeading ? `<p class="dlg-links-heading">${esc(e.linkHeading)}</p>` : ""}
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
    const readMore = ev.target.closest(".read-more");
    if (readMore) {
      const copy = readMore.closest(".conversation-copy");
      const exhibitionExcerpt = readMore.closest(".exhibition-excerpt");
      const more = copy ? copy.querySelector(".conversation-more") : exhibitionExcerpt.querySelector(".exhibition-more");
      const ellipsis = copy ? copy.querySelector(".read-more-ellipsis") : null;
      const expanded = readMore.getAttribute("aria-expanded") === "true";
      more.hidden = expanded;
      if (ellipsis) ellipsis.hidden = !expanded;
      readMore.setAttribute("aria-expanded", String(!expanded));
      readMore.textContent = expanded
        ? (exhibitionExcerpt ? "read more" : "read more" )
        : "read less";
      return;
    }
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
