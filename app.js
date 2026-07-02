/* =========================================================
   Leonardo Tanzi — personal site
   Everything is driven by the PROJECTS array below.
   - x  : loose chronological position, 0 (oldest) .. 1 (newest). Hand-tuned.
   - s  : seriousness, 1 (unserious) .. 10 (serious). PLACEHOLDERS marked below — tune freely.
   The plot maps x -> horizontal, s -> vertical, around a centre cross.
   ========================================================= */

const PROJECTS = [
  {
    key: "hotcollective",
    location: "Parma, Italy",
    label: "hotcollective",
    years: "2013–2020",
    category: "Collective",
    s: 1,                 // set by Leo
    x: 0.14,
    description: "Something that started as a joke and ended as a 10-years project. Curating with two friends a monthly event, bringing national and international artists from the hip-hop/rap world in Parma.",
    links: [
      { label: "@hotcollective", url: "https://www.instagram.com/hotcollective/" },
    ],
    image: null,
  },
  {
    key: "bsc",
    location: "Parma, Italy",
    label: "BSc",
    years: "2012–2016",
    category: "Academic",
    s: 6,                 // placeholder
    x: 0.07,
    description: "B.Sc. in Computer Science at the University of Parma — Telecommunication &amp; Electronic Engineering curriculum. Thesis in Computer Vision on Harris corner detector.",
    links: [],
    image: "images/bsc/bsc1.jpeg",
  },
  {
    key: "msc",
    location: "Turin, Italy",
    label: "MSc",
    years: "2017–2019",
    category: "Academic",
    s: 7,                 // placeholder
    x: 0.24,
    description: "M.Sc. in Computer Engineering at the Polytechnic University of Turin — Graphic &amp; Multimedia curriculum.",
    links: [],
    image: null,
  },
  {
    key: "master thesis",
    location: "Stockholm, Sweden",
    label: "kth thesis",
    years: "2019",
    category: "Research",
    s: 8,                 // placeholder
    x: 0.31,
    description: "Visiting researcher at KTH Royal Institute of Technology, master thesis on deep learning for bone-fracture classification.",
    links: [],
    image: null,
  },
  {
    key: "phd",
    location: "Turin, Italy",
    label: "PhD",
    years: "2019–2022",
    category: "Academic",
    s: 9,                 // placeholder
    x: 0.38,
    description: "Ph.D. at the Polytechnic University of Turin on deep learning for human-machine interaction in healthcare. 20 publications, 722 citations, h-index 9.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=s0p13UEAAAAJ" },
    ],
    image: null,
  },
  {
    key: "teaching",
    location: "Turin, Italy",
    label: "Teaching",
    years: "2020–2022",
    category: "Teaching",
    s: 4,                 // placeholder
    x: 0.45,
    description: "Teaching assistant at the Polytechnic University of Turin across three courses: 3D Graphics in Biometrics, Modelling Design, and Engineering Drawing.",
    links: [],
    image: null,
  },
  {
    key: "sgambetto",
    location: "Turin, Italy",
    label: "sgambetto",
    years: "2021–2023",
    category: "Chess",
    s: 2,                 // set by Leo
    x: 0.59,
    description: "Itinerant amateur chess tournaments in Turin. Big prizes, big laughs. 10 events in 2 years.",
    links: [
      { label: "@sssgambetto", url: "https://www.instagram.com/sssgambetto/" },
    ],
    image: null,
  },
  {
    key: "writing",
    location: "Remote",
    label: "ai writing",
    years: "2020–2023",
    category: "Writing",
    s: 5,                 // set by Leo
    x: 0.52,
    description: "Wrote about deep learning and computer vision — technical summaries of CV/DL research papers for MarkTechPost (200k views/month) and personal essays on Medium.",
    links: [
      { label: "MarkTechPost", url: "https://www.marktechpost.com/author/leonardotanzi/" },
      { label: "Medium", url: "https://medium.com/@leonardo.tanzi" },
    ],
    image: null,
  },
  {
    key: "paris",
    location: "Paris, France",
    label: "cnrs internship",
    years: "2022",
    category: "Research",
    s: 8,                 // placeholder
    x: 0.66,
    description: "Visiting researcher at Heudiasyc, CNRS / UTC Sorbonne Université — hierarchical neural architectures for medical-imaging classification.",
    links: [
      { label: "arXiv paper", url: "https://arxiv.org/pdf/2411.16438" },
    ],
    image: null,
  },
  {
    key: "xarxa",
    location: "Barcelona, Spain",
    label: "xarxa",
    years: "2026–present",
    category: "Mutual Aid",
    s: 8,                 // placeholder
    x: 0.88,
    description: "A volunteer service-exchange platform — a community bulletin board where people and collectives offer or request services for free. Real-time chat, multilingual (CA/ES/EN), OAuth. Currently deployed but still not active.",
    links: [
      { label: "xarxa.help", url: "https://www.xarxa.help" },
    ],
    image: null,
  },
  {
    key: "methinks",
    location: "Barcelona, Spain",
    label: "methinks.ai",
    years: "2023–present",
    category: "Work",
    s: 9,                 // set by Leo
    x: 0.73,
    description: "Deep Learning Engineer, then Senior, at Methinks AI in Barcelona. Building computer-vision systems for stroke diagnosis — data strategy, model design, clinical validation, deployment, and FDA submissions.",
    links: [
      { label: "methinks.ai", url: "https://www.methinks.ai/" },
    ],
    image: null,
  },
  {
    key: "canino",
    location: "Barcelona, Spain",
    label: "canino.fm",
    years: "2024–present",
    category: "Radio",
    s: 6,                 // placeholder
    x: 0.80,
    description: "Independent community radio in Barcelona, founded in 2024 to amplify local artists and cultural collectives. Weekly Sunday broadcasts from the cultural space F O C. We are two people co-running the radio, sharing the creative direction, organization, volunteers management, finance, struggle, and happiness. Sometimes recording a show as dj gaviscon.",
    links: [
      { label: "canino.fm", url: "https://www.canino.fm" },
      { label: "dj gaviscon", url: "https://www.youtube.com/watch?v=3qVzlGpXZWY&list=PL--tayYSfv3esIHvSeyTlvUGRdmhs10zi&index=7" },
    ],
    image: null,
  },
  {
    key: "pose-suggester",
    location: "Barcelona, Spain",
    label: "pose suggester",
    years: "2026",
    category: "Toy",
    s: 2,                 // set by Leo
    x: 0.96,
    description: "At canino.fm, we take a photo of every guest against a standard background before their show. This pose suggester helps them decide how to pose.",
    links: [
      { label: "try it", url: "https://ltanzi.github.io/canino-pose-suggester/" },
    ],
    image: null,
  },
];

/* ---------- coordinate mapping ---------- */
// seriousness domain and where the horizontal axis sits (the centre value)
const S_MIN = 1, S_MAX = 10, S_MID = (S_MIN + S_MAX) / 2;
const HALF_X = 42;  // % half-extent horizontally (centre 50 ± 42 -> 8..92)
const HALF_Y = 38;  // % half-extent vertically   (centre 50 ± 38 -> 12..88)

function xPct(p) {
  return 50 + (p.x - 0.5) * 2 * HALF_X;
}
function yPct(p) {
  const sn = (p.s - S_MID) / ((S_MAX - S_MIN) / 2); // -1 .. 1
  return 50 - sn * HALF_Y;                          // higher s -> smaller top %
}

/* ---------- render nodes ---------- */
// Year read-out shown on the x-axis while hovering. Priority:
//   1. explicit `year` field on the project (hardcode it there to override)
//   2. the first 4-digit year found in the `years` string (e.g. "2019–2022" -> 2019)
//   3. fallback: approximate estimate from the loose x position (2012..2026)
const YEAR_MIN = 2012, YEAR_MAX = 2026;
function xYear(p) {
  if (p.year != null) return p.year;
  const m = String(p.years).match(/\d{4}/);
  if (m) return parseInt(m[0], 10);
  return Math.round(YEAR_MIN + p.x * (YEAR_MAX - YEAR_MIN));
}

const nodesEl = document.getElementById("nodes");
const stageEl = document.getElementById("stage");
const guidesEl = document.getElementById("guides");
const guideV = document.getElementById("guide-v");
const guideH = document.getElementById("guide-h");
const valX = document.getElementById("val-x");
const valY = document.getElementById("val-y");

PROJECTS.forEach((p, i) => {
  const x = xPct(p), y = yPct(p);
  const textLeft = p.x < 0.5; // left half -> label extends left, dot faces centre

  const btn = document.createElement("button");
  btn.className = "node " + (textLeft ? "text-left" : "text-right");
  btn.style.left = x + "%";
  btn.style.top = y + "%";
  btn.style.animationDelay = (0.15 + i * 0.055).toFixed(2) + "s";
  btn.setAttribute("aria-label", p.label + " — " + p.years);
  btn.innerHTML = '<span class="dot"></span><span class="label">' + p.label + "</span>";

  const readouts = { x, y, year: xYear(p), s: p.s };
  btn.addEventListener("mouseenter", () => showGuides(readouts));
  btn.addEventListener("focus", () => showGuides(readouts));
  btn.addEventListener("mouseleave", hideGuides);
  btn.addEventListener("blur", hideGuides);
  btn.addEventListener("click", () => openPanel(p, x, y));

  nodesEl.appendChild(btn);
});

function showGuides({ x, y, year, s }) {
  // dashed guides from the dot to each axis
  guideV.setAttribute("x1", x + "%");
  guideV.setAttribute("y1", y + "%");
  guideV.setAttribute("x2", x + "%");
  guideV.setAttribute("y2", "50%");
  guideH.setAttribute("x1", x + "%");
  guideH.setAttribute("y1", y + "%");
  guideH.setAttribute("x2", "50%");
  guideH.setAttribute("y2", y + "%");
  guidesEl.classList.add("on");

  // year read-out on the x-axis, placed opposite the dot vertically
  valX.textContent = year;
  valX.style.left = x + "%";
  valX.style.top = "50%";
  valX.style.transform = y < 50
    ? "translate(-50%, 10px)"                 // dot above axis -> label below
    : "translate(-50%, calc(-100% - 10px))";  // dot below axis -> label above
  valX.classList.add("on");

  // seriousness read-out on the y-axis, placed opposite the dot horizontally
  valY.textContent = s + "/10";
  valY.style.top = y + "%";
  valY.style.left = "50%";
  valY.style.transform = x < 50
    ? "translate(10px, -50%)"                  // dot left of axis -> label right
    : "translate(calc(-100% - 10px), -50%)";   // dot right of axis -> label left
  valY.classList.add("on");
}
function hideGuides() {
  guidesEl.classList.remove("on");
  valX.classList.remove("on");
  valY.classList.remove("on");
}

/* ---------- overlay ---------- */
const overlay = document.getElementById("overlay");
const bubbleEl = document.querySelector(".bubble");
const backdrop = document.getElementById("overlay-backdrop");
const closeBtn = document.getElementById("panel-close");
const elMeta = document.getElementById("panel-meta");
const elLocation = document.getElementById("panel-location");
const elTitle = document.getElementById("panel-title");
const elBody = document.getElementById("panel-body");
const elLinks = document.getElementById("panel-links");
const elImages = document.getElementById("panel-images");

function openPanel(p, xp, yp) {
  elMeta.textContent = p.location ? p.years + " · " + p.location : p.years;
  elLocation.style.display = "none";
  elTitle.textContent = p.label;
  elBody.innerHTML = "<p>" + p.description + "</p>";

  elLinks.innerHTML = "";
  p.links.forEach((l) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    li.appendChild(a);
    elLinks.appendChild(li);
  });

  elImages.innerHTML = "";
  (p.image ? [].concat(p.image) : []).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = p.label;
    img.loading = "lazy";
    elImages.appendChild(img);
  });

  // reveal first so the bubble has a measurable size, then centre it on the
  // node's coordinate, clamped so the ellipse stays fully inside the viewport.
  overlay.hidden = false;
  const vw = window.innerWidth, vh = window.innerHeight;
  const bw = bubbleEl.offsetWidth, bh = bubbleEl.offsetHeight;
  const m = 12;
  const cx = Math.max(bw / 2 + m, Math.min(vw - bw / 2 - m, (xp / 100) * vw));
  const cy = Math.max(bh / 2 + m, Math.min(vh - bh / 2 - m, (yp / 100) * vh));
  bubbleEl.style.left = cx + "px";
  bubbleEl.style.top = cy + "px";

  overlay.classList.add("open");
  // (re)play the grow-from-the-dot animation on every open / swap
  bubbleEl.classList.remove("pop");
  void bubbleEl.offsetWidth;   // force reflow so the animation restarts
  bubbleEl.classList.add("pop");
  closeBtn.focus();
}

function closePanel() {
  overlay.classList.remove("open");
  setTimeout(() => { overlay.hidden = true; }, 500);
}

closeBtn.addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closePanel();
});

// click on empty map (not a node, not the bubble) closes the popup;
// clicking another node is left to that node's handler, which swaps.
document.addEventListener("click", (e) => {
  if (overlay.hidden) return;
  if (e.target.closest(".node") || e.target.closest(".bubble")) return;
  closePanel();
});
