const planets = [
  { name: 'Mercury', type: 'Rocky', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg', source: 'NASA/JPL/USGS', sourceUrl: 'https://science.nasa.gov/photojournal/planet-mercury/', distance: '0.39 AU', year: '88 days', moons: '0', temp: 'Day ~430°C' },
  { name: 'Venus', type: 'Rocky', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg', source: 'NASA/JPL-Caltech', sourceUrl: 'https://science.nasa.gov/venus/venus-facts/', distance: '0.72 AU', year: '225 days', moons: '0', temp: '~467°C' },
  { name: 'Earth', type: 'Rocky', image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg', source: 'NASA', sourceUrl: 'https://science.nasa.gov/earth/', distance: '1.00 AU', year: '365.25 days', moons: '1', temp: 'Liquid-water world' },
  { name: 'Mars', type: 'Rocky', image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg', source: 'NASA/JPL/ESA', sourceUrl: 'https://science.nasa.gov/mars/', distance: '1.52 AU', year: '687 days', moons: '2', temp: 'Thin atmosphere' },
  { name: 'Jupiter', type: 'Gas giant', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg', source: 'NASA/JPL/USGS', sourceUrl: 'https://science.nasa.gov/jupiter/', distance: '5.20 AU', year: '11.86 years', moons: 'NASA page', temp: 'Cloud-top ~−110°C' },
  { name: 'Saturn', type: 'Gas giant', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg', source: 'NASA/JPL/SSI', sourceUrl: 'https://www.jpl.nasa.gov/images/pia01364-saturn-taken-from-voyager-2/', distance: '9.58 AU', year: '29.45 years', moons: 'NASA page', temp: 'Cloud-top ~−140°C' },
  { name: 'Uranus', type: 'Ice giant', image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/1/PIA18182-1.jpg?crop=faces%2Cfocalpoint&fit=clip&h=1720&w=1720', source: 'NASA/JPL', sourceUrl: 'https://science.nasa.gov/resource/uranus-as-seen-by-nasas-voyager-2/', distance: '19.2 AU', year: '84 years', moons: 'NASA page', temp: '~−195°C' },
  { name: 'Neptune', type: 'Ice giant', image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA01492-1.jpg?crop=faces%2Cfocalpoint&fit=clip&h=2185&w=2188', source: 'NASA/JPL', sourceUrl: 'https://science.nasa.gov/resource/neptune-full-disk-view/', distance: '30.1 AU', year: '164.8 years', moons: 'NASA page', temp: '~−200°C' }
];

const skyLocations = {
  kampala: { label: 'Kampala, Uganda', lat: 0.3476, lon: 32.5825, elevation: 1200 },
  nairobi: { label: 'Nairobi, Kenya', lat: -1.2864, lon: 36.8172, elevation: 1795 },
  london: { label: 'London, UK', lat: 51.5074, lon: -0.1278, elevation: 35 },
  newyork: { label: 'New York, USA', lat: 40.7128, lon: -74.0060, elevation: 10 }
};

const fallbackFacts = [
  {category:'Solar System',title:'Our cosmic neighborhood',fact:'The Solar System contains the Sun, eight planets, dwarf planets, moons and smaller bodies including asteroids and comets.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/solar-system-facts/'},
  {category:'Solar System',title:'Galactic journey',fact:'The Solar System travels around the Milky Way and takes roughly 230 million years to complete a galactic orbit.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/solar-system-facts/'},
  {category:'Sun',title:'Our star',fact:'The Sun is a G-type main-sequence star about 4.6 billion years old, with a core hot enough for nuclear fusion.',source:'NASA Science',url:'https://science.nasa.gov/sun/facts/'},
  {category:'Planets',title:'Eight planets',fact:'NASA lists eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/planets/'},
  {category:'Venus',title:'The hottest planet',fact:'Venus has an extreme greenhouse atmosphere and a surface temperature around 467°C.',source:'NASA Science',url:'https://science.nasa.gov/venus/venus-facts/'},
  {category:'Mars',title:'A watery past',fact:'Mars preserves geological evidence of ancient rivers, lakes and environments where liquid water once existed at the surface.',source:'NASA Mars',url:'https://science.nasa.gov/mars/'},
  {category:'Jupiter',title:'The largest planet',fact:'Jupiter is the largest planet and rotates in roughly 9.9 hours.',source:'NASA Science',url:'https://science.nasa.gov/jupiter/jupiter-facts/'},
  {category:'Europa',title:'Subsurface ocean candidate',fact:'Europa shows strong evidence for a subsurface salty ocean beneath its ice shell.',source:'NASA Science',url:'https://science.nasa.gov/jupiter/jupiter-moons/europa/'},
  {category:'Saturn',title:'Titan',fact:'Titan has a thick nitrogen-rich atmosphere and a methane-and-ethane weather cycle.',source:'NASA Cassini',url:'https://science.nasa.gov/mission/cassini/science/titan/'},
  {category:'Enceladus',title:'Water-rich plumes',fact:'Enceladus ejects water-rich material from an underground ocean environment into space.',source:'NASA Science',url:'https://science.nasa.gov/saturn/moons/enceladus/'},
  {category:'Dwarf Planets',title:'Five officially recognized',fact:'The five officially recognized dwarf planets are Ceres, Pluto, Haumea, Makemake and Eris.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/planets/'},
  {category:'Asteroids',title:'Ancient leftovers',fact:'Asteroids preserve material left over from the formation of the Solar System.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/asteroids/'},
  {category:'Comets',title:'Icy archives',fact:'Comets can become active as solar heating releases gas and dust, producing comae and tails.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/comets/facts/'},
  {category:'Kuiper Belt',title:'Beyond Neptune',fact:'The Kuiper Belt is a broad outer region containing many icy trans-Neptunian objects including Pluto.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/kuiper-belt/'},
  {category:'Oort Cloud',title:'A predicted outer shell',fact:'The Oort Cloud is a hypothesized distant reservoir inferred from the orbits of long-period comets and has not been directly observed.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/oort-cloud/'},
  {category:'Galaxy Motion',title:'Milky Way and Andromeda',fact:'NASA has used Hubble measurements and simulations to model the future interaction of the Milky Way and Andromeda.',source:'NASA Hubble',url:'https://science.nasa.gov/missions/hubble/nasas-hubble-shows-milky-way-is-destined-for-head-on-collision/'},
  {category:'Exploration',title:'Parker Solar Probe',fact:'Parker Solar Probe studies the Sun’s corona and solar wind by flying through the outer atmosphere.',source:'NASA',url:'https://science.nasa.gov/mission/parker-solar-probe/'},
  {category:'Exploration',title:'New Horizons',fact:'New Horizons performed the first close-up exploration of Pluto and later flew past Arrokoth.',source:'NASA',url:'https://science.nasa.gov/mission/new-horizons/'},
  {category:'Exploration',title:'OSIRIS-REx',fact:'OSIRIS-REx returned a sample from asteroid Bennu to Earth in 2023 for laboratory analysis.',source:'NASA',url:'https://science.nasa.gov/mission/osiris-rex/'},
  {category:'Exploration',title:'Europa Clipper',fact:'Europa Clipper is designed to make repeated close flybys of Europa and study its ice shell and ocean-related environment.',source:'NASA',url:'https://science.nasa.gov/mission/europa-clipper/'},
  {category:'Planet Nine',title:'Hypothesis, not discovery',fact:'NASA describes Planet Nine as a hypothesis proposed to explain patterns among distant objects; no additional planet has been directly detected.',source:'NASA Science',url:'https://science.nasa.gov/solar-system/planets/'},
  {category:'Evidence',title:'Science should be traceable',fact:'NASA publishes science content, mission archives, open datasets, imagery and APIs that can be cited as primary or first-party sources.',source:'NASA Open Data',url:'https://data.nasa.gov/about'}
];

const evidenceItems = [
  {title:'The Solar System is a star-centered system',finding:'The eight planets orbit the Sun in a largely shared plane because the system formed from a rotating disk of material.',query:'solar system planets NASA',image:'images/solar-system.svg',source:'NASA Science',url:'https://science.nasa.gov/universe/stars/planetary-system/'},
  {title:'The Sun drives the system',finding:'The Sun provides most of the system’s mass and its gravity organizes planetary, cometary and asteroid orbits.',query:'Sun solar system NASA',image:'images/sun.svg',source:'NASA Science',url:'https://science.nasa.gov/sun/facts/'},
  {title:'Europa is a major astrobiology target',finding:'Europa’s ice-covered ocean environment is a leading target for investigating whether a potentially habitable environment exists beyond Earth.',query:'Europa NASA',image:'images/europa.svg',source:'NASA Science',url:'https://science.nasa.gov/jupiter/jupiter-moons/europa/'},
  {title:'Enceladus exposes ocean material',finding:'Water-rich plumes from Enceladus give scientists a rare chance to study material associated with a subsurface ocean.',query:'Enceladus NASA',image:'images/enceladus.svg',source:'NASA Science',url:'https://science.nasa.gov/saturn/moons/enceladus/'},
  {title:'Titan has a methane weather cycle',finding:'Titan’s thick atmosphere supports clouds, rain and surface lakes and seas of hydrocarbons such as methane and ethane.',query:'Titan NASA Cassini',image:'images/titan.svg',source:'NASA Cassini',url:'https://science.nasa.gov/mission/cassini/science/titan/'},
  {title:'Bennu preserves ancient material',finding:'NASA’s OSIRIS-REx sample return allows terrestrial laboratories to study primitive asteroid material directly.',query:'Bennu OSIRIS-REx NASA',image:'images/comet.svg',source:'NASA OSIRIS-REx',url:'https://science.nasa.gov/mission/osiris-rex/'},
  {title:'The outer Solar System extends far beyond Neptune',finding:'The Kuiper Belt and more distant populations preserve icy bodies from the system’s early history, while the Oort Cloud is inferred rather than directly observed.',query:'Kuiper Belt Oort Cloud NASA',image:'images/solar-system.svg',source:'NASA Science',url:'https://science.nasa.gov/solar-system/oort-cloud/'},
  {title:'Galaxy motion is on a cosmic timescale',finding:'The Milky Way, Andromeda and other Local Group galaxies move under gravity; simulations can visualize these interactions over billions of years.',query:'Milky Way Andromeda NASA Hubble',image:'images/solar-system.svg',source:'NASA Hubble',url:'https://science.nasa.gov/missions/hubble/nasas-hubble-shows-milky-way-is-destined-for-head-on-collision/'}
];

function renderPlanets() {
  const grid = document.getElementById('planetGrid');
  if (!grid) return;
  const search = (document.getElementById('planetSearch')?.value || '').toLowerCase().trim();
  const type = document.getElementById('planetType')?.value || 'all';
  const filtered = planets.filter(p => p.name.toLowerCase().includes(search) && (type === 'all' || p.type === type));
  grid.innerHTML = filtered.length ? filtered.map(p => `
    <article class="planet-card">
      <a class="planet-art real-planet-art" href="${safeUrl(p.sourceUrl)}" target="_blank" rel="noopener" title="Open ${escapeHtml(p.name)} source">
        <img src="${safeUrl(p.image)}" alt="Real image of ${escapeHtml(p.name)}" loading="lazy" onerror="this.closest('.planet-art').classList.add('image-failed'); this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <span class="planet-fallback">${escapeHtml(p.name)} image unavailable<br><small>Open source ↗</small></span>
      </a>
      <div class="planet-body"><h3>${escapeHtml(p.name)}</h3><span class="planet-type">${escapeHtml(p.type)}</span><div class="planet-facts">
        <div><span>Distance</span><strong>${escapeHtml(p.distance)}</strong></div><div><span>Year</span><strong>${escapeHtml(p.year)}</strong></div>
        <div><span>Known moons</span><strong>${escapeHtml(p.moons)}</strong></div><div><span>Environment</span><strong>${escapeHtml(p.temp)}</strong></div>
      </div><small class="image-credit">Image: ${escapeHtml(p.source)} · NASA/source page ↗</small></div>
    </article>`).join('') : '<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No planet matches that search.</p>';
}

function formatTime(date) {
  if (!date) return 'Not found';
  return new Intl.DateTimeFormat(undefined, {hour:'numeric', minute:'2-digit'}).format(date);
}

function formatAzimuth(az) {
  const dirs = ['N','NE','E','SE','S','SW','W','NW'];
  return `${Math.round(az)}° ${dirs[Math.round(az / 45) % 8]}`;
}

function phaseName(angle) {
  const a = ((angle % 360) + 360) % 360;
  if (a < 22.5 || a >= 337.5) return 'New Moon';
  if (a < 67.5) return 'Waxing Crescent';
  if (a < 112.5) return 'First Quarter';
  if (a < 157.5) return 'Waxing Gibbous';
  if (a < 202.5) return 'Full Moon';
  if (a < 247.5) return 'Waning Gibbous';
  if (a < 292.5) return 'Third Quarter';
  return 'Waning Crescent';
}

function getSkyStart(dateText) {
  const safe = dateText || new Date().toISOString().slice(0,10);
  return new Date(`${safe}T00:00:00`);
}

function getSkyLocation() {
  const key = document.getElementById('locationSelect')?.value || 'kampala';
  return window.__customSkyLocation && key === 'custom' ? window.__customSkyLocation : (skyLocations[key] || skyLocations.kampala);
}

function calculateBodySky(body, observer, selectedDate) {
  const start = getSkyStart(selectedDate);
  const checkTime = new Date(`${selectedDate}T21:00:00`);
  const eq = Astronomy.Equator(body, checkTime, observer, true, true);
  const horizon = Astronomy.Horizon(checkTime, observer, eq.ra, eq.dec, 'normal');
  const rise = Astronomy.SearchRiseSet(body, observer, +1, start, 1);
  const set = Astronomy.SearchRiseSet(body, observer, -1, start, 1);
  let illumination = null;
  try { illumination = Astronomy.Illumination(body, checkTime); } catch (_) {}
  return { body, altitude: horizon.altitude, azimuth: horizon.azimuth, rise: rise?.date || null, set: set?.date || null, illumination };
}

function renderSky() {
  const selectedDate = document.getElementById('skyDate')?.value || new Date().toISOString().slice(0,10);
  const loc = getSkyLocation();
  const summary = document.getElementById('skySummary');
  const cards = document.getElementById('skyCards');
  if (!summary || !cards) return;

  if (typeof Astronomy === 'undefined') {
    summary.innerHTML = `<strong>${escapeHtml(loc.label)}</strong> • ${selectedDate}<br><span style="color:var(--muted)">Astronomy Engine did not load. The dashboard can still link to the official observing tools.</span>`;
    cards.innerHTML = '<article class="sky-card"><h3>Live calculation unavailable</h3><p>Check your internet connection or load the Astronomy Engine script.</p></article>';
    return;
  }

  const observer = new Astronomy.Observer(loc.lat, loc.lon, loc.elevation);
  const sun = calculateBodySky('Sun', observer, selectedDate);
  const moon = calculateBodySky('Moon', observer, selectedDate);
  const bodies = ['Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune'].map(name => calculateBodySky(name, observer, selectedDate));
  const moonPhase = Astronomy.MoonPhase(new Date(`${selectedDate}T21:00:00`));
  const moonIllum = moon.illumination?.phase_fraction != null ? moon.illumination.phase_fraction * 100 : 50;
  const localDateTime = new Date(`${selectedDate}T21:00:00`);

  summary.innerHTML = `<div class="sky-summary-main"><strong>${escapeHtml(loc.label)}</strong><span>${selectedDate}</span><span>Observer: ${loc.lat.toFixed(4)}°, ${loc.lon.toFixed(4)}°</span><span>Sky snapshot: ${formatTime(localDateTime)}</span></div><div class="sky-summary-mini"><span>☀️ Sunrise <strong>${formatTime(sun.rise)}</strong></span><span>🌇 Sunset <strong>${formatTime(sun.set)}</strong></span><span>🌙 ${phaseName(moonPhase)} <strong>${moonIllum.toFixed(0)}%</strong></span></div>`;

  const moonCard = `<article class="sky-card highlight"><h3>🌙 Moon</h3><p><strong>${phaseName(moonPhase)}</strong> · ${moonIllum.toFixed(0)}% illuminated</p><p>Rise ${formatTime(moon.rise)} · Set ${formatTime(moon.set)}</p><p>At 9 PM: ${moon.altitude.toFixed(1)}° altitude · ${formatAzimuth(moon.azimuth)}</p></article>`;
  const planetCards = bodies.map(item => {
    const visibility = item.altitude > 20 ? 'Good height' : item.altitude > 5 ? 'Low in sky' : item.altitude >= 0 ? 'Near horizon' : 'Below horizon';
    const mag = item.illumination?.mag != null ? ` · mag ${item.illumination.mag.toFixed(1)}` : '';
    return `<article class="sky-card"><h3>🪐 ${item.body}</h3><p><strong>${visibility}</strong>${mag}</p><p>Rise ${formatTime(item.rise)} · Set ${formatTime(item.set)}</p><p>At 9 PM: ${item.altitude.toFixed(1)}° · ${formatAzimuth(item.azimuth)}</p></article>`;
  }).join('');
  cards.innerHTML = moonCard + planetCards;
}

function setupGallery() {
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.gallery-card')];
  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active')); chip.classList.add('active');
    const filter = chip.dataset.filter; cards.forEach(card => { card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none'; });
  }));
}

function setupModal() {
  const modal = document.getElementById('imageModal'); if (!modal) return;
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };
  const open = (src, alt, caption) => { modalImage.src = src; modalImage.alt = alt; modalCaption.textContent = caption; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); };
  document.querySelectorAll('.gallery-card').forEach(card => card.addEventListener('click', () => { const image = card.querySelector('img'); open(image.src, image.alt, `${card.querySelector('strong')?.textContent || ''} — ${card.querySelector('span')?.textContent || ''}`); }));
  document.getElementById('modalClose')?.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.openResearchImageModal = open;
}

function setupNav() {
  const toggle = document.getElementById('menuToggle'); const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

async function loadResearchVault() {
  let facts = fallbackFacts;
  try { const res = await fetch('research.json', {cache:'no-store'}); if (res.ok) { const json = await res.json(); if (Array.isArray(json.facts)) facts = json.facts; } } catch (_) {}
  window.__researchFacts = facts;
  const categorySelect = document.getElementById('factCategory');
  if (categorySelect) {
    const cats = [...new Set(facts.map(f => f.category))].sort();
    categorySelect.innerHTML = '<option value="all">All categories</option>' + cats.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  }
  renderFacts();
}

function renderFacts() {
  const grid = document.getElementById('factGrid'); if (!grid) return;
  const facts = window.__researchFacts || fallbackFacts;
  const q = (document.getElementById('factSearch')?.value || '').toLowerCase().trim();
  const category = document.getElementById('factCategory')?.value || 'all';
  const filtered = facts.filter(f => (category === 'all' || f.category === category) && (`${f.title} ${f.fact} ${f.category} ${f.source}`.toLowerCase().includes(q)));
  grid.innerHTML = filtered.map(f => `<article class="fact-vault-card"><span class="category">${escapeHtml(f.category)}</span><h3>${escapeHtml(f.title)}</h3><p>${escapeHtml(f.fact)}</p><a href="${safeUrl(f.url)}" target="_blank" rel="noopener">Source: ${escapeHtml(f.source)} ↗</a></article>`).join('') || '<p>No NASA fact matches your search.</p>';
  const status = document.getElementById('factStatus'); if (status) status.textContent = `${filtered.length} research record${filtered.length===1?'':'s'} displayed.`;
}

async function searchNasaImages(query) {
  const status = document.getElementById('nasaImageStatus'); const grid = document.getElementById('nasaImageGrid');
  if (!status || !grid) return;
  const q = query.trim(); if (!q) { status.textContent='Enter a topic first.'; return; }
  status.textContent = `Searching NASA imagery for “${q}”…`; grid.innerHTML='';
  try {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image&page_size=12`;
    const res = await fetch(url); if (!res.ok) throw new Error(`NASA image search returned ${res.status}`);
    const json = await res.json(); const items = json?.collection?.items || [];
    if (!items.length) { status.textContent='NASA returned no image matches for that search.'; return; }
    status.textContent = `${items.length} NASA image records found. Click an image to enlarge it.`;
    grid.innerHTML = items.map(item => {
      const d = item.data?.[0] || {}; const link = item.links?.find(x => x.render === 'image') || item.links?.[0];
      const src = link?.href || ''; const nasaId = d.nasa_id || ''; const title = d.title || 'NASA media'; const description = stripHtml(d.description || '').slice(0,160);
      const page = `https://images.nasa.gov/details/${encodeURIComponent(nasaId)}`;
      return `<figure class="nasa-image-card"><button type="button" data-nasa-src="${escapeHtml(src)}" data-nasa-alt="${escapeHtml(title)}" data-nasa-caption="${escapeHtml(title)} — NASA ${escapeHtml(nasaId)}"><img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" loading="lazy"></button><figcaption class="nasa-image-meta"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(description || 'NASA Image and Video Library')}</span><a class="nasa-source" href="${page}" target="_blank" rel="noopener">NASA record: ${escapeHtml(nasaId)} ↗</a></figcaption></figure>`;
    }).join('');
    grid.querySelectorAll('[data-nasa-src]').forEach(btn => btn.addEventListener('click', () => window.openResearchImageModal?.(btn.dataset.nasaSrc, btn.dataset.nasaAlt, btn.dataset.nasaCaption)));
  } catch (err) {
    status.textContent = `Live NASA search unavailable from this browser session. Use the official NASA library instead. (${err.message})`;
    grid.innerHTML = `<a class="btn btn-ghost" href="https://images.nasa.gov/" target="_blank" rel="noopener">Open NASA Image Library ↗</a>`;
  }
}

function stripHtml(s) { const div=document.createElement('div'); div.innerHTML=s; return div.textContent || div.innerText || ''; }
function escapeHtml(s) { return String(s ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
function safeUrl(url) { try { const u = new URL(url); if (u.protocol==='http:' || u.protocol==='https:') return escapeHtml(u.href); } catch (_) {} return '#'; }

async function copyText(text, statusEl) {
  try {
    await navigator.clipboard.writeText(text);
    if (statusEl) statusEl.textContent = 'Citation copied to clipboard.';
  } catch (_) {
    const ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); if(statusEl) statusEl.textContent='Citation copied.';
  }
}

function citationFor(item) {
  const date = new Date().toISOString().slice(0,10);
  return `${item.title}. ${item.source}. ${item.url}. Accessed ${date}. Independent educational project by Arinde Maurice.`;
}

function renderEvidence() {
  const grid = document.getElementById('evidenceGrid'); if (!grid) return;
  grid.innerHTML = evidenceItems.map(e => `<article class="evidence-card"><img class="evidence-thumb" src="${escapeHtml(e.image)}" alt="${escapeHtml(e.title)}"><div class="evidence-body"><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.finding)}</p><div class="evidence-meta"><span class="evidence-badge">Evidence source</span><span class="evidence-badge">${escapeHtml(e.source)}</span></div><div class="evidence-actions"><a class="btn btn-ghost small" href="${safeUrl(e.url)}" target="_blank" rel="noopener">Open source ↗</a><button type="button" class="btn btn-primary small evidence-media" data-query="${escapeHtml(e.query)}">Find proof images</button><button type="button" class="btn btn-ghost small evidence-cite">Copy citation</button></div></div></article>`).join('');
  grid.querySelectorAll('.evidence-media').forEach(btn => btn.addEventListener('click', () => { document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'}); const input=document.getElementById('nasaImageQuery'); input.value=btn.dataset.query; searchNasaImages(btn.dataset.query); }));
  grid.querySelectorAll('.evidence-cite').forEach((btn, i) => btn.addEventListener('click', () => copyText(citationFor(evidenceItems[i]), document.getElementById('findingStatus'))));
}

function getStoredFindings() { try { return JSON.parse(localStorage.getItem('arindeFindings')||'[]'); } catch (_) { return []; } }
function setStoredFindings(data) { localStorage.setItem('arindeFindings', JSON.stringify(data)); }

function loadFindings() {
  const target = document.getElementById('myFindings'); if (!target) return;
  const data=getStoredFindings();
  target.innerHTML = data.length ? data.map((f,i)=> `<article class="my-finding"><div class="finding-top"><div><span class="evidence-badge">${escapeHtml(f.category)}</span><h3>${escapeHtml(f.title)}</h3></div><button class="finding-delete" type="button" data-i="${i}">Delete</button></div><p>${escapeHtml(f.text)}</p>${f.image?`<img class="evidence-thumb" src="${safeUrl(f.image)}" alt="Evidence image" loading="lazy">`:''}<div class="evidence-actions">${f.url?`<a class="btn btn-ghost small" href="${safeUrl(f.url)}" target="_blank" rel="noopener">Evidence ↗</a>`:''}<button class="btn btn-ghost small finding-cite" type="button" data-i="${i}">Copy citation</button></div><small style="color:var(--muted)">${new Date(f.createdAt).toLocaleString()}</small></article>`).join('') : '<p style="color:var(--muted)">No personal findings saved yet. Your first one can include a source and an image as proof.</p>';
  target.querySelectorAll('.finding-delete').forEach(btn => btn.addEventListener('click', () => { const next=getStoredFindings(); next.splice(Number(btn.dataset.i),1); setStoredFindings(next); document.getElementById('findingStatus').textContent='Finding deleted.'; loadFindings(); }));
  target.querySelectorAll('.finding-cite').forEach(btn => btn.addEventListener('click', () => { const f=getStoredFindings()[Number(btn.dataset.i)]; if(f) copyText(`${f.title}. ${f.text}${f.url?` Source: ${f.url}.`:''} Accessed ${new Date().toISOString().slice(0,10)}. Independent educational project by Arinde Maurice.`, document.getElementById('findingStatus')); }));
}

function setupFindingForm() {
  const form=document.getElementById('findingForm'); if (!form) return;
  form.addEventListener('submit', e => { e.preventDefault();
    const item={title:document.getElementById('findingTitle').value.trim(),category:document.getElementById('findingCategory').value,text:document.getElementById('findingText').value.trim(),url:document.getElementById('findingUrl').value.trim(),image:document.getElementById('findingImage').value.trim(),createdAt:new Date().toISOString()};
    if (!item.title || !item.text) return;
    const data=getStoredFindings(); data.unshift(item); setStoredFindings(data); form.reset(); document.getElementById('findingStatus').textContent='Finding saved locally in this browser.'; loadFindings();
  });
  document.getElementById('exportFindings')?.addEventListener('click', () => {
    const blob=new Blob([JSON.stringify(getStoredFindings(), null, 2)], {type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='arinde-maurice-findings.json'; a.click(); URL.revokeObjectURL(url); document.getElementById('findingStatus').textContent='Findings exported as JSON.';
  });
  document.getElementById('clearFindings')?.addEventListener('click', () => { if(confirm('Delete all saved findings from this browser?')) { localStorage.removeItem('arindeFindings'); document.getElementById('findingStatus').textContent='All saved findings cleared.'; loadFindings(); } });
  loadFindings();
}

async function loadApod() {
  const status=document.getElementById('apodStatus'); const title=document.getElementById('apodTitle'); const desc=document.getElementById('apodDescription'); const media=document.querySelector('.apod-media'); const link=document.getElementById('apodSource'); if (!status) return;
  try {
    const r=await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'); if(!r.ok) throw new Error(`NASA APOD returned ${r.status}`); const d=await r.json();
    title.textContent=d.title || 'NASA APOD'; desc.textContent=d.explanation || 'NASA Astronomy Picture of the Day'; link.href=d.url || 'https://apod.nasa.gov/apod/astropix.html';
    media.innerHTML=d.media_type==='image' ? `<img src="${safeUrl(d.url)}" alt="${escapeHtml(d.title||'NASA Astronomy Picture of the Day')}" loading="lazy">` : `<div class="apod-video"><a href="${safeUrl(d.url)}" target="_blank" rel="noopener">Open NASA video ↗</a></div>`;
    status.textContent=`NASA APOD loaded${d.date?` for ${d.date}`:''}.`;
  } catch (err) { status.textContent=`APOD could not be loaded from this session. ${err.message}`; }
}

function setupGeolocation() {
  document.getElementById('useLocation')?.addEventListener('click', () => {
    const status=document.getElementById('skySummary');
    if(!navigator.geolocation){ if(status) status.innerHTML='<strong>Location unavailable</strong><br><span style="color:var(--muted)">This browser does not expose geolocation.</span>'; return; }
    if(status) status.innerHTML='<strong>Requesting your location…</strong><br><span style="color:var(--muted)">The browser will ask for permission.</span>';
    navigator.geolocation.getCurrentPosition(pos => {
      window.__customSkyLocation={label:'Your current location',lat:pos.coords.latitude,lon:pos.coords.longitude,elevation:pos.coords.altitude || 0};
      const select=document.getElementById('locationSelect');
      if(select && !select.querySelector('option[value="custom"]')) select.insertAdjacentHTML('beforeend','<option value="custom">Your current location</option>');
      if(select) select.value='custom'; renderSky();
    }, err => { if(status) status.innerHTML=`<strong>Location not used</strong><br><span style="color:var(--muted)">${escapeHtml(err.message)}</span>`; }, {enableHighAccuracy:true, timeout:10000, maximumAge:300000});
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupVisualPolish();
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const skyDate=document.getElementById('skyDate'); if(skyDate) skyDate.value=new Date().toISOString().slice(0,10);
  renderPlanets(); renderSky(); setupGallery(); setupModal(); setupNav(); renderEvidence(); setupFindingForm(); setupGeolocation(); loadResearchVault(); loadApod();
  document.getElementById('planetSearch')?.addEventListener('input', renderPlanets); document.getElementById('planetType')?.addEventListener('change', renderPlanets); document.getElementById('updateSky')?.addEventListener('click', renderSky); document.getElementById('locationSelect')?.addEventListener('change', renderSky);
  document.getElementById('factSearch')?.addEventListener('input', renderFacts); document.getElementById('factCategory')?.addEventListener('change', renderFacts);
  document.getElementById('nasaImageForm')?.addEventListener('submit', e => { e.preventDefault(); searchNasaImages(document.getElementById('nasaImageQuery').value); });
  setTimeout(() => { const q=document.getElementById('nasaImageQuery')?.value; if(q) searchNasaImages(q); }, 500);
});


function setupVisualPolish(){
  const sections=[...document.querySelectorAll('main section[id]')];
  const links=[...document.querySelectorAll('#mainNav a[href^="#"]')];
  const obs=new IntersectionObserver((entries)=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id;
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
      entry.target.classList.add('visible');
    }
  }),{rootMargin:'-35% 0px -55% 0px',threshold:0});
  sections.forEach(s=>{s.classList.add('reveal');obs.observe(s);});
  document.querySelectorAll('.content-card,.info-card,.planet-card,.evidence-card,.fact-vault-card,.my-finding,.sky-card,.timeline>div').forEach(el=>el.classList.add('reveal'));
}
